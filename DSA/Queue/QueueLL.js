const { Node } = require("../LinkedList-1/LinkedListClass");
class QueueLL {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  isEmpty() {
    if (!this.front) return true;
    else return false;
  }

  enqueue(data) {
    if (!this.front) {
      let newNode = new Node(data);
      this.front = newNode;
      this.rear = newNode;
    } else {
      let newNode = new Node(data);
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }
  dequeue() {
    if (this.isEmpty()) throw "Queue underflow";
    else {
      let temp = this.front;
      this.front = temp.next;
      temp.next = null;
      this.size--;
      return temp.data;
    }
  }

  peek() {
    if (!this.front) throw "Queue is empty";
    else return this.front.data;
  }
  size() {
    return this.size;
  }
  showQueue() {
    let queueData = "";
    let current = this.front;
    while (current) {
      queueData = queueData + current.data + " ";
      current = current.next;
    }
    return queueData;
  }
}

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function processInput() {
  r1.question(
    "Enter Choice: \n 1.Enqueue \n 2.Peek \n 3.Size \n 4.isEmpty \n 5.Dequeue \n 6.Show Queue",
    (choice) => {
      switch (choice) {
        case "1":
          r1.question("Enter data", (data) => queueLL.enqueue(data));
          console.log(`New Rear ${queueLL.rear.data}`);
          processInput();
          break;

        case "2":
          console.log(`Front element of the Queue is ${queueLL.peek()}`);
          processInput();
          break;

        case "3":
          console.log(`The Size of the Queue is ${queueLL.size()}`);
          break;

        case "4":
          console.log(
            `Is the Queue Empty? ${queueLL.isEmpty() ? "Yes" : "No"}`
          );
          processInput();
          break;

        case "5":
          console.log(`Dequeued Element ${queueLL.dequeue()}`);
          console.log(`New Front ${queueLL.front.data}`);
          processInput();

        case "6":
          console.log(`Queue <= ${queueLL.showQueue()}`);

        default:
          r1.close();
      }
    }
  );
}

const queueLL = new QueueLL();
processInput();
