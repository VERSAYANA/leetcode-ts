import { Node } from './utils';
function preorder(root: Node | null): number[] {
  const result: number[] = [];

  if (root === null) {
    return [];
  }
  function traverse(node: Node): void {
    result.push(node.val);
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }
    }
  }

  traverse(root);

  return result;
}

function preorder2(root: Node | null): number[] {
  if (!root) {
    return [];
  }

  const result = [root.val];
  for (const child of root.children) {
    result.push(...preorder(child));
  }

  return result;
}
