const { getAllEnrollmentsByCarreerId } = require("../config/mocks/mocks");
const { getStudentsFilteredAndOrderer, persistStudent } = require("../repositories/students")

const getStudentsService = async (basicFilters, carreerId , sort_by, order) => {

    /// Se obtienen los estudiantes ordenados y filtrados por nuestra DB
    let students = await getStudentsFilteredAndOrderer(basicFilters, sort_by, order);

    if(carreerId){
        const enrollments = await getAllEnrollmentsByCarreerId(carreerId);
        console.log(enrollments);
        const enrolledStudents = enrollments.map(el => el.studentId);

        students = students.filter(el => enrolledStudents.includes(el.id))
    }
    
    return students;
}

const createStudentService = async (values) => {
    return persistStudent(values);
}

module.exports = {
    getStudentsService,
    createStudentService
}