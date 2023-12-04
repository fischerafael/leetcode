export const removeByIdFirst = (ids: number[], removed: number): number[] => {
  const indexOfFirstItemToBeRemoved = ids.indexOf(removed);
  const idDoesNotExist = indexOfFirstItemToBeRemoved === -1;
  if (idDoesNotExist) return ids;
  const firstHalfOfTheArray = [...ids.slice(0, indexOfFirstItemToBeRemoved)];
  const lastHalfOfTheArray = [...ids.slice(indexOfFirstItemToBeRemoved + 1)];
  return [...firstHalfOfTheArray, ...lastHalfOfTheArray];
};
