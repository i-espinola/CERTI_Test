/**
 * @param {string} input
 */

export default (input) => {
  const value = parseInt(input, 10)
  const filter = {
    min: value >= -99999,
    max: value <= 99999,
    nan: !Number.isNaN(value),
    finite: Number.isFinite(value),
    size: input.replace('-', '').length <= 5
  }
  const result = (
    filter.min &&
    filter.max &&
    filter.nan &&
    filter.finite &&
    filter.size
  )
  return result
}
