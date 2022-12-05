class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) return list2;
  else if (list2 === null) return list1;
  else {
    if (list1.val <= list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
    } else {
      list2.next = mergeTwoLists(list1, list2.next);
      return list2;
    }
  }
}

const arrayToLinkedList = (arr: number[]): ListNode | null => {
  let result = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    result = new ListNode(arr[i], result);
  }
  return result;
};

mergeTwoLists(arrayToLinkedList([1, 2, 4]), arrayToLinkedList([1, 3, 4]));
