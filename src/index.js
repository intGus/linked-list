import LinkedList from "./ListClass";

console.log('linked list enabled')
const ll = new LinkedList();
ll.prepend(100);
ll.prepend(3000);
ll.prepend(200);
ll.prepend(40000);
ll.toString()

window.ll = ll