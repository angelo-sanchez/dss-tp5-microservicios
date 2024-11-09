import { ENROLLMENTS_BASE_URL } from "../env.js";

/**
 * Busca todas las matrículas existentes
 * @returns {Promise<[{careerId: number, enrolledYear: number, graduatedYear: number, studentId: number}]>} Un arreglo de objetos que representan a las matrículas
 */
export const getAllEnrollments = async () => {
  const url = new URL(`/enrollments`, ENROLLMENTS_BASE_URL);
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw "Error al obtener las matrículas";
  }
};
