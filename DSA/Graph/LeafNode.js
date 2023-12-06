function countLeafNodes(graph) {
  let leafNodesCount = 0;

  for (const node in graph) {
    if (graph[node].length === 0) {
      leafNodesCount++;
    }
  }

  return leafNodesCount;
}

const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: [],
};

const leafNodesCount = countLeafNodes(graph);
console.log(`Number of leaf nodes: ${leafNodesCount}`);
