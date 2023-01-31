import express from "express";

import {
  getData,
  getDataById,
  deleteData,
  updateData,
  createData,
} from "../controllers/data.js";

const router = express.Router();

router.get("/data", getData);
router.get("/data/:id", getDataById);
router.post("/data", createData);
router.delete("/data/:id", deleteData);
router.put("/data/:id", updateData);

export default router;
