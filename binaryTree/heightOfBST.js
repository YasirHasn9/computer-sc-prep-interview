

/*
we are given a binary search tree, find the height of the tree
thinking out loud: 
We have 2 sides of the tree, we should find the height of the left side, and also the height 
of the right side. Get their max + 1
*/

function height(root){
    if(!root) return 0
    let leftSide = height(root.left)
    let rightSide = height(root.right)
    return 1 + Math.max(leftSide, rightSide)
}