function getSquareRoot(target) {
  return helper(0, target, target);
}

function helper(l, h, target) {
  const mid = l + h - h / 2;
  if (mid * mid > target) return helper(l, mid + 1, target); //left search
  else if (mid * mid === target) return mid;
  else return helper(mid + 1, h, target); //right search
}
