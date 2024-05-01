import express, { json } from "express";
import cors from "cors";
import studentRoute from "./routes/StudentRoute";

const app = express();

app.use("/students", studentRoute);

app.use(cors());
app.use(json());

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
