import { getAllCareers } from "./career-data.js";
import { getAllEnrollments } from "./enrollment-data.js";

// Types
const Career = { careerId: 0, name: "" };
const Enrollment = { careerId: 0, enrollmentYear: 0, graduatedYear: 0 };
const YearReport = { enrolled: 0, graduated: 0 };
const CareerReport = { career: "", years: { [Number()]: YearReport } };
const ReportBuilder = { [String()]: CareerReport };
const OrganizedReport = [
  { career: "", reports: [{ year: 0, enrolledCount: 0, graduatedCount: 0 }] },
];

// Functions
/**
 * Obtiene un reporte completo de matrículas y graduaciones por carrera y año
 * @returns { Promise<OrganizedReport> } El reporte organizado
 */
export const getFullReport = async () => {
  // Primero obtenemos todas las carreras y matrículas
  const careers = await getAllCareers();
  const enrollments = await getAllEnrollments();

  // Inicializamos el reporte con las carreras, aunque algunas no tengan matrículas
  const report = initializeReport(careers);

  for (let enrollment of enrollments) {
    let career = report[enrollment.careerId];
    // Sumamos uno al contador de enrollment para el año de matriculación
    accumulate(career.years, enrollment.enrollmentYear, "enrolled");

    // Si el estudiante se graduó, sumamos uno al contador de graduaciones para el año de graduación
    if (enrollment.graduatedYear) {
      accumulate(career.years, enrollment.graduatedYear, "graduated");
    }
  }
  // Organizamos el reporte para mostrarlo en orden
  return organizeReport(report);
};

/**
 * Inicializa un reporte con las carreras especificadas, de manera que todas tengan un objeto vacío de años
 * @param { Career[] } careers
 * @returns { ReportBuilder } El reporte inicializado
 */
const initializeReport = (careers) => {
  return careers.reduce(
    (report, career) => {
      report[career.careerId] = {
        career: career.name,
        years: {},
      };
      return report;
    },
    {} /*reporte vacío*/
  );
};

/**
 * Agrega una matrícula o graduación al reporte de una carrera en un año específico
 * @param { {[year: string]: YearReport } } years
 * @param { number } year El año de la matrícula o graduación
 * @param {"enrolled" | "graduated"} type Si es "enrolled" se acumula una matrícula, si es "graduated" se acumula una graduación
 * @returns {void}
 */
const accumulate = (years, year, type) => {
  if (!years[year]) {
    years[year] = { enrolled: 0, graduated: 0 };
  }
  years[year][type]++;
};

/**
 * Organiza el reporte en un formato más amigable para mostrarlo
 * @param { ReportBuilder } report
 * @returns { OrganizedReport } El reporte organizado
 */
const organizeReport = (report) => {
  const organizedReport = [];
  // Uso Object.values para obtener los valores de un objeto, no me interesan las claves
  for (let { career, years } of Object.values(report)) {
    const reports = [];
    // El "in" me permite obtener las claves del objeto years
    for (let year in years) {
      reports.push({
        year: parseInt(year),
        enrolledCount: years[year].enrolled,
        graduatedCount: years[year].graduated,
      });
    }
    // Ordeno los reportes en orden cronológico
    reports.sort((a, b) => a.year - b.year);
    organizedReport.push({
      career: career,
      reports,
    });
  }
  // Ordeno las carreras por nombre
  organizedReport.sort((a, b) => a.career.localeCompare(b.career));
  return organizedReport;
};
