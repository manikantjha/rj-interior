import Hero from "@/models/hero";
import { revalidatePath } from "@/utils/server";
import { NextApiRequest, NextApiResponse } from "next";

// Get All Heroes
export async function getHeroes(req: NextApiRequest, res: NextApiResponse) {
  try {
    const heroes = await Hero.find({});
    if (!heroes) return res.status(404).json({ error: "No data found!" });
    res.status(200).json({ heroes });
  } catch (error) {
    res.status(404).json({ error });
  }
}

// Get Hero
export async function getHero(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = req.query;
    if (!data || !data.id) throw new Error("Page ID not provided!");
    const hero = await Hero.findOne({ pageId: data.id });
    if (!hero) return res.status(404).json({ error: "No data found!" });
    return res.status(200).json({ hero });
  } catch (error) {
    res.status(404).json({ error });
  }
}

// Add Update Hero
export async function addUpdateHero(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { _id, ...data } = req.body;

    if (!data) {
      return res.status(404).json({ error: "Form data not provided!" });
    }

    if (_id) {
      // Update Case
      const response = await Hero.findByIdAndUpdate(_id, data);
      let path = "";
      if (data.pageId === "home") {
        path = "/";
      } else if (data.pageId === "about") {
        path = "/about";
      } else if (data.pageId === "/services") {
        path = "/services";
      }

      console.log("path", path);

      await revalidatePath(path);

      return res.status(200).json({ response });
    } else {
      // Add Case
      const response = await Hero.create(data);
      return res.status(200).json({ response });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error });
  }
}
