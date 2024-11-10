import { ENROLLMENTS_BASE_URL, USE_MOCKS } from "../env.js";

/**
 * Busca todas las matrículas existentes
 * @returns {Promise<[{careerId: number, enrollmentYear: number, graduatedYear: number, studentId: number}]>} Un arreglo de objetos que representan a las matrículas
 */
export const getAllEnrollments = async () => {
  if (USE_MOCKS) {
    const mocks = await import("./mocks.js");
    return await mocks.getAllEnrollments();
  }
  const url = new URL(`/enrollments`, ENROLLMENTS_BASE_URL);
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw "Error al obtener las matrículas";
  }
};
