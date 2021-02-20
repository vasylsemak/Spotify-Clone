import React from 'react'
import axios from 'axios'

const Albums = ({ albums }) => (
  <div id='albums' className='row wrap'>
    {
      albums.map(album => (
        <div key={album.id} className='album'>
          <a>
            <img src={album.artworkUrl} />
            <p>{album.name}</p>
            <small>{album.artist.name}</small>
          </a>
        </div>
      ))
    }
  </div>
)

export default Albums
