console.log("To find Highest marks from the Array");
const marks = [12,3,43,0,74,91,73,4,9,38,19];

let highest = marks[0];  
for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }
}

console.log("Highest marks:", highest);
