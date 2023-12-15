/*--------------Задание 1--------------*/
/*  Постройте регулярное выражение,
которое проверяет, является ли строка URLадресом.*/
console.log("Задание 1");

function isUrl(inputString)
{
  let pattern = new RegExp(/^(?:https?):\/\/(?:[\w-]+\.)+[a-zа-я]{2,7}(?:\/\S*)?$/);                         
  return pattern.test(inputString);
}

let userInput = prompt("Введите url: ");
if (isUrl(userInput))
  alert("Строка является URL адресом");
else
  alert("Строка не является URL адресом");


/*--------------Задание 2--------------*/
/*  Постройте регулярное выражение,
проверяющее корректность названия переменной JS, которое ввел пользователь.
Проверку ключевых слов не учитывать.*/
console.log("Задание 2");

function isVariable(str2)
{
  let pattern = new RegExp(/^[a-zA-Z_$][0-9a-zA-Z_$]*$/);                            
  return pattern.test(str2);
}

let userInput2 = prompt("Введите название переменной: ");
if (isVariable(userInput2))
  alert("Переменная введена корректно");
else
  alert("Переменная введена не корректно");


/*--------------Задание 3--------------*/
/*  Постройте регулярное выражение, проверяющее,
что строка состоит только из букв и цифр.*/
console.log("Задание 3");

function stringCheck3(str3){
	let pattern = new RegExp(/^[a-zA-Zа-яА-Я0-9\s]+$/);
	return pattern.test(str3);
}

let userInput3 = prompt("Введите предложение: ");
if(stringCheck3(userInput3))
	alert("Строка состоит только из букв и цифр");
else
	alert("Строка состоит не только из букв и цифр");

/*--------------Задание 4--------------*/
/*  Постройте регулярное выражение, проверяющее, что строка не содержит спецсимволов
и цифр и ее длина не менее 10 символов.*/
console.log("Задание 4");

function stringCheck4(str4){
	let pattern = new RegExp(/^[a-zA-Zа-яА-Я]{10,}$/g);
	return pattern.test(str4);
}

let userInput4 = prompt("Введите предложение: ");
if(stringCheck4(userInput4))
	alert("Строка не содержит спецсимволов и цифр и ее длина не менее 10 символов");
else
	alert("Строка содержит спецсимволы и/или цифры и/или ее длина менее 10 символов");


/*--------------Задание 5--------------*/
//  Посчитайте количество букв и количество цифр в строке.
console.log("Задание 5");

let userInput5 = prompt("Введите предложение: ");

let wordCounter = userInput5.replace(/[^a-zA-Zа-яА-Я]/g, "").length;
let numberCounter = userInput5.replace(/[^0-9]/g, "").length;

alert("Количество букв: " + wordCounter);
alert("Количество цифр: " + numberCounter);

