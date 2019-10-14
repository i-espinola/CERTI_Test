const toWords = require("extenso");

function validation(input) {
  const value = parseInt(input);
  const filter = {
    min: value >= -99999 ? true : false,
    max: value <= 99999 ? true : false,
    nan: !isNaN(value),
    finite: isFinite(value),
    size: input.replace("-", "")
      .length <= 5 ? true : false
  }
  const result = filter.min && filter.max && filter.nan && filter.finite && filter.size ? true : false;
  return (result);
}

function startup(input) {
  const value = input.toString();
  const validate = validation(value);

  if (input === "check") {
    return (runTest.check())
  } else if (validate) {
    const isZero = { extenso: "zero" };
    const runWebService = { extenso: toWords(value, { negative: "informal" }) };
    const output = value === "0" ? isZero : runWebService;

    return (JSON.stringify(output));
  } else {
    const errorObj = {
      error: {
        code: 400,
        status: "error",
        info: "valor inválido",
        details: "entre com um valor numérico entre -99999 até 99999"
      }
    };
    return (JSON.stringify(errorObj));
  }
}


module.exports = {
  startup: startup
}
