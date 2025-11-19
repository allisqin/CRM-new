function invertString(str) {
   let strLowerCase = str.toLowerCase();
   let firstChild = strLowerCase[0];
   let upperFirstChild = firstChild.toUpperCase();
   let newString = strLowerCase.replace(str[0], upperFirstChild);
   return newString;
}

console.log(invertString('все Будет Хорошо'));
