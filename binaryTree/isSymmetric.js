

// we are given a tree and asked if its a symmetric, which means the left side is mirroring 
// the right side


// create a stack: data structure [first in last out] think of it as a pile of dashes
// i dont care about the root, but i care about the left and right branches
// so i push the right and left node 
// pop them from the stack and compare their values 
// push there left, right node if any

function isSymmetric(root){
    const stack = [[root.left, root.right]]
    while(stack.length){
        const [left, right] =stack.pop()
        if(!left && !right) continue
        if(!left || !right) return false
        if(left.value !== right.value) return false
        stack.push([left.left, right.right])
        stack.push([left.right, right.left])
    }
    return stack.length === 0
}


function recursiveIsSymmetric(root){
    if(!root) return null
    return helper(root.left, root.right)
}

function helper(left, right){
    if(!left && !right) return true
    if(!left || !right) return true
    if(left.val !== right.val) return false
    return helper(left.left, right.right) && helper(left.right, right.left)
}