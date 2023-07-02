const users = [
  {
    id: 1,
    name: 'Ivan',
    age: 32,
    isActive: true
  },
  {
    id: 2,
    name: 'Iulia',
    age: 30,
    isActive: false
  },
  {
    id: 3,
    name: 'Katea',
    age: 19,
    isActive: true
  }
];

const getNames = (users) => {
  const names = [];
  for (let user of users) {
    names.push(user.name);
  }
  return names;
}


//console.log(getActiveNames(users));


/*Функция для проверки длины строки. Она принимает строку, которую нужно проверить,
 и максимальную длину и возвращает true, если строка меньше или равна указанной длине,
  и false, если строка длиннее. Эта функция нам пригодится для валидации формы. Примеры использования функции:

// Cтрока короче 20 символов
имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
имяФункции('проверяемая строка', 10); // false
*/

// const getLenght = (str, len) => str.length <= len;

// let a = 'проверяемая строка';
// console.log("!!!", a.length);

// console.log(getLenght('проверяемая строка', 20));
// console.log(getLenght('проверяемая строка', 18));
// console.log(getLenght('проверяемая строка', 10));

/*
Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево. Например:

// Строка является палиндромом
имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
// Это не палиндром
имяФункции('Кекс');  // false
Если хотите усложнить задание, предусмотрите случай, когда в строке встречаются пробелы. Они не должны учитываться при проверке!

// Это палиндром
имяФункции('Лёша на полке клопа нашёл '); // true
*/

// const isPalidrom = (str) => {
//   const palArray = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     palArray.push(str[i]);
//   }
//   let palidrom = palArray.join('');
//   return str === palidrom;
// }

// console.log(isPalidrom('топот'));


// function isP(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     // console.log(str.length - i - 1);
//     return str[i] === str[str.length - i - 1]
//   }
// }
// console.log('-------');
// console.log(isP('довод'));
/*
Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN
Если хотите усложнить задание, предусмотрите случай, когда вместо строки приходит число. Обратите внимание, что возвращать функция по-прежнему должна только целые положительные числа:

имяФункции(2023); // 2023
имяФункции(-1);   // 1
имяФункции(1.5);  // 15*/

// function onlyNumbers(str) {
//   let newStr = str.toString();
//   let result = '';

//   for (let i = 0; i < newStr.length; i++) {
//     if (!Number.isNaN(parseInt(newStr[i], 10))) {
//       result += newStr[i];
//     }
//   } return result;
// }

// console.log(onlyNumbers('ECMAScript 2022'));




//--------------Get Sum----------//
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// const getSalarySum = () => {
//   // let names = [];
//   // for (let name in salaries) {
//   //   names.push(salaries[name]);
//   // }
//   // return names;
//   let sum = 0;
//   for (let name in salaries) {
//     sum += salaries[name]
//   }
//   return sum;
// }
// console.log(getSalarySum(salaries));

// const getNamesByMap = (users) => users.map((user) => user.name);

// const getActiveNames = (users) => users
//   .filter((item) => item.isActive)
//   .map((element) => element.name);

// const sortByAge = (users) => users
//   .sort((a, b) => b.age - a.age)
//   .map((el) => el.name);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// Object.keys(menu).map(key => console.log(key, menu[key]));

// let dubleMenu = () => { () => { } }

// for (key in menu) {
//   if (typeof menu[key] === 'number') {
//     menu[key] = menu[key] * 2;
//   }
// }
// console.log(menu);





// let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// // Закодированное сообщение
// let encodedSymbols = [18, 38, 46, 62, 66, 50, 33, 41, 66, 49, 48, 38, 58, 62, 68, 66, 48, 37, 42, 47, 66, 50, 33, 41, 66, 49, 48, 51, 49, 42, 67];

// const codedMessage = (word) => word.split('').map(letter => symbols.findIndex(el => el === letter));
// console.log(codedMessage('Юлия'));

// const iulia = codedMessage('Юлия');

// const decodedMessage = (arr) => {
//   let decodedMessage = '';
//   for (let i = 0; i < arr.length; i++) {

//     decodedMessage += symbols[arr[i]];

//   }
//   return decodedMessage;
// }
// console.log(decodedMessage(codedMessage('Юлия')));

// const codedMessage1 = (word) => {
//   const arrWord = word.split('');
//   let newArr=[];
//   for (let i = 0; i < arrWord.length; i++) {
// newArr.push(symbols.findIndex((el)=>el===arrWord[i]));
//   }
// }

let getStatistics = function (players) {
  let socer = {
    name: '',
    goals: 0,
    passes: 0
  };

  const sum = players.reduce((sum, socer) => {
    return sum + socer.goals;
  }, 0);


  for (let socer of players) {
    socer.coefficient = socer.goals * 2 + socer.passes;
    socer.percent = Math.round(socer.goals / sum * 100);
  }
  return players;
};

const players = [
  {
    "name": "Васька",
    "goals": 5,
    "passes": 5
  },
  {
    "name": "Байт",
    "goals": 12,
    "passes": 2
  },
  {
    "name": "Снежок",
    "goals": 2,
    "passes": 7
  }]

console.log(getStatistics(players));

// var arr = [1, 2, 3, 4, 5]

// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// let result = arr.reduce(function (sum, current) {
//   return sum + current;
// }, 100);

// console.log(result);
