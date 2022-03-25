// the idea is to create our own stack. on each call on the stack we add the value to our results

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderIter(root) {
  if (!root) return null;
  const res = [];
  const stack = [];
  while (true) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      if (!stack.length) break;
      //   console.log(root.value);
      stack.pop();
      res.push(root);
      root = root.right;
    }
  }
  return res;
}
const root = new Node(10);
root.left = new Node(0);
root.left.left = new Node(5);
root.left.right = new Node(6);
root.right = new Node(-10);
root.right.right = new Node(11);

console.log(inOrderIter(root));
