import test from 'ava'

const parseCurrency = require('../dist/parse-currency')

test('parseCurrency parses a USD formated currency and returns a float', t => {
  t.is(parseCurrency('$1,000.50'), 1000.5)
  t.is(parseCurrency('$1.5'), 1.5)
  t.is(parseCurrency('$15,000,000.50'), 15000000.5)
  t.is(parseCurrency('$100'), 100)
  t.is(parseCurrency('$9.99'), 9.99)
  t.is(parseCurrency('$9,999.99'), 9999.99)
})

const PARSE_CURRENCY_INVALID_VALUE_TEST = 'parseCurrency: returns null ' +
   'when it is invalid (no string or empty string)'
test(PARSE_CURRENCY_INVALID_VALUE_TEST, t => {
  t.is(parseCurrency(undefined), null)
  t.is(parseCurrency(null), null)
  t.is(parseCurrency(''), null)
  t.deepEqual(parseCurrency({}), null)
  t.deepEqual(parseCurrency([1, {foo: 'bar'}]), null)
})
