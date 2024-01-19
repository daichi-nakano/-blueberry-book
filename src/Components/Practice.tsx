const Practice = () => {
  //コールシグネチャによる関数型の表現
  type MyF = {
    isUsed?: boolean;
    (arg: number): void;
  };

  const double: MyF = (arg: number) => {
    console.log(arg * 2);
  };

  double(3);
  console.log(double.isUsed);
  return <div></div>;
};

export default Practice;
