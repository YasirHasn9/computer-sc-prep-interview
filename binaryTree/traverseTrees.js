/*
Binary Tree is a data structure that contains node. Each node has 0, one, or at max 2 nodes.
There is 2 main concept in the search world of tree: Depth-First Search and Breadth-First Search.



There are 3 ways of DFS(Depth-First Search) to traverse a tree 
1. Pre-order: imagine that we have a pointer that check first the value of node then check
its left side once its done from the left side then will jump to the right side

2. In-order: the same pointer goes fist the left branch, once its reach the end then pointes
to the value of the root node, finally finish the right branch. This is true for each node.

3. Post-order: the same pointer, finishes the left branch, finishes the right branch, and 
then point to the root


                            10
                           /  \
                          15    30
                         /  \     \
                        3     6    2
                       /          / \
                      5          9   8

1. Pre-order: ROOT -> LEFT -> RIGHT
for each node print the root and check its left side, then go back and check its right side
output: [10, 15, 3, 5, 6, 30, 2, 9, 8]

2. In-order LEFT -> ROOT -> RIGHT
for each node print check the left side, then check its root, last check its right side
output: [5 , 3, 15, 6, 10, 30, 9, 2, 8]

3. Post-order: LEFT -> RIGHT -> ROOT
for each node check its left, reach the end, go back to check its right, reach the end 
and go back to its root
output: [5, 3, 6, 15, 9, 8, 2, 30, 10]
*/




class Tree{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}
// const tree = new Tree(10)
// tree.left = new Tree(15)
// tree.left.left = new Tree(3)
// tree.left.right = new Tree(6)
// tree.left.left.left = new Tree(5)
// tree.right = new Tree(30)
// tree.right.right = new Tree(2)
// tree.right.right.left = new Tree(9)
// tree.right.right.right = new Tree(8)


function preOrder(root){

    // in case only printing the value of the visited node
    // if(!root) return null
    // console.log(root.value)
    // preOrder(root.left)
    // preOrder(root.right)

    // in case creating a list of the order that the node are visiting and also 
    // its a good way to create a test case for it
    let arr = []
    helperPreOrder(root, arr)
    return arr
}

function helperPreOrder(node, list){
    if(!node) return null
    list.push(node.value)
    helper(node.left, list)
    helper(node.right, list)
}
// console.log(inOrder(tree))

function inOrder(root){
    // only log the value
    // if(!root) return null
    // inOrder(root.left)
    // console.log("left ",root.value)
    // inOrder(root.right)

    // create a list of the order
    const arr = []
    helperInOrder(root, arr)
    return arr
}

function helperInOrder(node, list){
    if(!node) return null
    helperInOrder(node.left, list)
    list.push(node.value)
    helperInOrder(node.right, list)
}
// console.log("in order",inOrder(tree))

function postOrder(root){
    // in case printing the value of the visited node
    // if(!root) return null
    // postOrder(root.left)
    // postOrder(root.right)
    // console.log(root.value)

    // make a list 
    const arr = []
    helperPostOrder(root, arr)
    return arr
}


function helperPostOrder(node,list){
    if(!node) return null
    helperPostOrder(node.left, list)
    helperPostOrder(node.right, list)
    list.push(node.value)
}
// console.log(postOrder(tree))



/*
Breadth-First Search
Now, imagine, you are given a tree and you need to create function to return all the values 
that have the same level in the tree:


input:Tree
                            10
                           /  \
                          15    30
                         /  \     \
                        3     6    2
                       /          / \
                      5          9   8

output: [ 10, 15, 30, 3, 6, 2, 5, 9, 8]

Thinking out loud: 
It seems like on each level we are visiting we add the values of its nodes before we jump to the next level
This type of search called Breadth-First search
its like we have pointer that go over each level before jumping to the next level
*/

const tree = new Tree(10)
tree.left = new Tree(15)
tree.left.right = new Tree(6)
tree.left.left = new Tree(3)
tree.left.left.left = new Tree(5)
tree.right = new Tree(30)
tree.right.right = new Tree(2)
tree.right.right.right = new Tree(8)
tree.right.right.left = new Tree(9)

function BFS(root){
    const output = []
    if(!root) return output

    const queue = [root]
    while(queue.length){
        let node = queue.shift()
        output.push(node.value)
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }
    return output
}
// console.log(tree)
console.log(BFS(tree))