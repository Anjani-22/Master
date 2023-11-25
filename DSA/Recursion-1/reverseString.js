function reverseString(string) {
  if (string.length === 0) {
    return "";
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}
