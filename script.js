'use strict';
// const nameGoog = "Techno Pova 6 neo";
// const quantityGood = "6";
// const categoryCoog = "Смартфоны";
// const priceGoog = "400";

// console.log(nameGoog);

// console.log(quantityGood * priceGoog);

const nameGoog = prompt("Введите наименование товара");
const categoryCoog = prompt('Введите категорию товара');
let quantityGood = Number(prompt('Введите количество товара'));
let priceGood = Number(prompt('Введите цену товара'));
if (isNaN(quantityGood) || isNaN(priceGood)) {
   console.log('Вы ввели некорректные данные');
}
else {
   console.log(typeof quantityGood);
   console.log(typeof priceGood);
   console.log(`На складе ${quantityGood} единицы товара ${nameGoog} на сумму ${quantityGood * priceGood} долларов`);
}


