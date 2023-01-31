import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
  {
    name: { type: String },
    surName: { type: String },
    years: { type: Number },
    country: { type: String },
  },
  { timestamps: true }
);

const Data = mongoose.model("Data", dataSchema);

export default Data;
