import { Router } from "express";
import { getPopularCareers } from "../controllers/popular-careers.js";
import { getFullReport } from "../controllers/full-report.js";

/** Este es el router principal, que empieza en /careers */
export const reportes = Router();

reportes.get("/careers", async (req, res) => {
  try {
    const popularCareers = await getPopularCareers();
    res.status(200).json(popularCareers);
  } catch (error) {
    console.error({ error });
    res.status(500).json({ error });
  }
});

reportes.get("/careers-full", async (req, res) => {
  try {
    const fullReport = await getFullReport();
    res.status(200).json(fullReport);
  } catch (error) {
    console.error({ error });
    res.status(500).json({ error });
  }
});
