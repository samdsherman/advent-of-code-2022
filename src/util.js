import fs from 'fs/promises'
export const getInput = async (day) => {
  const file = await fs.open(`inputs/${day}.txt`)
  const input = await file.readFile()
  file.close()
  return input.toString()
}

export const sum = (array) => array.reduce((s, next) => s + next, 0)