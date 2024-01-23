const Practice = () => {
  class User {
    constructor(public name: string, private age: number) {}

    public isAdult = (): boolean => {
      return this.age >= 20;
    };

    setAge(newAge: number) {
      this.age = newAge;
    }
  }

  const obj = {
    cl: User,
  };

  const uhyo = new obj.cl("nakano", 65);
  console.log(uhyo);
  uhyo.name = "D";
  console.log(uhyo.isAdult);
  uhyo.setAge(26);
  console.log(uhyo.name);
  console.log(uhyo.age);
  return <div></div>;
};

export default Practice;
