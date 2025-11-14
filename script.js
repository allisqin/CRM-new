// const nameGoog = "Techno Pova 6 neo";
// const quantityGood = "6";
// const categoryCoog = "Смартфоны";
// const priceGoog = "400";

// console.log(nameGoog);

// console.log(quantityGood * priceGoog);

const nameGoog = prompt("Введите наименование товара");
const quantityGood = Number(prompt('Введите количество товара'));
const categoryCoog = prompt('Введите категорию товара');
const priceGood = Number(prompt('Введите цену товара'));

console.log(typeof quantityGood);
console.log(typeof priceGood);

console.log(`На складе ${quantityGood} единицы товара ${nameGoog} на сумму ${quantityGood * priceGood} долларов`);
