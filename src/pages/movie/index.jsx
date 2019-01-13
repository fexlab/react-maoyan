import React from 'react'
import { Link } from 'react-router-dom'

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
      movieList: [],
      movieIds: [],
      movieFinish: false,
      expectList: [],
      comingList: [],
      comingIds: [],
      comingFinish: false
    }
  }

  async getMovieList() {
    if (this.state.movieIds.length === 0) {
      const { movieIds, movieList } = await request.get('/ajax/movieOnInfoList')
      this.setState({
        movieIds,
        movieList,
        moviePage: 2
      })
    } else {
      if (this.state.movieFinish) return

      let last = this.state.movieList[this.state.movieList.length - 1]
      let idx = this.state.movieIds.indexOf(last.id) + 1
      let movieIds = this.state.movieIds.slice(idx, idx + 10).join(',')

      const { coming } = await request.get('/ajax/moreComingList?token=&movieIds=' + encodeURIComponent(movieIds))
      if (coming.length > 0) {
        this.setState({
          movieList: [...this.state.movieList, ...coming]
        })
      } else {
        this.setState({
          movieFinish: true
        })
      }
    }

  }

  async getExpectList() {
    const { coming } = await request.get('/ajax/mostExpected?ci=59&limit=10&offset=0&token=')
    this.setState({
      expectList: coming
    })
  }

  async getComingList() {
    if (this.state.comingIds.length === 0) {
      const { movieIds, coming } = await request.get('/ajax/comingList?ci=59&token=&limit=10')
      this.setState({
        comingList: coming,
        comingIds: movieIds
      })
    } else {
      if (this.state.comingFinish) return

      let last = this.state.comingList[this.state.comingList.length - 1]
      let idx = this.state.comingIds.indexOf(last.id) + 1
      let movieIds = this.state.comingIds.slice(idx, idx + 10).join(',')

      const { coming } = await request.get('/ajax/moreComingList?ci=59&token=&limit=10&movieIds=' + encodeURIComponent(movieIds))
      if (coming.length > 0) {
        this.setState({
          comingList: [...this.state.comingList, ...coming]
        })
      } else {
        this.setState({
          comingFinish: true
        })
      }
    }
  }

  bindEvent() {
    document.querySelector('.my-container').addEventListener('scroll', (event) => {
      const clientHeight = event.target.clientHeight
      const scrollHeight = event.target.scrollHeight
      const scrollTop = event.target.scrollTop
      const isBottom = (clientHeight + scrollTop === scrollHeight)
      if (isBottom) {
        const fun = {
          'hot': () => {
            this.getMovieList()
          },
          'future': () => {
            this.getComingList()
          }
        }
        fun[this.state.topbarActive]()
      }
    })
  }

  handleTopbarChange(active) {
    this.setState({
      topbarActive: active
    })
    document.querySelector('.my-container').scrollTo(0, 0)
  }

  componentDidMount() {
    this.getMovieList()
    this.getExpectList()
    this.getComingList()
    this.bindEvent()
  }

  render() {
    return (
      <div>
        <Navbar/>

        <div className="my-container my-container-movie">
          <div className="my-topbar">
            <div className="my-topbar-left">
              <span>杭州</span>
              <i className="icon-arrow-down"></i>
            </div>
            <div className="my-topbar-tab">
              <div
                className={
                  `my-topbar-tab-item
                  ${ this.state.topbarActive === 'hot' && 'is-active'}`
                }
                onClick={this.handleTopbarChange.bind(this, 'hot')}>正在热映</div>
              <div className={
                  `my-topbar-tab-item
                  ${ this.state.topbarActive === 'future' && 'is-active'}`
                }
                onClick={this.handleTopbarChange.bind(this, 'future')}>即将上映</div>
            </div>
            <div className="my-topbar-right">
              <Link to="/search" className="icon-search"></Link>
            </div>
          </div>

          { this.state.topbarActive === 'hot' ?
          <div className="movie-list">
            {this.state.movieList.map((movie, index) => {
              return <MovieItem key={index} info={movie}/>
            })}
            { !this.state.movieFinish && <div className="loading-more">加载中...</div> }
          </div>
          :
          <div className="movie-hot">
            <div className="movie-expect">
              <p>近期最受期待</p>
              <div className="movie-expect-list">
                {this.state.expectList.map((movie, index) => {
                  return <div className="movie-expect-item" key={index}>
                    <div className="movie-expect-poster">
                      <img src={movie.img.replace('w.h', '170.230')} alt={movie.nm}/>
                      <div className="movie-expect-wish">
                        <p>{movie.wish}人想看</p>
                      </div>
                      <div className="movie-expect-wish-toggle"></div>
                    </div>
                    <div className="movie-expect-name ellipsis">{movie.nm}</div>
                    <div className="movie-expect-date">{movie.comingTitle}</div>
                  </div>
                })}
              </div>
            </div>
            <div className="movie-list">
              {this.state.comingList.map((movie, index) => {
                return <MovieItem key={index} info={movie}/>
              })}
              { !this.state.comingFinish && <div className="loading-more">加载中...</div> }
            </div>
          </div>
          }
        </div>

        <Tabbar active={1}/>
      </div>
    )
  }
}

export default Movie