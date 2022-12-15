import fs from "fs/promises"

const createFiles = async (day) => {
  const inputFile = await fs.open(`inputs/${day}.txt`, 'w')
  const jsFile = await fs.open(`src/${day}.js`, 'w')
  inputFile.close()
  jsFile.close()
}

// node newDay.js 8
createFiles(process.argv[2])
