# GAC-PAQ App

## Prerequisites (Development env)

Have the following installed on your machine:

- EAS CLI installed
- XCode to run iOS simulation
- Android Studio to run Android simulation
- Node 23.11.0+
- NPM 10.9.2+
- Macbook Pro macOS Sequioa

Have access to the following accounts:

- Google Play Console
  - This is where you will publish the app for Android users
  - You need to pay a one-time fee in order to publish the app to the Google Playstore
- Apple Store Connect
  - This is where you will publish the app for iOS users and enable Testflight for testing
  - You need to pay an annual fee in order to publish the app to iOS store
- Expo

## RUNNING LOCALLY ON SIMULATORS

### On Android

2. Run an Android emulator
3. `npm run prebuild:clean`
4. `npm run android`

### On iOS

5. Run `npm run android` to start local dev on Android.
6. Run `npm run ios` to start local dev on iOS. It will automatically open/run the iOS emulator (if you're using Macbook)

To refresh the app in local development, enter `r` on the terminal.

### View local storage using Reactotron

1. Open the Reactotron app
2. Refresh/rebuild by entering `r`

### Use React Native Debugger tool

1. On a separate terminal, in the root project, enter `react-devtools`
2. Refresh/rebuild by entering `r`

### View Redux state in development

1. Run the local development
2. Enter Shift + m
3. Select `Open redux-devtools-expo-dev-plugin`

## PUBLISHING THE APP

1. On the `main` branch, update app version on `app.json`
2. Create a new git tag with the version number as the name; then push it to github
3. Login to EAS

### To Apple Store

4. `npm run publish:ios`
5. `npm run builds:ios` — note the ID of the newest `com.uleth.gacpaq` build
6. `npm run submit:ios -- --id <BUILD_ID>`
7. Log in to `developer.apple.com` and go to the GAC-PAQ app
8. Go to `Distribution` page
9. Add a new version; specify the new version number
10. Select the build you want to deploy
11. Write the release notes to the `What's New in This Version`
12. Click `Save` and `Add for Review`, then `Submit for Review`
13. Wait for Apple to review and approve the app (should take less than 24 hours)
14. Once approved, distribute the app. It should then be available on the Apple app store

### To Google Playstore

4. `npm run publish:android`
5. `npm run builds:android` — note the newest `com.uleth.gacpaq` build
6. Download that build's `aab` from `expo.dev`
7. Login to Google Play Console and select the app in the list
8. Go to `Test and release` > `Latest releases and bundles` > `View all app bundles` > `Upload new version`
9. Upload the `aab` file you downloaded earlier, and finish by clicking save
10. Go to `Production` > `Create new release`
11. Click the `Add from library` and select the `aab` file in the app bundles, write the release notes, and click `Next`
12. Then publish
13. Wait for Google to review and approve the app
14. Once approved, distribute the app. It should then be available on the Google playstore

### Releasing APK Version

Some participating countries like China cannot access GAC-PAQ app on Google Playstore. For that, you need to release the APK version of the app so that it can be installed manually.

1. `eas build --profile temp:production --platform android`
2. Download the `apk` file from the `expo.dev`

## TESTING THE APP

1. On the `main` branch, update app version on `app.json`
2. Create a new git tag with the version number as the name; then push it to github
3. Login to EAS

### To Apple Store

4. `npm run test:ios`
5. `npm run builds:ios` — note the ID of the newest `com.uleth.gacpaq` build
6. `npm run submit:ios -- --id <BUILD_ID>`
7. Log in to `developer.apple.com` and go to the GAC-PAQ app
8. Go to `Testflight` page
9. You will see the new version
10. Wait for Apple to approve it
11. Add your other testers. They will receive Testflight notifications

### To Google Playstore

4. `npm run test:android`
5. `npm run builds:android` — note the newest `com.uleth.gacpaq` build
6. Download that build's `aab` from `expo.dev`
7. Login to Google Play Console and select the app in the list
8. Go to `Test and release` > `Latest releases and bundles` > `View all app bundles` > `Upload new version`
9. Upload the `aab` file you downloaded earlier, write the release notes, and finish by clicking save
10. Go to `Closed Testing`
11. Add the latest builds for each active tracks
12. Publish the changes
13. Wait for Google to review and approve the app

## THE MEXICO APP

Mexico ships as a separate app (`GAC-PAQ México`, `com.uleth.gacpaq.mx`) that starts in `es-MX` and skips the language page. Same codebase, selected by `EXPO_PUBLIC_COUNTRY=MX`.

### First-time store setup

One-off, before the first Mexico build reaches a store.

**iOS** — the bundle ID lives in the Apple Developer portal, the app record in App Store Connect. Both are needed.

1. `npx eas-cli credentials:configure-build -p ios -e test:mexico` — registers `com.uleth.gacpaq.mx` and generates its certificate and provisioning profile. No build minutes used. **`-e test:mexico` is required**: without it the command resolves `app.config.js` from your `.env` and can operate on `com.uleth.gacpaq`, the live production app, without saying so.
2. App Store Connect > **Apps** > **+** > **New App** — iOS, name `GAC-PAQ México`, primary language Spanish (Mexico), bundle ID `com.uleth.gacpaq.mx`, SKU `gacpaq-mx`. The bundle ID only appears in the dropdown once step 1 has run.

**Android** — Play cannot reserve a package name. `com.uleth.gacpaq.mx` is bound to the listing by the first AAB uploaded, permanently.

3. Play Console > **All apps** > **Create app**
4. Upload the first AAB through the Play Console UI. It **must** be manual — the Play Developer API refuses the first upload for a new package.

Then fill in the new listing's privacy policy, Data safety, content rating, target audience, and app access forms. Mirror the global app's answers, and give reviewers a working Participant ID under app access or they cannot get past the first page.

### Running it in development

1. In `.env`, set `EXPO_PUBLIC_COUNTRY="MX"` and `EXPO_PUBLIC_RESPONSE_TABLE="mexico_participant_responses"`
2. `npm run prebuild:clean` — required, the bundle ID and package name change
3. `npm run android` or `npm run ios`

Both apps install side by side, so make sure you are opening `GAC-PAQ México`. To go back to the regular app, clear `EXPO_PUBLIC_COUNTRY`, restore `EXPO_PUBLIC_RESPONSE_TABLE`, and prebuild again.

### Testing and publishing it

`.env` is not used by EAS — the build profile sets the country and the response table.

1. Build: `npm run test:mexico:ios` / `npm run test:mexico:android`, or `npm run publish:mexico:ios` / `npm run publish:mexico:android`
2. **iOS only** — those commands build and stop. The `.ipa` sits on the EAS servers and never reaches TestFlight on its own; submitting is a separate step:

   ```bash
   npm run builds:ios     # find the build; confirm it reads com.uleth.gacpaq.mx
   npm run submit:mexico:ios -- --id <BUILD_ID>
   ```

   `--id` pins the Mexico build — a bare submit lists the global app's builds too, so it is easy to ship the wrong one. The script sets `EXPO_PUBLIC_COUNTRY=MX` because `eas submit` resolves `app.config.js` to choose the App Store Connect app; without it `.env` decides, and the upload can be aimed at the live global app.

   Wait a few minutes for TestFlight to finish "Processing", then add testers.

3. Then follow the store steps in [TESTING THE APP](#testing-the-app) or [PUBLISHING THE APP](#publishing-the-app), selecting `GAC-PAQ México` in Store Connect / Play Console

Android has no submit step. Run `npm run builds:android` to find the newest `com.uleth.gacpaq.mx` build, download its AAB from `expo.dev`, and upload it to the Play Console by hand, as the sections above describe.

If no `GAC-PAQ México` record exists in App Store Connect yet, `eas submit` offers to create one; see [First-time store setup](#first-time-store-setup). TestFlight cannot show a build for an app record that does not exist, which is the usual reason a successful build seems to vanish.

### Adding another country

`MX` is currently the only supported code. A new one has to be added in three places, or the build will be wrong:

1. `constants/locked_country.ts` — the country's language
2. `app.config.js` — the app name, bundle identifier, package, and scheme
3. `eas.json` — the `test:` and `production:` profiles, plus `package.json` scripts

Each new country is a new app on both stores, so it needs its own [First-time store setup](#first-time-store-setup) too.

## RUNNING LOCALLY ON PHYSICAL DEVICES

1. `eas build --profile development`
2. Select both platforms
3. Go to the `expo.dev` and scan the QR code on your mobile device
4. Run `npx expo start --dev-client`
5. The device now should then run the app

## RUNNING LOCALLY ON XCODE

1. `npx expo prebuild -p ios`
2. `open ios/*.xcworkspace`
3. On XCode, set the following:
   1. Add team
   2. Add app indentifier
4. Select the device you want to run the app on (e.g. simulator or actual device)
5. Then build
