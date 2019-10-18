// const input = '456';

const toWords = require('extenso');
const Validation = require('./validation');

function startup(input) {
  const value = input.toString();
  const validate = Validation.check(value);

  if (validate) {
    // const isZero = { extenso: 'zero' };
    const runWebService = { extenso: toWords(value, { negative: 'informal' }) };
    const output = value === '0' ? { extenso: 'zero' } : runWebService;

    return JSON.stringify(output);
  } else {
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
}
module.exports = {
  startup,
};
