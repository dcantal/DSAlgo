
class TreeNode {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
}

function getHeight(node) {
    if (node === null) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

function isBalanced(node) {
    if (node === null) {
        return true;
    }

    if (Math.abs(getHeight(node.left) - getHeight(node.right)) <= 1 &&
        isBalanced(node.left) && 
        isBalanced(node.right) ) {
            return true;
        }

    return false;
}

const node5 = new TreeNode(null, null);
const node6 = new TreeNode(node5, null);
const node7 = new TreeNode(node6, null);
const node1 = new TreeNode(node7, null);
const node2 = new TreeNode(null, null);
const node3 = new TreeNode(node1, node2);
const node4 = new TreeNode(null, null);
const root = new TreeNode(node3, node4);

console.log(isBalanced(root));