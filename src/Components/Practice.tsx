const Practice = () => {
  const sum = (...arg: number[]): number => {
    let i = 0;
    for (const num of arg) {
      i += num;
    }
    return i;
  };
  const num = [1, 2, 4];
  console.log(num);
  console.log(...num);
  //   console.log(sum(num));
  console.log(sum(1, 24, 59));
  console.log(sum(1, 18274));
  return <div></div>;
};

export default Practice;
