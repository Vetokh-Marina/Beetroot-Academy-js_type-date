// // 1. Спросить у пользователя чётное число в интервале от 10 до 50 и поделить его пополам и вывести в консоль результат.

function inputValue() {
   let userAnswer = prompt("Please enter an even number between 10 and 50...", "");
   if (!userAnswer) {
      alert('Sorry, you forgot to enter value!!!')
      inputValue();
   }
   else {
      if (userAnswer < 10 || userAnswer > 50 || userAnswer % 2) {
         alert('Sorry, your value is not correct :(Try againe')
         inputValue();
      }
      alert(`You entered the correct value = ${userAnswer / 2}`)
      inputValue();
   }
}

// -------------------------------------
let num = -124;
let x = 100 + (num *= 5);//100+(-124*5)
console.log(x); //-520 
// -------------------------------------
// 1) "" + 15 + 5
let a = "" + 15 + 5;//производиться склеевание '155'
console.log(a);
console.log(typeof a);
// 2) "" - 10 + 5
let b = "" - 10 + 5;// ""= 0/ 0 - 10 + 5 = -5
console.log(b);
console.log(typeof b);
// 3) false + true
let c = false + true; // false=0 и true = 1 (0+1=1)
console.log(c);
console.log(typeof c);
// 4) 69 / "3"
let d = 69 / "3";// знак деление(/) преобразует при возможности строку в число = 23  
console.log(d);
console.log(typeof d);
// 5) "10" * "20"
let f = "10" * "20";// знак умножение(*) преобразует при возможности строку в число = 200  
console.log(f);
console.log(typeof f);
// 6) 12+ 10 + "px"
let g = 12 + 10 + "px";// числа сумируем а строку не возможно преобразовать в число , производиться склееввание =12+10+рх=22рх
console.log(g);
console.log(typeof g);
