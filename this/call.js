const obj = {
  name: "박규성",
};

function hello(nickname, age) {
  console.log(this.name, nickname, age);
}

hello.apply(obj, "피터", 20); // obj, 피터, 20
