const obj = {
  name: "박규성",
};

function hello(nickname, age) {
  console.log(this.name, nickname, age);
}

const hello2 = hello.bind(obj, "피터", 20);
hello2();
