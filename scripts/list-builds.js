#!/usr/bin/env node

/**
 * Lists recent builds with the bundle identifier / package name each one was built with.
 *
 * `eas build:list` leaves the identifier out of its table, so there is no way to tell a Mexico build
 * (`com.uleth.gacpaq.mx`) from a global one (`com.uleth.gacpaq`) before submitting or uploading —
 * and picking the wrong one ships to the wrong app.
 *
 * Newer EAS CLIs expose `appIdentifier` in `--json`; older ones do not, so when it is missing the
 * identifier is resolved locally the same way the build resolved it: the build profile's
 * `EXPO_PUBLIC_COUNTRY` fed through `app.config.js`. A build made from a profile that has since been
 * renamed or removed shows `?`.
 *
 * Usage: `npm run builds:ios` / `npm run builds:android`, with an optional count:
 * `npm run builds:android -- 10`.
 */

const { execFileSync } = require("node:child_process");

const easBuildProfiles = require("../eas.json").build;
const appJson = require("../app.json");
const applyCountry = require("../app.config.js");

const platform = process.argv[2];
const limit = process.argv[3] ?? "5";

if (platform !== "ios" && platform !== "android") {
	console.error("Usage: node ./scripts/list-builds.js <ios|android> [limit]");
	process.exit(1);
}

const identifierLabel = platform === "ios" ? "BUNDLE ID" : "PACKAGE";

/** The identifier `app.config.js` produces for a build profile, or null if the profile is gone. */
const identifierForProfile = (profile) => {
	const profileEnv = easBuildProfiles[profile]?.env;
	if (profileEnv === undefined) return null;

	const previous = process.env.EXPO_PUBLIC_COUNTRY;
	// An empty string, not a delete: app.config.js reads the variable directly, and leaving a stale
	// value from the shell or `.env` in place would mislabel every row.
	process.env.EXPO_PUBLIC_COUNTRY = profileEnv.EXPO_PUBLIC_COUNTRY ?? "";
	try {
		const config = applyCountry({ config: appJson.expo });
		return platform === "ios" ? config.ios.bundleIdentifier : config.android.package;
	} finally {
		if (previous === undefined) delete process.env.EXPO_PUBLIC_COUNTRY;
		else process.env.EXPO_PUBLIC_COUNTRY = previous;
	}
};

let raw;
try {
	raw = execFileSync("eas", ["build:list", "--platform", platform, "--limit", limit, "--json", "--non-interactive"], {
		encoding: "utf8",
		// EAS writes progress and errors to stderr; let them through. `--json` requires
		// `--non-interactive`, so an expired session fails here rather than prompting.
		stdio: ["inherit", "pipe", "inherit"],
	});
} catch (error) {
	if (error.code === "ENOENT") {
		console.error("eas not found. Install the EAS CLI: npm install -g eas-cli");
	} else {
		console.error(error.message);
	}
	process.exit(1);
}

const builds = JSON.parse(raw);

if (builds.length === 0) {
	console.log(`No ${platform} builds found.`);
	process.exit(0);
}

/** Local `YYYY-MM-DD HH:MM`, so rows sort the same way they read. */
const formatDate = (isoString) => {
	if (!isoString) return "?";
	const date = new Date(isoString);
	if (Number.isNaN(date.getTime())) return "?";
	const pad = (n) => String(n).padStart(2, "0");
	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` + ` ${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

const rows = builds.map((build) => [
	build.appIdentifier ?? identifierForProfile(build.buildProfile) ?? "?",
	`${build.appVersion} (${build.appBuildVersion})`,
	build.buildProfile,
	build.status,
	// A build still running or one that failed has no completedAt; start time still places it.
	formatDate(build.completedAt ?? build.createdAt),
	build.id,
]);

const headers = [identifierLabel, "VERSION", "PROFILE", "STATUS", "FINISHED", "BUILD ID"];
const widths = headers.map((header, i) => Math.max(header.length, ...rows.map((row) => String(row[i] ?? "").length)));

// The build ID is last and never needs padding, so trailing whitespace stays out of copy-paste.
const format = (cells) => cells.map((cell, i) => (i === cells.length - 1 ? String(cell) : String(cell ?? "").padEnd(widths[i]))).join("  ");

console.log();
console.log(format(headers));
rows.forEach((row) => console.log(format(row)));
console.log();
