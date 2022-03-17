
// we are give a sorted array and request to make a binary search tree
/*

Thinking out loud:
what dose occur to you when see a sorted array ? binary search tree
and also when see a sorted array, its obvious that the middle element is what separate the left side from
the right one

and to find it we need to find the middle index of the array. 

so all the element on the middle or on the left branch, the others on the right branch
*/
class Tree{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

function sortedArrayToBST(nums){
    return constructedTree(nums, 0 , nums.length )
}

function constructedTree(nums , leftIndex, rightIndex){
    if(leftIndex >= rightIndex) return null
    let mid = Math.floor((leftIndex + (rightIndex - leftIndex) / 2))
    let root = new Tree(nums[mid])
    root.left = constructedTree(nums, leftIndex , mid)
    root.right = constructedTree(nums, mid + 1, rightIndex)
    return root
}


const nums = [-10,-3,0,5,9]
console.log(sortedArrayToBST(nums))