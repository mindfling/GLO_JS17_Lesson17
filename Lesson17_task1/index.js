'use strict';
// Lesson17 task 1

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
        console.log('lets sum', this);
        // ваш код
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
            this.show();
        } else {
            alert('Поля a и b должны быть числами');
        }
        return this.res;
    },

    mult: function () {
        console.log('lets mult', this);
        // ваш код
        this.a = +inputA.value;
        this.b = +inputB.value;

        if (!isNaN(this.a) && !isNaN(this.b)) {

            this.res = this.a * this.b;
            this.show();
        } else {
            alert('Поля a и b должны быть числами');
        }
        return this.res;
    },

    show: function (event) {
        // ваш код
        inputRes.value = this.res;
    },
};


buttonSum.addEventListener('click', calculator.sum.bind(calculator));
buttonMult.addEventListener('click', calculator.mult.bind(calculator));
// buttonMult.addEventListener('click', calculator.mult);

