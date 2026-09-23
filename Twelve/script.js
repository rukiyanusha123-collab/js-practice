let students = [
    { name: "Aisha", marks: 75 },
    { name: "Sara", marks: 45 },
    { name: "Maya", marks: 80 }
];

let passedStudents = students.filter(student => student.marks >= 50);

console.log("Passed Students:");

passedStudents.forEach(student => {
    console.log(`${student.name} - ${student.marks}`);
});