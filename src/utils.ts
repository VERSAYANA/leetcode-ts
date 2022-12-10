//  Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const arrayToLinkedList = (arr: number[]): ListNode | null => {
  let result = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    result = new ListNode(arr[i], result);
  }
  return result;
};

export function arrayToTreeNode(arr: any[]): TreeNode | null {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]);

  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift()!;

    if (node === null) continue;

    node.left = arr[i] === null ? null : new TreeNode(arr[i]);
    node.right = arr[i + 1] === null ? null : new TreeNode(arr[i + 1]);

    queue.push(node.left!);
    queue.push(node.right!);

    i += 2;
  }

  return root;
}
