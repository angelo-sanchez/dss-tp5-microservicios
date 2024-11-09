const { Router } = require("express");
const { getStudents, createStudent } = require("../controllers/students");

/** Este es el router principal, que empieza en /careers */
const students = Router();

students.get("/", getStudents);

students.post("/", createStudent);

module.exports = students;