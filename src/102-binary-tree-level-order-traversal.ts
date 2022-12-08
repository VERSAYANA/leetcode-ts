import { TreeNode } from './utils';

function levelOrder(root: TreeNode | null): number[][] {
  let result: number[][] = [];

  if (root === null) {
    return [];
  } else {
    result = [[root.val]];
  }

  function traverse(node: TreeNode, level: number) {
    if (node.left && node.right) {
      if (result[level]) {
        result[level].push(node.left.val, node.right.val);
      } else {
        result[level] = [node.left.val, node.right.val];
      }
      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
    } else if (node.left && !node.right) {
      if (result[level]) {
        result[level].push(node.left.val);
      } else {
        result[level] = [node.left.val];
      }

      traverse(node.left, level + 1);
    } else if (!node.left && node.right) {
      if (result[level]) {
        result[level].push(node.right.val);
      } else {
        result[level] = [node.right.val];
      }
      traverse(node.right, level + 1);
    }
  }

  traverse(root, 1);

  return result;
}
