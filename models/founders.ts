import { Schema, model, models } from "mongoose";
import { imageSchema } from "./image";

const founderSchema = new Schema(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: imageSchema, required: true },
  },
  { timestamps: true }
);

const Founder = models.founders || model("founders", founderSchema);

export default Founder;
