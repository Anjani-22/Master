class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(fromVertex, toVertex) {
    if (
      this.adjacencyList.has(fromVertex) &&
      this.adjacencyList.has(toVertex)
    ) {
      this.adjacencyList.get(fromVertex).push(toVertex);
    }
  }

  depthFirstSearch(start) {
    const visited = new Set();
    const traversalOrder = [];

    const dfs = (vertex) => {
      visited.add(vertex);
      traversalOrder.push(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };

    dfs(start);

    return traversalOrder;
  }
}

// Example usage
const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

const traversalOrder = graph.depthFirstSearch(0);
console.log(traversalOrder); // Output:
