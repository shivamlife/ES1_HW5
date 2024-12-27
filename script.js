console.log('Hello!');
const studentData = [
  {
    name: 'Rahul',
    rollNo: '101',
    hindi: 80,
    english: 75,
    maths: 90,
  },
  {
    name: 'Amit',
    rollNo: '102',
    hindi: 85,
    english: 70,
    maths: 95,
  },
  {
    name: 'Priya	',
    rollNo: '103',
    hindi: 78,
    english: 92,
    maths: 87,
  },
];
const marksForComputer = [88, 92, 95];
// studentData[0].computer = 88;
// studentData[1].computer = 92;
// studentData[2].computer = 95;
for (let i = 0; i < studentData.length; i++) {
  studentData[i].computer = marksForComputer[i];
}

// 1.1 Print the studentsData using for loops.
console.log('1.1 Students data with computer marks');
for (let i = 0; i < studentData.length; i++) {
  console.log(
    `Name:${studentData[i].name},Roll No:${studentData[i].rollNo},Hindi:${studentData[i].hindi},Maths:${studentData[i].maths},Computer:${studentData[i].computer}`
  );
}

// 1.2 Add marks for one more subject, science. Then print the updated studentsData with Science marks.

const marksForScience = [82, 90, 88];
for (let i = 0; i < studentData.length; i++) {
  studentData[i].science = marksForScience[i];
}
console.log('1.2 Students data with Science marks');
for (let i = 0; i < studentData.length; i++) {
  console.log(
    `Name:${studentData[i].name},Roll No:${studentData[i].rollNo},Hindi:${studentData[i].hindi},Maths:${studentData[i].maths},Computer:${studentData[i].computer},Science:${studentData[i].science}`
  );
}

// Question 2: Another student Kaveri joins the class. Add Kaveri's data to studentsData.
const kaveriData = {
  name: 'Kaveri',
  rollNo: 104,
  hindi: 84,
  english: 88,
  maths: 78,
  computer: 90,
  science: 96,
};
console.log('Kaveri s Data:', kaveriData);

studentData.push(kaveriData);
console.log(`2.2 Updated data with kaveri`);
for (let i = 0; i < studentData.length; i++) {
  console.log(
    `Name:${studentData[i].name},Roll No:${studentData[i].rollNo},Hindi:${studentData[i].hindi},Maths:${studentData[i].maths},Computer:${studentData[i].computer},Science:${studentData[i].science}`
  );
}

// 2.3 Add a field totalMarks to every object in the array.
// Then print the updated studentsData with totalMarks.
console.log(`2.3 Updated students data with total marks`);
for (let i = 0; i < studentData.length; i++) {
  let totalMarks =
    studentData[i].english +
    studentData[i].hindi +
    studentData[i].maths +
    studentData[i].science +
    studentData[i].computer;

  console.log(
    `Name:${studentData[i].name},Roll No:${studentData[i].rollNo},Total marks:${totalMarks}`
  );
}
// 2.4 Calculate the average marks and add avgMarks to each object. Then print the updated studentsData with avgMarks.
console.log(`2.3 Updated students data with total marks`);
for (let i = 0; i < studentData.length; i++) {
  let totalMarks =
    studentData[i].english +
    studentData[i].hindi +
    studentData[i].maths +
    studentData[i].science +
    studentData[i].computer;

  console.log(
    `Name:${studentData[i].name},Roll No:${
      studentData[i].rollNo
    },Average marks:${totalMarks / 5}`
  );
}

// Question 3: Write a function to calculate the grade for each student. Grade conditions have been provided below.

// Condtion	Grade
// If avgMarks is from 90 to 100
// A
// If avgMarks is from 80 to 89
// B
// If avgMarks is from 70 to79
// C
// If avgMarks is from 60 to 69
// D
// If avgMarks is from 50 to 59
// E
// If avgMarks is below 50
// F
// Print report cards for each student.

// Sample report card for Rahul. Similarly print the report card for all other students:
function calculateGrade(studentData) {
  for (let i = 0; i < studentData.length; i++) {
    console.log(`==== Report card for ${studentData[i].name}=====`);
    console.log(`Roll No. ${studentData[i].rollNo}`);
    console.log(`-------`);
    console.log(`Marks`);
    console.log(`-------`);
    console.log(`Hindi:${studentData[i].hindi}`);
    console.log(`English:${studentData[i].english}`);
    console.log(`Maths:${studentData[i].maths}`);
    console.log(`Computer:${studentData[i].computer}`);
    console.log(`Science:${studentData[i].science}`);
    console.log(`-------`);
    let totalMarks =
      studentData[i].hindi +
      studentData[i].english +
      studentData[i].maths +
      studentData[i].computer +
      studentData[i].science;
    console.log(`Total Marks:${totalMarks}`);
    let averageMarks = totalMarks / 5;
    console.log(`Average Marks:${averageMarks}`);
    if (averageMarks >= 90 && averageMarks < 100) {
      console.log(`Grade A`);
    }
    if (averageMarks > 80 && averageMarks <= 89) {
      console.log(`Grade B`);
    }
  }
}
calculateGrade(studentData);
