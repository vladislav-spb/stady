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

for (let i = 0; i < 2; i++) {
  let answer1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
      answer2 = prompt('Во сколько обойдется', '');

  if ( (typeof(answer1)) === 'string' && (typeof(answer1)) !== null && (typeof(answer2)) !==null
    && answer1 != '' && answer2 != '' && answer1.length < 50 ) {
      appData.expenses[answer1] = answer2;
    };
};

/*        Цикл While

let i = 0;
while( i< 2 ) {
  let answer1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
      answer2 = prompt('Во сколько обойдется', '');

  if ( (typeof(answer1)) === 'string' && (typeof(answer1)) !== null && (typeof(answer2)) !==null
    && answer1 != '' && answer2 != '' && answer1.length < 50 ) {
      appData.expenses[answer1] = answer2;
    };
    i++;
};

          Цикл do While

let i = 0;
do {
  let answer1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
      answer2 = prompt('Во сколько обойдется', '');

  if ( (typeof(answer1)) === 'string' && (typeof(answer1)) !== null && (typeof(answer2)) !==null
    && answer1 != '' && answer2 != '' && answer1.length < 50 ) {
      appData.expenses[answer1] = answer2;
    };
    i++;
}
while( i<2 );*/

appData.moneyPerDay = appData.budget / 30;

alert(`Ежедневный боджет ${appData.moneyPerDay}`);

if ( appData.moneyPerDay < 100 ) {
  console.log(`Минимальный уровень достатка`);
} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000 ) {
  console.log(`Средний уровень достатка`);
} else if ( appData.moneyPerDay > 2000 ) {
  console.log(`Высокий уровень достатка`);
} else {
  console.log(`Что-то пошло не так`);
}
console.log(appData);

