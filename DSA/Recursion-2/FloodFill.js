function floodFillRecursive(image, x, y, newColor, oldColor) {
  if (
    x < 0 ||
    x >= image[0].length ||
    y < 0 ||
    y >= image.length ||
    image[y][x] !== oldColor
  ) {
    return;
  }

  image[y][x] = newColor;

  floodFillRecursive(image, x + 1, y, newColor, oldColor);
  floodFillRecursive(image, x - 1, y, newColor, oldColor);
  floodFillRecursive(image, x, y + 1, newColor, oldColor);
  floodFillRecursive(image, x, y - 1, newColor, oldColor);
}

/****Non Recursive*****/

function floodFill(image, x, y, newColor) {
  const oldColor = image[y][x];

  if (oldColor === newColor) {
    return;
  }

  const stack = [[x, y]];

  while (stack.length > 0) {
    const [x, y] = stack.pop();

    // Check if the current pixel is within the image bounds
    if (x < 0 || x >= image[0].length || y < 0 || y >= image.length) {
      continue;
    }

    // Check if the current pixel has the old color
    if (image[y][x] !== oldColor) {
      continue;
    }

    image[y][x] = newColor;

    // Push neighboring pixels to the stack for exploration
    stack.push([x + 1, y]);
    stack.push([x - 1, y]);
    stack.push([x, y + 1]);
    stack.push([x, y - 1]);
  }
}
