const converter = (euro) => {
   const priceRubles = euro * 1.2 * 73;
   console.log(`Цена в рублях: ${priceRubles} рублей`);
}

converter(200);