const getIteam = () => {
  return JSON.parse(localStorage.getItem("job")) || [];
};

const setIteam = (id) => {
  const preData = getIteam();
  const check = preData.find((d) => d == id);
  if (!check) {
    preData.push(id);
    localStorage.setItem("job", JSON.stringify(preData));
    return true;
  } else {
    return false;
  }
};

const removeIteam = (id) => {
  const preData = getIteam();
  const data = preData.filter((d) => d != id);
  localStorage.setItem("job", JSON.stringify(data));
  return true;
};

export { getIteam, setIteam, removeIteam };
