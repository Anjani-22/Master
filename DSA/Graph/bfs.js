breadthFirstSearch(start) {
    const visited = new Set();
    const traversalOrder = [];
    const queue = [start];

    visited.add(start);

    while (queue.length > 0) {
        const currentVertex = queue.shift();
        traversalOrder.push(currentVertex);

        for (const neighbor of this.adjacencyList.get(currentVertex)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return traversalOrder;
}

function dfs(graph, startNode) {
    const visited = new Set();
    const stack = [startNode];
  
    while (stack.length > 0) {
      const currentNode = stack.pop();
  
      if (visited.has(currentNode)) continue;
  
      visited.add(currentNode);
      console.log(currentNode);
  
      const neighbors = graph.getNeighbors(currentNode);
  
      for (const neighbor of neighbors) {
        stack.push(neighbor);
      }
    }
  }
  