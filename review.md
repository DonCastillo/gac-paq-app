# Review — `duplication` branch

Files changed on this branch, and what changed in each.

## `utils/response.utils.tsx`

The duplicate-submission fix. Two changes to the offline queue drain:

- **Drain serialization.** `sendResponseQueue` now shares a single in-flight drain via `drainInFlight`
  instead of letting concurrent callers race. The queue is drained from three independent triggers
  — the background task (`utils/process.utils.tsx`), the network-regain effect
  (`hooks/useNetworkConnectivity.tsx`), and the pending screen
  (`base_pages/generic/GenericPendingSubmissions.tsx`) — none of which awaited each other. Two
  overlapping drains would each read the same queue, each `pop()` the same entry, and each submit it.
- **Claim-before-submit.** `drainResponseQueue` removes an entry from storage _before_ POSTing it,
  and `requeueResponse` restores it to the tail if the POST rejects. Previously the entry was removed
  only after the POST resolved, so a process kill in that window left an already-stored response
  queued for a second submission. The queue is also written with a single overwriting `storeData`
  rather than a `removeData` + `storeData` pair, which could empty the queue if interrupted between
  the two.

## `store/data/extroductory-pages/Satisfaction.ts`

One mi-NZ translation fix: `kid_sublabel` no longer duplicates the adult wording.

## `CLAUDE.md`

Prettier formatting only — path-alias table alignment and blank lines before lists. No content change.

## `FUTURE.md`

Prettier formatting only — `*block*` to `_block_`. No content change.

## Known gaps

Not addressed on this branch, in priority order:

1. **No idempotency key.** `submitResponse` rejects on any axios error, including a timeout or reset
   _after_ Directus committed the row. The retry then inserts a second row. Needs a UUID per
   submission plus a unique constraint on the Directus table — a schema change, so it can't be done
   client-side alone.
2. **The drain guard does not cross JS contexts.** `drainInFlight` is a module-level variable. The
   Android background task runs in a headless JS instance; if the user launches the app mid-drain,
   the foreground gets a separate module instance and no shared lock. Only the idempotency key
   closes this.
3. **Claim-before-submit trades a duplicate window for a loss window.** A process kill between the
   storage write and the POST completing loses that response. This is only safe to ship once
   retries are idempotent.
4. **The `/error` → "Try Again" path is untouched.** It re-posts without dedupe, and the submit
   buttons have no disabled state while a submission is in flight.

## Verification status

TypeScript reports no new errors in `utils/response.utils.tsx` (the 5 remaining are pre-existing, in
`sanitizeResponse`). Prettier is clean. The repo has no test framework, so the race and the kill
windows are unverified — they need on-device testing: airplane-mode queueing, a network flap during a
`/pending` submit, and a kill mid-POST.
