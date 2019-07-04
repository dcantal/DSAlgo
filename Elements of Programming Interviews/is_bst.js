class TreeNode {
    constructor(left, right, val) {
        this.left = left;
        this.right = right;
        this.value = val;
    }
}

function isBST(node) {
    function inRange(node, low=-Infinity, high=Infinity) {
        if (!node) {
            return true;
        } else if (low >= node.value || high < node.value) {
            return false;
        }
        return (inRange(node.left, low, node.value) && inRange(node.right, node.value, high));
    }
    return inRange(node);
}

const node7 = new TreeNode(null, null, 7);
const node9 = new TreeNode(node7, null, 9);
const node6 = new TreeNode(null, node9, 6);
const node1 = new TreeNode(null, null, 1);
const node4 = new TreeNode(null, null, 4);
const node3 = new TreeNode(node1, node4, 3);
const node5 = new TreeNode(node3, node6, 5);

console.log(isBST(node5));

// const node4 = new TreeNode(null, null, 4);
// const node1 = new TreeNode(null, node4, 1);
// const node3 = new TreeNode(null, null, 3);
// const node2 = new TreeNode(node1, node3, 2);

// console.log(isBST(node2));

