import { TreeNode } from './utils';

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  if (root === null) {
    return [];
  }

  function traverse(node: TreeNode | null, level: number): void {
    if (node === null) return;

    if (result[level]) {
      result[level].push(node.val);
    } else {
      result[level] = [node.val];
    }

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 0);

  return result;
}

function levelOrder2(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const result: number[][] = [];
  const queue = [root];

  while (queue.length > 0) {
    const level = [];
    const levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();
      level.push(node!.val);

      if (node!.left) queue.push(node!.left);
      if (node!.right) queue.push(node!.right);
    }

    result.push(level);
  }

  return result;
}
