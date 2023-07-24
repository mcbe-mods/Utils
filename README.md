# mcbe-mods/utils

Provide convenient and practical tools to improve the efficiency of mod development.

## Usage

Installation

```bash
npm install @mcbe-mods/utils
```

Codeing

```js
import { splitGroups } from '@mcbe-mods/utils'

splitGroups(65) // => [64, 1]
splitGroups(140) // => [64, 64, 12]
splitGroups(65, 16) // => [16, 16, 16, 16, 1]
```
