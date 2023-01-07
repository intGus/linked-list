import LinkedList from "./ListClass";

console.log('You can access the Linked List functions using "list.<function>"')
const list = new LinkedList();
list.prepend(100);
list.prepend(3000);
list.prepend(200);
list.prepend(40000);
list.append(200)

window.list = list;