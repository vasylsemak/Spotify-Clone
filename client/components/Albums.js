import React, { Component } from 'react'
import axios from 'axios'

class Albums extends Component {
  constructor() {
    super()
    this.state = { albums: [
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
    ]}

  }

  // async componentDidMount() {
  //   const albums = await axios.get('/api/albums')
  //   this.setState({ albums: albums })
  // }


  render() {
    console.log("ALBUMS --->  ", this.state.albums)

    return (
      <div id='albums' className='row wrap'>
        <div className='album'>
          <a>
            <img src='default-album.jpg' />
            <p>ALBUM 1</p>
            <small>Artist Name</small>
          </a>
        </div>
        <div className='album'>
          <a>
            <img src='default-album.jpg' />
            <p>ALBUM 2</p>
            <small>Artist Name</small>
          </a>
        </div>
      </div>
    )
  }
}

export default Albums
