function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    while (currentNode !== null) {
        nextDistinctNode = currentNode.next;
        while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
            nextDistinctNode = nextDistinctNode.next;
        }
        currentNode.next = nextDistinctNode;
        currentNode = nextDistinctNode;
    }

    return linkedList;
}


class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

let node1 = new ListNode(1);
let node2 = new ListNode(1);
let node3 = new ListNode(1);

node1.next = node2;
node2.next = node3;



let linkedList = new LinkedList(node1);



console.log(removeDuplicatesFromLinkedList(linkedList.head))