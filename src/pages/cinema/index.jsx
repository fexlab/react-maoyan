import React from 'react'

import Navbar from '../../components/Navbar'
import Tabbar from '../../components/Tabbar'
import './style.css'

class Cinema extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="my-container">

        </div>
        <Tabbar active={2}/>
      </div>
    )
  }
}

export default Cinema