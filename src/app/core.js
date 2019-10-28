'use strict'

export default class ExtensoJs {
  /**
   * @param {string} input
   */
  constructor (input) {
    this.input = input
    this.output = undefined
    this.invalid = {
      error: {
        code: 400,
        status: 'Bad Request',
        details: 'enter a numeric value between -99999 to 99999'
      }
    }
  }

  validation () {
    const value = Number(this.input)
    // const value = Number(this.input)
    const filter = {
      min: value >= -99999,
      max: value <= 99999,
      nan: !Number.isNaN(value),
      finite: Number.isFinite(value)
    }
    const result = (
      filter.min &&
      filter.max &&
      filter.nan &&
      filter.finite
    )
    return result
  }

  white () {
    return ({ extenso: this.input })
  }
}
