'use strict'

import { words } from './words'
import { dicionary } from './dicionary'

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
    const array = this.input.split('')
    const white = []
    let length = array.length

    if (total > 0) {
      while (length > 0) {
        length--
        const number = Number(array.shift())
        if (!number || isNaN(number)) continue
        const elevenUntilNineteen = (length === 1 || length === 4) && (number === 1) && (Number(array[0])) ? Number(number + array.shift()) : 0
        const hundred = (((number === 1) && (array.join('') === '00')))

        if (elevenUntilNineteen) {
          white.push(dicionary.numbers[elevenUntilNineteen])
          length--
          continue
        } else if (hundred) white.push(dicionary.numbers.hundred)
        else if (length === 4) ((white.push(dicionary.numbers[number][1])) && (white.push(dicionary.numbers.thousand)))
        else if (length === 3) ((white.push(dicionary.numbers[number][0])) && (white.push(dicionary.numbers.thousand)))
        else (white.push(dicionary.numbers[number][length]))
      }
    } else (white.push(dicionary.numbers[total][total]))

    const output = { extenso: white.join() }
    return output
  }
}
