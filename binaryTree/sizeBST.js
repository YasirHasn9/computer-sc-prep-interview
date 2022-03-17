// we are given a binary search tree. find the size of it by calculate how many node we have


class Tree{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

const tree = new Tree(10)
tree.left = new Tree(15)
tree.left.left = new Tree(3)
tree.left.right = new Tree(6)
tree.left.left.left = new Tree(5)
tree.right = new Tree(30)
tree.right.right = new Tree(2)
tree.right.right.left = new Tree(9)
tree.right.right.right = new Tree(8)

function size(root){
    if(!root) return 0
    return  1 + size(root.left) + size(root.right)
}

console.log(size(tree))
