import init, { generate_sudoku } from "sudoku-generator";

let inited = false;
let queue = [];
const handleGenerateSudoku = () => {
  if (!inited) {
    return new Promise((res) => {
      queue.push(() => {
        console.log("run task from queue");
        res(generate_sudoku());
      });
    });
  }
  console.log("generate sudoku");
  return Promise.resolve(generate_sudoku());
};
init().then(() => {
  console.log("wasm inited in worker");
  inited = true;
  queue.forEach((fn) => fn());
  queue = [];
});

onmessage = async (e) => {
  console.log("Data received from main script", e.data);
  const res = await handleGenerateSudoku(e.data);
  console.log("got result", res);
  postMessage(res);
};
