const person = {
  hello: () => {
    console.log(this); // {}
    return this;
  },
};

console.log(person.hello() === person); // false
