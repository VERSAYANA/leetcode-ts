import { arrayToTreeNode, TreeNode } from './utils';

function isValidBST4(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  let stack: { node: TreeNode; min: number; max: number }[] = [];

  let max = Number.MAX_VALUE;
  let min = -max;

  stack.push({ node: root, min, max });

  while (stack.length > 0) {
    let { node, min, max } = stack.pop()!;

    // check if the node's key is greater than the maximum key in the left subtree
    // and less than the minimum key in the right subtree
    if (node.val <= min || node.val >= max) {
      return false;
    }

    if (node.right !== null) {
      stack.push({ node: node.right, min: node.val, max });
    }
    if (node.left !== null) {
      stack.push({ node: node.left, min, max: node.val });
    }
  }

  return true;
}

isValidBST4(arrayToTreeNode([5, 1, 4, null, null, 3, 6]));
