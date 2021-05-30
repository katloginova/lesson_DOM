'use strict';

function getUserName() {
    let answer = '';

    do {
        answer = prompt(`What is your name?`);
    } while (isEmpty(answer));

    return answer;
}

function isEmpty(str) {
    return (str === '' || str === null);
}

const userName = getUserName();
const greeting = document.querySelector('#greeting');

greeting.textContent = `Hello, ${userName}!`;