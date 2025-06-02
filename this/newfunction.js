function Person() {
  this.hello = () => {
    return this;
  };
}

const person = new Person();
console.log(person.hello() === person, person instanceof Person); // true, true
