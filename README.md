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

1. Login to EAS
2. Run `npm run android` to start local dev on Android. Make sure Android Studio emulator is running before this
3. Run `npm run ios` to start local dev on iOS. It will automatically open/run the iOS emulator (if you're using Macbook)

To refresh the app in local development, enter `r` on the terminal.

### View local storage using Reactotron

1. Open the Reactotron app
2. Refresh/rebuild by entering `r`

### Use React Native Debugger tool

1. On a separate terminal, in the root project, enter `react-devtools`
2. Refresh/rebuild by entering `r`

## PUBLISHING THE APP

1. On the `main` branch, update app version on `app.json`
2. Create a new git tag with the version number as the name; then push it to github

### To Apple Store

3. `npm run publish:ios`
4. `eas submit`
5. Choose latest build
6. Log in to `developer.apple.com` and go to the GAC-PAQ app
7. Go to `Distribution` page
8. Add a new version; specify the new version number
9. Select the build you want to deploy
10. Write the release notes to the `What's New in This Version`
11. Click `Save` and `Submit to Review`
12. Wait for Apple to review and approve the app
13. Once approved, distribute the app. It should then be available on the Apple app store

### To Google Playstore

3. `npm run publish:android`
4. Login to `expo.dev`
5. Download the `aab` file from the latest Android build
6. Login to Google Play Console and select the app in the list
7. Go to `Test and release` > `Latest releases and bundles` > `View all app bundles` > `Upload new version`
8. Upload the `aab` file you downloaded earlier, write the release notes, and finish by clicking save
9. Go to `Production` > `Create new release`
10. Click the `Add from library` and select the `aab` file in the app bundles, write the release notes, and click `Next`
11. Then publish
12. Wait for Google to review and approve the app
13. Once approved, distribute the app. It should then be available on the Google playstore

### Releasing APK Version

Some participating countries like China cannot access GAC-PAQ app on Google Playstore. For that, you need to release the APK version of the app so that it can be installed manually.

1. `eas build --profile temp:production --platform android`
2. Download the `apk` file from the `expo.dev`

## TESTING THE APP

1. On the `main` branch, update app version on `app.json`
2. Create a new git tag with the version number as the name; then push it to github

### To Apple Store

1. `npm run test:ios`
2. `eas submit`
3. Choose latest build
4. Log in to `developer.apple.com` and go to the GAC-PAQ app
5. Go to `Testflight` page
6. You will see the new version
7. Wait for Apple to approve it
8. Add your other testers. They will receive Testflight notifications

### To Google Playstore

3. `npm run test:android`
4. Login to `expo.dev`
5. Download the `aab` file from the latest Android build
6. Login to Google Play Console and select the app in the list
7. Go to `Test and release` > `Latest releases and bundles` > `View all app bundles` > `Upload new version`
8. Upload the `aab` file you downloaded earlier, write the release notes, and finish by clicking save
9. Go to `Closed Testing`
10. Add the latest builds for each active tracks
11. Publish the changes
12. Wait for Google to review and approve the app

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
