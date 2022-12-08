import fs from 'fs/promises'
export const getInput = async (day) => {
  const file = await fs.open(`inputs/${day}.txt`)
  const input = await file.readFile()
  return input
}