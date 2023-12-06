import { removeByIdFirst } from "@/src/server/easy/remove-by-id-first";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = numberOfMatches(req.body.teams);
  return res.status(200).json({ result: response });
}

const numberOfMatches = (n: number): number => {
  let teamsCount = n;
  let rounds = 1;
  let matchesPlayed = 0;
  while (teamsCount > 1) {
    if (isEven(teamsCount)) {
      const matches = teamsCount / 2;
      const teamsAdvance = teamsCount / 2;
      console.log(
        `${rounds}st Round: Teams ${teamsCount}, Matches ${matches}, ${teamsAdvance} teams advance.`
      );
      matchesPlayed += matches;
      teamsCount = teamsAdvance;
      rounds++;
    } else {
      const actualPlayingTeams = teamsCount - 1;
      console.log(actualPlayingTeams);
      const matches = actualPlayingTeams / 2;
      const teamsAdvance = matches + 1;
      console.log(
        `${rounds}st Round: Teams ${teamsCount}, Matches ${matches}, ${
          teamsAdvance + 1
        } teams advance.`
      );
      matchesPlayed += matches;
      teamsCount = teamsAdvance;
      rounds++;
    }
  }

  return matchesPlayed;
};

const isEven = (number: number): boolean => number % 2 === 0;

// const numberOfMatches = (n: number): number => n -1
