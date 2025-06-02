const arrowFunction = () => {
  console.log(this);
};

arrowFunction(); // {}
console.log(this);
