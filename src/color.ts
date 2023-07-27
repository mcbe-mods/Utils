/* eslint-disable camelcase */

const colors = {
  black: '§0',
  dark_blue: '§1',
  dark_green: '§2',
  dark_aqua: '§3',
  dark_red: '§4',
  dark_purple: '§5',
  gold: '§6',
  gray: '§7',
  dark_gray: '§8',
  blue: '§9',
  green: '§a',
  aqua: '§b',
  red: '§c',
  light_purple: '§d',
  yellow: '§e',
  white: '§f',
  minecoin_gold: '§g',
  obfuscated: '§k',
  bold: '§l',
  italic: '§o',
  reset: '§r'
}

const STYLER = Symbol('STYLER')
const styles = Object.create(null)

type builderFunction = {
  (...args: string[]): string
  [STYLER]?: string
}

for (const [key, value] of Object.entries(colors)) {
  styles[key] = {
    get() {
      const builder = createBuilder(value, this[STYLER])
      Object.defineProperty(this, key, { value: builder })
      return builder
    }
  }
}

const proto = Object.defineProperties({}, styles)

const _color: Partial<typeof colors> = {}

Object.setPrototypeOf(_color, proto)

function createBuilder(styler: string, parent: string) {
  const value = parent ? parent + styler : styler
  const builder: builderFunction = (...args: string[]) => value + args.join('')
  builder[STYLER] = value
  Object.setPrototypeOf(builder, proto)
  return builder
}

export const color = _color
