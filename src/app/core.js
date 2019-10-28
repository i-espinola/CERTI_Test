'use strict'
import { words } from './words'
export default class WhiteExtenso {
  /**
  * @param {string} input
  */
  constructor (input) {
    this.input = input
  }

  validation () {
    const value = Number(this.input)
    const filter = {
      min: value >= -99999,
      max: value <= 99999,
      nan: !Number.isNaN(value),
      finite: Number.isFinite(value)
    }
    const result =
      filter.min &&
      filter.max &&
      filter.nan &&
      filter.finite
    return result
  }

  invalid () {
    return ({
      error: {
        code: 400,
        status: 'Bad Request',
        details: 'enter a numeric value between -99999 to 99999'
      }
    })
  }

  white () {
    const total = Number(this.input)
    let array = this.input.split('')
    let length = array.length
    let white = []

    if (total > 0) {
      while (length >= 0) {
        const remainder = Number(array.join(''))
        const number = array.shift()
        length--

        // if (remainder === 100) {
        //   white.push(words.numbers[length][0])
        //   length -= 3
        // }
      }
    } else white.push(words.numbers[total][total])

    const output = { extenso: white.join() }
    return output

    // /**
    // * @param {number} length
    // */
    // while (length >= 0) {
    //   length--
    //   return (console.log(value))
    // }
    // for (let i = 0; i <= length; i++) {}
    // numbers.map((el, count) => {})

  }
}
