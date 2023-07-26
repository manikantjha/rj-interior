import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import Founders from "@/models/founders";

export async function getFounders(req: NextApiRequest, res: NextApiResponse) {
  try {
    const founders = await Founders.find({});
    if (!founders) return res.status(404).json({ error: "No Data Found" });
    return res.status(200).json({ founders });
  } catch (error) {
    res.status(404).json({ error });
  }
}

export async function getFounder(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = req.query;
    if (!data || !data.id) {
      return res.status(404).json({ error: "Form Datat Not Provided" });
    }
    const { id }: { id?: string } = data;
    const founders = await Founders.findById(new ObjectId(id));
    if (!founders) return res.status(404).json({ error: "No Data Found" });
    return res.status(200).json({ founders });
  } catch (error) {
    res.status(404).json({ error });
  }
}

export async function addUpdateFounder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id, ...data } = req.body;
    if (!data) {
      return res.status(404).json({ error: "Form Datat Not Provided" });
    }
    if (id) {
      const response = await Founders.findByIdAndUpdate(id, data);
      return res.status(200).json({ response });
    } else {
      const response = await Founders.create(data);
      return res.status(200).json({ response });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
