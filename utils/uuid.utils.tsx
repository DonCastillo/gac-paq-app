/**
 * RFC 4122 version 4 UUID, generated without a native module.
 *
 * expo-crypto would provide a cryptographically strong source, but it is a native module and
 * adding it would force a rebuild. The value here is only ever used as an idempotency key, which
 * has to be unique rather than unpredictable — it is never a secret and never authenticates
 * anything — so Math.random is an adequate source.
 */
const randomUUID = (): string => {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
		const random = (Math.random() * 16) | 0;
		// the variant nibble is constrained to 8-b; every other nibble is free
		const value = char === "x" ? random : (random & 0x3) | 0x8;
		return value.toString(16);
	});
};

export { randomUUID };
