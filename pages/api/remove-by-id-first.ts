import { removeByIdFirst } from "@/src/server/easy/remove-by-id-first";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = removeByIdFirst(req.body.ids, req.body.remove);
  return res.status(200).json({ result: response });
}
