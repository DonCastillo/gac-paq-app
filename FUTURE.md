# Future Work

Outstanding work tracked outside of issues. Written 2026-07-14, alongside the Android 16 (API 36) upgrade.

## Context: the Android 16 upgrade

`app.json` targets `compileSdkVersion`/`targetSdkVersion` 36 with `buildToolsVersion` 36.0.0. Android 16 ignores `android:screenOrientation` and resizability restrictions on displays with a smallest width of 600dp or more, which would unlock landscape on tablets. Since the questionnaire has no landscape layouts, `plugins/allow-restricted-resizability.js` injects the `android.window.PROPERTY_COMPAT_ALLOW_RESTRICTED_RESIZABILITY` opt-out to preserve the portrait lock.

Verified on a Galaxy Tab S9 FE (SM-X510), Android 16 / One UI 8.5, 1440x2304 @ 280dpi (822dp smallest width): the app targets SDK 36 and stays portrait.

**The opt-out stops working when the app targets API 37.** Everything under "Before targeting API 37" below becomes blocking at that point.

## Before shipping 4.1.0

- [ ] Smoke test audio narration on an Android 16 tablet. The app is heavily audio-driven and `expo-audio` is the one dependency with a custom manifest hack (`plugins/remove-audio-boot-receiver.js`).
- [ ] Smoke test the offline queue on Android 16. Complete one full run-through to `/success`, then a second with the network off, confirming the response queues and later drains from `/pending`. Android 16 tightens job scheduling quotas, and the 15-minute retry runs through `expo-background-task` (WorkManager) in `utils/process.utils.tsx`.
- [ ] Decide whether 4.1.0 also ships iOS. The SDK change only touched the `android` block, so iOS is functionally untouched, but the version bump is shared.
- [ ] Build and upload via `npm run publish:android`, plus the China APK via the `temp:production` profile if applicable.
- [ ] Confirm the Play Console shows no target-API warning after upload. This is the proof that the API 36 requirement (deadline 2026-08-31) is satisfied.

## Before targeting API 37

The resizability opt-out is inert at API 37, so tablets will rotate freely and these become blocking.

### Landscape layouts

Only 6 of ~29 question components have any landscape branch, and they only adjust column counts and widths:

- `components/adults/QuestionContainer.tsx`
- `components/adults/QuestionSelectLanguageAdult.tsx`
- `components/adults/QuestionRadioImage.tsx`
- `components/kid/QuestionRadio.tsx`
- `components/kid/QuestionRadioImage.tsx`
- `components/kid/QuestionCheckbox.tsx`

Everything else — `orientation/` (`TopMain`, `CenterMain`, `BottomMain`), headings, progress indicators, nav buttons, and the remaining question types — has never rendered wide. The app has been portrait-locked on every platform since launch, so these code paths are effectively unvalidated.

### Stale `Dimensions` read during rotation

`getDeviceInfo` in `utils/responsive.utils.tsx` calls `Dimensions.get("window")` synchronously inside the `ScreenOrientation` change listener registered by `hooks/useDeviceOrientation.tsx`. `Dimensions` can still report pre-rotation values at that moment, and `screenWidth` feeds `horizontalScale()`, so a stale read mis-scales the layout. Dormant today because rotation never happens; it will fire on every tablet rotation once orientation is unlocked.

Note that rotation does **not** recreate the activity — the manifest declares `configChanges` including `orientation|screenSize|screenLayout` — so Redux state and in-progress responses survive. The risk is visual, not data loss.

### Predictive back migration

The app opts out of predictive back via `android:enableOnBackInvokedCallback="false"` (React Native's default). Apps targeting API 36 otherwise get predictive back by default, where `onBackPressed()` is not called and `KEYCODE_BACK` is not dispatched — the mechanism React Native's `BackHandler` depends on.

`hooks/useBackHandler.tsx` returns `true` by default to *block* back navigation, and is applied on the splash, questionnaire, pending, and loading screens so participants cannot back out mid-session. When the opt-out goes, that blocking must be reimplemented against the predictive back APIs, or participants will be able to exit a questionnaire in progress.
