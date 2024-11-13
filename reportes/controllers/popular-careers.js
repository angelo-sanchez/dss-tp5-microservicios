import { findCareerById } from "../repositories/career-data.js";
import { getAllEnrollments } from "../repositories/enrollment-data.js";

/**
 * Agrupa las matrículas por carrera, contando cuántas matrículas hay por carrera
 * @param { {careerId: number}[] } enrollments
 * @returns { { [careerId: number]: number } } Un objeto cuyas claves son los IDs de las carreras y los valores son la cantidad de matrículas
 */
const groupByCareerId = (enrollments) => {
  return enrollments.reduce(
    (acc, enrollment) => {
      const { careerId } = enrollment;
      // Si no existe la carrera en el mapa, inicializarla en 0
      if (!acc[careerId]) {
        acc[careerId] = 0;
      }
      // Incrementar la cantidad de matrículas
      acc[careerId]++;
      // Devolver el mapa, para seguir acumulando valores
      return acc;
    },
    {} /* Inicializar el acumulador como un objeto vacío (mapa) */
  );
};

/**
 * Busca las carreras especificadas
 * @param {number[]} careerIds
 * @returns {Promise<{careerId: number;name: string;}[]>} Un arreglo de objetos que representan a las carreras especificadas
 */
const getCareers = (careerIds) => {
  return Promise.all(careerIds.map((careerId) => findCareerById(careerId)));
};

export const getPopularCareers = async () => {
  const enrollments = await getAllEnrollments();
  // Encontrar la cantidad de matrículas por carrera
  const careers = groupByCareerId(enrollments);

  const careerIds = Object.keys(careers);
  const popularCareers = await getCareers(careerIds);

  return popularCareers
    .map(({ careerId, name }) => {
      return {
        careerId,
        name,
        enrollments: careers[careerId],
      };
    })
    .sort((a, b) => b.enrollments - a.enrollments);
};
