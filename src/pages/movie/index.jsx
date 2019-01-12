import React from 'react'

import Navbar from '../../components/Navbar'
import Tabbar from '../../components/Tabbar'
import MovieItem from '../../components/MovieItem'
import './style.css'

import request from '../../utils/request'

class Movie extends React.Component {
  constructor() {
    super()
    this.state = {
      topbarActive: 'hot',
      movieList: []
    }
  }

  async getMovieList() {
    const { movieList } = await request.get('/ajax/movieOnInfoList')
    this.setState({
      movieList
    })
  }

  componentDidMount() {
    this.getMovieList()
  }

  render() {
    return (
      <div>
        <Navbar/>

        <div className="my-container">
          <div className="my-topbar">
            <div className="my-topbar-left">
              <span>杭州</span>
              <i className="icon-arrow-down"></i>
            </div>
            <div className="my-topbar-tab">
              <div className={ `my-topbar-tab-item ${ this.state.topbarActive === 'hot' && 'is-active'}`}>正在热映</div>
              <div className={ `my-topbar-tab-item ${ this.state.topbarActive === 'future' && 'is-active'}`}>即将上映</div>
            </div>
            <div className="my-topbar-right">
              <span></span>
            </div>
          </div>

          <div className="movie-list">
            {this.state.movieList.map((movie, index) => {
              return <MovieItem key={index} info={movie}/>
            })}
          </div>
        </div>

        <Tabbar active={1}/>
      </div>
    )
  }
}

export default Movie