const Practice = () => {
  type User = {
    name: string;
    age: number;
  };
  const users: User[] = [
    { name: "jon", age: 7 },
    { name: "adam", age: 60 },
  ];
  const i = users.map((u: User): string => u.name);
  console.log(i);
  //20歳以上のユーザーだけの配列
  const adultUsers = users.filter((u: User) => u.age > 20);
  //名前がjohnで始まるユーザーを探して返す
  const jo = users.find((u: User) => u.name.startsWith("jon"));
  console.log(jo);
  console.log(adultUsers);

  return <div></div>;
};

export default Practice;
