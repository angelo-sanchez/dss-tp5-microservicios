import { Router } from "express";
import { ENROLLMENTS_BASE_URL, CAREERS_BASE_URL } from "../env.js";
import { getPopularCareers } from "../components/popular-careers.js";

/** Este es el router principal, que empieza en /careers */
export const reportes = Router();

reportes.get("/careers", async (req, res) => {
  try {
    const popularCareers = await getPopularCareers();
    res.status(200).json(popularCareers);
  } catch (error) {
    console.error({ error });
    res.status(500).send(error);
  }
});

reportes.get("/careers-full", (req, res) => {
  res.send("careers-full");
});
