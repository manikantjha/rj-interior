import { IImage } from "./image";

export interface IFounder {
  _id?: string;
  name: string;
  image: IImage;
  designation: string;
  description: string;
}
