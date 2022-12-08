import fs from 'fs/promises'
export const getInput = async (filename) => {
  const file = await fs.open(`inputs/${filename}.txt`)
  const input = await file.readFile()
  return input
}