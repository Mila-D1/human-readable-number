module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero'
    }

    let string = number.toString()

    /* Array of units as words */
    const units = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ]

    /* Array of tens as words */
    const tens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ]

    let words = []

    let ints = string.split('').reverse().map(parseFloat)

    /* If tens integer is 1, i.e. 10, then add 10 to units integer */
    if (ints[1] === 1) {
        ints[0] += 10
    }

    /* Add unit word if array item exists */
    if ((word = units[ints[0]])) {
        words.push(word)
    }

    /* Add tens word if array item exists */
    if ((word = tens[ints[1]])) {
        words.push(word)
    }

    /* Add hundreds word if array item exists */
    if ((word = units[ints[2]])) {
        words.push(word + ' hundred')
    }

    return words.reverse().join(' ')
}
