/*
Binary Search Tree is a tree with additional constrain which the left side(branch) should 
be less than the parent, and the right side(branch ) should be greater than the parent. 
This is a true case for each node in the tree





                           TRUE    
                            10
                           /  \
                          8    30
                         /  \     \
                        3    9    35
                       /           / \
                      1           31  37

                           False
                            10
                           /  \
                          8    30
                         /  \     \
                        3    11    35
                       /           / \
                      1           31  37


                           FALSE
                            10
                           /  \
                          8    30
                         /  \     \
                        3    9    35
                       /           / \
                      1           7  37
*/

class Tree{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}
const tree = new Tree(10)
tree.left = new Tree(-5)
tree.left.left = new Tree(-10)
tree.left.right = new Tree(5)
tree.right = new Tree(25)
tree.right.right = new Tree(30)
// console.log(tree)

function binarySearchTree(root, key){
    if(!root) return null
    if(root.value === key) return root
    if(key > root.value){
        return binarySearchTree(root.right , key)
    } else {
        return binarySearchTree(root.left, key)
    }
}
// console.log(binarySearchTree(tree,30))


// Insertion in Binary Search Tree
// THINKING OUT LOUD:
// Since its a binary search tree, it means we have to follow its protocol. The left side 
// should be less than the parent, and the right side should be greater than the parent

// now we have a tree and value for the node we want to insert, we should check 
// each node and compare its value to the new node (left and right) and 
// once we reach where is no left and right, then insert the new node

// function insertionInBinarySearchTree(root, key){
//     if(!root){
//         root = new Tree(key)
//         return
//     }
//     if(key > root.value){
//         return insertionInBinarySearchTree(root.right, key)
//     } else {
//         return insertionInBinarySearchTree(root.left, key)
//     }
// }
function insertionInBinarySearchTree(root, key){
    const newNode = new Tree(key)
    if(!root) return newNode
    let parent, current = root
    while(current){
        // at the end of this loop the current becomes null and the parent become the last node we want 
        parent = current
        if(current.value <= key){
            current = current.right
        } else {
            current = current.left
        }
    }

    if(parent.value <= key){
        parent.right = newNode
    } else {
        parent.left = newNode
    }
    return root
}

// console.log(insertionInBinarySearchTree(tree, 35))
// console.log(tree.right.right.right)