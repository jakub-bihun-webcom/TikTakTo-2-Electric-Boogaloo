const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let KEY_LEFT = false;
let KEY_RIGHT = false;
let KEY_DOWN = false;
let KEY_UP = false;

document.onkeydown = function (e) {
    if (e.key == 'ArrowRight') {
        KEY_RIGHT = true;
    }
};
document.onkeydown = function (e) {
    if (e.key == 'ArrowUp') {
        KEY_UP = true;
    }
};
document.onkeydown = function (e) {
    if (e.key == 'ArrowLeft') {
        KEY_LEFT = true;
    }
};
document.onkeydown = function (e) {
    if (e.key == 'ArrowDown') {
        KEY_DOWN = true;
    }
};

document.onkeyup = function (e) {
    if (e.key == 'ArrowLeft') {
        KEY_LEFT = false;
    }
};
document.onkeyup = function (e) {
    if (e.key == 'ArrowRight') {
        KEY_RIGHT = false;
    }
};
document.onkeyup = function (e) {
    if (e.key == 'ArrowUp') {
        KEY_UP = false;
    }
};
document.onkeyup = function (e) {
    if (e.key == 'ArrowDown') {
        KEY_DOWN = false;
    }
};
