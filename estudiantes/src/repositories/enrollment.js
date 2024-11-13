const { USE_MOCKS, ENROLLMENTS_BASE_URL } = require("../../env.js");

const getEnrollmentsByCarreerId = async (carrerId) => {
    if (USE_MOCKS) {
        const mocks = require("./mocks.js");
        return await mocks.getAllEnrollmentsByCarreerId(carrerId);
      }
      const url = new URL(`/enrollments?carreer_id=${carrerId}`, ENROLLMENTS_BASE_URL);
      try {
        const res = await fetch(url);
        return await res.json();
      } catch (error) {
        console.error(error);
        throw "Error al obtener las matrículas";
      }
}

module.exports = {
    getEnrollmentsByCarreerId
}