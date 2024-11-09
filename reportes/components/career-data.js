import { CAREERS_BASE_URL, USE_MOCKS } from "../env.js";

/**
 * Buscar una carrera por su ID
 * @param {number} careerId
 * @returns { Promise<{ careerId: number, name: string }> } Un objeto que representa a la carrera especificada
 */
export const findCareerById = async (careerId) => {
  if (USE_MOCKS) {
    const mocks = await import("./mocks.js");
    return await mocks.findCareerById(careerId);
  }
  const url = new URL(`/careers/${careerId}`, CAREERS_BASE_URL);
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw `No se pudo obtener la carrera ${careerId}`;
  }
};

/**
 * Buscar todas las carreras existentes
 * @returns { Promise<[ { careerId: number, name: string } ] } Un arreglo de objetos que representan a las carreras
 */
export const getAllCareers = async () => {
  if (USE_MOCKS) {
    const mocks = await import("./mocks.js");
    return await mocks.getAllCareers();
  }
  const url = new URL(`/careers`, CAREERS_BASE_URL);
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw "Error al obtener las carreras";
  }
};
