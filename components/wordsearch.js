import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { wordfind } from '../util/puzzleGenerator'
import randomWords from '../util/random'

const words = randomWords(10)
const puzzle = wordfind.newPuzzle(words, {
  height: 20,
  width:  25,
  orientations: ['vertical'],
  fillBlanks: true,
  preferOverlap: false
})

console.log(puzzle)

class Wordsearch extends Component {
  static defaultProps = {
    wordCount: 12,
    height: 20,
    width: 25
  }

  static propTypes = {
    wordCount: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }

  render() {
    return (
      <div>
        <h1>Wordsearch</h1>
      </div>
    )
  }
}

export default Wordsearch
