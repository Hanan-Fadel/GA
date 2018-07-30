'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _arwes = require("arwes");

var _Camera = require('./Camera');

var _Camera2 = _interopRequireDefault(_Camera);

var _reactWebcam = require("react-webcam");

var _reactWebcam2 = _interopRequireDefault(_reactWebcam);

var _reactImageFile = require("react-image-file");

var _reactImageFile2 = _interopRequireDefault(_reactImageFile);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _withTemplate = require('../site/withTemplate');

var _withTemplate2 = _interopRequireDefault(_withTemplate);

var _components = require('../site/components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

require("dotenv").load();

var azure = require("azure-storage");
var blobService = azure.createBlobService("DefaultEndpointsProtocol=https;AccountName=facewcu;AccountKey=6cPTAUfLiGlGkinaCCfO6lX396BUFTdckOR7/4IAs8FG35pTS4sGNUlCxwsUibUYNjEQFlbHZc7+mhkvlLXf/g==;EndpointSuffix=core.windows.net");

blobService.createContainerIfNotExists('wcuphoto', {
  publicAccessLevel: 'blob'
}, function (error, result, response) {
  if (!error) {
    console.log(result);
    // if result = true, container was created.
    // if result = false, container already existed.
  }
});

var styles = function styles(theme) {
  return _defineProperty({
    root: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      margin: 'auto',
      padding: theme.padding,
      textAlign: 'center',
      maxWidth: 700,
      '& h1': {
        margin: 0,
        paddingTop: 5,
        fontSize: 32,
        lineHeight: '1'
      },
      '& p': {
        margin: 0
      },
      '& $detail + $detail': {
        marginTop: theme.margin / 2
      }
    },
    section: {
      marginBottom: theme.margin / 1.5,
      '&:last-child': {
        margin: 0
      }
    },
    profile: {
      margin: 0,
      display: 'inline-block',
      width: 150
    },
    detail: {
      display: 'block'
    },
    textIcon: {
      textAlign: 'center'
    },
    button: {
      width: '50%'
    }
  }, '@media screen and (min-width: ' + (theme.responsive.small + 1) + 'px)', {
    content: {
      '& $detail + $detail': {
        margin: [0, 0, 0, theme.margin / 2]
      }
    },
    detail: {
      display: 'inline-block'
    },
    button: {
      width: 'auto'
    }
  });
};

var WebcamCapture = function (_React$Component) {
  _inherits(WebcamCapture, _React$Component);

  function WebcamCapture(props) {
    _classCallCheck(this, WebcamCapture);

    var _this = _possibleConstructorReturn(this, (WebcamCapture.__proto__ || Object.getPrototypeOf(WebcamCapture)).call(this, props));

    _this.fetchFace = function () {
      return function (dispatch) {
        var screenshot = _this.webcam.getScreenshot();
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

    _this.setRef = function (webcam) {
      _this.webcam = webcam;
    };

    _this.capture = function () {
      _this.imageSrc = _this.webcam.getScreenshot();

      _this.setState({ captured: true });
      var data = _this.imageSrc.toString();

      var matches = data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      var type = matches[1];
      var buffer = new Buffer(matches[2], 'base64');
      var timestamp = Date.now();
      console.log(timestamp);
      var imageName = "profile-pic-" + timestamp + ".jpg";
      blobService.createBlockBlobFromText('wcuphoto', imageName, buffer, { contentType: type }, function (error, result, response) {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      });

      var str = data.substring(data.indexOf(",") + 1);

      var header = new Headers({
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': '99e6e884fe5344a8a5582053ac88a60f'
      });
      var initObject = {
        method: 'post',
        body: new Buffer(str, 'base64'),
        headers: header
      };
      var url = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect' + '?returnFaceId=false' + '&returnFaceLandmarks=false' + '&returnFaceAttributes=age,gender,facialHair,glasses,emotion,makeup,hair,accessories,exposure';
      fetch(url, initObject).then(function (response) {
        return response.json();
      }).then(function (response) {
        console.log(response);
        var gender = response[0]['faceAttributes']['gender'];
        var age = response[0]['faceAttributes']['age'];
        var glasses = response[0]['faceAttributes']['glasses'];
        var anger = response[0]['faceAttributes']['emotion']['anger'];
        var contempt = response[0]['faceAttributes']['emotion']['contempt'];
        var disgust = response[0]['faceAttributes']['emotion']['disgust'];
        var fear = response[0]['faceAttributes']['emotion']['fear'];
        var happiness = response[0]['faceAttributes']['emotion']['happiness'];
        var neutral = response[0]['faceAttributes']['emotion']['neutral'];
        var sadness = response[0]['faceAttributes']['emotion']['sadness'];
        var surprise = response[0]['faceAttributes']['emotion']['surprise'];
        console.log(response[0]['faceAttributes']['gender']);
        console.log(response[0]['faceAttributes']['age']);
        var emotionList = _react2.default.createElement('div', {}, _react2.default.createElement('ul', {}, [_react2.default.createElement('li', {}, "anger: " + anger * 100 + "%"), _react2.default.createElement('li', {}, "contempt: " + contempt * 100 + "%"), _react2.default.createElement('li', {}, "disgust: " + disgust * 100 + "%"), _react2.default.createElement('li', {}, "fear: " + fear * 100 + "%"), _react2.default.createElement('li', {}, "happiness: " + happiness * 100 + "%"), _react2.default.createElement('li', {}, "neutral: " + neutral * 100 + "%"), _react2.default.createElement('li', {}, "sadness: " + sadness * 100 + "%"), _react2.default.createElement('li', {}, "surprise: " + surprise * 100 + "%")]));
        var makeupInfo = _react2.default.createElement('div', {}, _react2.default.createElement('ul', {}, [_react2.default.createElement('li', {}, "Eye Makeup: " + response[0]['faceAttributes']['makeup']['eyeMakeup']), _react2.default.createElement('li', {}, "Lip Makeup: " + response[0]['faceAttributes']['makeup']['lipMakeup'])]));
        var genderDisplay = "Gender: " + gender;
        var ageDisplay = "Age: " + age;
        var glassesInfo = "Glasses: " + glasses;
        var emotionInfo = "anger: " + anger * 100 + "%";
        var contemptInfo = "Contempt: " + contempt * 100 + "%";
        _reactDom2.default.render(genderDisplay, document.getElementById('gender'));
        _reactDom2.default.render(ageDisplay, document.getElementById('age'));
        _reactDom2.default.render(glassesInfo, document.getElementById('glassess'));
        _reactDom2.default.render(makeupInfo, document.getElementById('makeupInfo'));
        _reactDom2.default.hydrate(emotionList, document.getElementById('emotion'));
      });
    };

    _this.state = { captured: false };
    var imageSrc = void 0;
    _this.fetchFace = _this.fetchFace.bind(_this);
    _this.capture = _this.capture.bind(_this);
    return _this;
  }

  _createClass(WebcamCapture, [{
    key: 'render',
    value: function render() {
      var videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: 'user'
      };
      var button1 = void 0;
      {/*
         if (this.state.captured & this.imageSrc != undefined) {
          console.log(this.imageSrc);
          button1 = <img src={this.imageSrc} alt='screenshot' height='80' />;
         }
         */
      }
      return _react2.default.createElement('div', null, _react2.default.createElement(_arwes.Frame, {
        show: this.state.show,
        animate: true,
        level: 2,
        corners: 1,
        layer: 'primary'
      }, _react2.default.createElement(_reactWebcam2.default, {
        audio: false,
        height: 250,
        ref: this.setRef,
        screenshotFormat: 'image/jpeg',
        width: 350,
        videoConstraints: videoConstraints
      })), _react2.default.createElement('div', { style: { margin: '4px 4px, 4px, 4px', align: "left", fontSize: '18px', height: '10px' } }), _react2.default.createElement(_arwes.Button, { onClick: this.capture, animate: true }, 'Scan'));
    }
  }]);

  return WebcamCapture;
}(_react2.default.Component);

var Index = function (_React$Component2) {
  _inherits(Index, _React$Component2);

  function Index() {
    _classCallCheck(this, Index);

    var _this2 = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

    _this2.onLink = function () {
      _this2.setState({ show: false });
    };

    _this2.state = {
      show: false,
      loaded: false
    };

    _this2.profile = '/static/img/profile.jpg';

    _this2.loader = (0, _arwes.createLoader)();
    _this2.responsive = (0, _arwes.createResponsive)({
      getTheme: function getTheme() {
        return _this2.props.theme;
      }
    });
    return _this2;
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startLoading();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          show = _state.show,
          loaded = _state.loaded;
      var _props = this.props,
          classes = _props.classes,
          resources = _props.resources;
      var background = resources.background,
          pattern = resources.pattern;

      return _react2.default.createElement('div', null, _react2.default.createElement(_arwes.Loading, {
        full: true,
        animate: true,
        show: !show && !loaded,
        animation: {
          unmountOnExit: true
        }
      }), _react2.default.createElement(_arwes.Arwes, {
        animate: true,
        show: show,
        showResources: show,
        background: background,
        pattern: pattern
      }, function (anim) {
        return _react2.default.createElement(_arwes.Content, { className: classes.root }, _react2.default.createElement('div', { className: classes.content }, _react2.default.createElement('div', { className: classes.section, style: { margin: '0px 4px, 4px, 4px', align: "left", fontSize: '18px' } }, _react2.default.createElement(WebcamCapture, { className: classes.profile, animate: true,
          show: anim.entered })), _react2.default.createElement('h3', null, _react2.default.createElement(_arwes.Words, { animate: true, show: anim.entered }, 'User Profile')), _react2.default.createElement(_arwes.Frame, {
          show: _this3.state.show,
          animate: true,
          level: 2,
          corners: 1,
          layer: 'primary'
        }, _react2.default.createElement('div', { style: { padding: '0px 0px', align: "left", fontSize: '18px' } }, _react2.default.createElement(_arwes.List, { node: 'ul' }, _react2.default.createElement('div', { id: 'age', animate: true, show: anim.entering }), _react2.default.createElement('div', { id: 'gender', animate: true, show: anim.entering }), _react2.default.createElement('div', { id: 'glassess' }), _react2.default.createElement('div', { id: 'makeupInfo' })))), _react2.default.createElement(_arwes.Line, { animate: true }), _react2.default.createElement('h3', null, _react2.default.createElement(_arwes.Words, { animate: true }, 'Emotion Analysis')), _react2.default.createElement(_arwes.Frame, {
          show: _this3.state.show,
          animate: true,
          level: 2,
          corners: 1,
          layer: 'primary'
        }, _react2.default.createElement('div', { id: 'emotion', animate: true, show: anim.entering, style: { padding: '10px 10px', align: "left", fontSize: '18px' } })), _react2.default.createElement(_arwes.Line, { animate: true }), _react2.default.createElement('div', { className: classes.section }, _react2.default.createElement(_components.Link, { className: classes.detail, href: 'http://www.quake0day.com/', target: '_blank', onLink: _this3.onLink }, _react2.default.createElement(_components.TextIcon, { className: classes.textIcon, show: anim.entered, icon: 'face' }, 'quake0day')), _react2.default.createElement(_components.Link, { className: classes.detail, href: '#', onLink: _this3.onLink }, _react2.default.createElement(_components.TextIcon, { className: classes.textIcon, show: anim.entered, icon: 'code-brackets' }, 'West Chester University')), _react2.default.createElement(_components.Link, { className: classes.detail, href: '#', target: '_blank', onLink: _this3.onLink }, _react2.default.createElement(_arwes.Logo, { animate: true, size: 20 }), ' Computer Science')), _react2.default.createElement('div', { className: classes.section }, _react2.default.createElement(_components.Link, { className: classes.detail, href: '#', onLink: _this3.onLink }, _react2.default.createElement(_arwes.Button, { className: classes.button, animate: true, show: anim.entered }, function (anim2) {
          return _react2.default.createElement(_arwes.Words, { animate: true, show: anim2.entered }, 'Projects');
        })), _react2.default.createElement(_components.Link, { className: classes.detail, href: '#', target: '', onLink: _this3.onLink }, _react2.default.createElement(_arwes.Button, { className: classes.button, animate: true, show: anim.entered }, function (anim2) {
          return _react2.default.createElement(_arwes.Words, { animate: true, show: anim2.entered }, 'APP Download');
        })), _react2.default.createElement(_components.Link, { className: classes.detail, href: 'https://github.com/quake0day', target: 'github', onLink: _this3.onLink }, _react2.default.createElement(_arwes.Button, { className: classes.button, animate: true, show: anim.entered }, function (anim2) {
          return _react2.default.createElement(_arwes.Words, { animate: true, show: anim2.entered }, 'GitHub');
        })), _react2.default.createElement(_components.Link, { className: classes.detail, href: 'https://cs.wcupa.edu/', target: 'twitter', onLink: _this3.onLink }, _react2.default.createElement(_arwes.Button, { className: classes.button, animate: true, show: anim.entered }, function (anim2) {
          return _react2.default.createElement(_arwes.Words, { animate: true, show: anim2.entered }, 'Website');
        })))));
      }));
    }
  }, {
    key: 'startLoading',
    value: function startLoading() {
      var _this4 = this;

      var responsive = this.responsive.get();
      var background = _arwes.utils.getResponsiveResource(this.props.resources.background, responsive);

      this.loader.load({ images: [background, this.profile] }, { timeout: 5 * 1000 }).then(function () {}, function () {}).then(function () {
        return _this4.setState({ show: true, loaded: true });
      });
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = (0, _withTemplate2.default)((0, _arwes.withStyles)(styles)(Index));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJsb2FkIiwiYXp1cmUiLCJibG9iU2VydmljZSIsImNyZWF0ZUJsb2JTZXJ2aWNlIiwiY3JlYXRlQ29udGFpbmVySWZOb3RFeGlzdHMiLCJwdWJsaWNBY2Nlc3NMZXZlbCIsImVycm9yIiwicmVzdWx0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwicm9vdCIsInBvc2l0aW9uIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjb250ZW50IiwibWFyZ2luIiwicGFkZGluZyIsInRoZW1lIiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJwYWRkaW5nVG9wIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibWFyZ2luVG9wIiwic2VjdGlvbiIsIm1hcmdpbkJvdHRvbSIsInByb2ZpbGUiLCJ3aWR0aCIsImRldGFpbCIsInRleHRJY29uIiwiYnV0dG9uIiwicmVzcG9uc2l2ZSIsInNtYWxsIiwiV2ViY2FtQ2FwdHVyZSIsInByb3BzIiwiZmV0Y2hGYWNlIiwiZGlzcGF0Y2giLCJzY3JlZW5zaG90Iiwid2ViY2FtIiwiZ2V0U2NyZWVuc2hvdCIsInJlcXVlc3RGYWNlIiwiZGF0YSIsInRvU3RyaW5nIiwic3RyIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImhlYWRlciIsIkhlYWRlcnMiLCJpbml0T2JqZWN0IiwibWV0aG9kIiwiYm9keSIsIkJ1ZmZlciIsImhlYWRlcnMiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwicmVjZWl2ZUZhY2UiLCJzZXRSZWYiLCJjYXB0dXJlIiwiaW1hZ2VTcmMiLCJzZXRTdGF0ZSIsImNhcHR1cmVkIiwibWF0Y2hlcyIsIm1hdGNoIiwidHlwZSIsImJ1ZmZlciIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJpbWFnZU5hbWUiLCJjcmVhdGVCbG9ja0Jsb2JGcm9tVGV4dCIsImNvbnRlbnRUeXBlIiwiZ2VuZGVyIiwiYWdlIiwiZ2xhc3NlcyIsImFuZ2VyIiwiY29udGVtcHQiLCJkaXNndXN0IiwiZmVhciIsImhhcHBpbmVzcyIsIm5ldXRyYWwiLCJzYWRuZXNzIiwic3VycHJpc2UiLCJlbW90aW9uTGlzdCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIm1ha2V1cEluZm8iLCJnZW5kZXJEaXNwbGF5IiwiYWdlRGlzcGxheSIsImdsYXNzZXNJbmZvIiwiZW1vdGlvbkluZm8iLCJjb250ZW1wdEluZm8iLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoeWRyYXRlIiwic3RhdGUiLCJiaW5kIiwidmlkZW9Db25zdHJhaW50cyIsImhlaWdodCIsImZhY2luZ01vZGUiLCJidXR0b24xIiwic2hvdyIsImFsaWduIiwiQ29tcG9uZW50IiwiSW5kZXgiLCJhcmd1bWVudHMiLCJvbkxpbmsiLCJsb2FkZWQiLCJsb2FkZXIiLCJnZXRUaGVtZSIsInN0YXJ0TG9hZGluZyIsImNsYXNzZXMiLCJyZXNvdXJjZXMiLCJiYWNrZ3JvdW5kIiwicGF0dGVybiIsInVubW91bnRPbkV4aXQiLCJhbmltIiwiZW50ZXJlZCIsImVudGVyaW5nIiwiYW5pbTIiLCJnZXQiLCJ1dGlscyIsImdldFJlc3BvbnNpdmVSZXNvdXJjZSIsImltYWdlcyIsInRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQWdCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBUSxrQkFBUixBQUFrQjs7QUFFbEIsSUFBTSxRQUFOLEFBQWMsQUFBUTtBQUN0QixJQUFJLGNBQWMsTUFBQSxBQUFNLGtCQUF4QixBQUFrQixBQUF3Qjs7QUFHMUMsWUFBQSxBQUFZLDJCQUFaLEFBQXVDO3FCQUF2QyxBQUFtRCxBQUM5QjtBQUQ4QixBQUNqRCxHQUNDLFVBQUEsQUFBUyxP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