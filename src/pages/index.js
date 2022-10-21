import './index.css';
import presentList from '../utils/presentList.json';
import quittingList from '../utils/quittingList.json';

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
const infoFio = document.querySelector('#info-fio');
const infoAge = document.querySelector('#info-age');
const infoDiagnose = document.querySelector('#info-diagnose');
const tableRowTemplate = document.querySelector('#table__row').content;
const table = document.querySelector('.table');
const tableHeaders = table.querySelectorAll('.table__item_head');

let date = new Date();
let dateYear = date.getFullYear();
let dateMonth = date.getMonth() + 1;
let dateDay = date.getDate();

// Функция для вычисление возраста
function getAge(birthDate) {
  const ageBirth = Number( birthDate.slice(0,4) );
  const monthBirth = Number( birthDate.slice(5,7) );
  const dayBirth = Number( birthDate.slice(8) );

  let age = dateYear - ageBirth;

  if(dateMonth > monthBirth) {
    age -= 1;
  }else if(dateMonth === monthBirth) {
    if(dateDay > dayBirth) {
      age -= 1;
    }
  }

  return age;
}

// Функция для добавление карточки в таблицу пациентов
function addCard(item, index, typeList) {
  const card = tableRowTemplate.querySelector('.table__row').cloneNode(true);
  card.querySelector('#item-number').textContent = index + 1;
  card.querySelector('#item-fio').textContent = `${item.lastName} ${item.firstName} ${item.patrName}`;

  if(typeList === 'presentList') {
    card.querySelector('#item-palata').textContent = item.bedNumber;

    const age = getAge(item.birthDate);
  
    card.addEventListener('click', () => {
      infoFio.textContent = `${item.lastName} ${item.firstName} ${item.patrName}`;
      infoAge.textContent = age;
      infoDiagnose.textContent = item.diagnosis;
    });
  }else {
    card.querySelector('#item-palata').textContent = item.cause;
  } 

  return card;
}

// Функция для очистки таблицы
function clearTable() {
  table.querySelectorAll('.table__row').forEach((item, index) => {
    if(index !== 0) {
      item.remove();
    }
  });
}

// Функция вставки карточки в таблицу пациентов
function insertCard(item, index, typeList) {
  const card = addCard(item, index, typeList);
  table.append(card);
}

// Функция переключения подсветки кнопок
function toggleBtns(btnOn, btnOff) {
  btnOn.classList.add('block-header__btn_active');
  btnOn.setAttribute("disabled", 'true');
  btnOff.classList.remove('block-header__btn_active');
  btnOff.removeAttribute("disabled");
}

// Функция при нажатии на левую кнопку
function handleBtnLeft() {
  toggleBtns(btnLeft, btnRight);

  tableHeaders[2].textContent = 'Палата';

  clearTable();

  presentList.forEach((item, index) => {
    insertCard(item, index, 'presentList');
  });
}

// Функция при нажатии на правую кнопку
function handleBtnRight() {
  toggleBtns(btnRight, btnLeft);

  tableHeaders[2].textContent = 'Причина выбытия';

  infoFio.textContent = '';
  infoAge.textContent = '';
  infoDiagnose.textContent = '';

  clearTable();

  quittingList.forEach((item, index) => {
    insertCard(item, index, 'quittingList');
  });
}

// Навешиваем слушателей на кнопки
btnLeft.addEventListener('click', handleBtnLeft);
btnRight.addEventListener('click', handleBtnRight);

// Выводим в таблицу список пациентов
presentList.forEach((item, index) => {
  insertCard(item, index, 'presentList');
});