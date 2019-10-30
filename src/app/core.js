'use strict'

import { dicionary } from './dicionary'

export default class WhiteExtenso {
  /**
  * @param {string} input
  */
  constructor (input) {
    this.input = input
    this.output = undefined
    this.isNegative = undefined
  }

  validation () {
    this.isNegative = this.input.includes('-')
    const input = Number(this.input)
    const filter = {
      min: input >= -99999,
      max: input <= 99999,
      nan: !Number.isNaN(input),
      finite: Number.isFinite(input)
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

  format () {
    if (this.isNegative) this.output.splice(0, 0, dicionary.negative)
    this.output = this.output.join().replace(/,/gi, ' e ').replace(/e mil/, 'mil')
    this.output = { extenso: this.output }
  }

  white () {
    const array = this.input.replace(/-/g, '').split('')
    this.input = Number(this.input.replace(/[^\d]+/g, ''))
    let length = array.length
    const white = []

    if (this.input) {
      while (length > 0) {
        length--
        let number = Number(array.shift())
        if (!number) continue

        const xiIxx = ((length === 1 || length === 4) && (number === 1) && (Number(array[0]) > 0))
        const c = (number === 1 && length === 2 && !Number(array.join('')))
        const cc = length <= 2
        const m = length === 3

        if (xiIxx) {
          const elevenUntilNineteen = Number(number + array.shift())
          length === 1
            ? white.push(dicionary.numbers[elevenUntilNineteen])
            : white.push(dicionary.numbers[elevenUntilNineteen]) && white.push(dicionary.numbers.thousand)
          length--
          continue
        } else if (c) white.push(dicionary.numbers.hundred)
        else if (cc) white.push(dicionary.numbers[number][length])
        else if (m) {
          number === 1
            ? white.push(dicionary.numbers.thousand)
            : white.push(dicionary.numbers[number][0]) && white.push(dicionary.numbers.thousand)
        } else {
          white.push(dicionary.numbers[number][1])
          if (number >= 2 && Number(array[0])) {
            number = Number(array.shift())
            white.push(dicionary.numbers[number][0])
            white.push(dicionary.numbers.thousand)
            length--
          } else white.push(dicionary.numbers.thousand)
        }
      }
    } else (white.push(dicionary.numbers[0]))

    this.output = white
    this.format()
    return (this.output)
  }

  start () { return (this.validation() ? this.white() : this.invalid()) }
}
