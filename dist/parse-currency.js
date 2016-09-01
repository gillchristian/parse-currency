'use strict';

// --- parses a USD (i.e. $1,000.50) formated currency into float ---
function parseCurrency(currency) {
  if (!currency || typeof currency !== 'string') {
    return null;
  }
  var number = currency.replace('$', '').replace(/,/g, '');
  return parseFloat(number);
}

module.exports = parseCurrency;
