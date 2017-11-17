import React, { Component } from 'react';
import { connect } from 'react-redux'
import IndiaMap from '../images/India-Map.jpg'
import { setStream } from '../actions/map.actions'

import imageMapResize from 'image-map-resizer'

class MapImage extends Component {

  play = event => {
    event.preventDefault()
    console.log("target", event.target.dataset.state )
    const { setStream } = this.props
    setStream(event.target.dataset.state)
  }

  componentDidMount() {
    imageMapResize(this.refs.map)
  }
  render() {
    return (
      
        <div className="row">
          <div className="col-md-12">
            <h3>Online Radio Station</h3>
            <img id="map" src={IndiaMap} className="img-responsive" usemap="#IndiaMap" />
            <map ref="map" name="IndiaMap" onClick={(event) => this.play(event) }>
              <area shape="circle" coords="185,343,25" href="#" data-state='Rajasthan' />
              <area shape="circle" coords="437,406,25" href="#" data-state='UttarPradesh' />
              <area shape="circle" coords="347,518,25" href="#" data-state='MadhyaPradesh'/>
              <area shape="circle" coords="235,650,25" href="#" data-state='Maharashtra'/>
              <area shape="circle" coords="348,766,25" href="#" data-state='AndhraPradesh'/>
              <area shape="circle" coords="248,790,25" href="#" data-state='Karnataka' />
              <area shape="circle" coords="344,873,25" href="#" data-state='TamilNadu'/>
              <area shape="circle" coords="253,60,25"  href="#" data-state='JammuKashmir' />
              <area shape="circle" coords="107,530,25" href="#" data-state='Gujrat'/>
            </map>
            
          </div>
        </div>
       
      
      
    )
  }
}



export default connect(null, {setStream})(MapImage)