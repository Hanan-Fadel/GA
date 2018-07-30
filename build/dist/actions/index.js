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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvaW5kZXguanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1ZXN0RmFjZSIsInNjcmVlbnNob3QiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIlJFUVVFU1RfRkFDRSIsInJlY2VpdmVGYWNlIiwicmVzcG9uc2UiLCJSRUNFSVZFX0ZBQ0UiLCJmYWNlIiwicmVjZWl2ZWRBdCIsIkRhdGUiLCJub3ciLCJyZXF1ZXN0RW1vdGlvbiIsIlJFUVVFU1RfRU1PVElPTiIsInJlY2VpdmVFbW90aW9uIiwiUkVDRUlWRV9FTU9USU9OIiwiZW1vdGlvbiIsImZldGNoRmFjZSIsIndlYmNhbSIsImRpc3BhdGNoIiwiZ2V0U2NyZWVuc2hvdCIsImRhdGEiLCJ0b1N0cmluZyIsInN0ciIsInN1YnN0cmluZyIsImluZGV4T2YiLCJoZWFkZXIiLCJIZWFkZXJzIiwiaW5pdE9iamVjdCIsIm1ldGhvZCIsImJvZHkiLCJCdWZmZXIiLCJoZWFkZXJzIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsImZldGNoRW1vdGlvbiIsIm1vdW50V2ViY2FtIiwiTU9VTlRfV0VCQ0FNIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0lBQVksQTs7Ozs7Ozs7Ozs7Ozs7QUFHTCxJQUFNLG9DQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsWUFBZSxBQUN6QztVQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7O1VBQ1EsTUFERCxBQUNPLEFBQ1o7Z0JBRkYsQUFBTyxBQUlSO0FBSlEsQUFDTDtBQUhHOztBQVNBLElBQU0sb0NBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxZQUFELEFBQWEsVUFBYSxBQUNuRDs7VUFDUSxNQURELEFBQ08sQUFDWjtnQkFGSyxBQUdMO1VBSEssQUFHQyxBQUNOO2dCQUFZLEtBSmQsQUFBTyxBQUlPLEFBQUssQUFFcEI7QUFOUSxBQUNMO0FBRkc7O0FBU0EsSUFBTSwwQ0FBaUIsU0FBakIsQUFBaUIsZUFBQSxBQUFDLFlBQWUsQUFDNUM7VUFBQSxBQUFRLElBQVIs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