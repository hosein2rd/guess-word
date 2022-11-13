export const checkMatching = (
  value: string,
  word: string,
): { count: number; isFullMatch: boolean } => {
  let count = 0

  const valueChars = value.split("")
  const wordChars = word.split("")

  for (const index in wordChars) {
    if (!valueChars[index]) continue

    if (valueChars[index] === wordChars[index]) count += 1
  }

  return { count, isFullMatch: value === word }
}

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}
