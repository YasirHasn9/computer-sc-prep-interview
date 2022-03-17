function iterativePreOrder(tree){
    const res = []
    if(!tree) res 
    const stack= [tree]
    while(stack.length ){
        const popped = stack.pop()
        res.push(popped.value)
        if(popped.right)stack.push(popped.right)
        if(popped.left)stack.push(popped.left)
    }
    return res
}

class Tree{
    constructor(value){
        this.value = value 
        this.left = null
        this.right = null
    }
}

let tree = new Tree(1)
tree.left = new Tree(-1)
tree.left.left = new Tree(-2)
tree.left.right = new Tree(-3)
tree.left.right.right = new Tree(5)
tree.right = new Tree(11)
tree.right.left = new Tree(21)
tree.right.right = new Tree(6)
console.log(iterativePostOrder(tree))