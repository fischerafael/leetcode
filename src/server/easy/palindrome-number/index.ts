export const isPalindrome = (x: number): boolean => {
  const string = String(x);
  const reversed = string.split("").reverse().join("");
  return string === reversed;
};
