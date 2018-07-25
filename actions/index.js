import * as types from './types'


export const requestFace = (screenshot) => {
  console.log('Requesting Face')
  return {
    type: types.REQUEST_FACE,
    screenshot
  }
}


export const receiveFace = (screenshot, response) => {
  return {
    type: types.RECEIVE_FACE,
    screenshot,
    face: response,
    receivedAt: Date.now()
  }
}

export const requestEmotion = (screenshot) => {
  console.log('Requesting Emotion')
  return {
    type: types.REQUEST_EMOTION,
    screenshot
  }
}


export const receiveEmotion = (screenshot, response) => {
  return {
    type: types.RECEIVE_EMOTION,
    screenshot,
    emotion: response,
    receivedAt: Date.now()
  }
}



export const fetchFace = (webcam) => {
  return (dispatch) => {
    let screenshot = webcam.getScreenshot();
    dispatch(requestFace(screenshot))
    let data = screenshot.toString();
    let str = data.substring(data.indexOf(",") + 1);

    var header = new Headers({
        'Content-Type' : 'application/octet-stream',
        'Ocp-Apim-Subscription-Key' : '49101dddd19e415ba9970d2d8b3b3172'
    });
    var initObject = {
        method : 'post',
        body :  new Buffer(str, 'base64'),
        headers: header
    };
    var url = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect' + '?returnFaceId=false' +
        '&returnFaceLandmarks=false' + '&returnFaceAttributes=age,gender,facialHair,glasses,emotion,makeup,hair,accessories,exposure';
    fetch(url, initObject)
    .then(response => response.json())
    .then(response => {
      dispatch(receiveFace(screenshot, response))
      console.log(response)
    })
  }
}

export const fetchEmotion = (webcam) => {
  return (dispatch) => {
    let screenshot = webcam.getScreenshot();
    dispatch(requestEmotion(screenshot))
    let data = screenshot.toString();
    let str = data.substring(data.indexOf(",") + 1);

    var header = new Headers({
        'Content-Type' : 'application/octet-stream',
        'Ocp-Apim-Subscription-Key' : '49101dddd19e415ba9970d2d8b3b3172'
    });
    var initObject = {
        method : 'post',
        body :  new Buffer(str, 'base64'),
        headers: header
    };
    var url = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?';
    fetch(url, initObject)
    .then(response => response.json())
    .then(response => {
      dispatch(receiveFace(screenshot, response))
      console.log(response)
    })
  }
}




export const mountWebcam = (webcam) => {
  return {
    type: types.MOUNT_WEBCAM,
    webcam
  }
}
