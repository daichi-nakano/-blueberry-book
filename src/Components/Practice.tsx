const Practice = () => {
  function signNumber(type: 'plus' | 'minus') {
    return type === "plus"? 1 : -1;
  }
  console.log(signNumber('plus'));
  return <div></div>;
};

export default Practice;
