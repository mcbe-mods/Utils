import { describe, expect, it } from 'vitest'
import { Experience } from '../src/index'

describe('experience', () => {
  it('starts at level 0 with 0 xp', () => {
    const exp = new Experience()
    expect(exp.getLevel()).toBe(0)
    expect(exp.getXP()).toBe(0)
  })

  it('addXP accumulates and levels up multiple times', () => {
    const exp = new Experience()
    exp.addXP(100)
    expect(exp.getLevel()).toBe(7)
    expect(exp.getXP()).toBe(9)
  })

  it('levels up when XP reaches threshold', () => {
    const exp = new Experience()
    expect(exp.getNextLevelRequiredXP()).toBe(7)
    exp.addXP(7)
    expect(exp.getLevel()).toBe(1)
    expect(exp.getXP()).toBe(0)
  })

  it('setXP resets and adds XP', () => {
    const exp = new Experience()
    exp.setXP(50)
    expect(exp.getLevel()).toBe(4)
    expect(exp.getXP()).toBe(10)
  })

  it('addLevel increases level and recalculates nextRequiredXP', () => {
    const exp = new Experience()
    exp.addLevel(5)
    expect(exp.getLevel()).toBe(5)
  })

  it('addLevel with negative decreases level', () => {
    const exp = new Experience()
    exp.setLevel(10)
    exp.addLevel(-3)
    expect(exp.getLevel()).toBe(7)
  })

  it('addLevel below 0 clamps to 0', () => {
    const exp = new Experience()
    exp.setLevel(2)
    exp.addLevel(-5)
    expect(exp.getLevel()).toBe(0)
  })

  it('setLevel sets level directly', () => {
    const exp = new Experience()
    exp.setLevel(15)
    expect(exp.getLevel()).toBe(15)
  })

  it('getNextLevelRequiredXP for level < 16', () => {
    const exp = new Experience()
    exp.setLevel(5)
    expect(exp.getNextLevelRequiredXP()).toBe(2 * 5 + 7)
  })

  it('getNextLevelRequiredXP for level 16-30', () => {
    const exp = new Experience()
    exp.setLevel(20)
    expect(exp.getNextLevelRequiredXP()).toBe(5 * 20 - 38)
  })

  it('getNextLevelRequiredXP for level >= 31', () => {
    const exp = new Experience()
    exp.setLevel(40)
    expect(exp.getNextLevelRequiredXP()).toBe(9 * 40 - 158)
  })

  it('getTotalXP calculates cumulative XP from level 0', () => {
    const exp = new Experience()
    exp.setLevel(5)
    // level 4 → 2*4+7 = 15
    // level 3 → 2*3+7 = 13
    // level 2 → 2*2+7 = 11
    // level 1 → 2*1+7 = 9
    // level 0 → 2*0+7 = 7
    expect(exp.getTotalXP()).toBe(15 + 13 + 11 + 9 + 7)
  })

  it('getTotalXP includes current xp', () => {
    const exp = new Experience()
    exp.setLevel(1)
    exp.setXP(5)
    expect(exp.getTotalXP()).toBe(12)
  })
})
