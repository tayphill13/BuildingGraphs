export default class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addNode(name) {
    this.adjacencyList.set(name, new Set());
  }
  hasNode(name) {
    if (this.adjacencyList.get(name)) {
      return true;
      }
    return false;
  }
  createEdge(node1, node2) {
    let set1 = this.adjacencyList.get(node1);
    let set2 = this.adjacencyList.get(node2);
    set1.add(node2);
    set2.add(node1);
  }
  // createEdge(node1, node2) {  //could also be more concise like this
  //   this.adjacencyList.get(node1).add(node2);
  //   this.adjacencyList.get(node2).add(node1);
  // }
  hasEdge(node1, node2) {
    if (this.adjacencyList.get(node1).has(node2)) {
      return true
      }
    return false;
  }
}