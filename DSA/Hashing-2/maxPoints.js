/* just ieratete all the points [[x1,y1], [x2, y2]...] find all the cobination of ponits and   strore it in hasjmap with key as slope and value as array of points
or count of slope wcich increase by one wheneve same slope is found,

local max exlcludes the dublicate points and check at each iteration which sope has max count and updates with it
*/

function maxPoints(points) {
  if (points.length <= 1) {
    return points.length;
  }

  let maxPointsOnLine = 0;

  for (let i = 0; i < points.length; i++) {
    const slopes = {};
    let duplicates = 0;
    let localMax = 0;

    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        let slope;

        if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
          // Count duplicates
          duplicates++;
          continue;
        } else if (points[i][0] === points[j][0]) {
          // Vertical line, use Infinity as slope
          slope = Infinity;
        } else {
          slope = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0]);
        }

        // Use slope as a key to count points on the same line
        slopes[slope] = (slopes[slope] || 0) + 1;

        // Update local maximum
        localMax = Math.max(localMax, slopes[slope]);
      }
    }

    // Update global maximum considering duplicates
    maxPointsOnLine = Math.max(maxPointsOnLine, localMax + duplicates + 1);
  }

  return maxPointsOnLine;
}
