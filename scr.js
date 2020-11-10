// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let arr = new Array(20);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(Math.random() * (i + 1) * 10);
// }
// console.log(arr);
// arr.sort(((a, b) => a - b))
// console.log(arr);
// arr.sort(((a, b) => b - a))
// console.log(arr);

//-- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10

// let filtered1 = arr.filter(value => value % 3 === 0);
// let filtered2 = arr.filter(value => value % 10 === 0);
// console.log(filtered1);
// console.log(filtered2);

//-- перебрать (проитерировать) массив при помощи foreach()
// arr.forEach(console.log);

// /-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let newArr = arr.map(value => value * 3);
// console.log(newArr);
// console.log(arr);

// /- создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.

// let arr = ['pity',
//     'coin',
//     'champion',
//     'root',
//     'harmony',
//     'reflection',
//     'seal',
//     'system',
//     'grudge',
//     'victory',
//     'baby',
//     'modernize',
//     'wake',
//     'devote',
//     'incident',
//     'cathedral',
//     'irony',
//     'fit',
//     'salt',
//     'loss'];

// let sorted1 = arr.sort((a, b) => a.localeCompare(b))
// console.log(sorted1);
// let sorted2 = arr.sort((a, b) => -a.localeCompare(b))
// console.log(sorted2);

// -- отфильтровать слова длиной менее 4х символов
// let shortWords = arr.filter(str => str.length <= 4);
// console.log(shortWords);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let map = arr.map(value => value.concat('!'));
// console.log(map);
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sorted1 = users.sort((a, b) => a.age - b.age);
// console.log(sorted1);
// let sorted2 = users.sort((a, b) => b.age - a.age);
// console.log(sorted2);
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sorted2 = users.sort((a, b) => b.name.length - a.name.length);
// console.log(sorted2);
// let sorted1 = users.sort((a, b) => a.name.length - b.name.length);
// console.log(sorted1);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let newArr = users.reduce((previousValue, currentValue, currentIndex) =>
// {
//     let newObj = Object.assign({}, currentValue);
//     newObj.id = currentIndex;
//     buffer.push(newObj);
//
//     return buffer;
// }, buffer = [])
// console.log(newArr);
// console.log(users);
//-- наисать функцию калькулятора с 3мя числами и колбеком

// function calculate(a, b, c, callBack)
// {
//     return callBack(a, b, c);
// }
//
// let add = (a, b, c) => a + b + c;
// let subtract = (a, b, c) => a - b - c;
// let multiply = (a, b, c) => a * b * c;
// let divide = (a, b, c) => a / b / c;
//
// let a = +prompt('Enter first operand');
// let b = +prompt('Enter second operand');
// let c = +prompt('Enter third operand');
// let operation = prompt("Enter an operation: +, -, *, or /");
// let result;
// switch (operation)
// {
//     case '+':
//         result = calculate(a, b, c, add)
//         break;
//     case '-':
//         result = calculate(a, b, c, subtract)
//         break;
//     case '*':
//         result = calculate(a, b, c, multiply)
//         break;
//     case '/':
//         result = calculate(a, b, c, divide)
//         break;
//     default:
//         console.log('Invalid operation!');
// }
//
// alert(result);

//===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// class Driver {
//     constructor(name, age, experience) {
//         this._name = name;
//         this._age = age;
//         this._experience = experience;
//     }
//
//     boostQualification() {
//         this._experience++;
//     }
// }
//
// class Car {
//     constructor(make, power, owner, price, releaseYear) {
//         this._make = make;
//         this._power = power;
//         this._owner = owner;
//         this._price = price;
//         this._releaseYear = releaseYear;
//     }
//
//     repair(newDriver) {
//         this._power = this._power * 1.1;
//         this._owner = newDriver;
//     }
// }
//
// let cars = new Array(10);
// for (let i = 0; i < cars.length; i++) {
//     cars[i] = new Car(`make${Math.floor(Math.random()*10)}`, Math.floor(Math.random()*10),
//         new Driver (Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)),
//         Math.floor(Math.random()*10), Math.floor(Math.random()*10));
// }
// console.log(cars);

// let repairedCars = [];
// for (let i = 0; i < cars.length/2; i++) {
//    cars[i].repair(new Driver(0, 0, 0));
//    repairedCars.push(Object.assign({}, cars[i]));
// }
// console.log(repairedCars);

// for (let car of cars) {
//     if (car._owner._age > 25 && car._owner._experience < 5) {
//         car._owner.boostQualification();
//     }
// }
// let sum = cars.reduce((previousValue, currentValue) =>
// {
//     return previousValue + currentValue._price;
// }, 0);
// console.log(sum);

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// let key = +prompt('Enter a key');
// let minIndex = arr.indexOf(key);
// let maxIndex = arr.lastIndexOf(key);
// console.log(minIndex, maxIndex);
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.