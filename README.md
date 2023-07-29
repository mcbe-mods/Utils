# mcbe-mods/utils

Provide convenient and practical tools to improve the efficiency of mod development.

## Usage

Installation

```bash
npm install @mcbe-mods/utils
```

Codeing

```js
import { splitGroups, color } from '@mcbe-mods/utils'

splitGroups(65) // => [64, 1]
splitGroups(140) // => [64, 64, 12]
splitGroups(65, 16) // => [16, 16, 16, 16, 1]

color.green.italic.bold('Dedicated Ser') + color.reset('ver') + color.red.obfuscated('!!!')
// => '§a§o§lDedicated Ser§rver§c§k!!!'

color.green.italic.bold('Dedicated Ser', color.reset('ver'), color.red.obfuscated('!!!'))
// => '§a§o§lDedicated Ser§rver§c§k!!!'
```
