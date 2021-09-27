let a = 15.678;
let b = 123.965;
let c = 90.2345;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
document.write(Math.max(a,b,c));

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
document.write('<br>' + Math.min(a,b,c));

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let sum = a+b+c;
document.write('<br>' + sum);

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. 
//Округлення використовувати в МЕНШУ сторону.
document.write('<br>' + Math.floor(sum));

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
document.write('<br>' + Math.ceil(sum/100)*100);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let result = Math.floor(sum) % 2;
if (result = 0) {
    document.write('<br>парне число');
} 
else {
    document.write('<br>не парне число');
}

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let payment = 500;
let surrender = payment - sum;
document.write('<br>' + surrender);

//Виведіть середнє значення цін, округлене до другого знаку після коми
let value = (a + b + c) / 3;
document.write('<br>' + value.toFixed(2));

//Створіть змінну, в якій збережіть випадкову знижку (використовуйте функцію Math.random).
function random(min, max) {
    return min + Math.random() * (max - min);
  } 
let discount = random(2, 30);
document.write('<br>' + discount + ' ' + 'знижка');

//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
function random(min, max) {
    return min + Math.random() * (max - min);
  } 
let rebate = random(2, 30);
let pay = b - rebate;
document.write('<br>' + pay.toFixed(2) + ' ' + 'до оплати');

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два 
//рази нижче їх ціни?
let t = 10;