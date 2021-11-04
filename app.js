'use strict';

//DOM Elements
const studentForm = document.getElementById('studentForm');
const studentsContainer = document.querySelector('.students');
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, roll) => {
    students.push({
        name,
        age,
        roll,
    });
    localStorage.setItem("students", JSON.stringify(students));
    return { name, age, roll }
}

const createStudentElement = ({ name, age, roll }) => {
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');

    studentName.textContent = `Student name: ${name}`;
    studentAge.textContent = `Student age: ${age}`;
    studentRoll.textContent = `Student ID: ${roll}`;

    studentDiv.append(studentName, studentAge, studentRoll);
    studentsContainer.appendChild(studentDiv);
}

students.forEach(createStudentElement);

studentForm.onsubmit = (e) => {
    e.preventDefault();

    const newStudent = addStudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    )

    createStudentElement(newStudent);
    studentForm.reset();
}