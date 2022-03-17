

class Tree{
    constructor(value){
        this.value = value 
        this.left = null
        this.right = null
    }
}

const tree = new Tree(10)
tree.left = new Tree(16)
tree.left.right = new Tree(-3)
tree.right = new Tree(5)
tree.right.left = new Tree(6)
tree.right.right = new Tree(11)



// iterate over each brach, subtract the sum from each node until we reached the leaf
// if the leaf.value == whats left from the sum then, we have succeeded

// edge cases: if the root is null, then return false
function rootToLeafSum(root, sum , result){
    if(!root) return false
    // reached the leaf
    if(!root.left && !root.right){
        // check if the leaf.value === what's left from the sum
        // result.push(root.value)
        if(root.value === sum){
            return result
        } else {
            return false
        }
    }

    if(rootToLeafSum(root.left, sum - root.value, result)){
        result.push(root.value)
        return true
    }
    if(rootToLeafSum(root.right, sum - root.value, result)){
        result.push(root.value)
        return true
    }

    return false
}

const result = []
const sum = 26
console.log(rootToLeafSum(tree, sum, result))