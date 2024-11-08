import { Router } from "express";

/** Este es el router principal, que empieza en /careers */
export const reportes = Router();

reportes.get("/careers", (req, res) => {
  res.send("careers");
});

reportes.get("/careers-full", (req, res) => {
  res.send("careers-full");
});
