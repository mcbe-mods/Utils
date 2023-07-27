/**
 * Calculate the number of game ticks based on the given time duration.
 * @param {number} [milliseconds=1000] - The time duration in milliseconds (default is 1000).
 * @param {number} [gameTicksPerSecond=20] - Number of game ticks per second (default is 20).
 * @param {number} [millisecondsPerSecond=1000] - Number of milliseconds per second (default is 1000).
 * @returns {number} The calculated number of game ticks.
 * @example
 * ```js
 * calcGameTicks(1000) // => 20
 * calcGameTicks(500) // => 10
 * ```
 */
export function calcGameTicks(milliseconds = 1000, gameTicksPerSecond = 20, millisecondsPerSecond = 1000) {
	return Math.floor(milliseconds / (millisecondsPerSecond / gameTicksPerSecond))
}
