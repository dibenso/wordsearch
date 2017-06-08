import words from './words.json'

export default wordCount => {
  if(wordCount > words.length)
    return []

  const randomWords = []

  for(let i of Array(wordCount).keys()) {
    const randomIndex = getRandomInt(0, words.length - 1)
    randomWords.push(words[randomIndex])
  }

  return randomWords
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}