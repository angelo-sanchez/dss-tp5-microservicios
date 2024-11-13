const { getStudentsService, createStudentService } = require("../services/student");

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
            order = "ASC",
            carreer_id 
          } = req.query;
    
    
          const students = await getStudentsService({
            id,
            first_name,
            last_name,
            age,
            gender,
            document_number,
            city_of_residence,
            university_book_number,
            
          },
          carreer_id,
          sort_by,
          order
        );
    
        res.status(200).json(students)
    } catch (error) {
        res.status(500).json({"error":error})
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
          

        const student = await createStudentService([
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
        console.log(error);
        res.status(500).json({"error":error})
    }

}

module.exports = {
    getStudents,
    createStudent
}