import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Albums from './components/Albums'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [
        {
          "id": 1,
          "name": "No Dummy",
          "artworkUrl": "default-album.jpg",
          "artistId": 1,
          "artist": {
            "id": 1,
            "name": "The Crash Test Dummies"
          }
        },
        {
          "id": 2,
          "name": "I React to State",
          "artworkUrl": "default-album.jpg",
          "artistId": 1,
          "artist": {
            "id": 1,
            "name": "The Crash Test Dummies"
          }
        }
      ]
    }
  }


  render () {

    return (
      <div id='main' className='row container'>
        <Sidebar />
        <div class='container'>
          <Albums albums={this.state.albums} />
        </div>
        <Player />
      </div>
    )
  }
}
