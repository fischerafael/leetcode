import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = getsDaysBetweenTwoDates(req.body.start, req.body.finish);
  return res.status(200).json({ result: response });
}

const getsDaysBetweenTwoDates = (start: string, finish: string): number => {
  const firstDate = new Date(start);
  const lastDate = new Date(finish);
  const difInMs = lastDate.getTime() - firstDate.getTime();
  const difInS = difInMs / 1000;
  const difInM = difInS / 60;
  const difInH = difInM / 60;
  const difInDays = difInH / 24;
  return Math.floor(difInDays);
};
