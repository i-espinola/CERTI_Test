const words =
{
    and: " e ",
    nameHundred: "cem",
    nameThousand: "mil",
    names: [
        [],
        ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"],
        ["", "dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
        ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
    ],
    nameZero: "zero",
    negative: "menos ",
};

function validation (input)
{
    input = parseInt(input);

    const filter = {
        min: input >= -99999 ? true : false,
        max: input <= 99999 ? true : false,
        nan: !isNaN(input),
        finite: isFinite(input)
    }

    const result = filter.min && filter.max && filter.nan && filter.finite ? true : false;
    return (result);
}

function toExpression (value)
{

    const fourDigit = 4;
    const fiveDigit = 5;
    const thousandUnit = words.names[1];
    const tensOfThousands = words.names[2];
    const fullSize = value.split("").length;
    let numbers = value.split("");
    let output = "";
    let write = [];

    while (numbers.length > 0)
    {
        let leftover = parseInt(numbers.join().replace(/[^0-9]/g, ""));
        let number = parseInt(numbers.shift());
        let partialSize = numbers.length;

        if (leftover === 100 || (leftover >= 11 && leftover <= 19))
        {
            leftover === 100 ? write.push(words.nameHundred) : write.push(words.names[partialSize][leftover]);
            numbers = [];
            continue;

        } else if (fullSize === fourDigit && fullSize === partialSize)
        {
            write.push(thousandUnit[number] + " " + words.nameThousand);
            continue;

        } else if ((fullSize === fiveDigit && fullSize === partialSize) || (fullSize === fiveDigit && fullSize - 1 === partialSize)) 
        {
            if (number === 1)
            {

                number = parseInt(number + numbers.shift().toString());
                write.push(tensOfThousands[number] + " " + words.nameThousand);
                partialSize--;
                continue;
            }
            fullSize === partialSize ? write.push(tensOfThousands[number]) : write.push(thousandUnit[number] + " " + words.nameThousand);
            continue;

        } else if (number === 0)
            continue;

        write.push(words.names[partialSize][number]);
    }

    output = write.join().replace(/mil,/g, words.nameThousand + " ").replace(/,/g, words.and);
    return (output);
}

function startup (input)
{
    const validate = validation(input);
    let number = input.toString();
    let isNegative = false;

    if (validate)
    {
        number < 0 ? (number = number.replace(/[^0-9]/g, "")) + (isNegative = true) : "";

        const result = number === 0 ? words.nameZero : toExpression(number);
        const output = isNegative ? words.negative + result : result;

        return (output);

    } else
        return ("erro: valor inválido");
}

module.exports = {
    startup: startup
}
