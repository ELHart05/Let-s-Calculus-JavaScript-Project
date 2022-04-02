const dark = document.querySelector(".Dark_Mode");
const light = document.querySelector(".Light_Mode");
const ce = document.querySelector(".ce");
const del = document.querySelector(".del");
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eigth = document.querySelector(".eigth");
const nine = document.querySelector(".nine");
const point = document.querySelector(".point");
const mul = document.querySelector(".mul");
const div = document.querySelector(".div");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const equ = document.querySelector(".equ");
const input = document.querySelector(".input");

const body = document.querySelector("body");
const main = document.querySelector(".main");

let HiderValue = '';

input.textContent = '0';

let PointCpt = 0;
AddCpt = 0;
SubCpt = 0;
MulCpt = 0;
DivCpt = 0;
ZeroCpt = 0;


function NoResponse() {
    HiderValue += '';
    input.textContent += '';
}

del.onclick = function () {
    HiderValue = HiderValue.slice(0, -1);
    input.textContent = HiderValue.replace('*', '×').replace('/', '÷');
    if (HiderValue.length == 0) {
        input.textContent = 0;
    }
    AddCpt = 0;
    SubCpt = 0;
    MulCpt = 0;
    DivCpt = 0;
}

ce.onclick = function () {
    HiderValue = '';
    input.textContent = '0';
    PointCpt = 0;
    AddCpt = 0;
    SubCpt = 0;
    MulCpt = 0;
    DivCpt = 0;
    ZeroCpt = 0;
}

zero.onclick = function () {
    AddCpt = 0;
    SubCpt = 0;
    MulCpt = 0;
    DivCpt = 0;
    HiderValue += 0;
    if (input.textContent == 0 && ZeroCpt == 0 && PointCpt == 0) {
        input.textContent = 0
    } else {
        input.textContent += 0;
    }
}

one.onclick = function () {
    AddCpt = 0;
    SubCpt = 0;
    MulCpt = 0;
    DivCpt = 0;
    HiderValue += 1;
    if (input.textContent == 0 && ZeroCpt == 0 && PointCpt == 0) {
        input.textContent = 1;
    } else {
        input.textContent += 1;
    }
}
two.onclick = function () {
    AddCpt = 0;
    SubCpt = 0;
    MulCpt = 0;
    DivCpt = 0;
    HiderValue += 2;
    if (input.textContent == 0 && ZeroCpt == 0 && PointCpt == 0) {
        input.textContent = 2
    } else {
        input.textContent += 2;
    }
}
three.onclick = function () {
    AddCpt = 0;
    SubCpt = 0;
    MulCpt = 0;
    DivCpt = 0;
    HiderValue += 3;
    if (input.textContent == 0 && ZeroCpt == 0 && PointCpt == 0) {
        input.textContent = 3
    } else {
        input.textContent += 3;
    }
}
four.onclick = function () {
    AddCpt = 0;
    SubCpt = 0;
    MulCpt = 0;
    DivCpt = 0;
    HiderValue += 4;
    if (input.textContent == 0 && ZeroCpt == 0 && PointCpt == 0) {
        input.textContent = 4
    } else {
        input.textContent += 4;
    }
}
five.onclick = function () {
    AddCpt = 0;
    SubCpt = 0;
    MulCpt = 0;
    DivCpt = 0;
    HiderValue += 5;
    if (input.textContent == 0 && ZeroCpt == 0 && PointCpt == 0) {
        input.textContent = 5
    } else {
        input.textContent += 5;
    }
}
six.onclick = function () {
    AddCpt = 0;
    SubCpt = 0;
    MulCpt = 0;
    DivCpt = 0;
    HiderValue += 6;
    if (input.textContent == 0 && ZeroCpt == 0 && PointCpt == 0) {
        input.textContent = 6
    } else {
        input.textContent += 6;
    }
}
seven.onclick = function () {
    AddCpt = 0;
    SubCpt = 0;
    MulCpt = 0;
    DivCpt = 0;
    HiderValue += 7;
    if (input.textContent == 0 && ZeroCpt == 0 && PointCpt == 0) {
        input.textContent = 7
    } else {
        input.textContent += 7;
    }
}
eigth.onclick = function () {
    AddCpt = 0;
    SubCpt = 0;
    MulCpt = 0;
    DivCpt = 0;
    HiderValue += 8;
    if (input.textContent == 0 && ZeroCpt == 0 && PointCpt == 0) {
        input.textContent = 8
    } else {
        input.textContent += 8;
    }
}
nine.onclick = function () {
    AddCpt = 0;
    SubCpt = 0;
    MulCpt = 0;
    DivCpt = 0;
    HiderValue += 9;
    if (input.textContent == 0 && ZeroCpt == 0 && PointCpt == 0) {
        input.textContent = 9
    } else {
        input.textContent += 9;
    }
}
add.onclick = function AddZeroAfterPoint() {
    PointCpt = 0;
    AddCpt += 1;
    if (input.textContent == 0) {
        HiderValue += '';
        input.textContent += '';
    }
    if (AddCpt == 1 && input.textContent != 0) {
        HiderValue += '+';
        input.textContent += '+';
    } else {
        HiderValue += '';
        input.textContent += '';
    }
}
sub.onclick = function () {
    PointCpt = 0;
    SubCpt += 1;
    if (input.textContent == 0) {
        HiderValue += '';
        input.textContent += '';
    }
    if (SubCpt == 1 && input.textContent != 0) {
        HiderValue += '-';
        input.textContent += '-';
    } else {
        HiderValue += '';
        input.textContent += '';
    }
}
div.onclick = function () {
    PointCpt = 0;
    DivCpt += 1;
    if ((input.textContent == 0) || (HiderValue.slice(-1) == '*') || (HiderValue.slice(-1) == '+') || (HiderValue.slice(-1) == '-')) {
        HiderValue += '';
        input.textContent += '';
    } else if (DivCpt == 1 && input.textContent != 0) {
        HiderValue += '/';
        input.textContent += '÷';
    } else {
        HiderValue += '';
        input.textContent += '';
    }
}
mul.onclick = function () {
    PointCpt = 0;
    MulCpt += 1;
    if ((input.textContent == 0) || (HiderValue.slice(-1) == '/') || (HiderValue.slice(-1) == '+') || (HiderValue.slice(-1) == '-')) {
        HiderValue += '';
        input.textContent += '';
    } else if (MulCpt == 1 && input.textContent != 0) {
        HiderValue += '*';
        input.textContent += '×';
    } else {
        HiderValue += '';
        input.textContent += '';
    }
}
point.onclick = function PointAdder() {
    PointCpt += 1;
    if (PointCpt == 1 && ((input.textContent != 0) || (input.textContent != '.'))) {
        HiderValue += '.';
        input.textContent += '.';
    } else {
        HiderValue += '';
        input.textContent += '';
    }
}
equ.onclick = function () {
    if (input.textContent == 0 && ZeroCpt == 0) {
        input.textContent = 0;
    } else {
        input.textContent = eval(HiderValue);
        HiderValue = input.textContent;
    }
}

dark.classList.add('hiding');

dark.onclick = function LightMode() { //into light mode
    light.classList.remove("hiding");
    dark.classList.add("hiding");
    body.classList.remove("bodycolorchange");
    main.classList.remove("maincolorchange");
    zero.classList.remove("buttoncolorchange");
    one.classList.remove("buttoncolorchange");
    two.classList.remove("buttoncolorchange");
    three.classList.remove("buttoncolorchange");
    four.classList.remove("buttoncolorchange");
    five.classList.remove("buttoncolorchange");
    six.classList.remove("buttoncolorchange");
    seven.classList.remove("buttoncolorchange");
    eigth.classList.remove("buttoncolorchange");
    nine.classList.remove("buttoncolorchange");
    add.classList.remove("buttoncolorchange");
    sub.classList.remove("buttoncolorchange");
    div.classList.remove("buttoncolorchange");
    mul.classList.remove("buttoncolorchange");
    point.classList.remove("buttoncolorchange");
    equ.classList.remove("buttoncolorchange");
    ce.classList.remove("buttoncolorchange");
    del.classList.remove("buttoncolorchange");
}
light.onclick = function DarkMode() { //into dark mode
    dark.classList.remove("hiding");
    dark.classList.add("buttoncolorchange");
    light.classList.add("hiding");
    body.classList.add("bodycolorchange");
    main.classList.add("maincolorchange");
    zero.classList.add("buttoncolorchange");
    one.classList.add("buttoncolorchange");
    two.classList.add("buttoncolorchange");
    three.classList.add("buttoncolorchange");
    four.classList.add("buttoncolorchange");
    five.classList.add("buttoncolorchange");
    six.classList.add("buttoncolorchange");
    seven.classList.add("buttoncolorchange");
    eigth.classList.add("buttoncolorchange");
    nine.classList.add("buttoncolorchange");
    add.classList.add("buttoncolorchange");
    sub.classList.add("buttoncolorchange");
    div.classList.add("buttoncolorchange");
    mul.classList.add("buttoncolorchange");
    point.classList.add("buttoncolorchange");
    equ.classList.add("buttoncolorchange");
    ce.classList.add("buttoncolorchange");
    del.classList.add("buttoncolorchange");
}