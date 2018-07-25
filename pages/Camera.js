import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Webcam from 'react-webcam'
import { fetchFace, fetchEmotion, mountWebcam } from '../actions'

class Camera extends Component {
  constructor (props) {
    super(props)

    this.takeScreenshot = this.takeScreenshot.bind(this)
  }

  componentDidMount () {
    this.props.mountWebcam(this.refs.webcam)
  }

  takeScreenshot () {
    const screenshot = this.props.webcam.getScreenshot()
    console.log(screenshot);
    this.props.fetchFace(screenshot)
    this.props.fetchEmotion(screenshot)
  }

  render () {
    return (
        <Webcam
          ref='webcam'
          muted
          height={400}
          width={400}
          screenshotFormat='image/png'
        />
    )
  }
}

const mapStateToProps = (state) => {
  const webcam = state.webcam
  return {
    webcam
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchFace, fetchEmotion, mountWebcam }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Camera)
