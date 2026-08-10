const { withAndroidManifest } = require("@expo/config-plugins");

// Android 16 (API 36) ignores android:screenOrientation and resizability on displays
// >= 600dp, which would unlock landscape on tablets. The questionnaire has no landscape
// layouts yet, so keep the portrait lock. This opt-out stops working at API 37.
const PROPERTY_NAME = "android.window.PROPERTY_COMPAT_ALLOW_RESTRICTED_RESIZABILITY";

const allowRestrictedResizability = (config) => {
	return withAndroidManifest(config, async (config) => {
		const manifest = config.modResults;

		if (!manifest.manifest.application) {
			manifest.manifest.application = [{}];
		}

		const application = manifest.manifest.application[0];
		if (!application.property) {
			application.property = [];
		}

		const existing = application.property.find((property) => property.$["android:name"] === PROPERTY_NAME);

		if (existing) {
			existing.$["android:value"] = "true";
		} else {
			application.property.push({
				$: {
					"android:name": PROPERTY_NAME,
					"android:value": "true",
				},
			});
		}

		return config;
	});
};

module.exports = allowRestrictedResizability;
