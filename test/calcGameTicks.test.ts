import { describe, expect, it } from 'vitest'
import { calcGameTicks } from '../src/index'

describe('calcGameTicks', () => {
  it('default params: 1000ms → 20 ticks', () => {
    expect(calcGameTicks()).toBe(20)
  })

  it('500ms → 10 ticks', () => {
    expect(calcGameTicks(500)).toBe(10)
  })

  it('custom gameTicksPerSecond: 1000ms, 10 ticks/s → 10 ticks', () => {
    expect(calcGameTicks(1000, 10)).toBe(10)
  })

  it('custom millisecondsPerSecond: 2000ms, 20 ticks/s, 1000ms/s → 40 ticks', () => {
    expect(calcGameTicks(2000, 20, 1000)).toBe(40)
  })

  it('0ms → 0 ticks', () => {
    expect(calcGameTicks(0)).toBe(0)
  })
})
