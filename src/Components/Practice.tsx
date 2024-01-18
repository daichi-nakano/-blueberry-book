const Practice = () => {
  type User = {
    name: string;
    age: number;
  };
  const getUser = (u: User): string => u.name;
  const users = [
    { name: "jon", age: 7 },
    { name: "adam", age: 60 },
  ];
  const i = users.map(getUser);
  console.log(i);
  return <div></div>;
};

export default Practice;
