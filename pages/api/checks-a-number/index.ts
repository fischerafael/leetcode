import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = checksANumber(req.body.array);
  return res.status(200).json({ result: response });
}

const checksANumber = (array: number[]): boolean => {
  const arrString = array.join("");
  if (arrString.includes("7")) return true;
  return false;
};
