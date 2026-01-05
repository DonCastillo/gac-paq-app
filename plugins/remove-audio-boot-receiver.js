const { withAndroidManifest } = require("@expo/config-plugins");

const removeAudioBootReceiver = (config) => {
	return withAndroidManifest(config, async (config) => {
		const manifest = config.modResults;

		// Ensure application exists
		if (!manifest.manifest.application) {
			manifest.manifest.application = [{}];
		}

		const application = manifest.manifest.application[0];
		if (!application.receiver) {
			application.receiver = [];
		}

		// Filter out the AudioServiceBootReceiver
		application.receiver = application.receiver.filter((receiver) => {
			const name = receiver.$["android:name"];
			return !name || !name.includes("AudioServiceBootReceiver");
		});

		return config;
	});
};

module.exports = removeAudioBootReceiver;
