import React from 'react'
import './style.css'

class Navbar extends React.PureComponent {
  render() {
    return (
      <header className="my-navbar">
        <div className="my-navbar-left"></div>
        <div className="my-navbar-title">猫眼电影</div>
      </header>
    )
  }
}

export default Navbar