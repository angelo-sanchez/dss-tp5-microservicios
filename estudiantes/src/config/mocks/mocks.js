const enrollments = [
  {
    careerId: 3,
    studentId: 1,
    enrollmentYear: 2019,
    graduatedYear: null,
  },
  {
    careerId: 1,
    studentId: 2,
    enrollmentYear: 2019,
    graduatedYear: 2024,
  },
  {
    careerId: 4,
    studentId: 3,
    enrollmentYear: 2018,
    graduatedYear: 2022,
  },
  {
    careerId: 4,
    studentId: 2,
    enrollmentYear: 2018,
    graduatedYear: 2022,
  },,


];

const getAllEnrollmentsByCarreerId = (carreer_id) => Promise.resolve(enrollments.filter(el => el.careerId == carreer_id));

module.exports = {
  getAllEnrollmentsByCarreerId
}