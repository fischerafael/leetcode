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

function maxAreaOptimal(height: number[]): number {
  const n = height.length;
  // use two pointers
  // height: to track the minimum height(length) of the container
  // because we don't have to form slant
  // so take minimum height and maximum right
  // it will form rectangle not slant
  // right: for right x-axis of container

  // left : first element assuming min height
  // right : max right
  // ans to store max area(max amount of water in a container)
  let left = 0;
  let right = n - 1;
  let ans = Number.MIN_SAFE_INTEGER;

  // height works on value
  // right works on index

  while (left < right) {
    // calculate min height
    // check whether left pointer or right pointer value
    let area = 0;

    // if left pointer value is less than right increase value
    // move towards right
    if (height[left] < height[right]) {
      area = height[left] * (right - left);
      left++;
    }

    // if right pointer value is less then decrease it's value
    // move towards left
    else {
      area = height[right] * (right - left);
      right--;
    }

    // store the max area
    ans = Math.max(ans, area);
  }

  return ans;
}
