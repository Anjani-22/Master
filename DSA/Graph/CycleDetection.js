function hasCycle(graph) {
  const visited = {}; // To keep track of visited vertices
  const parent = {}; // To keep track of the parent of each vertex

  // Helper function to perform DFS
  function dfs(vertex, parentVertex) {
    visited[vertex] = true; // Mark the current vertex as visited
    parent[vertex] = parentVertex; // Record the parent of the current vertex

    // Explore neighbors
    for (const neighbor of graph[vertex]) {
      if (!visited[neighbor]) {
        // If the neighbor is not visited, recursively visit it
        if (dfs(neighbor, vertex)) {
          return true; // If a cycle is found in the subtree, return true
        }
      } else if (neighbor !== parentVertex) {
        // If the neighbor is visited and not the parent, a cycle is found
        return true;
      }
    }

    return false; // No cycle found in this subtree
  }

  // Start DFS from each unvisited vertex
  for (const vertex in graph) {
    if (!visited[vertex]) {
      if (dfs(vertex, null)) {
        return true; // If a cycle is found, return true
      }
    }
  }

  return false; // No cycle found in the entire graph
}

// Example usage
const graph = {
  1: [2, 4],
  2: [1, 3],
  3: [2, 4],
  4: [1, 3],
};

const hasCycleResult = hasCycle(graph);
console.log(
  hasCycleResult
    ? "The graph contains a cycle."
    : "The graph does not contain a cycle."
);
