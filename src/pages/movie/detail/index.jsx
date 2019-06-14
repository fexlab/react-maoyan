import React from 'react'
import Navbar from '../../../components/Navbar';
import request from '../../../utils/request';
import './style.css'

class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {}
    }
    this.getMovieDetail(341139)
    this.getCinemasFilter(341139)
    this.getMovieCinemas(341139)
  }

  // 获取电影详情
  getMovieDetail = async (id) => {
    const { detailMovie } = await request.get(`/ajax/detailmovie?movieId=${id}`)
    detailMovie.img = detailMovie.img.replace('w.h', '71.100')
    this.setState({
      info: detailMovie
    })
  }

  // 获取影院筛选条件
  getCinemasFilter = async (id) => {
    const response = await request.get(`/ajax/filterCinemas?movieId=${id}&day=2019-03-07`)
    console.log(response)
  }

  // 获取电影排片影院
  async getMovieCinemas(id) {
    const params = {
      movieId: id,
      day: '2019-03-07',
      offset: 0,
      limit: 20,
      districtId: -1,
      lineId: -1,
      hallType: -1,
      brandId: -1,
      serviceId: -1,
      areaId: -1,
      stationId: -1,
      updateShowDay: true,
      reqId: 1551850358998,
      cityId: 59
    }
    const response = await request.post('/ajax/movie', params)
    console.log(response)
  }

  render() {
    const { info } = this.state
    return (
      <div>
        <Navbar/>
        <div className="movie-detail">
          <div className="movie-filter"></div>
          <div className="poster-bg" style={{backgroundImage: `url(${info.img})`}}></div>
          <div className="movie-container">
            <div className="poster">
              <img src={info.img} alt=""/>
            </div>
            <div className="content">
              <div className="title">{info.nm}</div>
              <div className="">{info.enm}</div>
              <div className="">{info.wish}人想看</div>
              <div className="type">{info.cat}</div>
              <div className="src">{info.fra}/{info.dur}分钟</div>
              <div className="">{info.pubDesc}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetail