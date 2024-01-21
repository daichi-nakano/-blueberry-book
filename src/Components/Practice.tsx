const Practice = () => {
  for (let i = 1; i <= 100; i++) {
    type F = (arg: number) => number | "FizzBuzz" | "Fizz" | "Buzz";
    const getFizzBuzzString: F = <T,>(arg: T) => {
      if (i % 3 === 0 && i % 5 === 0) {
        return "FizzBuzz";
      } else if (i % 3 === 0) {
        return "Fizz";
      } else if (i % 5 === 0) {
        return "Buzz";
      } else {
        return i;
      }
    };
    const message = getFizzBuzzString(i);
    console.log(message);
  }
  return <div></div>;
};

export default Practice;
