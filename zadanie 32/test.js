1
//обьясни своими словами, что значит callback функция
//это функция, переданная в другую функцию в качестве аргумента, которая затем вызывается по завершению какого-либо действия
2
//выведи в консоли 'Привет я Alex и мне 19 лет' с помощью функций ниже и callback
function alertInfo(name, age) {
    console.log(userInfo())
}

function userInfo() {
    let name = 'Alex';
    let age = 19;
    console.log('privet ya' + name + 'i mnye' + age + 'lyet')
}

userInfo()

3
//какая из функций является функцией обратного вызова?
setTimeout(showMessage, timeout);

function showMessage() {
    console.log('Сообшение');
    startProgram();
}

function startProgram() {
    console.log('Запуск');
}

//showMessage

4
//передайте функции ниже функцию showMessage  в качестве параметра и вызовите ее
function startProgram() {
    console.log('Запуск');
}

5
//что такое Promise?
//Promise – это специальный объект, который содержит своё состояние.
6
//создайте Promise функцию
let promise = new Promise(function(res, rej) {});
7
//обьясни своими словами, что такое res и rej?
let count1 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});
//res = reset
//rej = reject
//resolve вызывает успешное исполнение промиса, a reject отклоняет его
8
//обьясни своими словами, что такое .then?
let count2 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});

//Метод then() возвращает Promise.Метод может принимать два аргумента: колбэк-функции и отклонения промиса

9
//обьясни своими словами, что такое .then?
let count3 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});

10
//что значит асинхронный?
//это функции, которые определяются как аргументы при вызове функции, которая начнёт выполнение кода на заднем фоне
11
//что делает async?
//эта функция всегда возвращает промис
12
//что делает await?
//await заставляет функцию, объявленную с использованием оператора async , ждать выполнения Promise и продолжать выполнение после возвращения Promise значения