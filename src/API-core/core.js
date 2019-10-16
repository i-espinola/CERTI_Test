'use ';

const toWords = require('extenso');

function validation(input) {
  const value = parseInt(input);
  const filter = {
    min: value >= -99999,
    max: value <= 99999,
    nan: !isNaN(value),
    finite: isFinite(value),
    size: input.replace('-', '')
      .length <= 5,
  };

  const result = filter.min && filter.max && filter.nan && filter.finite && filter.size;
  return result;
}

function startup(input) {
  const value = input.toString();
  const validate = validation(value);

  if (input === 'check') {
    return true;
  }
  if (validate) {
    const isZero = { extenso: 'zero' };
    const runWebService = { extenso: toWords(value, { negative: 'informal' }) };
    const output = value === '0' ? isZero : runWebService;

    return JSON.stringify(output);
  }
  const errorObj = {
    error: {
      code: 400,
      status: 'error',
      info: 'valor inválido',
      details: 'entre com um valor numérico entre -99999 até 99999',
    },
  };
  return JSON.stringify(errorObj);
}

module.exports = {
  startup,
};
