function isPalindromeBruteForce(str) {
  // Base case: if the string has 0 or 1 characters, it's a palindrome
  if (str.length <= 1) {
    return true;
  }

  // Compare the first and last characters
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  // Recur with the string excluding the first and last characters
  return isPalindromeBruteForce(str.slice(1, -1));
}
