const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: [],
};

function calculateIndegree(node) {
  let indegree = 0;
  for (const source in graph) {
    if (graph[source].includes(node)) {
      indegree++;
    }
  }
  return indegree;
}

function calculateOutdegree(node) {
  let outdegree = 0;
  for (const neighbor in graph[node]) {
    outdegree++;
  }
  return outdegree;
}

const indegreeOfA = calculateIndegree("A");
const outdegreeOfA = calculateOutdegree("A");

console.log(`Indegree of A: ${indegreeOfA}`);
console.log(`Outdegree of A: ${outdegreeOfA}`);
