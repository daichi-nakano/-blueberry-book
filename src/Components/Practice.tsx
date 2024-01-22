const Practice = () => {
  type F = (x: number) => number;
  const map = (array: number[], callback: F): number[] => {
    const result: number[] = [];
    for (const num of array) result.push(callback(num));
    return result;
  };

  const data = [1, 2, 3, 5, 8, 13];
  const result = map(data, (x) => x * 10);
  console.log(result);
  return <div></div>;
};

export default Practice;
