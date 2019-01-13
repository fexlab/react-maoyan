import React from 'react'
import Navbar from '../../components/Navbar'
import './style.css'

class Search extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="my-container">
          <div className="my-search-wrapper">
            <div className="my-search-header">
              <div className="my-search-input-wrapper">
                <img className="my-search-icon" src="//s0.meituan.net/bs/?f=my-canary:/deploy/images/search.png" alt=""/>
                <input className="my-search-input" type="text"/>
                <img className="my-search-clear" src="//s0.meituan.net/bs/?f=my-canary:/deploy/images/close.png" alt=""/>
              </div>

              <div onClick={() => this.props.history.goBack()} className="my-search-cancel">取消</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search