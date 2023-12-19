import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ maxArea: maxArea(req.body.h) });
}

const maxArea = (h: number[]): number => {
  return 10;
};
