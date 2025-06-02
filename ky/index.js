import ky from "ky";

const json = await ky
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .json();

console.log(json);
//=> {data: '🦄'}
