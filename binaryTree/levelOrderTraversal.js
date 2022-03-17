
// now imagine, you are give a binary tree,  return the level order traversal of its nodes' values
// from left to right, from right to left

/*

                    3      level = 0
                   / \
                  5   9    level = 1
                     / \
                    15  7  level = 2

input: tree above
output = [[3], [5,9], [15,7]]


Think out loud:
since we are dealing with tree, there is 3 technique we can use to search a tree
Pre-order: root, left, right
In-order: left, root, right
Post-order: left, right, root
which one is the most accurate is Pre-order.

Now lets think of the things we should avoid(eliminate to allocate a mental space for other choices).
Order is matter, then I dont think Depth-First search is the right choice because its goes in 
on direction and then go back to the other

then we left with Breadth-first search because it works like it has 2 pointers 
that the go in opposed way and that what we want.


question to ask
1. do we need to use a special data structure to make our lives easier.
   since order is matter: im going to use a data structure called queue
   1. adding the root as a firs node 
   2. in queue whats first, gets executed first, so im going to pop the first node from the left
   3. im gonna create a temp list on each iteration as long as there nodes in the queue
   4. iterate queue.length times and push the value of each node from left to right
   5. check if I have a left or a right node to the First node in queue after we pop it
2. can we solve recursively: think of the call stack
   yes we can
   1. create a helper function that takes node, level, result
   2. node represents which node we have at the moment
   3. level represents at which hight(level) in tree we are 
   3. result is collecting the values at each different level
3. is it okay to solve it first and then comeback to optimize it or start clean from the beginning where 
we should take care of the time/space complexity.
yes, lets solve it at first and comeback to it later
4. now, go back to the first question and answer it.
*/


class Tree{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

const tree = new Tree(3)
tree.left = new Tree(9)
tree.right = new Tree(20)
tree.right.right = new Tree(7)
tree.right.left = new Tree(15)

function levelOrder(root){
    // create a result
    const result = []
    // check if we dont have a tree at all
    if(!root) return result
    // add the root to queue, now queue has length of 1
    const queue = [root]
    while(queue.length){
        // on each new iteration over the queue, we create a new array to hold the values 
        // at that level, because on each level we are gonna add the node from left to right to popped node
        const temp = []
        const len = queue.length
        // iterate queue.length on each level to push the values
        for(let i = 0 ; i < len ; i++){
            // pop nodes from left to right
            const current = queue.shift()
            // push their values
            temp.push(current.value)
            // check if they have left or right nodes
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
        // push the temp to our result, and re-create it again on new iteration
        result.push(temp)
    }
    return result
}
// O(n) Time
// O(n) Space 
// console.log(levelOrder(tree))



function levelOrderRecursive(root){
    const result = []
    // call he helper function
    helper(root, 0, result)
    // return the result
    return result
}

// in case you asked to not manipulate the function parameters, it means to think in
// creating a helper function that would help to solve the problem

function helper(node, level, result){
    // make sure we don't have an empty tree and also its a base case for our recursive function
    if(!node) return result
    // where we are in the tree, what level ?
    // do we have it? If we dont what should we do?
    // then 
    // check if the result have the level(index == level)
    // result[0] = 3
    // result[1] = [9, 20]
    // result[2] = [15, 7]
    if(!result[level]) result[level] = [node.value]
    else result[level].push(node.value)
    // first call the function on the left side
    helper(node.left, level+ 1, result)
    // call the function on the right side
    helper(node.right, level+ 1 , result)
}

console.log(levelOrderRecursive(tree))
console.log(levelOrder(tree))
