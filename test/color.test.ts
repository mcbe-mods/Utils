import { describe, expect, it } from 'vitest'
import { color } from '../src/index'

describe('color', () => {
  it('single color', () => {
    expect(color.green('hello')).toBe('§ahello')
  })

  it('color + style chaining', () => {
    expect(color.green.italic.bold('hello')).toBe('§a§o§lhello')
  })

  it('multiple arguments', () => {
    expect(color.green('hello', ' world')).toBe('§ahello world')
  })

  it('with reset', () => {
    expect(color.green.italic.bold('Dedicated Ser') + color.reset('ver') + color.red.obfuscated('!!!'))
      .toBe('§a§o§lDedicated Ser§rver§c§k!!!')
  })

  it('starts a new chain after calling', () => {
    const red = color.red
    const green = color.green
    expect(red('a')).toBe('§ca')
    expect(green('b')).toBe('§ab')
  })

  it('unknown property access returns undefined', () => {
    expect((color as any).unknown).toBeUndefined()
  })
})
