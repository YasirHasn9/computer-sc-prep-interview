// Binary tree is a regular tree where each node has zero, one, or two nodes
// Binary Search Tree is a special Tree, where the left node should be less than the root and 
// right node should be greater than the root.


class Tree{
    constructor(value){
        this.value = value 
        this.left = null
        this.right = null
    }
}

const tree = new Tree(10)
tree.left = new Tree(10)
tree.left.left = new Tree(-5)
tree.right = new Tree(19)
tree.right.left = new Tree(11)
tree.right.right = new Tree(21)

function isBST(root, min , max){
    if(!root) return true 
    if(root.value <= min || root.value > max){
        return false
    }
    return isBST(root.left, min, root.value) && isBST(root.right, root.value, max)
}

// another way
function isBSTPassingOnlyRoot(root){
     return compareMinMaxToRootValue(root, -Infinity, Infinity)
}

// we create a function that we can pass to it, 3 parameters
function compareMinMaxToRootValue(node, min, max){
    if(!node) return true
    if(node.value <= min || node.value > max) return false
    return compareMinMaxToRootValue(node.left, min, node.value) && compareMinMaxToRootValue(node.right, node.value, max)
}

console.log(isBST(tree, -Infinity, Infinity))
console.log(isBSTPassingOnlyRoot(tree))