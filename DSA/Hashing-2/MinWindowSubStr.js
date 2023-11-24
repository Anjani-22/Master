function minWindowSubStr(big, small) {
  const smap = {};
  let reqCount; // or new Map();
  for (s of small) {
    smap[s] = (smap[s] || 0) + 1;
    reCount++;
  }
  let left = 0;
  let right = 0;
  while (right < big.lenght) {
    if (smap[big[right]]) {
      reqCount--;
      smap[right]--;
    }
    while (reqCount == 0) {
      if (smap[left] < 0) {
        smap[left] = smap[left] + 1;
        left++;
      }
    }
  }
}
