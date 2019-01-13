import React from 'react'
import './style.css'

class CinemaItem extends React.Component {
  render() {
    const info = this.props.info
    return (
      <div className="my-cinema-item">
        <div className="my-cinema-title">
          <span>{info.nm}</span>
          <span className="my-cinema-price">
            <span>{info.sellPrice}</span>元起
          </span>
        </div>

        <div className="my-cinema-location">
          <div className="my-cinema-address ellipsis">{info.addr}</div>
          <div className="my-cinema-distance">{info.distance}</div>
        </div>

        { info.tag.allowRefund || info.tag.sell || info.tag.snack || info.tag.vipTag || info.tag.hallType ?
        <div className="my-cinema-label">
          { info.tag.allowRefund && <span className="is-green">退</span> }
          { info.tag.sell && <span className="is-green">改签</span> }
          { info.tag.snack && <span className="is-yellow">小吃</span> }
          { info.tag.vipTag && <span className="is-yellow">{info.tag.vipTag}</span> }
          { info.tag.hallType && info.tag.hallType.map((item, index) => <span className="is-green" key={index}>{item}</span> )}
        </div> : ''
        }

        { info.promotion && info.promotion.platformActivityTag ?
        <div className="my-cinema-discount">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAA0VJREFUSA3FV1tIVFEUXXccNc3RSsgMX6EooehHQZSZFWSaBPURSR9hQUSR/UT+9BEU/UgfQS8qehIUQgV99KKPLIugLIyMiuxFNEo+Ksu3Tmt75jLece7xkjhuOHPOfpy91z1n733nGiD5ziAFPtRwWcx5rsgmjQx8p+86GKg2tuGb4Q/eyMCzJi1oKMcGOgiiwD3y5OEOLoBUzBoXF8tDAQyLjLFdDJQclmChgyQLgP+nlBJAxgTIrd0bMQ0wNBjz96rtLfX2bnzDwFCvrd7wnWIW2FHFByA+007rTP67GbiaZWurP4G764CIaNvNKDyqdI+r7G2G+ux11OgBdL6mRSzb07nQTjzzlLzAfxXBVnVbgcHuYKmF1wMQU1ckkLkReHceaH9l2YzEAsW3Pg2S5wM5W4BH263yENz4AMxNXV+AjiAA/V1KGyyPSjB3jTs7B5DBfEhabHUYb15BtVUek2TlNZxzAC8OAJ9vWF2V3VH87VKrPGM9UHLdKrPhnANYeRkYHrC6cU9XfOVPq1zyxiGND0Du2a6Oi5mYQnVMOJOkea25BzTXAmaOmLoQsx5AQg6QvlZVgjyVi+YyG/7Zk67WCw+yXGPYMzikbKX75VQC3Xz1P9sXImxApAcQPQPI3sxaZisdZkORpiJtVWp7sAf4ekutB/4AMgY5+n8BfbwSAbviktK/PBSIGLTSt2IxdscBiazrH88BTwaQtQloPKwcF50EWp8A7y9a3ebuAjqbFKiuT0Bvm1U/itO8afxWebuB1TfV0SdkAwv2A1EeKnnM7Y3AsrNsVBWjXHI5exGw6po6CU1w2aQHEMlA+XuApuN84r/WIMK9OQE0EFDRaSA2ma9mlmPhMXbAHbz/FqCUwM1KGbt7RKIHkFtFB8zqJv9Lx3QSGW+uALnf2vkM6AXmLAVSy1Qu3N8AxKUBS44EbEOs9EmYyid6yyM2j1HuVaicZeZ9qNbmr5yW/Dn5yPITEtv6ncDMPDIGh0+kY0ifhK4odYT9nYGNkoRp5arkAlL6HwLaGvjSugD08Pgdkh6AQycTMdPnwEQ8O9wrAJg9U0ZeF/PjwZSFZ+wp/zRzGfxAlG80jis8iXBch3ckFmNK7H9lNNyRgjo67AAAAABJRU5ErkJggg==" alt="惠"/>
          <span>{info.promotion.platformActivityTag}</span>
        </div> : ''
        }

        { info.promotion && info.promotion.cardPromotionTag ?
        <div className="my-cinema-card">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt=""/>
          <span>{info.promotion.cardPromotionTag}</span>
        </div> : ''
        }
      </div>
    )
  }
}

export default CinemaItem