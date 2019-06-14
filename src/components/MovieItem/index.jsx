import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class MovieItem extends React.Component {

  getButton(st) {
    if (st === 1) {
      return (
        <button className="my-movie-item-btn my-movie-item-btn-warning">想看</button>
      )
    } else if (st === 3) {
      return (
        <button className="my-movie-item-btn my-movie-item-btn-danger">购买</button>
      )
    } else if (st === 4) {
      return (
        <button className="my-movie-item-btn">预售</button>
      )
    }
  }

  render() {
    const { info } = this.props
    return (
      <Link className="my-movie-item" to={`/movie/${info.id}`}>
        <img className="my-movie-item-cover" src={info.img.replace('w.h', '128.180')} alt={info.nm}/>

        <div className="my-movie-item-content">
          <div className="my-movie-item-title">
            <div>{info.nm}</div>
            { info.version && <span className={`my-movie-item-version ${info.version}`}></span> }
            { info.preShow && <span className="my-movie-item-preshow"></span> }
          </div>
          { info.showst === 3
            ? <div className="my-movie-item-score">
              <span className="my-movie-item-score-prefix">观众评 </span>
              <span className="my-movie-item-grade">{info.sc}</span>
            </div>
            : <div className="my-movie-item-want">
              <span className="my-movie-item-people">{info.wish}</span>
              <span className="my-movie-item-want-suffix"> 人想看</span>
            </div>
          }
          <div className="my-movie-item-actor">主演: {info.star}</div>
          <div className="my-movie-item-other">{info.showInfo || info.rt + '上映'}</div>
        </div>

        <div className="my-movie-item-right">
          { this.getButton(info.showst) }
        </div>

      </Link>
    )
  }
}

export default MovieItem