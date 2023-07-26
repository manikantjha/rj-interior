import { Schema, model, models } from "mongoose";

const workSchema = new Schema({
  name: { type: String, trim: true },
  description: { type: String, trim: true },
  imageURL: { type: String, trim: true },
  embedId: { type: String, trim: true },
  isVideo: Boolean,
  createdAt: { type: Date, default: Date.now },
});

const worksSchema = new Schema({ works: [workSchema] });

const Works = models.works || model("works", worksSchema);

export default Works;
