'use strict';
// Lesson17 task 1
// https://codepen.io/dimfreelancerdn/pen/NWbBeoE
// https://github.com/mindfling/GLO_JS17_Lesson17/tree/main/Lesson17_task1

const inputA = document.querySelector('#a');
const inputB = document.querySelector('#b');
const buttonSum = document.querySelector('#sum');
const buttonMult = document.querySelector('#mult');
const inputRes = document.querySelector('#res');

const calculator = {
  a: 0,
  b: 0,
  res: 0,
  sum: function () {
    // this.res = this.a + this.b;
    return this.a + this.b;
  },
  mult: function () {
    return this.a * this.b;
  },
  show: function (event) {
    if (inputA.value.trim() === '') {
      inputA.value = 0;
    }
    if (inputB.value.trim() === '') {
      inputB.value = 0;
    }
    this.a = +inputA.value;
    this.b = +inputB.value;

    if (!isNaN(this.a) && !isNaN(this.b)) {
      this.res = this.a + this.b;

      //в зависимости от id выбираем действие
      if (event.target.id === 'sum') {
        //суммирование
        this.res = this.sum();
      } else if (event.target.id === 'mult') {
        //умножение
        this.res = this.mult();
      }
    } else {
      alert('Поля a и b должны быть числами');
    }

    inputA.value = this.a || 0;
    inputB.value = this.b || 0;
    inputRes.value = this.res;
  },
};

// на обе кнопки навешиваем слушателя show()
buttonSum.addEventListener('click', calculator.show.bind(calculator));
buttonMult.addEventListener('click', calculator.show.bind(calculator));
