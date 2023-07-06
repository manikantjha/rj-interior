import Users from "@/models/users";
import { auth } from "@/services/firebaseServices";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NextApiRequest, NextApiResponse } from "next";

export async function signup(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = req.body;
    if (!data) {
      return res.status(404).json({ error: "Form Datat Not Provided" });
    }
    const firebaseResponse = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    if (!firebaseResponse || (firebaseResponse && !firebaseResponse.user)) {
      throw new Error("Something went wrong! User not created!");
    }
    const response = await Users.create({
      uid: firebaseResponse.user.uid,
      name: "",
      email: firebaseResponse.user.email,
    });
    return res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = req.body;
    if (!data) {
      return res.status(404).json({ error: "Form Datat Not Provided" });
    }
    const response = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    return res.status(200).json({ ...response });
  } catch (error) {
    res.status(500).json({ error });
  }
}
