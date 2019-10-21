const White = require('./white');

// /**
//  * @param {string} input
//  */
// function startup(input) {
//   const value = input.toString();
//   const validate = Validation.check(value);
//   let output;

//   if (validate) {
//     output = runWhite(value);
//   } else {
//     output = white.invalid;
//   }

//   return JSON.stringify(output);
// }

// module.exports = {
//   startup
// };

export default class extenso extends White
{ 
  /**
   * @param {string} input
   */
  constructor (input)
  { 
    super();
    this.input = input
    this.white = White
  }

  /**
   * @param {string} input
   */
  validation(input) {
    const value = parseInt(input, 10);
    const filter = {
      min: value >= -99999,
      max: value <= 99999,
      nan: !Number.isNaN(value),
      finite: Number.isFinite(value),
      size: input.replace('-', '').length <= 5,
    };
    const result = !!(
      filter.min
      && filter.max
      && filter.nan
      && filter.finite
      && filter.size
    );
    return result;
  }

  /**
   * @param {string} input
   */
  startup(input) {
    const validate = this.validation(input);
    const value = input.toString();
    let output;

    if (validate) {
      // output = runWhite(value);
      output = 'ok';
    } else {
      // output = white.invalid;
      output = 'invalido';
    }

    return JSON.stringify(output);
  }
}
