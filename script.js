'use strict';

let money = +prompt('Введите Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  optionalExpenses: {},
  income: [],
  savings: false,
  expenses: {}
};

let answer1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    answer2 = prompt('Во сколько обойдется', ''),
    answer3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    answer4 = prompt('Во сколько обойдется', '');

appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;

alert(appData.budget / 30);

console.log(appData);

