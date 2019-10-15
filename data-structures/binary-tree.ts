export interface IBinaryTree {
   insert(node: IBinaryNode): boolean;
   find(data: number): IBinaryNode;  
}

export interface IBinaryNode {
   data: number; 
   left: IBinaryNode;
   right: IBinaryNode;
}

export class BinaryNode implements IBinaryNode{
   public data: number; 
   public left: IBinaryNode;
   public right: IBinaryNode;

   constructor(data: number){
      this.data = data;
   }
}

export class BinaryTree implements IBinaryTree{
   private head: IBinaryNode

   constructor(node?: IBinaryNode){
      this.head = node; 
   }

   public insert(node: IBinaryNode): boolean {
      if(!this.head){
         this.head = node; 
         return true;
      }
      return this.insertNode(this.head, node); 
   }

   private insertNode(head: IBinaryNode, node: IBinaryNode): boolean {
      if(node.data === head.data){
         return false; 
      }
      if(node.data < head.data){
         if(head.left){
            return this.insertNode(head.left, node);
         } else {
            head.left = node; 
            return true;
         }
      } else {
         if(head.right){
            return this.insertNode(head.right, node);
         } else {
            head.right = node; 
            return true;
         }
      }
   }

   public find(data: number): IBinaryNode {
      return this.findData(this.head, data);
   }

   private findData(head: IBinaryNode, data: number): IBinaryNode {
      if(!head){
         return undefined; 
      }
      if(data === head.data){
         return head; 
      } else if(data < head.data){
         return this.findData(head.left, data);
      } else {
         return this.findData(head.right, data);
      }
   }
}


function main(){
   const binaryTree = new BinaryTree();
   let rejected = 0; 
   for(let i = 0; i < 50; i++ ){
      const randomNumber = Math.floor(Math.random() * 1000); 
      if(!binaryTree.insert(new BinaryNode(randomNumber))){
         rejected++;
      }
   }
   console.log(`${rejected} number(s) rejected`);
}

main();