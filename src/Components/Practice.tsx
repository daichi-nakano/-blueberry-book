const Practice = () => {
  const double = <T,>(func: (arg: T) => T): ((arg: T) => T) => {
    return (arg) => func(func(arg));
  };
  type NumberToNumber = (arg: number) => number;

  const plus2: NumberToNumber = double((x) => x + 1);
  console.log(plus2(2));
  return <div></div>;
};

export default Practice;
