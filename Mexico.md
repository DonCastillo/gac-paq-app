# Mexico App — Plan

Client request: a separate app for Mexico that skips the language page and starts with Mexico as the
country and Spanish (Mexico) as the language, submitting to its own response table.

Verdict: possible, and cheaper than expected.

## Confirmed decisions

1. **Separate store listings** on both the Apple App Store and Google Play. Phase 2 is in scope.
2. **Skip the language page only.** On open, the app lands on the page immediately after it — the
   participant page. Mode selection (kid/teen/adult) stays.
3. **Mexican responses go to a different Directus table**, `mexico_responses` — identical schema to
   `participant_responses`, differing only in name.
4. **Build-time flag, not geolocation.** A country flag in the env file decides which app is built:
   unset/null/undefined means the regular app with language selection; `MX` means the Mexico build.

## What the codebase already gives us

**`es-MX` is fully supported.** It is listed in `MAIN_STUDY_LANG` (`constants/main_study_lang.ts:30`)
and in `store/data/languages.ts:95-101`, and it is translated across every phrase file, the GSHS and
HBSC pages, and all question pages. It also has its own routing rule in `utils/navigation.utils.tsx:41-46`,
which skips `parent_ethnicity` when `child_ethnicity` is answered "no". **No content or translation
work is required.**

**Language and country are one page.** `store/data/introductory-pages/language.ts` has
`ident: "language_location"` and asks "What language do you speak & Where are you?". Country is never
selected — it is derived from the language code by `getCountry()`, which is just
`language.split("-")[1]` (`utils/country.utils.tsx:2`). Setting the language to `es-MX` sets the
country to MX as a consequence.

**The response table is already env-driven.** `settingsSlice.tsx:50` reads `responseTable` from
`EXPO_PUBLIC_RESPONSE_TABLE`, and the endpoint is built as `/items/<table>` (`utils/api.utils.tsx:8`).
Requirement 3 therefore needs **no code change at all** — only
`EXPO_PUBLIC_RESPONSE_TABLE=mexico_responses` in the Mexico build profile. Because the schema is
identical, the payload built by `sanitizeResponse()` needs no changes either.

## The catch

`contexts/common/LanguageContext.tsx:36-38` records the `language_location` response when the
language page mounts. Remove the page and **the column silently goes missing from every Mexico
submission** — the researchers lose the language/country field for the entire Mexican dataset, and
nothing errors.

The implementation must inject that response explicitly at startup. This is the single most
important item in this plan.

## The flag

The variable must be named **`EXPO_PUBLIC_COUNTRY`**, not `country`. Expo only inlines variables
prefixed `EXPO_PUBLIC_` into the app bundle; a bare `country=MX` reads back as `undefined` at
runtime and would silently fall through to the regular app. This matches the four existing variables
in `.env.template`.

```
EXPO_PUBLIC_COUNTRY=       # unset -> regular app; MX -> Mexico app
```

Resolution rule: `EXPO_PUBLIC_COUNTRY` unset, empty, or unrecognized falls back to the current
behaviour, so the default path is unchanged and a typo cannot produce a broken hybrid.

**Design note.** A country code maps cleanly to a language only where the country has one language.
MX is unambiguous. NZ (`en-NZ`, `mi-NZ`), MW (`en-MW`, `ch-MW`) and others are not. The country →
language resolution should therefore be an **explicit map**, not a lookup that takes the first match
in `languages.ts`, so that adding an ambiguous country later is a deliberate decision rather than a
silent wrong answer.

## Approach

**One codebase, build-time flag** — not a forked `mexico` branch.

A fork is cheaper today and more expensive every week after. The duplicate-submission fix committed
on the `duplication` branch would need merging twice, forever. This request will also recur —
`es-CL` and `NZ` already exist as remote branches — so Mexico should be built as the first instance
of a locked-country build, not as a one-off.

Rejected: **runtime detection via device locale or IP.** Fragile. A Mexican participant with an
English-language phone would get the wrong language, silently mis-assigning country data in a
research study. The client has confirmed the env-flag approach instead.

## Phases

### Phase 1 — Locked-country core (~half a day)

1. Add `EXPO_PUBLIC_COUNTRY` to `.env.template` and read it into a constant alongside
   `constants/main_study_lang.ts`, with the explicit country → language map described above.
2. Seed `settingsSlice` `initialState.language` from the resolved language — currently hardcoded to
   `"en-CA"` (line 47).
3. Filter `LanguagePage` out of the array in `store/data/introductory-pages.ts` when a country is
   set. `loadPages()` assigns page numbers sequentially (`utils/load_pages.utils.tsx:97-120`), so the
   numbering self-corrects and no downstream index fixes are needed. The participant page becomes
   page 1.
4. **Inject the `language_location` response at init** so the column still populates. See "The catch"
   above — this step must not be skipped.

### Phase 2 — App identity and store listings

`app.json` is static JSON, so a distinct bundle identifier, display name, and icon require converting
it to `app.config.js` reading `EXPO_PUBLIC_COUNTRY`. Both platforms currently use `com.uleth.gacpaq`;
the Mexico build needs its own identifier (e.g. `com.uleth.gacpaq.mx`), its own display name, and its
own icon assets.

Then add `production:mexico` and `test:mexico` profiles to `eas.json`, each setting
`EXPO_PUBLIC_COUNTRY=MX` and `EXPO_PUBLIC_RESPONSE_TABLE=mexico_responses`.

Calendar time here is dominated by store review, not code.

### Phase 3 — Verification

- App opens on the participant page, with no language page.
- All UI renders in Spanish.
- The `es-MX` ethnicity skip rule still fires.
- **A real submitted row lands in `mexico_responses` with `language_location` populated**, and no
  Mexico row appears in `participant_responses`.
- One build of the standard profile, to prove the unflagged path is unchanged.

## Manual steps — client / backend side

1. **Create `mexico_responses` in Directus**, duplicating the `participant_responses` schema exactly.
   Confirm the app's admin token has write permission on it. A column mismatch will not fail at build
   time — it surfaces as a rejected POST once a participant submits, and the response then sits in
   the offline queue retrying.
2. **Register the new bundle identifier** on both App Store Connect and Google Play, and supply the
   app name and icon assets for the Mexico listing.

## Sequencing note

This branch sits on top of the duplicate-submission commit (`5bb9859d`), which still has its own
Phase 3 outstanding — the idempotency key — and a known data-loss window. **Decision: Mexico proceeds
first; the duplicate work will be reviewed separately.**

Consequence to carry: `mexico_responses` will start collecting data while the queue-drain fix is
still incomplete, so the new table can accumulate duplicates from day one. Both apps share
`utils/response.utils.tsx`, so the eventual idempotency-key fix covers Mexico automatically — but any
duplicates written to `mexico_responses` before that lands will need the same cleanup as
`participant_responses`.
