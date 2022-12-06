import { arrayToLinkedList, ListNode } from './utils';

function middleNode(head: ListNode | null): ListNode | null {
  let i = 0;
  const indexToHead = new Map<number, ListNode>();

  while (head !== null) {
    indexToHead.set(i, head);
    head = head.next;
    i += 1;
  }
  return indexToHead.get(Math.ceil((i - 1) / 2)) as ListNode;
}

function middleNode2(head: ListNode | null): ListNode | null {
  const arr = [];

  while (head !== null) {
    arr.push(head);
    head = head.next;
  }
  return arr[Math.trunc(arr.length / 2)];
}

function middleNode3(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow?.next || null;
    fast = fast.next.next;
  }

  return slow;
}

middleNode(arrayToLinkedList([1, 2, 3, 4, 5]));
