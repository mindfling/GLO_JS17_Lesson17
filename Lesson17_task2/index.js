'use strict';
// Lesson17 task 2
// https://codepen.io/dimfreelancerdn/pen/BaQPMYe
// https://github.com/mindfling/GLO_JS17_Lesson17/tree/main/Lesson17_task2


function getResult(x, y) {
  let result;
  // ваш код

  let pow = x ** y;
  console.log('pow: ', x, y, pow);

  // разбиваем на элементы
  let str = pow.toString().split('');
  console.log('str: ', str);

  // находим сумму элементов
  result = str.reduce((accum, curr) => {
    return +accum + +curr;
  });

  return result;
}

console.log(getResult(4, 8));
