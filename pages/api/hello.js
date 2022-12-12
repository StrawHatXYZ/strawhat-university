// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";

export default async function handler(req, res) {
  const dt = await getDocs(collection(db, "courses"));
  var data = [];
  dt.forEach((e) => data.push(e.data()));
  console.log("api worked", data[0].url);
  if (data.length === 0) res.status(200).json({ done: "no data found" });
  res.status(200).json(data[0]);
}
