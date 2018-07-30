'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mountWebcam = exports.fetchEmotion = exports.fetchFace = exports.receiveEmotion = exports.requestEmotion = exports.receiveFace = exports.requestFace = undefined;

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

var requestFace = exports.requestFace = function requestFace(screenshot) {
  console.log('Requesting Face');
  return {
    type: types.REQUEST_FACE,
    screenshot: screenshot
  };
};

var receiveFace = exports.receiveFace = function receiveFace(screenshot, response) {
  return {
    type: types.RECEIVE_FACE,
    screenshot: screenshot,
    face: response,
    receivedAt: Date.now()
  };
};

var requestEmotion = exports.requestEmotion = function requestEmotion(screenshot) {
  console.log('Requesting Emotion');
  return {
    type: types.REQUEST_EMOTION,
    screenshot: screenshot
  };
};

var receiveEmotion = exports.receiveEmotion = function receiveEmotion(screenshot, response) {
  return {
    type: types.RECEIVE_EMOTION,
    screenshot: screenshot,
    emotion: response,
    receivedAt: Date.now()
  };
};

var fetchFace = exports.fetchFace = function fetchFace(webcam) {
  return function (dispatch) {
    var screenshot = webcam.getScreenshot();
    dispatch(requestFace(screenshot));
    var data = screenshot.toString();
    var str = data.substring(data.indexOf(",") + 1);

    var header = new Headers({
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': '49101dddd19e415ba9970d2d8b3b3172'
    });
    var initObject = {
      method: 'post',
      body: new Buffer(str, 'base64'),
      headers: header
    };
    var url = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect' + '?returnFaceId=false' + '&returnFaceLandmarks=false' + '&returnFaceAttributes=age,gender,facialHair,glasses,emotion,makeup,hair,accessories,exposure';
    fetch(url, initObject).then(function (response) {
      return response.json();
    }).then(function (response) {
      dispatch(receiveFace(screenshot, response));
      console.log(response);
    });
  };
};

var fetchEmotion = exports.fetchEmotion = function fetchEmotion(webcam) {
  return function (dispatch) {
    var screenshot = webcam.getScreenshot();
    dispatch(requestEmotion(screenshot));
    var data = screenshot.toString();
    var str = data.substring(data.indexOf(",") + 1);

    var header = new Headers({
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': '49101dddd19e415ba9970d2d8b3b3172'
    });
    var initObject = {
      method: 'post',
      body: new Buffer(str, 'base64'),
      headers: header
    };
    var url = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?';
    fetch(url, initObject).then(function (response) {
      return response.json();
    }).then(function (response) {
      dispatch(receiveFace(screenshot, response));
      console.log(response);
    });
  };
};

var mountWebcam = exports.mountWebcam = function mountWebcam(webcam) {
  return {
    type: types.MOUNT_WEBCAM,
    webcam: webcam
  };
};