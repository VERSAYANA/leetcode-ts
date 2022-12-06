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

function detectCycle2(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      while (head !== slow && head !== null && slow !== null) {
        head = head.next;
        slow = slow.next;
      }

      return head;
    }
  }

  return null;
}
