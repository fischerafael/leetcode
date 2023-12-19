import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ maxArea: maxArea(req.body.h) });
}

const maxArea = (h: number[]): number => {
  let biggest = 0;
  for (let i = 0; i < h.length; i++) {
    const biggestOfCurrentIndex = getBiggestVolumeFromIndex(h, i);
    if (biggestOfCurrentIndex > biggest) {
      biggest = biggestOfCurrentIndex;
    }
  }
  return biggest;
};

const getBiggestVolumeFromIndex = (
  hNums: number[],
  initialIndex: number = 0
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
    distance++;
  }
  return biggest;
};

const calculateVolume = (aH: number, bH: number, distance: number) => {
  if (bH > aH) return aH * distance;
  return bH * distance;
};
