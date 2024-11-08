import express from "express";
import logger from "morgan";

import { PORT } from "./env.js";
import { reportes } from "./routes/reportes.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use("/reportes", reportes);
app.get("/usage", (req, res) => {
  res.send(`
        <body style="font-family:sans-serif;margin:0;padding:10%25%;">
            <h1>Reportes</h1>
            <p>Este microservicio está orientado a emitir los reportes de carreras.</p>
            <p>Endpoints:</p>
            <ul>
                <li><code>/reportes/careers</code></li>
                <li><code>/reportes/careers-full</code></li>
            </ul>
        </body>
    `);
});
app.use("*", (req, res) => {
  res.redirect("/usage");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

export default app;
