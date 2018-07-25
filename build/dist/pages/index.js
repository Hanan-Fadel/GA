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
        var emotionList = _react2.default.createElement('div', {}, _react2.default.createElement('ul', {}, [_react2.default.createElement('li', {}, "anger: " + anger * 100 + "%"), _react2.default.createElement('li', {}, "contempt: " + contempt * 100 + "%"), _react2.default.createElement('li', {}, "disgust: " + disgust * 100 + "%"), _react2.default.createElement('li', {}, "disgust: " + disgust * 100 + "%"), _react2.default.createElement('li', {}, "fear: " + fear * 100 + "%"), _react2.default.createElement('li', {}, "happiness: " + happiness * 100 + "%"), _react2.default.createElement('li', {}, "neutral: " + neutral * 100 + "%"), _react2.default.createElement('li', {}, "sadness: " + sadness * 100 + "%"), _react2.default.createElement('li', {}, "surprise: " + surprise * 100 + "%")]));
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
         */}
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
      })), _react2.default.createElement(_arwes.Button, { onClick: this.capture, animate: true }, 'Scan'));
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
        return _react2.default.createElement(_arwes.Content, { className: classes.root }, _react2.default.createElement('div', { className: classes.content }, _react2.default.createElement('div', { className: classes.section, style: { margin: '0px', align: "left", fontSize: '18px' } }, _react2.default.createElement(WebcamCapture, { className: classes.profile, animate: true,
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
        }, _react2.default.createElement('div', { id: 'emotion', animate: true, show: anim.entering, style: { padding: '10px 10px', align: "left", fontSize: '18px' } })), _react2.default.createElement(_arwes.Line, { animate: true }), _react2.default.createElement('div', { className: classes.section }, _react2.default.createElement(_components.Link, { className: classes.detail, href: 'https://www.linkedin.com/in/romelperez', target: 'linkedin', onLink: _this3.onLink }, _react2.default.createElement(_components.TextIcon, { className: classes.textIcon, show: anim.entered, icon: 'code-brackets' }, 'Frontend Engineer SI CHEN')), _react2.default.createElement(_components.Link, { className: classes.detail, href: 'https://hugeinc.com', target: '_blank', onLink: _this3.onLink }, _react2.default.createElement(_components.TextIcon, { className: classes.textIcon, show: anim.entered, icon: 'briefcase-outline' }, 'Huge')), _react2.default.createElement(_components.Link, { className: classes.detail, href: 'https://www.google.com.co/maps/place/Medellin', target: '_blank', onLink: _this3.onLink }, _react2.default.createElement(_components.TextIcon, { className: classes.textIcon, show: anim.entered, icon: 'map-marker-outline' }, 'Medellin'))), _react2.default.createElement('div', { className: classes.section }, _react2.default.createElement(_components.Link, { className: classes.detail, href: '/projects', onLink: _this3.onLink }, _react2.default.createElement(_arwes.Button, { className: classes.button, animate: true, show: anim.entered }, function (anim2) {
          return _react2.default.createElement(_arwes.Words, { animate: true, show: anim2.entered }, 'Projects');
        })), _react2.default.createElement(_components.Link, { className: classes.detail, href: 'https://www.linkedin.com/in/romelperez', target: 'linkedin', onLink: _this3.onLink }, _react2.default.createElement(_arwes.Button, { className: classes.button, animate: true, show: anim.entered }, function (anim2) {
          return _react2.default.createElement(_arwes.Words, { animate: true, show: anim2.entered }, 'Curriculum');
        })), _react2.default.createElement(_components.Link, { className: classes.detail, href: 'https://github.com/romelperez', target: 'github', onLink: _this3.onLink }, _react2.default.createElement(_arwes.Button, { className: classes.button, animate: true, show: anim.entered }, function (anim2) {
          return _react2.default.createElement(_arwes.Words, { animate: true, show: anim2.entered }, 'GitHub');
        })), _react2.default.createElement(_components.Link, { className: classes.detail, href: 'https://twitter.com/romelperez07', target: 'twitter', onLink: _this3.onLink }, _react2.default.createElement(_arwes.Button, { className: classes.button, animate: true, show: anim.entered }, function (anim2) {
          return _react2.default.createElement(_arwes.Words, { animate: true, show: anim2.entered }, 'Twitter');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJwb3NpdGlvbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY29udGVudCIsIm1hcmdpbiIsInBhZGRpbmciLCJ0aGVtZSIsInRleHRBbGlnbiIsIm1heFdpZHRoIiwicGFkZGluZ1RvcCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsIm1hcmdpblRvcCIsInNlY3Rpb24iLCJtYXJnaW5Cb3R0b20iLCJwcm9maWxlIiwid2lkdGgiLCJkZXRhaWwiLCJ0ZXh0SWNvbiIsImJ1dHRvbiIsInJlc3BvbnNpdmUiLCJzbWFsbCIsIldlYmNhbUNhcHR1cmUiLCJwcm9wcyIsImZldGNoRmFjZSIsImRpc3BhdGNoIiwic2NyZWVuc2hvdCIsIndlYmNhbSIsImdldFNjcmVlbnNob3QiLCJyZXF1ZXN0RmFjZSIsImRhdGEiLCJ0b1N0cmluZyIsInN0ciIsInN1YnN0cmluZyIsImluZGV4T2YiLCJoZWFkZXIiLCJIZWFkZXJzIiwiaW5pdE9iamVjdCIsIm1ldGhvZCIsImJvZHkiLCJCdWZmZXIiLCJoZWFkZXJzIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVjZWl2ZUZhY2UiLCJjb25zb2xlIiwibG9nIiwic2V0UmVmIiwiY2FwdHVyZSIsImltYWdlU3JjIiwic2V0U3RhdGUiLCJjYXB0dXJlZCIsImdlbmRlciIsImFnZSIsImdsYXNzZXMiLCJhbmdlciIsImNvbnRlbXB0IiwiZGlzZ3VzdCIsImZlYXIiLCJoYXBwaW5lc3MiLCJuZXV0cmFsIiwic2FkbmVzcyIsInN1cnByaXNlIiwiZW1vdGlvbkxpc3QiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJtYWtldXBJbmZvIiwiZ2VuZGVyRGlzcGxheSIsImFnZURpc3BsYXkiLCJnbGFzc2VzSW5mbyIsImVtb3Rpb25JbmZvIiwiY29udGVtcHRJbmZvIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaHlkcmF0ZSIsInN0YXRlIiwiYmluZCIsInZpZGVvQ29uc3RyYWludHMiLCJoZWlnaHQiLCJmYWNpbmdNb2RlIiwiYnV0dG9uMSIsInNob3ciLCJDb21wb25lbnQiLCJJbmRleCIsImFyZ3VtZW50cyIsIm9uTGluayIsImxvYWRlZCIsImxvYWRlciIsImdldFRoZW1lIiwic3RhcnRMb2FkaW5nIiwiY2xhc3NlcyIsInJlc291cmNlcyIsImJhY2tncm91bmQiLCJwYXR0ZXJuIiwidW5tb3VudE9uRXhpdCIsImFsaWduIiwiYW5pbSIsImVudGVyZWQiLCJlbnRlcmluZyIsImFuaW0yIiwiZ2V0IiwidXRpbHMiLCJnZXRSZXNwb25zaXZlUmVzb3VyY2UiLCJsb2FkIiwiaW1hZ2VzIiwidGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBZUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sU0FBUyxTQUFULEFBQVMsY0FBQTs7O2dCQUNQLEFBQ00sQUFDVjtZQUZJLEFBRUUsQUFDTjthQUhJLEFBR0csQUFDUDtXQUpJLEFBSUMsQUFDTDtjQUxJLEFBS0ksQUFDUjtlQU5JLEFBTUssQUFDVDtxQkFSVyxBQUNQLEFBT1csQUFFakI7QUFUTSxBQUNKOztjQVFPLEFBQ0MsQUFDUjtlQUFTLE1BRkYsQUFFUSxBQUNmO2lCQUhPLEFBR0ksQUFDWDtnQkFKTyxBQUlHLEFBQ1Y7O2dCQUFRLEFBQ0UsQUFDUjtvQkFGTSxBQUVNLEFBQ1o7a0JBSE0sQUFHSSxBQUNWO29CQVRLLEFBS0MsQUFJTSxBQUVkO0FBTlEsQUFDTjs7Z0JBTkssQUFXQSxBQUNHLEFBRVY7QUFITyxBQUNMOzttQkFHVyxNQUFBLEFBQU0sU0F6QlIsQUFVSixBQWNnQixBQUNLLEFBRzlCO0FBSnlCLEFBQ3JCO0FBZkssQUFD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