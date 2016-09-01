# parse currency

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Just a simple function to parse currency values.

### install

```bash
npm i -S parse-currency
```

### and use it

```javascript
import parseCurrency from 'parse-currency'
// OR
const parseCurrency = require('parse-currency')

const foo = parseCurrency('$10.50')
console.log(foo) // 10.5

const bar = parseCurrency('$1,000,000.25')
console.log(bar) // 1000000.25
```

### behavior

- it only works with USD formated currencies. _for now_
- if an empty string or a non-string value is passed, `parseCurrency` returns `null`.
- `parseCurrency` is a pure function, it does not mutate the provided string.

### FAQ

- *Why such small module?*: [Sindre](https://github.com/sindresorhus/) gives a [good answer](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328) to this.
