# GAC-PAQ App

## Prerequisites (Development env)
Have the following installed on your machine:
* EAS CLI installed
* XCode to run iOS simulation
* Android Studio to run Android simulation
* Node 23.11.0+
* NPM 10.9.2+
* Macbook Pro macOS Sequioa

Have access to the following accounts:
* Google Play Console
  * This is where you will publish the app for Android users
  * You need to pay a one-time fee in order to publish the app to the Google Playstore
* Apple Store Connect
  * This is where you will publish the app for iOS users and enable Testflight for testing
  * You need to pay an annual fee in order to publish the app to iOS store 
  

## Running for local development

1. Login to EAS
2. Run `npm run android` to start local dev on Android. Make sure Android Studio emulator is running before this 
3. Run `npm run ios` to start local dev on iOS. It will automatically open/run the iOS emulator (if you're using Macbook)
q
   
## Publishing app to Apple Store
1. `eas build --profile production --platform ios`

## Publishing app to Google Playstore
1. `eas build --profile production --platform android`

## Releasing APK Version
Some participating countries like China cannot access GAC-PAQ app on Google Playstore. For that, you need to release the APK version of the app so that it can be installed manually.
1. `eas build --profile temp:production --platform android`