//Q.20

const results = [
    { name: "Ram ", marks: 80 }, 
    { name: "Rohit", marks: 40 }, 
    { name: "Andy", marks: 70 } 
]

const passStudents = results
.filter(num =>num.marks >= 50)
.map(num => num.name);

console.log("Students who passed:", passStudents);