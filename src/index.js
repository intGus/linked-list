import LinkedList from "./ListClass";
import { printResult } from "./DomStuff";

console.log('You can access the Linked List functions using "list.<function>"')
const list = new LinkedList();
window.list = list;

document.addEventListener("listModified", function(){
  printResult(list.toString())
});

list.prepend(100);
list.prepend(3000);
list.prepend(200);
list.prepend(40000);
list.append(200)


