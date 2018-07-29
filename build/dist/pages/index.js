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
        }, _react2.default.createElement('div', { id: 'emotion', animate: true, show: anim.entering, style: { padding: '10px 10px', align: "left", fontSize: '18px' } })), _react2.default.createElement(_arwes.Line, { animate: true }), _react2.default.createElement('div', { className: classes.section }, _react2.default.createElement(_components.Link, { className: classes.detail, href: 'https://hugeinc.com', target: '_blank', onLink: _this3.onLink }, _react2.default.createElement(_components.TextIcon, { className: classes.textIcon, show: anim.entered, icon: 'face' }, 'quake0day')), _react2.default.createElement(_components.Link, { className: classes.detail, href: 'https://www.linkedin.com/in/romelperez', target: 'linkedin', onLink: _this3.onLink }, _react2.default.createElement(_components.TextIcon, { className: classes.textIcon, show: anim.entered, icon: 'code-brackets' }, 'West Chester University')), _react2.default.createElement(_components.Link, { className: classes.detail, href: 'https://www.google.com.co/maps/place/Medellin', target: '_blank', onLink: _this3.onLink }, _react2.default.createElement(_arwes.Logo, { animate: true, size: 20 }), ' Computer Science')), _react2.default.createElement('div', { className: classes.section }, _react2.default.createElement(_components.Link, { className: classes.detail, href: '/projects', onLink: _this3.onLink }, _react2.default.createElement(_arwes.Button, { className: classes.button, animate: true, show: anim.entered }, function (anim2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJwb3NpdGlvbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY29udGVudCIsIm1hcmdpbiIsInBhZGRpbmciLCJ0aGVtZSIsInRleHRBbGlnbiIsIm1heFdpZHRoIiwicGFkZGluZ1RvcCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsIm1hcmdpblRvcCIsInNlY3Rpb24iLCJtYXJnaW5Cb3R0b20iLCJwcm9maWxlIiwid2lkdGgiLCJkZXRhaWwiLCJ0ZXh0SWNvbiIsImJ1dHRvbiIsInJlc3BvbnNpdmUiLCJzbWFsbCIsIldlYmNhbUNhcHR1cmUiLCJwcm9wcyIsImZldGNoRmFjZSIsImRpc3BhdGNoIiwic2NyZWVuc2hvdCIsIndlYmNhbSIsImdldFNjcmVlbnNob3QiLCJyZXF1ZXN0RmFjZSIsImRhdGEiLCJ0b1N0cmluZyIsInN0ciIsInN1YnN0cmluZyIsImluZGV4T2YiLCJoZWFkZXIiLCJIZWFkZXJzIiwiaW5pdE9iamVjdCIsIm1ldGhvZCIsImJvZHkiLCJCdWZmZXIiLCJoZWFkZXJzIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVjZWl2ZUZhY2UiLCJjb25zb2xlIiwibG9nIiwic2V0UmVmIiwiY2FwdHVyZSIsImltYWdlU3JjIiwic2V0U3RhdGUiLCJjYXB0dXJlZCIsImdlbmRlciIsImFnZSIsImdsYXNzZXMiLCJhbmdlciIsImNvbnRlbXB0IiwiZGlzZ3VzdCIsImZlYXIiLCJoYXBwaW5lc3MiLCJuZXV0cmFsIiwic2FkbmVzcyIsInN1cnByaXNlIiwiZW1vdGlvbkxpc3QiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJtYWtldXBJbmZvIiwiZ2VuZGVyRGlzcGxheSIsImFnZURpc3BsYXkiLCJnbGFzc2VzSW5mbyIsImVtb3Rpb25JbmZvIiwiY29udGVtcHRJbmZvIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaHlkcmF0ZSIsInN0YXRlIiwiYmluZCIsInZpZGVvQ29uc3RyYWludHMiLCJoZWlnaHQiLCJmYWNpbmdNb2RlIiwiYnV0dG9uMSIsInNob3ciLCJhbGlnbiIsIkNvbXBvbmVudCIsIkluZGV4IiwiYXJndW1lbnRzIiwib25MaW5rIiwibG9hZGVkIiwibG9hZGVyIiwiZ2V0VGhlbWUiLCJzdGFydExvYWRpbmciLCJjbGFzc2VzIiwicmVzb3VyY2VzIiwiYmFja2dyb3VuZCIsInBhdHRlcm4iLCJ1bm1vdW50T25FeGl0IiwiYW5pbSIsImVudGVyZWQiLCJlbnRlcmluZyIsImFuaW0yIiwiZ2V0IiwidXRpbHMiLCJnZXRSZXNwb25zaXZlUmVzb3VyY2UiLCJsb2FkIiwiaW1hZ2VzIiwidGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBZ0JBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQUE7OztnQkFDUCxBQUNNLEFBQ1Y7WUFGSSxBQUVFLEFBQ047YUFISSxBQUdHLEFBQ1A7V0FKSSxBQUlDLEFBQ0w7Y0FMSSxBQUtJLEFBQ1I7ZUFOSSxBQU1LLEFBQ1Q7cUJBUlcsQUFDUCxBQU9XLEFBRWpCO0FBVE0sQUFDSjs7Y0FRTyxBQUNDLEFBQ1I7ZUFBUyxNQUZGLEFBRVEsQUFDZjtpQkFITyxBQUdJLEFBQ1g7Z0JBSk8sQUFJRyxBQUNWOztnQkFBUSxBQUNFLEFBQ1I7b0JBRk0sQUFFTSxBQUNaO2tCQUhNLEFBR0ksQUFDVjtvQkFUSyxBQUtDLEFBSU0sQUFFZDtBQU5RLEFBQ047O2dCQU5LLEFBV0EsQUFDRyxBQUVWO0FBSE8sQUFDTDs7bUJBR1csTUFBQSxBQUFNLFNBekJSLEFBVUosQUFjZ0IsQUFDSyxBQUc5QjtBQUp5QixBQUNyQjtBQWZLLEFBQ1A7O29CQWtCYyxNQUFBLEFBQU0sU0FEYixBQUNzQixBQUM3Qjs7Z0JBOUJXLEFBNEJKLEFBRVMsQUFDTixBQUdaO0FBSmtCLEFBQ2Q7QUFISyxBQUNQOztjQUtPLEFBQ0MsQUFDUjtlQUZPLEFBRUUsQUFDVDthQXJDVyxBQWtDSixBQUdBLEFBRVQ7QUFMUyxBQUNQOztlQW5DVyxBQXVDTCxBQUNHLEFBRVg7QUFIUSxBQUNOOztpQkF4Q1csQUEwQ0gsQUFDRyxBQUViO0FBSFUsQUFDUjs7YUEzQ1csQUE2Q0wsQUFDQztBQURELEFBQ047QUE3Q0YseUNBZ0RrQyxNQUFBLEFBQU0sV0FBTixBQUFpQixRQWpEdEMsQUFpRDhDOzs7Z0JBRzdDLENBQUEsQUFBQyxHQUFELEFBQUksR0FBSixBQUFPLEdBQUcsTUFBQSxBQUFNLFNBSHNDLEFBQ3pELEFBQ2dCLEFBQ2IsQUFBeUIsQUFHckM7QUFKeUIsQUFDckI7QUFGSyxBQUNQOztlQUZnRSxBQU0xRCxBQUNHLEFBRVg7QUFIUSxBQUNOOzthQXhEUyxBQWlEdUQsQUFTMUQsQUFDQztBQURELEFBQ047QUFWZ0UsQUFDbEU7QUFsREo7O0lBZ0VNLEE7MkJBQ0o7O3lCQUFBLEFBQVksT0FBTzswQkFBQTs7OEhBQUEsQUFDWDs7VUFEVyxBQVFqQixZQUFZLFlBQU0sQUFDbEI7YUFBTyxVQUFBLEFBQUMsVUFBYSxBQUNuQjtZQUFJLGFBQWEsTUFBQSxBQUFLLE9BQXRCLEFBQWlCLEFBQVksQUFDN0I7aUJBQVMsWUFBVCxBQUFTLEFBQVksQUFDckI7WUFBSSxPQUFPLFdBQVgsQUFBVyxBQUFXLEFBQ3RCO1lBQUksTUFBTSxLQUFBLEFBQUssVUFBVSxLQUFBLEFBQUssUUFBTCxBQUFhLE9BQXRDLEFBQVUsQUFBbUMsQUFFN0M7O1lBQUksYUFBUyxBQUFJOzBCQUFRLEFBQ0osQUFDakI7dUNBRkosQUFBYSxBQUFZLEFBRVMsQUFFbEM7QUFKeUIsQUFDckIsU0FEUztZQUlUO2tCQUFhLEFBQ0osQUFDVDtnQkFBUSxJQUFBLEFBQUksT0FBSixBQUFXLEtBRk4sQUFFTCxBQUFnQixBQUN4QjttQkFISixBQUFpQixBQUdKLEFBRWI7QUFMaUIsQUFDYjtZQUlBLE1BQU0sdUVBQUEsQUFBdUUsd0JBQXZFLEFBQ04sK0JBREosQUFDbUMsQUFDbkM7Y0FBQSxBQUFNLEtBQU4sQUFBVyxZQUFYLEFBQ0MsS0FBSyxvQkFBQTtpQkFBWSxTQUFaLEFBQVksQUFBUztBQUQzQixXQUFBLEFBRUMsS0FBSyxvQkFBWSxBQUNoQjttQkFBUyxZQUFBLEFBQVksWUFBckIsQUFBUyxBQUF3QixBQUNqQztrQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNiO0FBTEQsQUFNRDtBQXZCRCxBQXdCRDtBQWpDa0I7O1VBQUEsQUFtQ25CLFNBQVMsVUFBQSxBQUFDLFFBQVcsQUFDbkI7WUFBQSxBQUFLLFNBQUwsQUFBYyxBQUNmO0FBckNrQjs7VUFBQSxBQXVDbkIsVUFBVSxZQUFNLEFBQ2Q7WUFBQSxBQUFLLFdBQVcsTUFBQSxBQUFLLE9BQXJCLEFBQWdCLEFBQVksQUFDNUI7WUFBQSxBQUFLLFNBQVMsRUFBQyxVQUFmLEFBQWMsQUFBVSxBQUN4QjtVQUFJLE9BQU8sTUFBQSxBQUFLLFNBQWhCLEFBQVcsQUFBYyxBQUN6QjtVQUFJLE1BQU0sS0FBQSxBQUFLLFVBQVUsS0FBQSxBQUFLLFFBQUwsQUFBYSxPQUF0QyxBQUFVLEFBQW1DLEFBRTdDOztVQUFJLGFBQVMsQUFBSTt3QkFBUSxBQUNKLEFBQ2pCO3FDQUZKLEFBQWEsQUFBWSxBQUVTLEFBRWxDO0FBSnlCLEFBQ3JCLE9BRFM7VUFJVDtnQkFBYSxBQUNKLEFBQ1Q7Y0FBUSxJQUFBLEFBQUksT0FBSixBQUFXLEtBRk4sQUFFTCxBQUFnQixBQUN4QjtpQkFISixBQUFpQixBQUdKLEFBRWI7QUFMaUIsQUFDYjtVQUlBLE1BQU0sZ0VBQUEsQUFBZ0Usd0JBQWhFLEFBQ04sK0JBREosQUFDbUMsQUFDbkM7WUFBQSxBQUFNLEtBQU4sQUFBVyxZQUFYLEFBQ0MsS0FBSyxvQkFBQTtlQUFZLFNBQVosQUFBWSxBQUFTO0FBRDNCLFNBQUEsQUFFQyxLQUFLLG9CQUFZLEFBQ2hCO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7WUFBSSxTQUFTLFNBQUEsQUFBUyxHQUFULEFBQVksa0JBQXpCLEFBQWEsQUFBOEIsQUFDM0M7WUFBSSxNQUFNLFNBQUEsQUFBUyxHQUFULEFBQVksa0JBQXRCLEFBQVUsQUFBOEIsQUFDeEM7WUFBSSxVQUFVLFNBQUEsQUFBUyxHQUFULEFBQVksa0JBQTFCLEFBQWMsQUFBOEIsQUFDNUM7WUFBSSxRQUFRLFNBQUEsQUFBUyxHQUFULEFBQVksa0JBQVosQUFBOEIsV0FBMUMsQUFBWSxBQUF5QyxBQUNyRDtZQUFJLFdBQVcsU0FBQSxBQUFTLEdBQVQsQUFBWSxrQkFBWixBQUE4QixXQUE3QyxBQUFlLEFBQXlDLEFBQ3hEO1lBQUksVUFBVSxTQUFBLEFBQVMsR0FBVCxBQUFZLGtCQUFaLEFBQThCLFdBQTVDLEFBQWMsQUFBeUMsQUFDdkQ7WUFBSSxPQUFPLFNBQUEsQUFBUyxHQUFULEFBQVksa0JBQVosQUFBOEIsV0FBekMsQUFBVyxBQUF5QyxBQUNwRDtZQUFJLFlBQVksU0FBQSxBQUFTLEdBQVQsQUFBWSxrQkFBWixBQUE4QixXQUE5QyxBQUFnQixBQUF5QyxBQUN6RDtZQUFJLFVBQVUsU0FBQSxBQUFTLEdBQVQsQUFBWSxrQkFBWixBQUE4QixXQUE1QyxBQUFjLEFBQXlDLEFBQ3ZEO1lBQUksVUFBVSxTQUFBLEFBQVMsR0FBVCxBQUFZLGtCQUFaLEFBQThCLFdBQTVDLEFBQWMsQUFBeUMsQUFDdkQ7WUFBSSxXQUFXLFNBQUEsQUFBUyxHQUFULEFBQVksa0JBQVosQUFBOEIsV0FBN0MsQUFBZSxBQUF5QyxBQUN4RDtnQkFBQSxBQUFRLElBQUksU0FBQSxBQUFTLEdBQVQsQUFBWSxrQkFBeEIsQUFBWSxBQUE4QixBQUMxQztnQkFBQSxBQUFRLElBQUksU0FBQSxBQUFTLEdBQVQsQUFBWSxrQkFBeEIsQUFBWSxBQUE4QixBQUMxQztZQUFNLGNBQ0osZ0JBQUEsQUFBTSxjQUFOLEFBQW9CLE9BQXBCLEFBQTJCLElBQ3pCLGdCQUFBLEFBQU0sY0FBTixBQUFvQixNQUFwQixBQUEwQixJQUN4QixDQUNFLGdCQUFBLEFBQU0sY0FBTixBQUFvQixNQUFwQixBQUEwQixJQUFJLFlBQVksUUFBWixBQUFvQixNQURwRCxBQUNFLEFBQXdELE1BQ3hELGdCQUFBLEFBQU0sY0FBTixBQUFvQixNQUFwQixBQUEwQixJQUFJLGVBQWUsV0FBZixBQUEwQixNQUYxRCxBQUVFLEFBQThELE1BQzlELGdCQUFBLEFBQU0sY0FBTixBQUFvQixNQUFwQixBQUEwQixJQUFJLGNBQWMsVUFBZCxBQUF3QixNQUh4RCxBQUdFLEFBQTRELE1BQzVELGdCQUFBLEFBQU0sY0FBTixBQUFvQixNQUFwQixBQUEwQixJQUFJLFdBQVcsT0FBWCxBQUFrQixNQUpsRCxBQUlFLEFBQXNELE1BQ3RELGdCQUFBLEFBQU0sY0FBTixBQUFvQixNQUFwQixBQUEwQixJQUFJLGdCQUFnQixZQUFoQixBQUE0QixNQUw1RCxBQUtFLEFBQWdFLE1BQ2hFLGdCQUFBLEFBQU0sY0FBTixBQUFvQixNQUFwQixBQUEwQixJQUFJLGNBQWMsVUFBZCxBQUF3QixNQU54RCxBQU1FLEFBQTRELE1BQzVELGdCQUFBLEFBQU0sY0FBTixBQUFvQixNQUFwQixBQUEwQixJQUFJLGNBQWMsVUFBZCxBQUF3QixNQVB4RCxBQU9FLEFBQTRELE1BQzVELGdCQUFBLEFBQU0sY0FBTixBQUFvQixNQUFwQixBQUEwQixJQUFJLGVBQWUsV0FBZixBQUEwQixNQVhoRSxBQUNFLEFBQ0UsQUFDRSxBQVFFLEFBQThELEFBSTFFO1lBQU0sYUFDRCxnQkFBQSxBQUFNLGNBQU4sQUFBb0IsT0FBcEIsQUFBMkIsSUFDMUIsZ0JBQUEsQUFBTSxjQUFOLEFBQW9CLE1BQXBCLEFBQTBCLElBQzVCLENBQ0UsZ0JBQUEsQUFBTSxjQUFOLEFBQW9CLE1BQXBCLEFBQTBCLElBQUksaUJBQWlCLFNBQUEsQUFBUyxHQUFULEFBQVksa0JBQVosQUFBOEIsVUFEL0UsQUFDRSxBQUErQyxBQUF3QyxlQUN2RixnQkFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBcEIsQUFBMEIsSUFBSSxpQkFBaUIsU0FBQSxBQUFTLEdBQVQsQUFBWSxrQkFBWixBQUE4QixVQUxuRixBQUNLLEFBQ0MsQUFDRixBQUVFLEFBQStDLEFBQXdDLEFBSXpGO1lBQUksZ0JBQWdCLGFBQXBCLEFBQWdDLEFBQ2hDO1lBQUksYUFBYSxVQUFqQixBQUEwQixBQUMxQjtZQUFJLGNBQWMsY0FBbEIsQUFBZ0MsQUFDaEM7WUFBSSxjQUFjLFlBQVksUUFBWixBQUFvQixNQUF0QyxBQUE0QyxBQUM1QztZQUFJLGVBQWUsZUFBZSxXQUFmLEFBQTBCLE1BQTdDLEFBQW1ELEFBQ25EOzJCQUFBLEFBQVMsT0FBVCxBQUFnQixlQUFlLFNBQUEsQUFBUyxlQUF4QyxBQUErQixBQUF3QixBQUN2RDsyQkFBQSxBQUFTLE9BQVQsQUFBZ0IsWUFBWSxTQUFBLEFBQVMsZUFBckMsQUFBNEIsQUFBd0IsQUFDcEQ7MkJBQUEsQUFBUyxPQUFULEFBQWdCLGFBQWEsU0FBQSxBQUFTLGVBQXRDLEFBQTZCLEFBQXdCLEFBQ3JEOzJCQUFBLEFBQVMsT0FBVCxBQUFnQixZQUFZLFNBQUEsQUFBUyxlQUFyQyxBQUE0QixBQUF3QixBQUNwRDsyQkFBQSxBQUFTLFFBQVQsQUFBaUIsYUFBYSxTQUFBLEFBQVMsZUFBdkMsQUFBOEIsQUFBd0IsQUFFdkQ7QUFwREQsQUFxREQ7QUE3R2tCLEFBRWpCOztVQUFBLEFBQUssUUFBUSxFQUFDLFVBQWQsQUFBYSxBQUFVLEFBQ3ZCO1FBQUksZ0JBQUosQUFDQTtVQUFBLEFBQUssWUFBWSxNQUFBLEFBQUssVUFBTCxBQUFlLEtBQWhDLEFBQ0E7VUFBQSxBQUFLLFVBQVUsTUFBQSxBQUFLLFFBQUwsQUFBYSxLQUxYLEFBS2pCO1dBQ0Q7Ozs7OzZCQTJHUSxBQUNQO1VBQU07ZUFBbUIsQUFDaEIsQUFDUDtnQkFGdUIsQUFFZixBQUNSO29CQUhGLEFBQXlCLEFBR1gsQUFFZDtBQUx5QixBQUN2QjtVQUlFLGVBQUosQUFDQTtPQUFDLEFBS0E7Ozs7O1dBQ0Q7NkJBQ0UsY0FBQSxPQUNFLHNCQUFDLHFCQUFEO2NBQ3NCLEtBQUEsQUFBSyxNQUQzQixBQUNpQyxBQUNqQjtpQkFGaEIsQUFFeUIsQUFDVDtlQUhoQixBQUd1QixBQUNQO2lCQUpoQixBQUl5QixBQUNUO2VBTGhCLEFBS3NCLEFBRXRCO0FBTmdCLHVDQU1mLGNBQUQ7ZUFBQSxBQUNTLEFBQ1A7Z0JBRkYsQUFFVSxBQUNSO2FBQUssS0FIUCxBQUdZLEFBQ1Y7MEJBSkYsQUFJbUIsQUFDakI7ZUFMRixBQUtTLEFBQ1A7MEJBZEosQUFDRSxBQU9BLEFBTW9CLEFBR3BCO0FBUkUsU0FUSix5Q0FpQlEsT0FBTyxFQUFFLFFBQUYsQUFBVSxxQkFBcUIsT0FBL0IsQUFBcUMsUUFBUSxVQUE3QyxBQUF1RCxRQUFTLFFBakIvRSxBQWlCRSxBQUFhLEFBQXVFLEFBQ3BGLDZCQUFDLHFCQUFELFVBQVEsU0FBUyxLQUFqQixBQUFzQixTQUFTLFNBQS9CLFFBbkJKLEFBQ0UsQUFrQkUsQUFJTDs7Ozs7RUF0SnlCLGdCLEFBQU07O0lBOEo1QixBO21CQUVKOzttQkFBZTswQkFBQTs7Z0hBQUEsQUFDSjs7V0FESSxBQWlMZixTQUFTLFlBQU0sQUFDYjthQUFBLEFBQUssU0FBUyxFQUFFLE1BQWhCLEFBQWMsQUFBUSxBQUN2QjtBQW5MYyxBQUViOztXQUFBLEFBQUs7WUFBUSxBQUNMLEFBQ047Y0FGRixBQUFhLEFBRUgsQUFHVjtBQUxhLEFBQ1g7O1dBSUYsQUFBSyxVQUFMLEFBQWUsQUFFZjs7V0FBQSxBQUFLLFNBQVMsV0FBZCxBQUNBO1dBQUEsQUFBSztnQkFDTyxvQkFBQTtlQUFNLE9BQUEsQUFBSyxNQUFYLEFBQWlCO0FBWGhCLEFBVWIsQUFBa0IsQUFBaUI7QUFBQSxBQUNqQyxLQURnQjtXQUduQjs7Ozs7d0NBRW9CLEFBQ25CO1dBQUEsQUFBSyxBQUNOOzs7OzZCQUVTO21CQUFBOzttQkFDaUIsS0FEakIsQUFDc0I7VUFEdEIsQUFDQSxjQURBLEFBQ0E7VUFEQSxBQUNNLGdCQUROLEFBQ007bUJBRWlCLEtBSHZCLEFBRzRCO1VBSDVCLEFBR0EsaUJBSEEsQUFHQTtVQUhBLEFBR1MsbUJBSFQsQUFHUztVQUhULEFBSUEsYUFKQSxBQUl3QixVQUp4QixBQUlBO1VBSkEsQUFJWSxVQUpaLEFBSXdCLFVBSnhCLEFBSVksQUFFcEI7OzZCQUNFLGNBQUEsT0FDRSxvQ0FBQyxPQUFEO2NBQUEsQUFFRTtpQkFGRixBQUdFO2NBQU0sQ0FBQSxBQUFDLFFBQVEsQ0FIakIsQUFHa0IsQUFDaEI7O3lCQUxKLEFBQ0UsQUFJYSxBQUNNLEFBSW5CO0FBTGEsQUFDVDtBQUpGLFFBRkosa0JBVUcscUJBQUQ7aUJBQUEsQUFFRTtjQUZGLEFBRVEsQUFDTjt1QkFIRixBQUdpQixBQUNmO29CQUpGLEFBSWMsQUFDWjtpQkFMRixBQUtXLEFBSVI7QUFSRCx5QkFRQzsrQkFDQSxxQkFBRCxXQUFTLFdBQVcsUUFBcEIsQUFBNEIsQUFFMUIsd0JBQUEsY0FBQSxTQUFLLFdBQVcsUUFBaEIsQUFBd0IsQUFFdEIsMkJBQUEsY0FBQSxTQUFLLFdBQVcsUUFBaEIsQUFBd0IsU0FBUyxPQUFPLEVBQUUsUUFBRixBQUFVLHFCQUFxQixPQUEvQixBQUFxQyxRQUFRLFVBQXJGLEFBQXdDLEFBQXVELEFBQy9GLDBDQUFBLEFBQUMsaUJBQWMsV0FBVyxRQUExQixBQUFrQyxTQUFVLFNBQTVDLEFBQ0k7Z0JBQU0sS0FKWixBQUVFLEFBQ0EsQUFDZSxBQW1CN0IsNkJBQUEsY0FBQSxNQUFJLHNCQUFDLHFCQUFELFNBQU8sU0FBUCxNQUFlLE1BQU0sS0FBckIsQUFBMEIsV0F2QmxCLEFBdUJaLEFBQUksQUFFVSxrQ0FBQyxxQkFBRDtnQkFDZ0IsT0FBQSxBQUFLLE1BRHJCLEFBQzJCLEFBQ2pCO21CQUZWLEFBRW1CLEFBQ1Q7aUJBSFYsQUFHaUIsQUFDUDttQkFKVixBQUltQixBQUNUO2lCQUxWLEFBS2dCLEFBRU47QUFOQSwyQkFNQSxjQUFBLFNBQUssT0FBTyxFQUFFLFNBQUYsQUFBVyxXQUFXLE9BQXRCLEFBQTRCLFFBQVEsVUFBaEQsQUFBWSxBQUE4QyxBQUMxRCw0QkFBQyxxQkFBRCxRQUFNLE1BQU4sQUFBVyxBQUVuQiwrQ0FBSyxJQUFMLEFBQVEsT0FBTSxTQUFkLE1BQXNCLE1BQU0sS0FGcEIsQUFFUixBQUFpQyxBQUNqQyxvREFBSyxJQUFMLEFBQVEsVUFBUyxTQUFqQixNQUF5QixNQUFNLEtBSHZCLEFBR1IsQUFBb0MsQUFDcEMsb0RBQUssSUFKRyxBQUlSLEFBQVEsQUFDUixzREFBSyxJQXRDVCxBQXlCRSxBQU9VLEFBQ0EsQUFLUixBQUFRLEFBb0JKLGtEQUFDLE9BQUQsUUFBTSxTQTFEZCxBQTBEUSxBQUVjLHlCQUFBLGNBQUEsTUFBSSxzQkFBQyxxQkFBRCxTQUFPLFNBQVAsUUE1RDFCLEFBNERzQixBQUFJLEFBQ0osc0NBQUMscUJBQUQ7Z0JBQ0osT0FBQSxBQUFLLE1BREQsQUFDTyxBQUNqQjttQkFGVSxBQUVELEFBQ1Q7aUJBSFUsQUFHSCxBQUNQO21CQUpVLEFBSUQsQUFDVDtpQkFMVSxBQUtKLEFBR1Y7QUFQSSxrREFPQyxJQUFMLEFBQVEsV0FBVSxTQUFsQixNQUEwQixNQUFNLEtBQWhDLEFBQXFDLFVBQVUsT0FBTyxFQUFFLFNBQUYsQUFBVyxhQUFZLE9BQXZCLEFBQTZCLFFBQVEsVUFyRW5HLEFBNkRzQixBQVFkLEFBQXNELEFBQStDLEFBS3ZGLDRDQUFDLE9BQUQsUUFBTSxTQTFFNUIsQUEwRXNCLEFBRXBCLHlCQUFBLGNBQUEsU0FBSyxXQUFXLFFBQWhCLEFBQXdCLEFBQ3hCLDJCQUFDLDBCQUFELFFBQU0sV0FBVyxRQUFqQixBQUF5QixRQUFRLE1BQWpDLEFBQXNDLHVCQUFzQixRQUE1RCxBQUFtRSxVQUFTLFFBQVEsT0FBcEYsQUFBeUYsQUFDdkYsMEJBQUMsMEJBQUQsWUFBVSxXQUFXLFFBQXJCLEFBQTZCLFVBQVUsTUFBTSxLQUE3QyxBQUFrRCxTQUFTLE1BQTNELEFBQWdFLFVBRmxFLEFBQ0EsQUFDRSxBQUVBLCtCQUFDLDBCQUFELFFBQU0sV0FBVyxRQUFqQixBQUF5QixRQUFRLE1BQWpDLEFBQXNDLDBDQUF5QyxRQUEvRSxBQUFzRixZQUFXLFFBQVEsT0FBekcsQUFBOEcsQUFDNUcsMEJBQUMsMEJBQUQsWUFBVSxXQUFXLFFBQXJCLEFBQTZCLFVBQVUsTUFBTSxLQUE3QyxBQUFrRCxTQUFTLE1BQTNELEFBQWdFLG1CQUxwRSxBQUlFLEFBQ0UsQUFFRiw2Q0FBQywwQkFBRCxRQUFNLFdBQVcsUUFBakIsQUFBeUIsUUFBUSxNQUFqQyxBQUFzQyxpREFBZ0QsUUFBdEYsQUFBNkYsVUFBUyxRQUFRLE9BQTlHLEFBQW1ILEFBQ25ILHdDQUFDLE9BQUQsUUFBTSxTQUFOLE1BQWMsTUFEZCxBQUNBLEFBQW9CLE9BcEZ4QixBQTRFRSxBQU9FLEFBS0YsdUNBQUEsY0FBQSxTQUFLLFdBQVcsUUFBaEIsQUFBd0IsQUFDdEIsMkJBQUMsMEJBQUQsUUFBTSxXQUFXLFFBQWpCLEFBQXlCLFFBQVEsTUFBakMsQUFBc0MsYUFBWSxRQUFRLE9BQTFELEFBQStELEFBQzdELDBCQUFDLHFCQUFELFVBQVEsV0FBVyxRQUFuQixBQUEyQixRQUFRLFNBQW5DLE1BQTJDLE1BQU0sS0FBakQsQUFBc0QsQUFDbkQsNEJBQUE7aUJBQVMsZ0JBQUMscUJBQUQsU0FBTyxTQUFQLE1BQWUsTUFBTSxNQUFyQixBQUEyQixXQUFwQyxBQUFTO0FBSGhCLEFBQ0UsQUFDRSxBQUlGLDZCQUFDLDBCQUFELFFBQU0sV0FBVyxRQUFqQixBQUF5QixRQUFRLE1BQWpDLEFBQXNDLEtBQUksUUFBMUMsQUFBaUQsSUFBRyxRQUFRLE9BQTVELEFBQWlFLEFBQy9ELDBCQUFDLHFCQUFELFVBQVEsV0FBVyxRQUFuQixBQUEyQixRQUFRLFNBQW5DLE1BQTJDLE1BQU0sS0FBakQsQUFBc0QsQUFDbkQsNEJBQUE7aUJBQVMsZ0JBQUMscUJBQUQsU0FBTyxTQUFQLE1BQWUsTUFBTSxNQUFyQixBQUEyQixXQUFwQyxBQUFTO0FBUmhCLEFBTUUsQUFDRSxBQUlGLDZCQUFDLDBCQUFELFFBQU0sV0FBVyxRQUFqQixBQUF5QixRQUFRLE1BQWpDLEFBQXNDLGdDQUErQixRQUFyRSxBQUE0RSxVQUFTLFFBQVEsT0FBN0YsQUFBa0csQUFDaEcsMEJBQUMscUJBQUQsVUFBUSxXQUFXLFFBQW5CLEFBQTJCLFFBQVEsU0FBbkMsTUFBMkMsTUFBTSxLQUFqRCxBQUFzRCxBQUNuRCw0QkFBQTtpQkFBUyxnQkFBQyxxQkFBRCxTQUFPLFNBQVAsTUFBZSxNQUFNLE1BQXJCLEFBQTJCLFdBQXBDLEFBQVM7QUFiaEIsQUFXRSxBQUNFLEFBSUYsNkJBQUMsMEJBQUQsUUFBTSxXQUFXLFFBQWpCLEFBQXlCLFFBQVEsTUFBakMsQUFBc0MseUJBQXdCLFFBQTlELEFBQXFFLFdBQVUsUUFBUSxPQUF2RixBQUE0RixBQUMxRiwwQkFBQyxxQkFBRCxVQUFRLFdBQVcsUUFBbkIsQUFBMkIsUUFBUSxTQUFuQyxNQUEyQyxNQUFNLEtBQWpELEFBQXNELEFBQ25ELDRCQUFBO2lCQUFTLGdCQUFDLHFCQUFELFNBQU8sU0FBUCxNQUFlLE1BQU0sTUFBckIsQUFBMkIsV0FBcEMsQUFBUztBQTdHbkIsQUFDRCxBQUVFLEFBd0ZFLEFBZ0JFLEFBQ0UsYUEzR1I7QUFyQk4sQUFDRSxBQVVFLEFBa0lMOzs7O21DQUVlO21CQUNkOztVQUFNLGFBQWEsS0FBQSxBQUFLLFdBQXhCLEFBQW1CLEFBQWdCLEFBQ25DO1VBQU0sYUFBYSxhQUFBLEFBQU0sc0JBQXNCLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBdkMsQUFBaUQsWUFBcEUsQUFBbUIsQUFBNkQsQUFFaEY7O1dBQUEsQUFBSyxPQUFMLEFBQVksS0FBSyxFQUFFLFFBQVEsQ0FBQSxBQUFDLFlBQVksS0FBeEMsQUFBaUIsQUFBVSxBQUFrQixZQUFZLEVBQUUsU0FBUyxJQUFwRSxBQUF5RCxBQUFlLFFBQXhFLEFBQ0UsS0FBSyxZQUFNLEFBQUUsQ0FEZixHQUNpQixZQUFNLEFBQUUsQ0FEekIsR0FBQSxBQUVFLEtBQUssWUFBQTtlQUFNLE9BQUEsQUFBSyxTQUFTLEVBQUUsTUFBRixBQUFRLE1BQU0sUUFBbEMsQUFBTSxBQUFjLEFBQXNCO0FBRmpELEFBR0Q7Ozs7O0VBakxpQixnQkFBTSxBOztrQkF3TFgsNEJBQWEsdUJBQUEsQUFBVyxRQUF4QixBQUFhLEFBQW1CLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NjaGVuL01pbWlreXUifQ==