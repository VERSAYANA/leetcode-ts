import { ListNode } from './utils';

function reverseList(head: ListNode | null): ListNode | null {
  const arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }

  return reverseArrayToLinkedList(arr);
}

const reverseArrayToLinkedList = (arr: number[]): ListNode | null => {
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    result = new ListNode(arr[i], result);
  }
  return result;
};

function reverseList2(head: ListNode | null): ListNode | null {
  let reversedList = null;
  while (head !== null) {
    reversedList = new ListNode(head.val, reversedList);
    head = head.next;
  }
  return reversedList;
}
