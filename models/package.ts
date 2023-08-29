import { Schema, model, models } from "mongoose";

const packageSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    list: [String],
  },
  { timestamps: true }
);

const Package = models.packages || model("packages", packageSchema);

export default Package;
