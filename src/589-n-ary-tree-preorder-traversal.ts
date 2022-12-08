import { Node } from './utils';
function preorder(root: Node | null): number[] {
  const result: number[] = [];

  if (root === null) {
    return [];
  }

  function traverse(node: Node): void {
    result.push(node.val);
    for (const child of node.children) {
      traverse(child);
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
    result.push(...preorder2(child));
  }

  return result;
}

function preorder3(root: Node | null): number[] {
  const result: number[] = [];
  const stack: Node[] = [];

  if (root === null) {
    return [];
  }

  stack.push(root);

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    result.push(currentNode.val);
    for (let i = currentNode.children.length - 1; i >= 0; i--) {
      stack.push(currentNode.children[i]);
    }
  }

  return result;
}
