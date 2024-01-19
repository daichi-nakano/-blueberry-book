const Practice = () => {
  type HasName = {
    name: string;
  };
  type HasNameAndAge = {
    name: string;
    age: number;
  };

  const fromAge = (age: number): HasNameAndAge => ({
    name: "jon Smith",
    age,
  });

  const f: (age: number) => HasName = fromAge;
  const obj: HasName = f(100);
  return <div></div>;
};

export default Practice;
