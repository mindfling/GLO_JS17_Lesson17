'use strict';
// Lesson17 task 3
// https://codepen.io/dimfreelancerdn/pen/LYbBqmQ
// https://github.com/mindfling/GLO_JS17_Lesson17/tree/main/Lesson17_task3


const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск', ],
  ua: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
};

const contyArray = ['Россия', 'Украина', 'Белоруссия', 'Япония'];

const selectCountry = document.querySelector('#country');
const selectCity = document.querySelector('#city');
const result = document.querySelector('.result');


selectCountry.addEventListener('change', (event) => {
  let target = event.target;
  let selectedValue = target.options[target.selectedIndex].value;
  let selectedText = target.options[target.selectedIndex].text;
  // console.log('Выбрали значение', selectedValue);
  // console.log('Выбрали страну', selectedText);
  
  result.textContent = '';
  
  if (target.value === '') {
    selectCity.style.display = 'none';
  } else {
    selectCity.style.display = 'inline-block  ';
    //генерация через innerHTML
    let html = '<option value="">-- выберите город --</option>\n';
    selectCity.innerHTML = '';
    let cities = cityArr[selectedValue];
    cities.forEach((city, index) => {
      console.log('city: ', city);
      html += `<option value="${index}">${city}</option>
      `;
    });
    selectCity.innerHTML = html;
  }
});


selectCity.addEventListener('change', (event) => {
  const target = event.target;
  let cityvalue = target.options[target.selectedIndex].value;
  let cityname = target.options[target.selectedIndex].text;

  if (target.value === '') {
    result.textContent = '';
  } else {
    result.textContent = '' +
      selectCountry.options[selectCountry.selectedIndex].text + ', ' +
      selectCity.options[selectCity.selectedIndex].text;
  }


  // result.textContent = '' + selectCountry.value + ' - ' +
  //         selectCountry.options[selectCountry.selectedIndex].text + ' -> ' + 
  //         selectCity.value + ' - ' + 
  //         selectCity.options[selectCity.selectedIndex].text;
});