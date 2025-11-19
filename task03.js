const calculate = (summ, quantity, promo) => {
   let discoutnQuantity = 0;
   let discoutnSumm = 0;
   let discountPromo = 0;

   if (quantity > 10) {
      discoutnQuantity = summ - (summ * 0.97);
      console.log(`Скидка при количестве товаров больше 10: ${discoutnQuantity} рублей`);
   }

   if (summ > 30000) {
      discoutnSumm = ((summ - 30000) * 0.15);
      console.log(`Скидка при сумме заказа от 30000 рублей ${discoutnSumm} рублей`);
   }

   if (promo === 'METHED') {
      discountPromo = summ * 0.1;
      console.log(`Скидка по промокоду \"METHED\" ${discountPromo} рублей`);
   }
   if (promo === 'G3H2Z1' && (discoutnQuantity + discoutnSumm > 2000)) {
      discountPromo = 500;
      console.log(`Скидка по промокоду \"G3H2Z1\" ${discountPromo} рублей`);
   }
}

calculate(50000, 5, 'METHED');