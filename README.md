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

## Running for local development

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

## Publishing app to Apple Store

1. `eas build --profile production --platform ios`

## Publishing app to Google Playstore

1. `eas build --profile production --platform android`

## Releasing APK Version

Some participating countries like China cannot access GAC-PAQ app on Google Playstore. For that, you need to release the APK version of the app so that it can be installed manually.

1. `eas build --profile temp:production --platform android`

---

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
