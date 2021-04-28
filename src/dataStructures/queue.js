export default class Queue{

    array = [];
    firstItem = null;

    constructor(){
        this.Enqueue = (item) => {
            this.array.push(item);
    
            if(this.array.length === 1){
                this.firstItem = this.array[0];
            }
    
        }
    
        this.Dequeue = () => {
            let item = this.array.shift();
    
            if(this.array.length > 0) {
                this.firstItem = this.array[0];
            } else {
                this.firstItem = null;
            }
    
            return item;
        }
    
        this.Peek = () => {
            return this.firstItem;
        }

    }
}