/*Дз_2_JavaScript*/

function test1() {
    let text = prompt('Каково \"официальное\" название JavaScript?');
    if (text == 'ECMAScript') alert('Верно!')
    else alert('Не знаете? \"ECMAScript\"!')
}

function test2() {
    let i = + prompt("Введите число");
    console.log(typeof i)
    if ( i > 0) {
        alert('1');
    }
    else if (i < 0) {
        alert('-1');
    }
    else
    {
        alert('0');
    }
}

function test3() {
    let text = prompt('Кто пришел?');
    console.log(text);
    if (text === 'Admin'){
    let pass = prompt('Введите пароль:');
    if (pass==='Чёрный Властелин') {
        alert('Добро пожаловать!')}
    else if (pass == null) {
        alert('Вход отменен')}
    else {
        alert('Пароль неверен')}
    }
    else if (text == null) {
        alert('Вход отменен')}
    else {
        alert('Я Вас не знаю!')}
}

function test4() {
    let i = 0
    while(i < 3){
        console.log(i);
        alert('номер ' + i + ' !');
        i++;
    }
}

function test5() {
    do {
        let text = prompt('Введите число больше 100: ');
        if (text == null) {
            alert('Вход отменен');
            break;
        }
    }
    while (text < 100);
}