
interface ILinkedList{
   head: IListNode
   printList(): void;
   insert(node: IListNode): void;
}

interface IListNode {
   data: number;
   next: IListNode;
}

class LinkedList implements ILinkedList {
   public head: ListNode
   
   constructor(node?: IListNode){
      this.head = node;
   }

   public printList(): void{
      this.print(this.head);
   }
   public insert(node: IListNode): void{
      if(this.head){
         this.insertNode(this.head, node);
         return; 
      }
      this.head = node; 
   }

   private print(head: ListNode): void {
      if(head){
         console.log(head.data);
         this.print(head.next);
      }
   }
   private insertNode(head: IListNode, node: IListNode): void {
      if(head.next){
         this.insertNode(head.next, node);
         return;
      }
      head.next = node;    
   }
}

class ListNode implements IListNode{
   public data: number;
   public next: ListNode;

   constructor(data: number){
      this.data = data;
   }
}

function main(){
   const linkedList: ILinkedList = new LinkedList(new ListNode(8));
   linkedList.insert(new ListNode(1));
   linkedList.insert(new ListNode(13));
   linkedList.insert(new ListNode(256));
   linkedList.insert(new ListNode(212));
   linkedList.insert(new ListNode(745));
   linkedList.printList();
}

main();