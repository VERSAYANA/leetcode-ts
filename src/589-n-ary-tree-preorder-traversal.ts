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
