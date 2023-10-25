let x = prompt ("Введите значение");
let y = +x;
 
if (Number.isFinite(y) && y % 2 === 0 ) {
    alert ("четное")} 
else if (Number.isFinite(y) && y % 2 != 0 ) {
    alert ("нечетное")}
else {
    alert ("Упс, кажется, вы ошиблись")}