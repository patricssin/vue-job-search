const nextElementInList = <T>(list: T[], value: T): T => {
  const currentValueIndex = list.indexOf(value);
  const nextValueIndex = (currentValueIndex + 1) % list.length;
  const nextValue = list[nextValueIndex];

  return nextValue;
};
// any kind of array, value and return

export default nextElementInList;
