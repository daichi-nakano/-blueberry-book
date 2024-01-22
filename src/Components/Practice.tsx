const Practice = () => {
  class User {
    name?: string;
    age: number = 0;
  }

  const obj = {
    cl: User,
  };

  const uhyo = new obj.cl();
  uhyo.name = "D";
  console.log(uhyo.name);
  console.log(uhyo.age);
  return <div></div>;
};

export default Practice;
