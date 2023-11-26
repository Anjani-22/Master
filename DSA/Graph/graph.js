class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // For an undirected graph
    }
  }

  findConnectedComponents() {
    const visited = new Set();
    const connectedComponents = [];

    for (const vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        const component = this.depthFirstSearch(vertex, visited);
        connectedComponents.push(component);
      }
    }

    return connectedComponents;
  }

  depthFirstSearch(start, visited) {
    const component = [];
    const stack = [start];

    while (stack.length) {
      const vertex = stack.pop();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        component.push(vertex);

        for (const neighbor of this.adjacencyList.get(vertex)) {
          stack.push(neighbor);
        }
      }
    }

    return component;
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
graph.addEdge(1, 2);
graph.addEdge(3, 4);

const connectedComponents = graph.findConnectedComponents();
console.log(connectedComponents); // Output: [[0, 1, 2], [3, 4]]
