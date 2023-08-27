export interface Location {
  x: number
  y: number
  z: number
}

/**
 * With {@link location} as the center, get the range coordinates of the radius {@link radius}
 * @param { Location } location
 * @param { number } [radius=1]
 * @returns
 */
export function getRadiusRange(location: Location, radius = 1) {
  const centerX = location.x
  const centerY = location.y
  const centerZ = location.z

  /*
      Store a 3x3 list of square objects centered on the current square coordinates

      Top view: 0 is the current square, get the coordinates of all 1's

      First floor
      111
      111
      111

      Second layer
      111
      101
      111

      Third layer
      111
      111
      111
      */
  const positions: Location[] = []

  for (let x = centerX - radius; x <= centerX + radius; x++) {
    for (let y = centerY - radius; y <= centerY + radius; y++) {
      for (let z = centerZ - radius; z <= centerZ + radius; z++) {
        positions.push({ x, y, z })
      }
    }
  }
  return positions
}
