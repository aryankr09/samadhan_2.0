// Day 3 mini task- simple student marks calculator

const students = [
    {name: "Sukant", marks: 95},
    {name: "Aryan", marks: 92},
    {name: "Bhanu", marks: 90}
    
    ];
const totalmarks = students.reduce((sum, student) => sum + student.marks, 0);
const averagemarks = totalmarks / students.length;

console.log("Total Marks:", totalmarks);
console.log("Average Marks", averagemarks);

students.forEach(student => {
    console.log(student.name + ": " + student.marks);
});
