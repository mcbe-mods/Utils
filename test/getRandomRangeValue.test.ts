import { describe, expect, it, vi } from 'vitest'
import { getRandomRangeValue } from '../src/index'

describe('getRandomRangeValue', () => {
  it('same min and max returns that value', () => {
    expect(getRandomRangeValue(5, 5)).toBe(5)
  })

  it('returns value within range', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    expect(getRandomRangeValue(1, 10)).toBe(1)
    vi.restoreAllMocks()
  })

  it('returns max when random is near 1', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.999)
    expect(getRandomRangeValue(1, 10)).toBe(10)
    vi.restoreAllMocks()
  })

  it('handles negative ranges', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    expect(getRandomRangeValue(-10, -5)).toBe(-10)
    vi.restoreAllMocks()
  })

  it('uses ceil for min and floor for max', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    expect(getRandomRangeValue(1.2, 5.9)).toBe(2)
    vi.restoreAllMocks()
  })
})
