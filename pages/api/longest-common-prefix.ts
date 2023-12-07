import { isPalindrome } from "@/src/server/easy/palindrome-number";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = longestCommonPrefix(req.body.strings);
  return res.status(200).json({ result: response });
}

export const longestCommonPrefix = (strings: string[]): string => {
  let longest = "";
  if (strings.length === 0) return "";
  if (strings.length === 1) return strings[0];
  const shortestWord = findShortestWord(strings);
  for (let i = 0; i <= shortestWord.length; i++) {
    const subStrings = getSubstrings(strings, i);
    const areAllEqual = areAllSubstringsEqual(subStrings);
    if (areAllEqual) {
      longest = subStrings[0];
    }
  }
  return longest;
};

const findShortestWord = (words: string[]): string => {
  let shortest = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i];
    }
  }
  return shortest;
};

const areAllSubstringsEqual = (strings: string[]): boolean => {
  const initialString = strings[0];
  return strings.every((string) => string === initialString);
};

const getSubstrings = (strings: string[], untilIndex: number): string[] => {
  return strings.map((string) => string.slice(0, untilIndex));
};

// "strings": ["flow", "flower", "flight"]
