const Practice = () => {
  type Human = {
    height: number;
    weight: number;
  };
  const calc = function ({ weight, height }: Human): number {
    return weight / height ** 2;
  };
  const uhyo: Human = { weight: 63, height: 1.8 };
  console.log(calc(uhyo));
  return <div></div>;
};

export default Practice;
