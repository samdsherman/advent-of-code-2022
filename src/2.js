/*
The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

For example, suppose you were given the following strategy guide:

A Y
B X
C Z
This strategy guide predicts and recommends the following:

In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

What would your total score be if everything goes exactly according to your strategy guide?
*/

import { getInput } from "./util.js"
const input = await getInput(2)

const rounds = input.split('\n')
const scores = rounds.map(round => {
  const opp = round[0]
  const self = round[2]
  let score = 0
  switch (self) {
    case 'X':
      score += 1
      break
    case 'Y':
      score += 2
      break
    case 'Z':
      score += 3
      break
  }
  if (opp === 'A' && self === 'X' || opp === 'B' && self === 'Y' || opp === 'C' && self === 'Z') {
    score += 3
  } else if (opp === 'A' && self === 'Y' || opp === 'B' && self === 'Z' || opp === 'C' && self === 'X') {
    score += 6
  }
  return score
})

console.log(scores.reduce((sum, score) => score + sum))

/*
The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?
*/

const p2Scores = rounds.map(round => {
  const opp = round[0]
  const self = round[2]
  let score = 0
  switch (self) {
    case 'X':
      score += 0
      switch (opp) {
        case 'A':
          score += 3
          break
        case 'B':
          score += 1
          break
        case 'C':
          score += 2
          break
      }
      break
    case 'Y':
      score += 3
      switch (opp) {
        case 'A':
          score += 1
          break
        case 'B':
          score += 2
          break
        case 'C':
          score += 3
          break
      }
      break
    case 'Z':
      score += 6
      switch (opp) {
        case 'A':
          score += 2
          break
        case 'B':
          score += 3
          break
        case 'C':
          score += 1
          break
      }
      break
  }
  return score
})

console.log(p2Scores.reduce((sum, score) => score + sum))