import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ maxArea: maxArea(req.body.h) });
}

const maxArea = (h: number[]): number => {
  return getBiggestVolumeFromIndex(h);
  //   return calculateVolume(4, 3, 10);
};

const getBiggestVolumeFromIndex = (
  hNums: number[],
  initialIndex: number = 1
): number => {
  let biggest = 0;
  let distance = 0;
  for (let i = initialIndex; i < hNums.length; i++) {
    const firstItem = hNums[initialIndex];
    const currentItem = hNums[i];
    const currentVolume = calculateVolume(firstItem, currentItem, distance);
    const isBiggerThanBiggest = currentVolume > biggest;
    if (isBiggerThanBiggest) {
      biggest = currentVolume;
    }

    console.log("first h", firstItem);
    console.log("second h", hNums[i]);
    console.log("distance", distance);
    console.log("volumes", currentVolume);

    distance++;
  }
  return biggest;
};

const calculateVolume = (aH: number, bH: number, distance: number) => {
  if (bH > aH) return aH * distance;
  return bH * distance;
};
