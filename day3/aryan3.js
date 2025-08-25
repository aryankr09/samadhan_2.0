console.log("Simple Students Marks Calculator");
const students = [
    {name: "Ram", marks: 78},
    {name: "Shyam", marks: 66},
    {name: "Mohan", marks: 79}
];

let totalmarks = 0;

for (let i = 0; i < students.length; i++) {
    totalmarks += students[i].marks;
}

const averagemarks = totalmarks / students.length;

console.log("Total Marks:", totalmarks);
console.log("Average Marks", averagemarks);

// Printing each student
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + ": " + students[i].marks);
}
