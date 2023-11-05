const Queue = require("..QueueArr/");
const queue = new Queue();
let input = prompt("Enter space seperated integers");
let nums = input.split(" ").map(Number);

function petrolPumpRound(nums) {
  const k = nums.shift();
  let startIndex = 0;
  let remainingPetrol = 0;
  const petrol = new Array(k);
  const dis = new Array(k);
  for (let i = 0; i < k; i++) {
    //   petrol[i] = nums[i];
    //   dis[i] = dis[i + 1];

    if (remainingPetrol < 0) {
      let startIndex = i;
      let remainingPetrol = 0;
    }
    remainingPetrol = petrol[i] - dis[i] + remainingPetrol;
  }
  if (remainingPetrol < 0) return -1;
  return startIndex + 1;
}
