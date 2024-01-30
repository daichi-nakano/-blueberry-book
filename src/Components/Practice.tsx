const Practice = () => {
  type SignType = "plus" | "minus"
  const singNumber = (type: SignType) => {
    return type === "plus"? 1 : -1;
  }
  function numberWithSign2(num: number, type: SignType | "none") {
    if (type === "none") {
      return 0;
    }
    return num * singNumber(type)
  }

  function numberWithSign3(num: number, type: SignType | "none") {
    return type === "none"? 0 : singNumber(type);
  }
  return <div></div>;
};

export default Practice;
