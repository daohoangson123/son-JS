function bai01(a) {
    console.log(a + " - \"I love you\"");
}

bai01("Jesus");

//

function bai02(a, b) {
    const kqb02 = a / b;
    console.log("ket qua bai 02: " + kqb02);
}

bai02(3, 2);

//

function bai03(a, b) {
    const kqb03 = a + b;
    console.log("ket qua bai 03: " + kqb03);
}

bai03(3, 2);

//

function bai04(F) {
    const kqb04 = (5 / 9)*(F - 32);
    console.log("ket qua bai 04: " + kqb04);
}

bai04(32);

//

function bai05(x, y) {
    const kqb05 = x ** 2 + y ** 2;
    console.log("ket qua bai 05: " + kqb05);
}

bai05(2, 4);

//

function bai06(x, y) {
    const kqb06 = (x + y) ** 2;
    console.log("ket qua bai 06: " + kqb06);
}

bai06(2, 4);

//

function bai07(a, b, c) {
    const kqb07 = ( (a ** 2) * (b ** 2) ) / c;
    console.log("ket qua bai 07: " + kqb07)
}

bai07(2, 4, 16);

//

function bai08(T, L, S, A) {
    const kqb08 = (T + L + S + A) / 4;
    console.log("ket qua bai 08: " + kqb08);
}

bai08(1, 2, 3, 4);

//

function bai09(a, b) {
    const kqb09 = a / b;
    console.log("ket qua bai 09: " + kqb09);
}

bai09(3, 0);

//

function bai10(a, b, c) {
    const kqb10 = ( (-b + (Math.sqrt (b ** 2 - (4 * a * c) ) ) ) / (2 * a) );
    console.log("ket qua bai 10: " + kqb10);
}

bai10(3, -1, -2);

//

function bai11(x, y) {
    const kqb11 = ( ( (Math.sqrt(x) ) + (Math.abs(x) ) ) / (Math.sqrt(x ** y) ) );
    console.log("ket qua bai 11: " + kqb11);
}

bai11(4, 2);

//

function bai12(a, b, c, d, e) {
    const mang = [a, b, c, d, e];
    const kqb12 = (mang[mang.length-1]);
    console.log("ket qua bai 12: " + kqb12);
}

bai12(1, 3, 7, 2, 5);