# @mcbe-mods/utils

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]

Utility functions for Minecraft Bedrock Edition mod development.

## Usage

Install:

```bash
npm install @mcbe-mods/utils
```

```ts
import { calcGameTicks, color, Experience, getRadiusRange, getRandomProbability, getRandomRangeValue, splitGroups } from '@mcbe-mods/utils'

// splitGroups - split items into stacks
splitGroups(65) // => [64, 1]
splitGroups(140) // => [64, 64, 12]

// color - Minecraft formatting codes
color.green.italic.bold('Dedicated Ser') + color.reset('ver') + color.red.obfuscated('!!!')
// => '§a§o§lDedicated Ser§rver§c§k!!!'

// Experience - player XP calculation
const exp = new Experience()
exp.addXP(100)
exp.getLevel() // => 7

// calcGameTicks - time to ticks
calcGameTicks(1000) // => 20

// getRadiusRange - block position range
getRadiusRange({ x: 0, y: 0, z: 0 }, 1) // => 27 positions
```

## API

| Function | Description |
| --- | --- |
| `splitGroups(sum, groupSize?)` | Split a number into groups of a given size |
| `color` | Minecraft color/formatting code stylizer |
| `Experience` | Player experience calculator (leveling up) |
| `calcGameTicks(ms?, ticksPerSec?, msPerSec?)` | Convert real time to game ticks |
| `getRadiusRange(location, radius?)` | Get block positions within a radius |
| `getRandomProbability(probability)` | Random chance with percentage |
| `getRandomRangeValue(min, max)` | Random integer within a range |

## License

[MIT](./LICENSE.md) License © [Lete114](https://github.com/Lete114)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@mcbe-mods/utils?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmx.dev/package/@mcbe-mods/utils
[npm-downloads-src]: https://img.shields.io/npm/dm/@mcbe-mods/utils?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmx.dev/package/@mcbe-mods/utils
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@mcbe-mods/utils?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@mcbe-mods/utils
[license-src]: https://img.shields.io/github/license/mcbe-mods/Utils.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/mcbe-mods/Utils/blob/main/LICENSE.md
