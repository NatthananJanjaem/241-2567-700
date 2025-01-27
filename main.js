/*
&& และ
|| หรือ
! not หรือ ไม่
*/
/*
let number = 5;
let number2 = 8;
// true && true
let condition = number >= 3 || number2 >= 10;
console.log('result of condition', condition);

let age = 30;
let gender = 'male'

// true && true = true
if (age >= 20 && gender == 'male') {
    console.log('You are male adult');
}
*/
/*
let number = 20;

if (!(number % 2 == 0)) {
    console.log('you are even number');
}
*/
/*
while loop
for
*/
/*
let count = 0;

while (count <= 10) { //true
    console.log('while loop');
    counter = counter + 1;
    counter += 1;
    counter++;
}

for (let counter = 0; counter <= 10; counter = counter + 1) {
    console.log('for loop');
}
*/
/*
let age1 = 20;
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log(age1, age2, age3, age4);

let ages = [ 90, 60, 40 , 45, 50];
console.log(ages);
ages.sort();
console.log(ages);

let names_list = ['John', 'Bob', 'Alice', 'Mary'];
names_list.push('Mike');
console.log(names_list.length);
console.log(names_list[0]);

for (let index = 0; index <= names_list.length; index++) {
    console.log('name list',names_list[index]);
}
*/
/*
object
*/
/*
let student = [{
    name: 'John',
    age: 90,
    grade: 'A'
},{
    name: 'aa',
    age: 66,
    grade: 'B'
}];

student.pop()

for (let index = 0; index < student.length; index++) {
    console.log('Student number', (index + 1));
    console.log('name', student[index].name);
    console.log('age', student[index].age);
    console.log('grade', student[index].grade);
}
*/
/*
object + array
*/
/*
let scores = 50
let grade = ''

//ประกาศ function ชื่อ calculateGrade ที่มี parameter เป็น scores
function calculateGrade(scores) {
    if (scores >= 80) {
        grade = 'A';
    } else if (scores >= 70) {
        grade = 'B';
    } else if (scores >= 60) {
        grade = 'C';
    } else if (scores >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return grades;
}

//arrow function
function calculateGrade = (scores) =>0 {
    if (scores >= 80) {
        grade = 'A';
    } else if (scores >= 70) {
        grade = 'B';
    } else if (scores >= 60) {
        grade = 'C';
    } else if (scores >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return grades;
}

let student1 = calculateGrade(scores1)
let student2 = calculateGrade(scores2)
console.log('grad:', student1, student2)
*/
/*
array
*/
/*
let scores = [10, 20, 30, 40];
let newScortes = []

for (let index = 0; index < scores.length; index++) {
    console.log(scores[index]);
   
}

let newScores = scores.filter((s) => {
 return s >= 20;
})

newScortes.forEach((ns) => {
    console.log('new scores', ns);
})
*/
/*
Object
*/
let students = [
    {
        name: 'John',
        age: 90,
        grade: 'A'
    },
    {
        name: 'Jane',
        age: 75,
        grade: 'B'
    },
    {
        name: 'Jim',
        age: 60,
        grade: 'C'
    }
]
let student = student.find((s) => {
    if (s.name === 'John') {
        return s;
    }
})

let doublescores = students.map((s) => {
    s.score = s.score * 2
})

let hightScore = students.filter((s) => {
    if (s.score >= 80) {
        return true
    }
})
console.log('student:', student)
console.log('hightscore_student:', hightscore_student)
