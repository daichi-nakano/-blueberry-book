const Practice = () => {
  class User {
    name?: string;
    age: number = 0;

    isAdult = (): boolean => {
      return this.age >= 20;
    };

    setAge(newAge: number) {
      this.age = newAge;
    }
  }

  const obj = {
    cl: User,
  };

  const uhyo = new obj.cl();
  uhyo.name = "D";
  console.log(uhyo.isAdult);
  uhyo.setAge(26);
  console.log(uhyo.name);
  console.log(uhyo.age);
  return <div></div>;
};

export default Practice;
