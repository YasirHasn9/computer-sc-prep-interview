/*
we are given two trees A and B, find if the two tree are equal to each other.


THINKING OUT LOUD:
since i have 2 trees, im gonna call my function recursively on each of them on every node and compare 
their values. 
*/


class Tree{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}
const tree1 = new Tree(10)
tree1.left = new Tree(15)
tree1.left.left = new Tree(3)
tree1.left.right = new Tree(6)
tree1.left.left.left = new Tree(5)
tree1.right = new Tree(30)
tree1.right.right = new Tree(2)
tree1.right.right.left = new Tree(9)
tree1.right.right.right = new Tree(8)

const tree2 = new Tree(10)
tree2.left = new Tree(15)
tree2.left.left = new Tree(3)
tree2.left.right = new Tree(6)
tree2.left.left.left = new Tree(5)
tree2.right = new Tree(30)
tree2.right.right = new Tree(2)
tree2.right.right.left = new Tree(9)
tree2.right.right.right = new Tree(8)
tree2.right.right.right = new Tree(99)

function isSameTrees(root1, root2){
    if(!root1 && !root2) return true
    if(!root1 || !root2) return false
    if(root1.value !== root2.value) return false
    return isSameTrees(root1.left, root2.left) && isSameTrees(root1.right, root2.right)
}


console.log(isSameTrees(tree1, tree2))

// dirty solution :)
function isSameTreeStringify(a,b){
    return JSON.stringify(a) === JSON.stringify(b)
}
console.log(isSameTreeStringify(tree1, tree2))