import * as express from "express";
import { mainPage, cityPage } from "./renderer";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => mainPage(req, res));
app.get("/city/weather/:id", (req, res) => cityPage(req, res));
app.get("/city/forecast/:id", (req, res) => cityPage(req, res));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

//123
