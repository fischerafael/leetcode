import { isPalindrome } from "@/src/server/palindrome-number";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = isPalindrome(req.body.number);
  return res.status(200).json({ result: response });
}
