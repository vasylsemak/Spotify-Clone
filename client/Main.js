import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Albums from './components/Albums'

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <Albums />
        <Player />
      </div>
    )
  }
}
