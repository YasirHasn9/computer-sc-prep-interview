//given
//  two numbers and each represents a coordinate <x , y>
// array of arrays, each array inside the main one represents a point

// now, we have a valid point if array[randomIndex][0] <x> ||  array[randomIndex][1] <y>

// if we have a valid point we can get the manhattan distance
// abs(givenX- xOnRadomPoint) + abs(givenY - yOnRandomPoint)

function isValidPoint(givenX, givenY, point) {
  return point[0] === givenX || point[1] === givenY;
}
function manhattanDistance(givenX, xOnPoint, givenY, yOnPoint) {
  return Math.abs(givenX - xOnPoint) + Math.abs(givenY - yOnPoint);
}
function nearestValidPoint(x, y, points) {
  let distance = Infinity;
  let index = -1;
  for (let i = 0; i < points.length - 1; i++) {
    let point = points[i];
    if (isValidPoint(x, y, point)) {
      let mn = manhattanDistance(x, point[0], y, point[1]);
      if (mn < distance) {
        distance = mn;
        index = i;
      }
    }
  }
  return index;
}

describe("nearestValidPoint()", () => {
  it("nearestValidPoint should return the index for the smallest distance to Manhattan", () => {
    const points = [
      [1, 2],
      [3, 1],
      [2, 4],
      [2, 3],
      [4, 4],
    ];
    expect(nearestValidPoint(3, 4, points)).toBe(2);
  });
});
