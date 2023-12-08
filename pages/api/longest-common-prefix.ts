import { isPalindrome } from "@/src/server/easy/palindrome-number";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const res1 = longestCommonPrefix(req.body.strings);
  const res2 = longestCommonPrefixOptimal(req.body.strings);
  return res.status(200).json({
    result: {
      myAlgo: res1,
      optimal: res2,
    },
  });
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

const longestCommonPrefixOptimal = (strings: string[]): string => {
  const sorted = sortWordsAlphabetically(strings);
  let output = [];
  const firstWord = sorted[0];
  const lastWord = sorted[sorted.length - 1];
  for (let i = 0; i < firstWord.length; i++) {
    const isTheSameLetter = firstWord[i] === lastWord[i];
    if (isTheSameLetter) {
      output.push(firstWord[i]);
    } else {
      break;
    }
  }
  const word = output.join("");
  return word;
};

const longestCommonPrefixOptimalWithReduce = (strings: string[]): string => {
  const sorted = sortWordsAlphabetically(strings);
  let output = [];
  const firstWord = sorted[0];
  const lastWord = sorted[sorted.length - 1];
  for (let i = 0; i < firstWord.length; i++) {
    const isTheSameLetter = firstWord[i] === lastWord[i];
    if (isTheSameLetter) {
      output.push(firstWord[i]);
    } else {
      break;
    }
  }
  const word = output.join("");
  return word;
};

const sortWordsAlphabetically = (words: string[]): string[] => {
  return words.sort((a, b) => (a < b ? -1 : 1));
};
