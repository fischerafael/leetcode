import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = checksIfThereIsASeven(req.body.array);
  return res.status(200).json({ result: response });
}

const checksIfThereIsASeven = (array: number[]): boolean => {
  const arrString = array.join("");
  if (arrString.includes("7")) return true;
  return false;
};
