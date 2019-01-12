import React from 'react'

import Navbar from '../../components/Navbar'
import Tabbar from '../../components/Tabbar'
import './style.css'

class Me extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="my-container">

        </div>
        <Tabbar active={3 }/>
      </div>
    )
  }
}

export default Me