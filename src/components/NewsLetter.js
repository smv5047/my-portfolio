import { Container } from "@material-ui/core"
import React from "react"
import "../App.css"

export default function MyStory() {
  return (
    <header className="App-header">
      <h2>Steve V 6 Pack ABS NewsLetter</h2>
      <Container>
        <h3>Apps</h3>
        <p>
          These are a collection of apps that help me perform my best. Whether
          for note taking or having fun
        </p>
        <h3>Business</h3>
        <p>
          These are businesses or business deals I find interesting. Whether
          it’s a stock I’m bullish on (obligatory this is not financial advice),
          or an area I’ve recently learned more about and would like to share
        </p>
        <h3>Songs</h3>
        <p>
          hese will be songs selected because of meaningful lyrics, a new groovy
          baselines, or maybe a track that I feel didn’t get enough attention.
          I’ll break down what makes the track special then encourage others to
          share.
        </p>
      </Container>
    </header>
  )
}
