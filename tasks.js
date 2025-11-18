'use sctrict'


// Дождь
const rain = Math.floor(Math.random());

if (rain === 0) {
   console.log('Дождя нет')
} else {
   console.log('Пошёл дождь. Возьмите зонт!')
}

// Институт
const mat = Number(prompt('Введите количество баллов по математике'));
const rus = Number(prompt('Введите количество баллов по русскому языку'));
const info = Number(prompt('Введите количество баллов по информатике'));

const sum = mat + rus + info;

if (sum >= 265) {
   console.log('Поздравляю, вы поступили на бюджет!');
}
else {
   console.log('Попробуйте в следующий раз');
}

// Банкомат
const cash = Number(prompt('Сколько денег вы хотите снять?'))

if (cash % 100 === 0) {
   console.log(`Вы можете снять ${cash} рублей`);
} else {
   console.log('К сожалению вы можете снять только сумму кратную ста рублям');
}