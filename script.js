let numberOne = prompt("Insira o primero número ou esc pra cancelar:")
let numberTwo = prompt("Insira o segundo número ou esc pra cancelar:")

// A soma dos dois números
const TwoNumbersSum = (oneNumber, twoNumber) =>
  (Number(oneNumber) + Number(twoNumber)).toFixed(2)
// A subtração dos dois números
const TwoNumbersSub = (oneNumber, twoNumber) =>
  (Number(oneNumber) - Number(twoNumber)).toFixed(2)
// A multiplicação dos dois números
const TwoNumbersMul = (oneNumber, twoNumber) =>
  (Number(oneNumber) * Number(twoNumber)).toFixed(2)
// A divisão dos dois números
const TwoNumbersDiv = (oneNumber, twoNumber) =>
  (Number(oneNumber) / Number(twoNumber)).toFixed(2)
// O resto da divisão dos dois números
const TwoNumbersRes = (oneNumber, twoNumber) =>
  (Number(oneNumber) % Number(twoNumber)).toFixed(2)

alert(
  `A Soma dos números ${numberOne}+${numberTwo} é: ${TwoNumbersSum(
    numberOne,
    numberTwo
  )}`
)
alert(
  `A Subtração dos números ${numberOne}-${numberTwo} é: ${TwoNumbersSub(
    numberOne,
    numberTwo
  )}`
)
alert(
  `A Multiplicação dos números ${numberOne}*${numberTwo} é: ${TwoNumbersMul(
    numberOne,
    numberTwo
  )}`
)
alert(
  `A Divisão dos números ${numberOne}/${numberTwo} é: ${TwoNumbersDiv(
    numberOne,
    numberTwo
  )}`
)
alert(
  `O Resto da divisão dos números ${numberOne} por ${numberTwo} é: ${TwoNumbersRes(
    numberOne,
    numberTwo
  )}`
)

// É PAR ou ÍMPAR
if ((numberOne + numberTwo) % 2 == 0) {
  alert(`A soma dos numéros ${numberOne} e ${numberTwo} é: PAR`)
} else {
  alert(`A soma dos numéros ${numberOne} e ${numberTwo} é: IMPAR`)
}

// SÃO IGUAIS
if (numberOne == numberTwo) {
  alert(`Os numéros ${numberOne} e ${numberTwo} são IGUAIS`)
} else {
  alert(`Os numéros ${numberOne} e ${numberTwo} são DIFERENTES`)
}
