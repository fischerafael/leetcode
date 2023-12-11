import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = transpose(req.body.matrix);
  return res.status(200).json({ result: response });
}

const transpose = (matrix: number[][]): number[][] => {
  let result: number[][] = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let intRes: number[] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      intRes.push(matrix[j][i]);
    }
    result.push(intRes);
  }
  console.log(result);
  return matrix;
};
