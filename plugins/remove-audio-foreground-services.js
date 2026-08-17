const { withAndroidManifest } = require("@expo/config-plugins");

/**
 * Strips expo-audio's unused foreground-service and microphone declarations.
 *
 * `expo-audio` ships its own AndroidManifest declaring FOREGROUND_SERVICE_MEDIA_PLAYBACK,
 * RECORD_AUDIO, an `AudioControlsService` (lock-screen/background playback) and an
 * `AudioRecordingService`. Those merge into our APK even though this app uses none of them:
 * `hooks/useNarration.tsx` only calls `useAudioPlayer`/`useAudioPlayerStatus` and plays through
 * ExoPlayer in-process, and nothing anywhere calls `setActiveForLockScreen()` — the only route that
 * ever starts `AudioControlsService` — or records audio.
 *
 * Left in place, Google Play requires a "Foreground service permissions" declaration with a video
 * demonstrating background media playback, which this app cannot truthfully provide. RECORD_AUDIO
 * additionally puts a microphone permission on a children's questionnaire, which complicates the
 * Data safety form for no functional gain.
 *
 * MODIFY_AUDIO_SETTINGS and FOREGROUND_SERVICE are deliberately kept: ExoPlayer needs the former for
 * audio focus, and expo-background-task may rely on the latter for the offline submission queue.
 *
 * **If this app ever gains background narration or lock-screen controls, delete this plugin.** The
 * failure mode is a SecurityException the moment the service starts, not a silent degradation.
 *
 * Removal uses `tools:node="remove"` rather than filtering the array: these entries come from the
 * library manifest and are merged in by Gradle *after* prebuild, so they are not present in the app
 * manifest for a filter to find. The marker instructs the manifest merger to drop them.
 */

const PERMISSIONS = ["android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK", "android.permission.RECORD_AUDIO"];

const SERVICES = ["expo.modules.audio.service.AudioControlsService", "expo.modules.audio.service.AudioRecordingService"];

const removeAudioForegroundServices = (config) => {
	return withAndroidManifest(config, (config) => {
		const manifest = config.modResults.manifest;

		// tools:node is ignored unless the namespace is declared on the root element.
		manifest.$ = manifest.$ ?? {};
		manifest.$["xmlns:tools"] = manifest.$["xmlns:tools"] ?? "http://schemas.android.com/tools";

		// Drop any copy expo-audio's own config plugin added during prebuild, then leave a removal
		// marker so the merger also drops the copy contributed by the library manifest.
		manifest["uses-permission"] = manifest["uses-permission"] ?? [];
		for (const name of PERMISSIONS) {
			manifest["uses-permission"] = manifest["uses-permission"].filter((entry) => entry.$?.["android:name"] !== name);
			manifest["uses-permission"].push({ $: { "android:name": name, "tools:node": "remove" } });
		}

		const application = manifest.application?.[0];
		if (application) {
			application.service = application.service ?? [];
			for (const name of SERVICES) {
				application.service = application.service.filter((entry) => entry.$?.["android:name"] !== name);
				application.service.push({ $: { "android:name": name, "tools:node": "remove" } });
			}
		}

		return config;
	});
};

module.exports = removeAudioForegroundServices;
