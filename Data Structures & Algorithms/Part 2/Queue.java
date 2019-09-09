class Queue { 
    int front, rear, size; 
    int  capacity; 
    Patient array[]; 
       
    public Queue(int capacity) { 
         this.capacity = capacity; 
         front = this.size = 0;  
         rear = capacity - 1; 
         array = new Patient[this.capacity]; 
            
    } 
       
    boolean isFull(Queue queue) {  
        return (queue.size == queue.capacity); 
    } 
       
    boolean isEmpty(Queue queue) {  
        return (queue.size == 0); 
    } 
       
    void enqueue(Patient item) { 
        if (isFull(this)) 
            return; 
        this.rear = (this.rear + 1)%this.capacity; 
        this.array[this.rear] = item; 
        this.size = this.size + 1; 
        System.out.println(item.id + " enqueued to list of patients"); 
    }

    Patient dequeue() { 
        if (isEmpty(this)) 
            return "Empty"; 
           
        Patient item = this.array[this.front]; 
        this.front = (this.front + 1)%this.capacity; 
        this.size = this.size - 1; 
        return item; 
    } 
       
    Patient front() { 
        if (isEmpty(this)) 
            return "Empty"; 
           
        return this.array[this.front]; 
    } 
        
    Patient rear() { 
        if (isEmpty(this)) 
            return "Empty"; 
           
        return this.array[this.rear]; 
    } 

   void printQueue() {
        for(int i = 0; i < this.array.length; i++) {
            System.out.println(this.array[i]);
        }
    }
} 
