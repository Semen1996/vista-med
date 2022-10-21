# Проект: Vista Med
Сайт на GitHub Pages: https://semen1996.github.io/vista-med/ 

Приложение для чтения карточек присутствующих и выбывших пациентов в мед.учереждение.

## Функционал:

* При клике на пациента в таблице в левую панель подгружается дополнительная информация о выбранном пациенте
* При нажатие на кнопку "Выбывшие" в таблицу выводятся данные, находящиеся в файле quittingList.json, 
а при нажатие на кнопку "Присутствующие" - данные, находящиеся в файле presentList.json

## Технологии: 

* HTML
* CSS
* JS
* Webpack

## Инструкция по установке: 


Скопируйте проект к себе с помощью команды

```
git clone git@github.com:Semen1996/vista-med.git
```

Установить зависимости:

```
npm install
```

Собрать проект Вебпаком:

```
npm run build
```

Запустить проект на локальном сервере:

```
npm run dev
```


## Что необходимо доработать:

* Адаптивность страницы (Поработать над мобильной версткой)