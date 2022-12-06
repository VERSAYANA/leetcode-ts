import { ListNode } from './utils';

function detectCycle(head: ListNode | null): ListNode | null {
  const nodeSet = new Set<ListNode>();
  while (head !== null) {
    if (nodeSet.has(head)) {
      return head;
    } else {
      nodeSet.add(head);
    }
    head = head.next;
  }

  return null;
}
