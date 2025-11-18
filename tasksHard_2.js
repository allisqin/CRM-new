const income = Number(prompt('Введите пожалуйста ваш доход'));

if (income <= 15000) {
   let tax = income * 0.13;
   console.log(`Сумма налога составляет ${tax} рублей с суммы дохода ${income} рублей`);
} else if (income > 15000 && income <= 50000) {
   let tax = (income - 15000) * 0.2;
   console.log(`Сумма налога составляет ${tax} рублей с суммы дохода ${income} рублей`);
} else if (income > 50000) {
   let tax = (income - 50000) * 0.3;
   console.log(`Сумма налога составляет ${tax} рублей с суммы дохода ${income} рублей`);
}