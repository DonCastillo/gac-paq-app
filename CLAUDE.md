# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

GAC-PAQ is a multilingual physical activity questionnaire mobile app built with React Native (Expo). It supports children (kid), teenagers (teen), and adults across 23+ languages and ~20 countries. Responses are submitted to a Directus backend.

## Commands

```bash
# Local development
npm run prebuild:clean   # Clean prebuild (required before first run)
npm run android          # Run on Android emulator
npm run ios              # Run on iOS simulator

# Code quality
npm run lint             # Expo lint
npm run format           # Prettier format all files

# EAS cloud builds (requires EAS CLI login)
npm run test:ios         # Build for TestFlight
npm run test:android     # Build for Google Play testing (AAB)
npm run publish:ios      # Production build for App Store
npm run publish:android  # Production build for Google Play
```

To refresh the app during local development, press `r` in the terminal. View local storage with the Reactotron app. Use `react-devtools` (in a separate terminal) for the React Native Debugger.

## Environment Setup

Copy `.env.template` to `.env` and fill in:

- `EXPO_PUBLIC_ADMIN_API_URL` — Directus CMS base URL
- `EXPO_PUBLIC_ADMIN_TOKEN` — Directus admin bearer token
- `EXPO_PUBLIC_RESPONSE_TABLE` — Table name for submissions (`responses` for dev/test, `participant_responses` for production)
- `EXPO_PUBLIC_ENVIRONMENT` — `development`, `testing`, or `production`

## Path Aliases

TypeScript paths are configured in `tsconfig.json`. Use these instead of relative paths:

| Alias           | Directory        |
| --------------- | ---------------- |
| `@/*`           | `./*` (root)     |
| `@interface/*`  | `./interface/*`  |
| `@utils/*`      | `./utils/*`      |
| `@constants/*`  | `./constants/*`  |
| `@store/*`      | `./store/*`      |
| `@styles/*`     | `./styles/*`     |
| `@components/*` | `./components/*` |
| `@hooks/*`      | `./hooks/*`      |
| `@base_pages/*` | `./base_pages/*` |
| `@contexts/*`   | `./contexts/*`   |

## Architecture

### App Flow

The app uses Expo Router (file-based routing under `app/`). On launch, `app/index.tsx` redirects to `/splash`, and navigation proceeds through:

1. **`/splash`** — Language and mode selection (kid/teen/adult)
2. **`/questionnaire`** — Main questionnaire loop (pages dispatched from Redux)
3. **`/success`** — Submission confirmed
4. **`/pending`** — Offline queue status
5. **`/error`** — Error state

The root layout (`app/_layout.tsx`) wraps everything in Redux `<Provider>`, `<LoadingProvider>`, and `<MenuProvider>`, and registers a background task that retries queued offline submissions every 15 minutes.

### Mode System

The app operates in three modes defined in `constants/mode.enum.ts`: `adult`, `kid`, and `teen`. Mode is set from `store/settings/settingsSlice` and drives which question label variant (`label`, `kid_label`, `adult_label`) and which component set (`components/adults/` vs `components/kid/`) to render.

### Redux Store (`store/`)

Three slices:

- **`settings`** — App-wide state: current mode, language, active page, navigation history, narration config, color theme, network status, pending submission count
- **`questions`** — Loaded and translated question/page data for the current language
- **`responses`** — Participant answers collected during a session

### Question Data Pipeline

All question content lives as TypeScript objects under `store/data/`. The data loading flow on each app init:

1. `saveAppData()` serializes all raw multilingual page data (questions, introductory pages, extroductory pages, phrases, etc.) to AsyncStorage via `LocalStorageKey.app_data`
2. `loadQuestionData(language)` reads it back and runs `translateArrayOfPages()` to resolve the correct locale's text into each page object
3. The translated pages go into the Redux `questions` slice, and `loadPages()` + `loadSectionPages()` populate the `settings` slice navigation index

### Question Page Structure

Each question file (e.g., `store/data/questionpages/section-1/S1Q1.ts`) exports a `LangQuestionPagesType` object with:

- `ident` — unique string key (used for audio and response storage)
- `column_name` — database column name for the response
- `type` — `Screen` enum value (e.g., `SingleQuestion`, `MultiQuestion`)
- `translations` — record keyed by language code (e.g., `"en-CA"`, `"th-TH"`) containing `type` (question UI type), `heading`, `label`, `kid_label`, `adult_label`, and `choices`

Sections 1–7 are composed in `store/data/question-pages.ts`. Additional page groups (HBSC, GSHS, introductory, extroductory) have their own files under `store/data/`.

### Rendering

`app/questionnaire/index.tsx` reads `currentPage` from the `settings` slice and calls `getScreen(mode, pageType, sectionType)` to resolve the correct React component. Question components live in `components/adults/` and `components/kid/`. The `orientation/` components (Top/Center/Bottom layout) adapt the UI to portrait vs. landscape.

### Offline / Background Submission

Responses that fail to submit go into a local queue (AsyncStorage). The background task (`utils/process.utils.tsx`) retries the queue every 15 minutes via `expo-background-task`. The `/pending` screen lets users manually trigger resubmission.

### Translations & Languages

Languages are defined in `store/data/languages.ts` (23 languages across ~20 countries). The active production language set is `constants/main_study_lang.ts`. HBSC and GSHS supplemental question pages fall back to `en-CA` for non-main-study languages.

### Versioning & Publishing

The app version lives in `app.json` (`expo.version`). When releasing, update `app.json` version first, then create and push a git tag before running EAS build commands. The `android.versionCode` is auto-incremented by EAS (`autoIncrement: true` in `eas.json`). China-distributed users receive an APK built with the `temp:production` profile.
