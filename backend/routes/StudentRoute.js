const router = require("express").Router();
import { getAll } from "../controllers/StudentController";

router.get("/", getAll);
