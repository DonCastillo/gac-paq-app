# Mexico App — Plan

Client request: a separate app for Mexico that skips the language page and starts with Mexico as the
country and Spanish (Mexico) as the language, submitting to its own response table.

Status: **Phases 1 and 2 are code-complete.** What remains is store registration, device
verification, and artwork. See [Pending](#pending) at the end.

## Confirmed decisions

1. **Separate store listings** on both the Apple App Store and Google Play. Phase 2 is in scope.
2. **Skip the language page only.** On open, the app lands on the page immediately after it — the
   participant page. Mode selection (kid/teen/adult) stays.
3. **Mexican responses go to a different Directus table**, `mexico_participant_responses` — identical
   schema to `participant_responses`, differing only in name.
4. **Build-time flag, not geolocation.** A country flag in the env file decides which app is built:
   unset/null/undefined means the regular app with language selection; `MX` means the Mexico build.

## What the codebase already gives us

**`es-MX` is fully supported.** It is listed in `MAIN_STUDY_LANG` (`constants/main_study_lang.ts:30`)
and in `store/data/languages.ts:95-101`. Coverage was re-verified after the translation commits on
`main`: **zero gaps** across every file under `store/data` carrying a `translations` block, and all
15 files in `store/data/phrase`. It also has its own routing rule in `utils/navigation.utils.tsx:41-46`,
which skips `parent_ethnicity` when `child_ethnicity` is answered "no". **No content or translation
work is required.**

**Language and country are one page.** `store/data/introductory-pages/language.ts` has
`ident: "language_location"` and asks "What language do you speak & Where are you?". Country is never
selected — it is derived from the language code by `getCountry()`, which is just
`language.split("-")[1]` (`utils/country.utils.tsx:2`). Setting the language to `es-MX` sets the
country to MX as a consequence.

**The response table is already env-driven.** `settingsSlice.tsx` reads `responseTable` from
`EXPO_PUBLIC_RESPONSE_TABLE`, and the endpoint is built as `/items/<table>` (`utils/api.utils.tsx`).
Requirement 3 therefore needed **no code change at all** — only `EXPO_PUBLIC_RESPONSE_TABLE` in the
Mexico build profiles. Because the schema is identical, the payload built by `sanitizeResponse()`
needs no changes either.

## The catch

`contexts/common/LanguageContext.tsx:36-38` records the `language_location` response when the
language page mounts. Remove the page and **the column silently goes missing from every Mexico
submission** — the researchers lose the language/country field for the entire Mexican dataset, and
nothing errors.

Handled by `seedLockedLanguageResponse()` in `utils/response.utils.tsx`, called from
`useAppLoader.loadApp()`. It writes to `[intro][0][0]`; real intro pages are numbered from 1
(`utils/load_pages.utils.tsx:98-103`), so there is no key collision.

### The second catch, found during merge review

Seeding the response is not enough on its own. `settingsReducers.reset()` — which runs when a
participant taps **Done** on the success screen — hard-coded the language back to `en-CA`. The
regular app gets away with this because the language page comes next and the participant picks
again; a locked build has no such page, so **every participant after the first would have answered
an English questionnaire while still being stamped `language_location: "es-MX"`**, with
`getCountry()` reporting `CA`. It also only surfaces on the second participant, so a single-run test
passes.

`reset()` now uses `LOCKED_LANGUAGE ?? "en-CA"`, matching `initialState`. Any future state that
derives from the locked language must be reset the same way.

## The flag

The variable must be named **`EXPO_PUBLIC_COUNTRY`**, not `country`. Expo only inlines variables
prefixed `EXPO_PUBLIC_` into the app bundle; a bare `country=MX` reads back as `undefined` at
runtime and would silently fall through to the regular app.

```
EXPO_PUBLIC_COUNTRY=       # unset -> regular app; MX -> Mexico app
```

Resolution rule: `EXPO_PUBLIC_COUNTRY` unset, empty, or unrecognized falls back to the current
behaviour, so the default path is unchanged and a typo cannot produce a broken hybrid. Verified for
all three cases — see Phase 2 below.

**Design note.** A country code maps cleanly to a language only where the country has one language.
MX is unambiguous. NZ (`en-NZ`, `mi-NZ`), MW (`en-MW`, `ch-MW`) and others are not. The country →
language resolution is therefore an **explicit map** (`constants/locked_country.ts`), not a lookup
that takes the first match in `languages.ts`, so adding an ambiguous country later is a deliberate
decision rather than a silent wrong answer.

## Approach

**One codebase, build-time flag** — not a forked `mexico` branch.

A fork is cheaper today and more expensive every week after. This request will also recur — `es-CL`
and `NZ` already exist as remote branches — so Mexico is built as the first instance of a
locked-country build, not as a one-off.

Rejected: **runtime detection via device locale or IP.** Fragile. A Mexican participant with an
English-language phone would get the wrong language, silently mis-assigning country data in a
research study.

## Phases

### Phase 1 — Locked-country core — **done**

1. ✅ `EXPO_PUBLIC_COUNTRY` in `.env.template`, read into `constants/locked_country.ts` with the
   explicit country → language map.
2. ✅ `settingsSlice` `initialState.language` seeded from the resolved language.
3. ✅ `LanguagePage` filtered out of `store/data/introductory-pages.ts` when a country is set.
   `loadPages()` assigns page numbers sequentially, so the numbering self-corrects and the
   participant page becomes page 1.
4. ✅ `language_location` injected at init by `seedLockedLanguageResponse()`.
5. ✅ `reset()` restores the locked language — see "The second catch" above.

### Phase 2 — App identity and store listings — **code done, registration pending**

`app.config.js` receives `app.json` as its base and overrides only the identity fields when a
country resolves. `app.json` stays the source of truth for version, plugins, splash and
permissions, so the release process in `CLAUDE.md` is unchanged.

| `EXPO_PUBLIC_COUNTRY` | name           | iOS / Android ID      | scheme     |
| --------------------- | -------------- | --------------------- | ---------- |
| _(unset)_             | GAC-PAQ        | `com.uleth.gacpaq`    | `gacpaq`   |
| `MX`                  | GAC-PAQ México | `com.uleth.gacpaq.mx` | `gacpaqmx` |
| `XX` (typo)           | GAC-PAQ        | `com.uleth.gacpaq`    | `gacpaq`   |

Verified by resolving `npx expo config --type public` under each. The unflagged output is identical
to `app.json`.

Mexico gets its own scheme because both apps will be installed side by side during testing, and a
shared `gacpaq://` would let either claim a development-client deep link. Country-specific icon
paths are wired in `app.config.js` but commented out, so dropping in artwork is a one-line change.

`eas.json` and `eas.template.json` gained `test:mexico` and `production:mexico`, each setting
`EXPO_PUBLIC_COUNTRY=MX` and `EXPO_PUBLIC_RESPONSE_TABLE=mexico_participant_responses`.

**Both apps share `slug: gacpaq-app`,** so they are one EAS project. Two consequences: EAS will
prompt for fresh credentials for `com.uleth.gacpaq.mx` on the first build, and with
`appVersionSource: "remote"` the build-number counter is tracked per project, so the two apps
interleave build numbers. Numbers still only increase, so no store rejection — just gaps. Making
them fully independent means a separate EAS project and a different slug; decide before shipping.

Calendar time here is dominated by store review, not code.

### Phase 3 — Verification — **not started**

- App opens on the participant page, with no language page.
- All UI renders in Spanish.
- The `es-MX` ethnicity skip rule still fires.
- **A real submitted row lands in `mexico_participant_responses` with `language_location` populated**,
  and no Mexico row appears in `participant_responses`.
- **Two participants back to back** — the case the `reset()` fix addresses. Both must get Spanish,
  and both rows must carry distinct `idempotency_key` values.
- One build of an unflagged profile, to prove the standard path is unchanged.

## Local development note

Switching between the global and Mexico app locally means changing `EXPO_PUBLIC_COUNTRY` in `.env`
and then running `npm run prebuild:clean` — the `ios/` and `android/` folders hold whichever variant
was last prebuilt, and the bundle identifier will not update otherwise. EAS runs prebuild itself, so
cloud builds are unaffected.

## Backend — done

`mexico_participant_responses` exists, duplicating the `participant_responses` schema, with an
`idempotency_key` column (uuid, unique, nullable).

That column is **not optional**. The duplicate-submission work is now merged and live in this branch:
`submitResponse()` treats a `RECORD_NOT_UNIQUE` collision as "already stored", which is what makes a
retry safe. Without the unique constraint, retries insert duplicate rows silently; with a
`NOT NULL` constraint, queued responses from pre-upgrade builds — which carry no key — fail to
submit at all.

Still to confirm: the admin token has write permission on the new table. A permission or column
mismatch does not fail at build time — it surfaces as a rejected POST once a participant submits,
and the response then sits in the offline queue retrying.

## Superseded

An earlier revision of this plan carried a sequencing note saying Mexico would proceed first and the
duplicate-submission work would be reviewed separately, with the consequence that
`mexico_participant_responses` might accumulate duplicates from day one. **That no longer applies.**
The duplicate work — idempotency key, drain serialisation, network-reachability detection — is
merged into `main` and present in this branch, and the new table was created with the required
unique column. Mexico launches with duplicate protection in place.

One known defect does carry over, since both apps share `utils/response.utils.tsx`: the drain's
"queue did not shrink" guard stops a pass early when a response is queued while a POST is in flight.
Nothing is lost — the entry stays queued and the next drain sends it.

## Pending

| #   | Task                                                                               | Owner             |
| --- | ---------------------------------------------------------------------------------- | ----------------- |
| 1   | Register `com.uleth.gacpaq.mx` on App Store Connect and Google Play                | client / release  |
| 2   | Confirm admin token has write permission on `mexico_participant_responses`         | backend           |
| 3   | Decide whether Mexico needs its own EAS project, or shares `gacpaq-app`            | release           |
| 4   | Build `test:mexico` and run Phase 3 verification on device                         | dev               |
| 5   | Build one unflagged profile to prove the global app is unchanged                   | dev               |
| 6   | Mexico icon and adaptive-icon artwork, then uncomment the paths in `app.config.js` | client            |
| 7   | Store listing copy, screenshots, privacy answers for the new listings              | client            |
| 8   | Fix the drain early-exit guard in `utils/response.utils.tsx`                       | dev, not blocking |
