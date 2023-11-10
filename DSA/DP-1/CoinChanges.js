let DP = new Array(target.length).fill(-1);

function coincChange(denomination, target) {
  if (target === 0) return 0;
  let numOfCoins = [];
  for (let i = 0; i < denomination.length; i++) {
    numOfCoins[i] = 1 + coincChange(denomination, target - denomination[i]);
  }

  if (DP != -1) return DP[target];
  DP[target] = Math.min(...numOfCoins);
  return DP[target];
}
