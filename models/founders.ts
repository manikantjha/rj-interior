import { Schema, model, models } from "mongoose";

const founderSchema = new Schema(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
  },
  { timestamps: true }
);

const foundersSchema = new Schema({ founders: [founderSchema] });

const Founders = models.founders || model("founders", foundersSchema);

export default Founders;
