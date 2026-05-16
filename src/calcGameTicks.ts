/**
 * Calculate the number of game ticks based on the given time duration.
 * @param {number} [milliseconds] - The time duration in milliseconds (default is 1000).
 * @param {number} [gameTicksPerSecond] - Number of game ticks per second (default is 20).
 * @param {number} [millisecondsPerSecond] - Number of milliseconds per second (default is 1000).
 * @returns {number} The calculated number of game ticks.
 * @example
 * ```js
 * calcGameTicks(1000) // => 20
 * calcGameTicks(500) // => 10
 * ```
 */
export function calcGameTicks(milliseconds: number = 1000, gameTicksPerSecond: number = 20, millisecondsPerSecond: number = 1000): number {
  return Math.floor(milliseconds / (millisecondsPerSecond / gameTicksPerSecond))
}
