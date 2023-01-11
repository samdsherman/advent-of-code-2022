/*
--- Day 17: Pyroclastic Flow ---
Your handheld device has located an alternative exit from the cave for you and the elephants. The ground is rumbling almost continuously now, but the strange valves bought you some time. It's definitely getting warmer in here, though.

The tunnels eventually open into a very tall, narrow chamber. Large, oddly-shaped rocks are falling into the chamber from above, presumably due to all the rumbling. If you can't work out where the rocks will fall next, you might be crushed!

The five types of rocks have the following peculiar shapes, where # is rock and . is empty space:

####

.#.
###
.#.

..#
..#
###

#
#
#
#

##
##
The rocks fall in the order shown above: first the - shape, then the + shape, and so on. Once the end of the list is reached, the same order repeats: the - shape falls first, sixth, 11th, 16th, etc.

The rocks don't spin, but they do get pushed around by jets of hot gas coming out of the walls themselves. A quick scan reveals the effect the jets of hot gas will have on the rocks as they fall (your puzzle input).

For example, suppose this was the jet pattern in your cave:

>>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>
In jet patterns, < means a push to the left, while > means a push to the right. The pattern above means that the jets will push a falling rock right, then right, then right, then left, then left, then right, and so on. If the end of the list is reached, it repeats.

The tall, vertical chamber is exactly seven units wide. Each rock appears so that its left edge is two units away from the left wall and its bottom edge is three units above the highest rock in the room (or the floor, if there isn't one).

After a rock appears, it alternates between being pushed by a jet of hot gas one unit (in the direction indicated by the next symbol in the jet pattern) and then falling one unit down. If any movement would cause any part of the rock to move into the walls, floor, or a stopped rock, the movement instead does not occur. If a downward movement would have caused a falling rock to move into the floor or an already-fallen rock, the falling rock stops where it is (having landed on something) and a new rock immediately begins falling.

Drawing falling rocks with @ and stopped rocks with #, the jet pattern in the example above manifests as follows:

The first rock begins falling:
|..@@@@.|
|.......|
|.......|
|.......|
+-------+

Jet of gas pushes rock right:
|...@@@@|
|.......|
|.......|
|.......|
+-------+

Rock falls 1 unit:
|...@@@@|
|.......|
|.......|
+-------+

Jet of gas pushes rock right, but nothing happens:
|...@@@@|
|.......|
|.......|
+-------+

Rock falls 1 unit:
|...@@@@|
|.......|
+-------+

Jet of gas pushes rock right, but nothing happens:
|...@@@@|
|.......|
+-------+

Rock falls 1 unit:
|...@@@@|
+-------+

Jet of gas pushes rock left:
|..@@@@.|
+-------+

Rock falls 1 unit, causing it to come to rest:
|..####.|
+-------+

A new rock begins falling:
|...@...|
|..@@@..|
|...@...|
|.......|
|.......|
|.......|
|..####.|
+-------+

Jet of gas pushes rock left:
|..@....|
|.@@@...|
|..@....|
|.......|
|.......|
|.......|
|..####.|
+-------+

Rock falls 1 unit:
|..@....|
|.@@@...|
|..@....|
|.......|
|.......|
|..####.|
+-------+

Jet of gas pushes rock right:
|...@...|
|..@@@..|
|...@...|
|.......|
|.......|
|..####.|
+-------+

Rock falls 1 unit:
|...@...|
|..@@@..|
|...@...|
|.......|
|..####.|
+-------+

Jet of gas pushes rock left:
|..@....|
|.@@@...|
|..@....|
|.......|
|..####.|
+-------+

Rock falls 1 unit:
|..@....|
|.@@@...|
|..@....|
|..####.|
+-------+

Jet of gas pushes rock right:
|...@...|
|..@@@..|
|...@...|
|..####.|
+-------+

Rock falls 1 unit, causing it to come to rest:
|...#...|
|..###..|
|...#...|
|..####.|
+-------+

A new rock begins falling:
|....@..|
|....@..|
|..@@@..|
|.......|
|.......|
|.......|
|...#...|
|..###..|
|...#...|
|..####.|
+-------+
The moment each of the next few rocks begins falling, you would see this:

|..@....|
|..@....|
|..@....|
|..@....|
|.......|
|.......|
|.......|
|..#....|
|..#....|
|####...|
|..###..|
|...#...|
|..####.|
+-------+

|..@@...|
|..@@...|
|.......|
|.......|
|.......|
|....#..|
|..#.#..|
|..#.#..|
|#####..|
|..###..|
|...#...|
|..####.|
+-------+

|..@@@@.|
|.......|
|.......|
|.......|
|....##.|
|....##.|
|....#..|
|..#.#..|
|..#.#..|
|#####..|
|..###..|
|...#...|
|..####.|
+-------+

|...@...|
|..@@@..|
|...@...|
|.......|
|.......|
|.......|
|.####..|
|....##.|
|....##.|
|....#..|
|..#.#..|
|..#.#..|
|#####..|
|..###..|
|...#...|
|..####.|
+-------+

|....@..|
|....@..|
|..@@@..|
|.......|
|.......|
|.......|
|..#....|
|.###...|
|..#....|
|.####..|
|....##.|
|....##.|
|....#..|
|..#.#..|
|..#.#..|
|#####..|
|..###..|
|...#...|
|..####.|
+-------+

|..@....|
|..@....|
|..@....|
|..@....|
|.......|
|.......|
|.......|
|.....#.|
|.....#.|
|..####.|
|.###...|
|..#....|
|.####..|
|....##.|
|....##.|
|....#..|
|..#.#..|
|..#.#..|
|#####..|
|..###..|
|...#...|
|..####.|
+-------+

|..@@...|
|..@@...|
|.......|
|.......|
|.......|
|....#..|
|....#..|
|....##.|
|....##.|
|..####.|
|.###...|
|..#....|
|.####..|
|....##.|
|....##.|
|....#..|
|..#.#..|
|..#.#..|
|#####..|
|..###..|
|...#...|
|..####.|
+-------+

|..@@@@.|
|.......|
|.......|
|.......|
|....#..|
|....#..|
|....##.|
|##..##.|
|######.|
|.###...|
|..#....|
|.####..|
|....##.|
|....##.|
|....#..|
|..#.#..|
|..#.#..|
|#####..|
|..###..|
|...#...|
|..####.|
+-------+
To prove to the elephants your simulation is accurate, they want to know how tall the tower will get after 2022 rocks have stopped (but before the 2023rd rock begins falling). In this example, the tower of rocks will be 3068 units tall.

How many units tall will the tower of rocks be after 2022 rocks have stopped falling?
*/

import { getInput } from './util.js'
const input = await getInput(17)

const jets = input

const tower = [
  0b1111111,
  0b1111111,
  0b1111111,
  0b1111111,
] // floor is essentially all rock
const extraFloors = tower.length

// rocks are upside down and will fall up
const rockTypes = [
  [
    0b0000000,
    0b0000000,
    0b0000000,
    0b0011110,
  ],
  [
    0b0000000,
    0b0000000,
    0b0000000,
    0b0001000,
    0b0011100,
    0b0001000,
  ],
  [
    0b0000000,
    0b0000000,
    0b0000000,
    0b0011100,
    0b0000100,
    0b0000100,
  ],
  [
    0b0000000,
    0b0000000,
    0b0000000,
    0b0010000,
    0b0010000,
    0b0010000,
    0b0010000,
  ],
  [
    0b0000000,
    0b0000000,
    0b0000000,
    0b0011000,
    0b0011000,
  ]
]

let rockIndex = 0
let jetIndex = 0

const leftWallMask = 0b1000000
const rightWallMask = 0b0000001

const print = (arr) => arr.reduce((acc, floor) => acc += floor.toString(2).padStart(7, '0') + '\n', '')

const dropRock = (tower) => {
  const rock = rockTypes[rockIndex].slice(0)
  rockIndex = (rockIndex + 1) % rockTypes.length
  let towerIndex = tower.length

  while (towerIndex > 0) {
    const jet = jets[jetIndex]
    jetIndex = (jetIndex + 1) % jets.length

    const towerSlice = tower.slice(towerIndex - 1)
    if (jet === '<') {
      if (rock.every((line, index) => (line & leftWallMask) === 0 && (line << 1 & (towerSlice[index + 1] || 0)) === 0)) {
        rock.forEach((line, index) => rock[index] = line << 1)
      }
    } else if (jet === '>') {
      if (rock.every((line, index) => (line & rightWallMask) === 0 && (line >> 1 & (towerSlice[index + 1] || 0)) === 0)) {
        rock.forEach((line, index) => rock[index] = line >> 1)
      }
    } else {
      throw new Error('invalid jet at ' + jetIndex)
    }
    if (towerSlice.some((line, index) => (line & (rock[index] || 0)) !== 0)) {
      break
    }
    towerIndex -= 1
  }

  for (let t = towerIndex; t < towerIndex + rock.length; ++t) {
    if (t >= tower.length) {
      tower.push(0)
    }
    tower[t] |= rock[t - towerIndex]
  }
}

let tower1 = tower.slice()
for (let i = 0; i < 2022; ++i) {
  dropRock(tower1)
}

console.log(tower1.length - extraFloors)

/*
--- Part Two ---
The elephants are not impressed by your simulation. They demand to know how tall the tower will be after 1000000000000 rocks have stopped! Only then will they feel confident enough to proceed through the cave.

In the example above, the tower would be 1514285714288 units tall!

How tall will the tower be after 1000000000000 rocks have stopped?
*/
const n = 1000000000000
rockIndex = 0
jetIndex = 0
const possibleKeys = jets.length * rockTypes.length
let tower2 = tower.slice()
let addedHeight = 0
const cycles = {}
for (let i = 0; i < n; ++i) {
  dropRock(tower2)
  if (addedHeight === 0 && i > possibleKeys) {
    const key = `${rockIndex},${jetIndex}`
    const info = [i, tower2.length - extraFloors]
    if (cycles[key]) {
      const cyclePieces = info[0] - cycles[key][0]
      const cycleHeight = info[1] - cycles[key][1]

      const moreCycles = Math.floor((n - i) / cyclePieces)
      addedHeight = moreCycles * cycleHeight
      i += moreCycles * cyclePieces
    } else {
      cycles[key] = info
    }
  }
}

console.log(tower2.length - extraFloors + addedHeight)
