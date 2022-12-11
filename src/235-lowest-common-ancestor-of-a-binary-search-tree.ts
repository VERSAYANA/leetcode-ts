import { TreeNode } from './utils';

function lowestCommonAncestor1(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) return null;

  if (!q || !p) return root;

  let stack: TreeNode[] = [];
  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop()!;
    if (
      (p.val > node.val && q.val < node.val) ||
      (p.val < node.val && q.val > node.val) ||
      p.val === node.val ||
      q.val === node.val
    ) {
      return node;
    }

    if (p.val > node.val) {
      stack.push(node.right as TreeNode);
    } else {
      stack.push(node.left as TreeNode);
    }
  }

  return null;
}

function lowestCommonAncestor2(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) return null;

  if (!q || !p) return root;

  let node: TreeNode = root;

  while (node !== null) {
    if (
      (p.val > node.val && q.val < node.val) ||
      (p.val < node.val && q.val > node.val) ||
      p.val === node.val ||
      q.val === node.val
    ) {
      return node;
    }

    if (p.val > node.val) {
      node = node.right!;
    } else {
      node = node.left!;
    }
  }

  return null;
}
