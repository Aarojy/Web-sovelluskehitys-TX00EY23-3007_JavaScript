/**
 * Calculate the Euclidean distance between two points
 *
 * @param {number[]} coords1 geoJSON point-coordinates
 * @param {number[]} coords2 geoJSON point-coordinates
 * @returns {number} distance between the two points
 */

export function calcDistance(coords1, coords2) {
  return Math.sqrt(
    (coords2[0] - coords1[0]) ** 2 + (coords2[1] - coords1[1]) ** 2
  );
}
