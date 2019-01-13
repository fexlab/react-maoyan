import React from 'react'

import Navbar from '../../components/Navbar'
import Tabbar from '../../components/Tabbar'
import CinemaItem from '../../components/CinemaItem'
import './style.css'

import request from '../../utils/request'

class Cinema extends React.Component {
  constructor() {
    super()
    this.state = {
      cinemaList: [],
      cinemaOffset: 0,
      cinemaFinish: false
    }
  }

  async getCinemaList() {
    if (this.state.cinemaFinish) return
    const { cinemas, paging } = await request.get(`/ajax/cinemaList?day=2019-01-13&offset=${this.state.cinemaOffset}&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1547348534775&cityId=59`)
    this.setState({
      cinemaList: [...this.state.cinemaList, ...cinemas],
      cinemaOffset: paging.offset + paging.limit,
      cinemaFinish: !paging.hasMore
    })
  }

  bindEvent() {
    document.querySelector('.my-container').addEventListener('scroll', (event) => {
      const clientHeight = event.target.clientHeight
      const scrollHeight = event.target.scrollHeight
      const scrollTop = event.target.scrollTop
      const isBottom = (clientHeight + scrollTop === scrollHeight)
      if (isBottom) {
        this.getCinemaList()
      }
    })
  }

  componentDidMount() {
    this.getCinemaList()
    this.bindEvent()
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="my-container my-container-cinema">
          <div className="my-topbar">
            <div className="my-topbar-left">
              <span>杭州</span>
              <i className="icon-arrow-down"></i>
            </div>
            <div className="my-topbar-tab">

            </div>
            <div className="my-topbar-right">
              <span></span>
            </div>
          </div>

          <div className="cinema-list">
            {this.state.cinemaList.map((cinema, index) => {
              return <CinemaItem key={index} info={cinema}/>
            })}
            { !this.state.cinemaFinish && <div className="loading-more">加载中...</div> }
          </div>
        </div>
        <Tabbar active={2}/>
      </div>
    )
  }
}

export default Cinema