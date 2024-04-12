let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const [a, b] = input.shift().split(' ').map(Number); 
const m = Number(input.shift());
const arr = input.map((v) => v.split(' ').map(Number));

let answer, degree = 0;
let visited = Array(n + 1).fill(false);
let graph = [...Array(n + 1)].map(() => []);

arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});


const dfs = (start, depth) => {
  if (start === b) answer = depth;

	for (const v of graph[start]) {
      if (!visited[v]) {
        visited[v] = true;
        dfs(v, depth + 1);
      }
	}
};
dfs(a, degree);
answer ? console.log(answer) : console.log(-1);