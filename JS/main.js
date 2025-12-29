/*
// String, Number, Boolean, Object, Array

//1. String
let name = "John Doe";
const idcard ='123';

//2. Number
let age = 30;
let height = 5.9;

//3. Boolean
let isStudent = false;
firstName = 'test';
console.log('My name is', firstName, 'and I am', age, 'years old.');

/*
+ บวก 
- ลบ
* คูณ
/ หาร
% หารเอาเศษ mod
*/

/*let number1 = 10;
let number2 = 5;

let result = number1 + number2;
console.log("ผลลบ =", result);*/

/*
== เท่ากับ
!= ไม่เท่ากับ
> น้อยกว่า
< มากกว่า
>= น้อยกว่าหรือเท่ากับ
<= มากกว่าหรือเท่ากับ
*/

/*let number1 = 25;
let number2 = 25;

/*let condition1 = number == number2; //Boolean ค่า true หรือ false
console.log("Result of condition is :", condition1);*/

//if-else condition
/*if (number1 != number2) {
    console.log('this if')
} else if (number1 == number2) {
    console.log('this else if')
} else {
    console.log('this else')
}*/

/*
Grade
>= 80 เป็นเกรด A
>= 70 เป็นเกรด B
>= 60 เป็นเกรด C
>= 50 เป็นเกรด D
< 50 เป็นเกรด F
*/
/*let score = prompt("ป้อนคะแนนของคุณ")
console.log("คะแนนของคุณ "+ score)

if (score >= 80) {
    console.log('A')
} else if (score >= 70) {
    console.log('B')
} else if (score >= 60) {
    console.log('C')
} else if (score >= 50) {
    console.log('D')
} else {
    console.log('F')
}*/

/*let number1 = 5
let number2 = 8
// true && false
let condition = !(number1 >= 3 || number2 >= 10);
console.log("condition:", condition);

let age = 30;
let gender = "ชาย";

if (age >= 20 && gender == "ชาย") {
    console.log("ผู้ชายที่มีอายุ 20 ปีขึ้นไป");
}*/

/*
loop statements:
while
for
*/
let counter = 0;
while(counter < 10) {
    console.log('Hello World');
    //counter = counter + 1;
    counter += 1;
}

for(let i=0; i<10; i++) {
    console.log('Hello World from for loop');
}