const careers = [
  { careerId: 1, name: "Ingeniería en Sistemas" },
  { careerId: 2, name: "Tecnicatura en Desarrollo de Aplicaciones" },
  { careerId: 3, name: "Licenciatura en Derecho" },
  { careerId: 4, name: "Medicina Veterinaria" },
  { careerId: 5, name: "Ciencias de la Educación" },
  { careerId: 6, name: "Licenciatura en Tecnología de los Alimentos" },
];

const enrollments = [
  {
    careerId: 3,
    studentId: 13,
    enrollmentYear: 2019,
    graduatedYear: null,
  },
  {
    careerId: 1,
    studentId: 10,
    enrollmentYear: 2019,
    graduatedYear: 2024,
  },
  {
    careerId: 4,
    studentId: 8,
    enrollmentYear: 2018,
    graduatedYear: 2022,
  },
  {
    careerId: 2,
    studentId: 27,
    enrollmentYear: 2019,
    graduatedYear: null,
  },
  {
    careerId: 3,
    studentId: 29,
    enrollmentYear: 2018,
    graduatedYear: 2022,
  },
  {
    careerId: 1,
    studentId: 29,
    enrollmentYear: 2016,
    graduatedYear: 2018,
  },
  {
    careerId: 5,
    studentId: 13,
    enrollmentYear: 2019,
    graduatedYear: null,
  },
  {
    careerId: 3,
    studentId: 10,
    enrollmentYear: 2018,
    graduatedYear: null,
  },
  {
    careerId: 2,
    studentId: 24,
    enrollmentYear: 2015,
    graduatedYear: 2018,
  },
  {
    careerId: 1,
    studentId: 18,
    enrollmentYear: 2015,
    graduatedYear: 2021,
  },
  {
    careerId: 3,
    studentId: 11,
    enrollmentYear: 2017,
    graduatedYear: 2019,
  },
  {
    careerId: 5,
    studentId: 5,
    enrollmentYear: 2015,
    graduatedYear: 2017,
  },
  {
    careerId: 1,
    studentId: 23,
    enrollmentYear: 2017,
    graduatedYear: 2022,
  },
  {
    careerId: 3,
    studentId: 9,
    enrollmentYear: 2015,
    graduatedYear: 2021,
  },
  {
    careerId: 5,
    studentId: 29,
    enrollmentYear: 2018,
    graduatedYear: null,
  },
  {
    careerId: 3,
    studentId: 5,
    enrollmentYear: 2018,
    graduatedYear: null,
  },
  {
    careerId: 4,
    studentId: 10,
    enrollmentYear: 2019,
    graduatedYear: 2023,
  },
  {
    careerId: 4,
    studentId: 10,
    enrollmentYear: 2016,
    graduatedYear: null,
  },
  {
    careerId: 2,
    studentId: 5,
    enrollmentYear: 2015,
    graduatedYear: 2020,
  },
  {
    careerId: 4,
    studentId: 7,
    enrollmentYear: 2017,
    graduatedYear: 2019,
  },
  {
    careerId: 2,
    studentId: 27,
    enrollmentYear: 2016,
    graduatedYear: 2022,
  },
  {
    careerId: 4,
    studentId: 28,
    enrollmentYear: 2019,
    graduatedYear: 2024,
  },
  {
    careerId: 5,
    studentId: 24,
    enrollmentYear: 2016,
    graduatedYear: 2019,
  },
  {
    careerId: 3,
    studentId: 12,
    enrollmentYear: 2019,
    graduatedYear: null,
  },
  {
    careerId: 4,
    studentId: 27,
    enrollmentYear: 2019,
    graduatedYear: 2024,
  },
  {
    careerId: 2,
    studentId: 8,
    enrollmentYear: 2018,
    graduatedYear: 2021,
  },
  {
    careerId: 1,
    studentId: 11,
    enrollmentYear: 2019,
    graduatedYear: null,
  },
  {
    careerId: 1,
    studentId: 11,
    enrollmentYear: 2019,
    graduatedYear: 2023,
  },
  {
    careerId: 1,
    studentId: 13,
    enrollmentYear: 2016,
    graduatedYear: null,
  },
  {
    careerId: 2,
    studentId: 21,
    enrollmentYear: 2018,
    graduatedYear: null,
  },
  {
    careerId: 4,
    studentId: 10,
    enrollmentYear: 2017,
    graduatedYear: 2019,
  },
  {
    careerId: 4,
    studentId: 16,
    enrollmentYear: 2019,
    graduatedYear: 2022,
  },
  {
    careerId: 4,
    studentId: 9,
    enrollmentYear: 2019,
    graduatedYear: 2024,
  },
  {
    careerId: 3,
    studentId: 10,
    enrollmentYear: 2018,
    graduatedYear: null,
  },
  {
    careerId: 2,
    studentId: 28,
    enrollmentYear: 2018,
    graduatedYear: null,
  },
  {
    careerId: 2,
    studentId: 20,
    enrollmentYear: 2016,
    graduatedYear: 2022,
  },
  {
    careerId: 5,
    studentId: 8,
    enrollmentYear: 2016,
    graduatedYear: null,
  },
  {
    careerId: 3,
    studentId: 2,
    enrollmentYear: 2015,
    graduatedYear: 2018,
  },
  {
    careerId: 1,
    studentId: 20,
    enrollmentYear: 2018,
    graduatedYear: null,
  },
  {
    careerId: 3,
    studentId: 26,
    enrollmentYear: 2019,
    graduatedYear: null,
  },
  {
    careerId: 1,
    studentId: 24,
    enrollmentYear: 2018,
    graduatedYear: 2023,
  },
  {
    careerId: 2,
    studentId: 24,
    enrollmentYear: 2019,
    graduatedYear: 2021,
  },
  {
    careerId: 3,
    studentId: 9,
    enrollmentYear: 2017,
    graduatedYear: null,
  },
  {
    careerId: 5,
    studentId: 25,
    enrollmentYear: 2016,
    graduatedYear: 2021,
  },
  {
    careerId: 5,
    studentId: 3,
    enrollmentYear: 2015,
    graduatedYear: null,
  },
  {
    careerId: 3,
    studentId: 12,
    enrollmentYear: 2017,
    graduatedYear: 2019,
  },
  {
    careerId: 3,
    studentId: 22,
    enrollmentYear: 2017,
    graduatedYear: 2023,
  },
  {
    careerId: 3,
    studentId: 11,
    enrollmentYear: 2017,
    graduatedYear: 2020,
  },
  {
    careerId: 5,
    studentId: 25,
    enrollmentYear: 2016,
    graduatedYear: 2018,
  },
  {
    careerId: 5,
    studentId: 6,
    enrollmentYear: 2019,
    graduatedYear: 2023,
  },
  {
    careerId: 1,
    studentId: 6,
    enrollmentYear: 2015,
    graduatedYear: 2018,
  },
  {
    careerId: 5,
    studentId: 6,
    enrollmentYear: 2019,
    graduatedYear: 2024,
  },
  {
    careerId: 3,
    studentId: 4,
    enrollmentYear: 2019,
    graduatedYear: 2022,
  },
  {
    careerId: 5,
    studentId: 2,
    enrollmentYear: 2018,
    graduatedYear: 2022,
  },
  {
    careerId: 4,
    studentId: 13,
    enrollmentYear: 2016,
    graduatedYear: 2020,
  },
  {
    careerId: 3,
    studentId: 7,
    enrollmentYear: 2016,
    graduatedYear: 2020,
  },
  {
    careerId: 2,
    studentId: 25,
    enrollmentYear: 2018,
    graduatedYear: 2021,
  },
  {
    careerId: 3,
    studentId: 4,
    enrollmentYear: 2019,
    graduatedYear: null,
  },
  {
    careerId: 4,
    studentId: 25,
    enrollmentYear: 2015,
    graduatedYear: 2019,
  },
  {
    careerId: 2,
    studentId: 15,
    enrollmentYear: 2016,
    graduatedYear: null,
  },
  {
    careerId: 3,
    studentId: 11,
    enrollmentYear: 2015,
    graduatedYear: 2019,
  },
  {
    careerId: 4,
    studentId: 8,
    enrollmentYear: 2016,
    graduatedYear: null,
  },
  {
    careerId: 3,
    studentId: 18,
    enrollmentYear: 2015,
    graduatedYear: 2021,
  },
  {
    careerId: 2,
    studentId: 24,
    enrollmentYear: 2018,
    graduatedYear: 2022,
  },
  {
    careerId: 2,
    studentId: 8,
    enrollmentYear: 2019,
    graduatedYear: 2024,
  },
  {
    careerId: 3,
    studentId: 24,
    enrollmentYear: 2018,
    graduatedYear: 2021,
  },
  {
    careerId: 2,
    studentId: 16,
    enrollmentYear: 2015,
    graduatedYear: 2017,
  },
  {
    careerId: 3,
    studentId: 9,
    enrollmentYear: 2016,
    graduatedYear: 2021,
  },
  {
    careerId: 4,
    studentId: 7,
    enrollmentYear: 2019,
    graduatedYear: 2024,
  },
  {
    careerId: 4,
    studentId: 26,
    enrollmentYear: 2017,
    graduatedYear: null,
  },
  {
    careerId: 4,
    studentId: 20,
    enrollmentYear: 2018,
    graduatedYear: 2023,
  },
  {
    careerId: 1,
    studentId: 23,
    enrollmentYear: 2015,
    graduatedYear: 2020,
  },
  {
    careerId: 3,
    studentId: 10,
    enrollmentYear: 2015,
    graduatedYear: 2017,
  },
  {
    careerId: 5,
    studentId: 8,
    enrollmentYear: 2019,
    graduatedYear: 2023,
  },
  {
    careerId: 4,
    studentId: 4,
    enrollmentYear: 2017,
    graduatedYear: 2022,
  },
  {
    careerId: 4,
    studentId: 17,
    enrollmentYear: 2019,
    graduatedYear: 2021,
  },
  {
    careerId: 4,
    studentId: 17,
    enrollmentYear: 2018,
    graduatedYear: null,
  },
  {
    careerId: 1,
    studentId: 15,
    enrollmentYear: 2015,
    graduatedYear: 2019,
  },
  {
    careerId: 2,
    studentId: 5,
    enrollmentYear: 2018,
    graduatedYear: 2024,
  },
  {
    careerId: 2,
    studentId: 27,
    enrollmentYear: 2017,
    graduatedYear: 2021,
  },
  {
    careerId: 5,
    studentId: 4,
    enrollmentYear: 2019,
    graduatedYear: null,
  },
  {
    careerId: 2,
    studentId: 17,
    enrollmentYear: 2015,
    graduatedYear: 2017,
  },
  {
    careerId: 4,
    studentId: 28,
    enrollmentYear: 2017,
    graduatedYear: 2023,
  },
  {
    careerId: 2,
    studentId: 24,
    enrollmentYear: 2017,
    graduatedYear: 2020,
  },
  {
    careerId: 1,
    studentId: 18,
    enrollmentYear: 2018,
    graduatedYear: 2020,
  },
  {
    careerId: 5,
    studentId: 29,
    enrollmentYear: 2019,
    graduatedYear: 2021,
  },
  {
    careerId: 2,
    studentId: 10,
    enrollmentYear: 2017,
    graduatedYear: 2023,
  },
  {
    careerId: 3,
    studentId: 15,
    enrollmentYear: 2017,
    graduatedYear: 2021,
  },
  {
    careerId: 5,
    studentId: 11,
    enrollmentYear: 2016,
    graduatedYear: 2018,
  },
  {
    careerId: 2,
    studentId: 2,
    enrollmentYear: 2017,
    graduatedYear: 2022,
  },
  {
    careerId: 4,
    studentId: 19,
    enrollmentYear: 2017,
    graduatedYear: 2023,
  },
  {
    careerId: 2,
    studentId: 1,
    enrollmentYear: 2016,
    graduatedYear: null,
  },
  {
    careerId: 5,
    studentId: 1,
    enrollmentYear: 2017,
    graduatedYear: 2019,
  },
  {
    careerId: 3,
    studentId: 28,
    enrollmentYear: 2017,
    graduatedYear: 2023,
  },
  {
    careerId: 3,
    studentId: 28,
    enrollmentYear: 2019,
    graduatedYear: null,
  },
  {
    careerId: 3,
    studentId: 17,
    enrollmentYear: 2017,
    graduatedYear: 2021,
  },
  {
    careerId: 5,
    studentId: 25,
    enrollmentYear: 2017,
    graduatedYear: 2019,
  },
  {
    careerId: 3,
    studentId: 20,
    enrollmentYear: 2016,
    graduatedYear: 2021,
  },
  {
    careerId: 2,
    studentId: 14,
    enrollmentYear: 2018,
    graduatedYear: 2023,
  },
  {
    careerId: 4,
    studentId: 26,
    enrollmentYear: 2018,
    graduatedYear: 2023,
  },
];

export const getAllCareers = () => Promise.resolve(careers);

export const findCareerById = async (careerId) => {
  const career = careers.find((c) => c.careerId === Number(careerId));
  if (!career) {
    throw `No se pudo encontrar la carrera ${careerId}`;
  }
  return career;
};

export const getAllEnrollments = () => Promise.resolve(enrollments);