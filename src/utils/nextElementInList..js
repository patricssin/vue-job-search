const nextElementInList = (list, value) => {
  const currentActionIndex = list.indexOf(value);
  const nextActionIndex = (currentActionIndex + 1) % list.length;
  const nextAction = list[nextActionIndex];

  return nextAction;
};

export default nextElementInList;
