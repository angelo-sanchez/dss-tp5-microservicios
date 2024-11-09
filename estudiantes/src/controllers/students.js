const {getStudentsFilteredAndOrderer, persistStudent} = require("../repositories/students");

const getStudents = async (req, res) => {

    try {
        const {
            id,
            first_name,
            last_name,
            age,
            gender,
            document_number,
            city_of_residence,
            university_book_number,
            sort_by = "id", 
            order = "ASC" 
          } = req.query;
    
    
          const students = await getStudentsFilteredAndOrderer({
            id,
            first_name,
            last_name,
            age,
            gender,
            document_number,
            city_of_residence,
            university_book_number,
          },
          sort_by,
          order
        );
    
        res.status(200).json(students)
    } catch (error) {
        res.status(500)
    }
    

}

const createStudent = async (req, res) => {

    try {
        const {
            first_name,
            last_name,
            age,
            gender,
            document_number,
            city_of_residence,
            university_book_number
          } = req.body;
    
        const student = await persistStudent([
            first_name,
            last_name,
            age,
            gender,
            document_number,
            city_of_residence,
            university_book_number
        ])
    
        res.status(201).json(student); 
    } catch (error) {
        res.status(500);
    }

}

module.exports = {
    getStudents,
    createStudent
}