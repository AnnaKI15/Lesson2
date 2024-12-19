// Якщо змінна більше нуля - виведіть true, менше - false
// let value = prompt("Веддіть число");
// if (value >=0){
//     console.log(true);
// }else if(value < 0){
//     console.log(false);
// }else if(value = String(value)){
//     console.log("No number");
// }
// value >= 0 ? console.log(true) : console.log(false);
//Перевірте це на варіантах  1, 0, -3.

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
// let value = String(prompt("Enter word"));
// value === "test" ? console.log(true) : console.log(false);

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
// let value = Number( prompt("Enter number"));
// value > 10 ? console.log(value - 5): console.log(value + 5);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// let num = Number(prompt('ведіть число від 1-12'));
// let mouth;
// switch(num){
//     case 1:
//         mouth = "Cічень";
//         alert(`${mouth}`);
//         break;
//      case 2:
//         mouth = "Лютий";
//         alert(`${mouth}`);
//         break;
//      case 3:
//         mouth = "Березень";
//         alert(`${mouth}`);
//         break;
//      case 4:
//         mouth = "Квітень";
//         alert(`${mouth}`);
//         break;
//      case 5:
//         mouth = "Травень";
//         alert(`${mouth}`);
//         break;
//      case 6:
//         mouth = "Червень";
//         alert(`${mouth}`);
//         break;
//      case 7:
//         mouth = "Липень";
//         alert(`${mouth}`);
//         break;
//      case 8:
//         mouth = "Серпень";
//         alert(`${mouth}`);
//         break; 
//      case 9:
//         mouth = "Вересень";
//         alert(`${mouth}`);
//         break;  
//      case 10:
//         mouth = "Жовтень";
//         alert(`${mouth}`);
//         break;
//      case 11:
//         mouth = "Листопад";
//         alert(`${mouth}`);
//         break;
//      case 12:
//         mouth = "Грудень";
//         alert(`${mouth}`);
//         break;
//     default:
//         alert("Немає такого місяця");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
// let num = Number(prompt("Ведіть тризначне число"));
// if(num >= 100 && num <= 999){
//     const hundreds = Math.floor(num / 100); // Сотні
//     const tens = Math.floor((num % 100) / 10); // Десятки
//     const ones = num % 10; // 
//     console.log(hundreds + tens + ones)
// }else{
//     prompt("Ведіть тризначне число");
// }