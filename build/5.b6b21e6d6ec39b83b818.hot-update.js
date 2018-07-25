webpackHotUpdate(5,{

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer, __resourceQuery) {

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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _arwes = __webpack_require__(337);

var _Camera = __webpack_require__(651);

var _Camera2 = _interopRequireDefault(_Camera);

var _reactWebcam = __webpack_require__(643);

var _reactWebcam2 = _interopRequireDefault(_reactWebcam);

var _reactImageFile = __webpack_require__(676);

var _reactImageFile2 = _interopRequireDefault(_reactImageFile);

var _reactDom = __webpack_require__(193);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _withTemplate = __webpack_require__(624);

var _withTemplate2 = _interopRequireDefault(_withTemplate);

var _components = __webpack_require__(690);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/schen/Downloads/romelperez.com-master/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/schen/Downloads/romelperez.com-master/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(93)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(633).Buffer, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iNmIyMWU2ZDZlYzM5YjgzYjgxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/Njk0OTc0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgd2l0aFN0eWxlcyxcbiAgQXJ3ZXMsXG4gIENvbnRlbnQsXG4gIFdvcmRzLFxuICBJbWFnZSxcbiAgQnV0dG9uLFxuICBGcmFtZSxcbiAgTGluZSxcbiAgTGlzdCxcbiAgTG9hZGluZyxcbiAgY3JlYXRlTG9hZGVyLFxuICBjcmVhdGVSZXNwb25zaXZlLFxuICB1dGlsc1xufSBmcm9tICdhcndlcyc7XG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4vQ2FtZXJhJ1xuaW1wb3J0IFdlYmNhbSBmcm9tICdyZWFjdC13ZWJjYW0nO1xuaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gJ3JlYWN0LWltYWdlLWZpbGUnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCB3aXRoVGVtcGxhdGUgZnJvbSAnLi4vc2l0ZS93aXRoVGVtcGxhdGUnO1xuaW1wb3J0IHsgTGluaywgVGV4dEljb24gfSBmcm9tICcuLi9zaXRlL2NvbXBvbmVudHMnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgIHBhZGRpbmc6IHRoZW1lLnBhZGRpbmcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtYXhXaWR0aDogNzAwLFxuICAgICcmIGgxJzoge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgcGFkZGluZ1RvcDogNSxcbiAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgIGxpbmVIZWlnaHQ6ICcxJyxcbiAgICB9LFxuICAgICcmIHAnOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgfSxcbiAgICAnJiAkZGV0YWlsICsgJGRldGFpbCc6IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUubWFyZ2luIC8gMixcbiAgICB9LFxuICB9LFxuICBzZWN0aW9uOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5tYXJnaW4gLyAxLjUsXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9LFxuICB9LFxuICBwcm9maWxlOiB7XG4gICAgbWFyZ2luOiAwLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHdpZHRoOiAxNTAsXG4gIH0sXG4gIGRldGFpbDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH0sXG4gIHRleHRJY29uOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgd2lkdGg6ICc1MCUnLFxuICB9LFxuICAvLyBtZWRpdW0gc2l6ZSArXG4gIFtgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHt0aGVtZS5yZXNwb25zaXZlLnNtYWxsICsgMX1weClgXToge1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgICcmICRkZXRhaWwgKyAkZGV0YWlsJzoge1xuICAgICAgICBtYXJnaW46IFswLCAwLCAwLCB0aGVtZS5tYXJnaW4gLyAyXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY2xhc3MgV2ViY2FtQ2FwdHVyZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7Y2FwdHVyZWQ6ZmFsc2V9O1xuICAgIGxldCBpbWFnZVNyYztcbiAgICB0aGlzLmZldGNoRmFjZSA9IHRoaXMuZmV0Y2hGYWNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYXB0dXJlID0gdGhpcy5jYXB0dXJlLmJpbmQodGhpcyk7XG4gIH1cblxuICAgIGZldGNoRmFjZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgICBsZXQgc2NyZWVuc2hvdCA9IHRoaXMud2ViY2FtLmdldFNjcmVlbnNob3QoKTtcbiAgICAgIGRpc3BhdGNoKHJlcXVlc3RGYWNlKHNjcmVlbnNob3QpKVxuICAgICAgbGV0IGRhdGEgPSBzY3JlZW5zaG90LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgc3RyID0gZGF0YS5zdWJzdHJpbmcoZGF0YS5pbmRleE9mKFwiLFwiKSArIDEpO1xuICBcbiAgICAgIHZhciBoZWFkZXIgPSBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAgICAgICAnT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleScgOiAnNDkxMDFkZGRkMTllNDE1YmE5OTcwZDJkOGIzYjMxNzInXG4gICAgICB9KTtcbiAgICAgIHZhciBpbml0T2JqZWN0ID0ge1xuICAgICAgICAgIG1ldGhvZCA6ICdwb3N0JyxcbiAgICAgICAgICBib2R5IDogIG5ldyBCdWZmZXIoc3RyLCAnYmFzZTY0JyksXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVyXG4gICAgICB9O1xuICAgICAgdmFyIHVybCA9ICdodHRwczovL3dlc3RjZW50cmFsdXMuYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ZhY2UvdjEuMC9kZXRlY3QnICsgJz9yZXR1cm5GYWNlSWQ9ZmFsc2UnICtcbiAgICAgICAgICAnJnJldHVybkZhY2VMYW5kbWFya3M9ZmFsc2UnICsgJyZyZXR1cm5GYWNlQXR0cmlidXRlcz1hZ2UsZ2VuZGVyLGZhY2lhbEhhaXIsZ2xhc3NlcyxlbW90aW9uLG1ha2V1cCxoYWlyLGFjY2Vzc29yaWVzLGV4cG9zdXJlJztcbiAgICAgIGZldGNoKHVybCwgaW5pdE9iamVjdClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZUZhY2Uoc2NyZWVuc2hvdCwgcmVzcG9uc2UpKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2V0UmVmID0gKHdlYmNhbSkgPT4ge1xuICAgIHRoaXMud2ViY2FtID0gd2ViY2FtO1xuICB9XG5cbiAgY2FwdHVyZSA9ICgpID0+IHtcbiAgICB0aGlzLmltYWdlU3JjID0gdGhpcy53ZWJjYW0uZ2V0U2NyZWVuc2hvdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2NhcHR1cmVkOnRydWV9KTtcbiAgICBsZXQgZGF0YSA9IHRoaXMuaW1hZ2VTcmMudG9TdHJpbmcoKTtcbiAgICBsZXQgc3RyID0gZGF0YS5zdWJzdHJpbmcoZGF0YS5pbmRleE9mKFwiLFwiKSArIDEpO1xuXG4gICAgdmFyIGhlYWRlciA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAgICAgJ09jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXknIDogJzk5ZTZlODg0ZmU1MzQ0YThhNTU4MjA1M2FjODhhNjBmJ1xuICAgIH0pO1xuICAgIHZhciBpbml0T2JqZWN0ID0ge1xuICAgICAgICBtZXRob2QgOiAncG9zdCcsXG4gICAgICAgIGJvZHkgOiAgbmV3IEJ1ZmZlcihzdHIsICdiYXNlNjQnKSxcbiAgICAgICAgaGVhZGVyczogaGVhZGVyXG4gICAgfTtcbiAgICB2YXIgdXJsID0gJ2h0dHBzOi8vZWFzdHVzLmFwaS5jb2duaXRpdmUubWljcm9zb2Z0LmNvbS9mYWNlL3YxLjAvZGV0ZWN0JyArICc/cmV0dXJuRmFjZUlkPWZhbHNlJyArXG4gICAgICAgICcmcmV0dXJuRmFjZUxhbmRtYXJrcz1mYWxzZScgKyAnJnJldHVybkZhY2VBdHRyaWJ1dGVzPWFnZSxnZW5kZXIsZmFjaWFsSGFpcixnbGFzc2VzLGVtb3Rpb24sbWFrZXVwLGhhaXIsYWNjZXNzb3JpZXMsZXhwb3N1cmUnO1xuICAgIGZldGNoKHVybCwgaW5pdE9iamVjdClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICB2YXIgZ2VuZGVyID0gcmVzcG9uc2VbMF1bJ2ZhY2VBdHRyaWJ1dGVzJ11bJ2dlbmRlciddO1xuICAgICAgdmFyIGFnZSA9IHJlc3BvbnNlWzBdWydmYWNlQXR0cmlidXRlcyddWydhZ2UnXTtcbiAgICAgIHZhciBnbGFzc2VzID0gcmVzcG9uc2VbMF1bJ2ZhY2VBdHRyaWJ1dGVzJ11bJ2dsYXNzZXMnXTtcbiAgICAgIHZhciBhbmdlciA9IHJlc3BvbnNlWzBdWydmYWNlQXR0cmlidXRlcyddWydlbW90aW9uJ11bJ2FuZ2VyJ107XG4gICAgICB2YXIgY29udGVtcHQgPSByZXNwb25zZVswXVsnZmFjZUF0dHJpYnV0ZXMnXVsnZW1vdGlvbiddWydjb250ZW1wdCddO1xuICAgICAgdmFyIGRpc2d1c3QgPSByZXNwb25zZVswXVsnZmFjZUF0dHJpYnV0ZXMnXVsnZW1vdGlvbiddWydkaXNndXN0J107XG4gICAgICB2YXIgZmVhciA9IHJlc3BvbnNlWzBdWydmYWNlQXR0cmlidXRlcyddWydlbW90aW9uJ11bJ2ZlYXInXTtcbiAgICAgIHZhciBoYXBwaW5lc3MgPSByZXNwb25zZVswXVsnZmFjZUF0dHJpYnV0ZXMnXVsnZW1vdGlvbiddWydoYXBwaW5lc3MnXTtcbiAgICAgIHZhciBuZXV0cmFsID0gcmVzcG9uc2VbMF1bJ2ZhY2VBdHRyaWJ1dGVzJ11bJ2Vtb3Rpb24nXVsnbmV1dHJhbCddO1xuICAgICAgdmFyIHNhZG5lc3MgPSByZXNwb25zZVswXVsnZmFjZUF0dHJpYnV0ZXMnXVsnZW1vdGlvbiddWydzYWRuZXNzJ107XG4gICAgICB2YXIgc3VycHJpc2UgPSByZXNwb25zZVswXVsnZmFjZUF0dHJpYnV0ZXMnXVsnZW1vdGlvbiddWydzdXJwcmlzZSddO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VbMF1bJ2ZhY2VBdHRyaWJ1dGVzJ11bJ2dlbmRlciddKVxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VbMF1bJ2ZhY2VBdHRyaWJ1dGVzJ11bJ2FnZSddKVxuICAgICAgY29uc3QgZW1vdGlvbkxpc3QgPVxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7fSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCd1bCcsIHt9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHt9LCBcImFuZ2VyOiBcIiArIGFuZ2VyICogMTAwICsgXCIlXCIpLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHt9LCBcImNvbnRlbXB0OiBcIiArIGNvbnRlbXB0ICogMTAwICsgXCIlXCIpLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHt9LCBcImRpc2d1c3Q6IFwiICsgZGlzZ3VzdCAqIDEwMCArIFwiJVwiKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7fSwgXCJkaXNndXN0OiBcIiArIGRpc2d1c3QgKiAxMDAgKyBcIiVcIiksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge30sIFwiZmVhcjogXCIgKyBmZWFyICogMTAwICsgXCIlXCIpLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHt9LCBcImhhcHBpbmVzczogXCIgKyBoYXBwaW5lc3MgKiAxMDAgKyBcIiVcIiksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge30sIFwibmV1dHJhbDogXCIgKyBuZXV0cmFsICogMTAwICsgXCIlXCIpLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHt9LCBcInNhZG5lc3M6IFwiICsgc2FkbmVzcyAqIDEwMCArIFwiJVwiKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7fSwgXCJzdXJwcmlzZTogXCIgKyBzdXJwcmlzZSAqIDEwMCArIFwiJVwiKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgKTtcbiAgY29uc3QgbWFrZXVwSW5mbyA9IFxuICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHt9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCd1bCcsIHt9LFxuICAgICAgW1xuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHt9LCBcIkV5ZSBNYWtldXA6IFwiICsgcmVzcG9uc2VbMF1bJ2ZhY2VBdHRyaWJ1dGVzJ11bJ21ha2V1cCddWydleWVNYWtldXAnXSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge30sIFwiTGlwIE1ha2V1cDogXCIgKyByZXNwb25zZVswXVsnZmFjZUF0dHJpYnV0ZXMnXVsnbWFrZXVwJ11bJ2xpcE1ha2V1cCddKSxcbiAgICAgIF1cbiAgICApXG4pO1xuICAgICAgdmFyIGdlbmRlckRpc3BsYXkgPSBcIkdlbmRlcjogXCIrIGdlbmRlcjtcbiAgICAgIHZhciBhZ2VEaXNwbGF5ID0gXCJBZ2U6IFwiKyBhZ2U7XG4gICAgICB2YXIgZ2xhc3Nlc0luZm8gPSBcIkdsYXNzZXM6IFwiICsgZ2xhc3NlcztcbiAgICAgIHZhciBlbW90aW9uSW5mbyA9IFwiYW5nZXI6IFwiICsgYW5nZXIgKiAxMDAgKyBcIiVcIjtcbiAgICAgIHZhciBjb250ZW1wdEluZm8gPSBcIkNvbnRlbXB0OiBcIiArIGNvbnRlbXB0ICogMTAwICsgXCIlXCI7XG4gICAgICBSZWFjdERPTS5yZW5kZXIoZ2VuZGVyRGlzcGxheSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmRlcicpKTtcbiAgICAgIFJlYWN0RE9NLnJlbmRlcihhZ2VEaXNwbGF5LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWdlJykpO1xuICAgICAgUmVhY3RET00ucmVuZGVyKGdsYXNzZXNJbmZvLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2xhc3Nlc3MnKSk7XG4gICAgICBSZWFjdERPTS5yZW5kZXIobWFrZXVwSW5mbywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ha2V1cEluZm8nKSk7XG4gICAgICBSZWFjdERPTS5oeWRyYXRlKGVtb3Rpb25MaXN0LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1vdGlvbicpKTtcblxuICAgIH0pXG4gIH07XG5cbiBcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdmlkZW9Db25zdHJhaW50cyA9IHtcbiAgICAgIHdpZHRoOiAxMjgwLFxuICAgICAgaGVpZ2h0OiA3MjAsXG4gICAgICBmYWNpbmdNb2RlOiAndXNlcicsXG4gICAgfTtcbiAgICBsZXQgYnV0dG9uMTtcbiAgICB7LypcbiAgICBpZiAodGhpcy5zdGF0ZS5jYXB0dXJlZCAmIHRoaXMuaW1hZ2VTcmMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmltYWdlU3JjKTtcbiAgICAgIGJ1dHRvbjEgPSA8aW1nIHNyYz17dGhpcy5pbWFnZVNyY30gYWx0PSdzY3JlZW5zaG90JyBoZWlnaHQ9JzgwJyAvPjtcbiAgICB9XG4gICovfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8RnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcm5lcnM9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICA8V2ViY2FtXG4gICAgICAgICAgYXVkaW89e2ZhbHNlfVxuICAgICAgICAgIGhlaWdodD17MjUwfVxuICAgICAgICAgIHJlZj17dGhpcy5zZXRSZWZ9XG4gICAgICAgICAgc2NyZWVuc2hvdEZvcm1hdD1cImltYWdlL2pwZWdcIlxuICAgICAgICAgIHdpZHRoPXszNTB9XG4gICAgICAgICAgdmlkZW9Db25zdHJhaW50cz17dmlkZW9Db25zdHJhaW50c31cbiAgICAgICAgLz5cbiAgICAgICAgPC9GcmFtZT5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNhcHR1cmV9IGFuaW1hdGU+U2NhbjwvQnV0dG9uPlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cblxuXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvdzogZmFsc2UsXG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnByb2ZpbGUgPSAnL3N0YXRpYy9pbWcvcHJvZmlsZS5qcGcnO1xuXG4gICAgdGhpcy5sb2FkZXIgPSBjcmVhdGVMb2FkZXIoKTtcbiAgICB0aGlzLnJlc3BvbnNpdmUgPSBjcmVhdGVSZXNwb25zaXZlKHtcbiAgICAgIGdldFRoZW1lOiAoKSA9PiB0aGlzLnByb3BzLnRoZW1lXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5zdGFydExvYWRpbmcoKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBzaG93LCBsb2FkZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB7IGNsYXNzZXMsIHJlc291cmNlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGJhY2tncm91bmQsIHBhdHRlcm4gfSA9IHJlc291cmNlcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TG9hZGluZ1xuICAgICAgICAgIGZ1bGxcbiAgICAgICAgICBhbmltYXRlXG4gICAgICAgICAgc2hvdz17IXNob3cgJiYgIWxvYWRlZH1cbiAgICAgICAgICBhbmltYXRpb249e3tcbiAgICAgICAgICAgIHVubW91bnRPbkV4aXQ6IHRydWVcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgICAgPEFyd2VzXG4gICAgICAgICAgYW5pbWF0ZVxuICAgICAgICAgIHNob3c9e3Nob3d9XG4gICAgICAgICAgc2hvd1Jlc291cmNlcz17c2hvd31cbiAgICAgICAgICBiYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kfVxuICAgICAgICAgIHBhdHRlcm49e3BhdHRlcm59XG4gICAgICAgID5cbiAgICAgICAgXG5cbiAgICAgICAgICB7YW5pbSA9PiAoXG4gICAgICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufSBzdHlsZT17eyBtYXJnaW46ICcwcHgnLCBhbGlnbjpcImxlZnRcIiwgZm9udFNpemU6ICcxOHB4JyB9fT5cbiAgICAgICAgICAgICAgPFdlYmNhbUNhcHR1cmUgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlfSAgYW5pbWF0ZVxuICAgICAgICAgICAgICAgICAgc2hvdz17YW5pbS5lbnRlcmVkfS8+XG5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICAgICAgICAgIDxoMT48V29yZHMgYW5pbWF0ZSBzaG93PXthbmltLmVudGVyZWR9PlxuICAgICAgICAgICAgICAgICAgU2kgQ2hlblxuICAgICAgICAgICAgICAgIDwvV29yZHM+PC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2ZpbGV9XG4gICAgICAgICAgICAgICAgICBhbmltYXRlXG4gICAgICAgICAgICAgICAgICBzaG93PXthbmltLmVudGVyZWR9XG4gICAgICAgICAgICAgICAgICByZXNvdXJjZXM9e3RoaXMucHJvZmlsZX1cbiAgICAgICAgICAgICAgICAvPiovfVxuXG48aDM+PFdvcmRzIGFuaW1hdGUgc2hvdz17YW5pbS5lbnRlcmVkfT5Vc2VyIFByb2ZpbGU8L1dvcmRzPjwvaDM+XG5cbiAgICAgICAgICAgICAgPEZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3d9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JuZXJzPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzBweCAwcHgnLCBhbGlnbjpcImxlZnRcIiwgZm9udFNpemU6ICcxOHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IG5vZGU9J3VsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2FnZScgYW5pbWF0ZSBzaG93PXthbmltLmVudGVyaW5nfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdnZW5kZXInIGFuaW1hdGUgc2hvdz17YW5pbS5lbnRlcmluZ30+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImdsYXNzZXNzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1ha2V1cEluZm9cIj48L2Rpdj5cblxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9GcmFtZT5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgPHA+PFdvcmRzIGFuaW1hdGUgc2hvdz17YW5pbS5lbnRlcmVkfT5cbiAgICAgICAgICAgICAgICAgIFNvZnR3YXJlIGVuZ2luZWVyaW5nIGF1dG9kaWRhY3QuIEVudGh1c2lhc3QsIEphdmFTY3JpcHQgZGV2LFxuICAgICAgICAgICAgICAgICAgU2NpLUZpIGFuZCBuYXR1cmUgZmFuLiBNYWtpbmcgdGhlIHdvcmxkIGEgYmV0dGVyIHBsYWNlIHRocm91Z2hcbiAgICAgICAgICAgICAgICAgIGxpbmVzIG9mIGNvZGUuXG4gICAgICAgICAgICAgICAgPC9Xb3Jkcz48L3A+XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICovfVxuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8TGluZSBhbmltYXRlIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PFdvcmRzIGFuaW1hdGU+RW1vdGlvbiBBbmFseXNpczwvV29yZHM+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcm5lcnM9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nZW1vdGlvbicgYW5pbWF0ZSBzaG93PXthbmltLmVudGVyaW5nfSBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCAxMHB4JyxhbGlnbjpcImxlZnRcIiwgZm9udFNpemU6ICcxOHB4JyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvRnJhbWU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZSBhbmltYXRlIC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0gaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JvbWVscGVyZXonIHRhcmdldD0nbGlua2VkaW4nIG9uTGluaz17dGhpcy5vbkxpbmt9PlxuICAgICAgICAgICAgICAgICAgPFRleHRJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0SWNvbn0gc2hvdz17YW5pbS5lbnRlcmVkfSBpY29uPSdjb2RlLWJyYWNrZXRzJz5Gcm9udGVuZCBFbmdpbmVlciBTSSBDSEVOPC9UZXh0SWNvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0gaHJlZj0naHR0cHM6Ly9odWdlaW5jLmNvbScgdGFyZ2V0PSdfYmxhbmsnIG9uTGluaz17dGhpcy5vbkxpbmt9PlxuICAgICAgICAgICAgICAgICAgPFRleHRJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0SWNvbn0gc2hvdz17YW5pbS5lbnRlcmVkfSBpY29uPSdicmllZmNhc2Utb3V0bGluZSc+SHVnZTwvVGV4dEljb24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9IGhyZWY9J2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20uY28vbWFwcy9wbGFjZS9NZWRlbGxpbicgdGFyZ2V0PSdfYmxhbmsnIG9uTGluaz17dGhpcy5vbkxpbmt9PlxuICAgICAgICAgICAgICAgICAgPFRleHRJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0SWNvbn0gc2hvdz17YW5pbS5lbnRlcmVkfSBpY29uPSdtYXAtbWFya2VyLW91dGxpbmUnPk1lZGVsbGluPC9UZXh0SWNvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9IGhyZWY9Jy9wcm9qZWN0cycgb25MaW5rPXt0aGlzLm9uTGlua30+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IGFuaW1hdGUgc2hvdz17YW5pbS5lbnRlcmVkfT5cbiAgICAgICAgICAgICAgICAgICAge2FuaW0yID0+IDxXb3JkcyBhbmltYXRlIHNob3c9e2FuaW0yLmVudGVyZWR9PlByb2plY3RzPC9Xb3Jkcz59XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0gaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JvbWVscGVyZXonIHRhcmdldD0nbGlua2VkaW4nIG9uTGluaz17dGhpcy5vbkxpbmt9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBhbmltYXRlIHNob3c9e2FuaW0uZW50ZXJlZH0+XG4gICAgICAgICAgICAgICAgICAgIHthbmltMiA9PiA8V29yZHMgYW5pbWF0ZSBzaG93PXthbmltMi5lbnRlcmVkfT5DdXJyaWN1bHVtPC9Xb3Jkcz59XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0gaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3JvbWVscGVyZXonIHRhcmdldD0nZ2l0aHViJyBvbkxpbms9e3RoaXMub25MaW5rfT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gYW5pbWF0ZSBzaG93PXthbmltLmVudGVyZWR9PlxuICAgICAgICAgICAgICAgICAgICB7YW5pbTIgPT4gPFdvcmRzIGFuaW1hdGUgc2hvdz17YW5pbTIuZW50ZXJlZH0+R2l0SHViPC9Xb3Jkcz59XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0gaHJlZj0naHR0cHM6Ly90d2l0dGVyLmNvbS9yb21lbHBlcmV6MDcnIHRhcmdldD0ndHdpdHRlcicgb25MaW5rPXt0aGlzLm9uTGlua30+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IGFuaW1hdGUgc2hvdz17YW5pbS5lbnRlcmVkfT5cbiAgICAgICAgICAgICAgICAgICAge2FuaW0yID0+IDxXb3JkcyBhbmltYXRlIHNob3c9e2FuaW0yLmVudGVyZWR9PlR3aXR0ZXI8L1dvcmRzPn1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXJ3ZXM+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgc3RhcnRMb2FkaW5nICgpIHtcbiAgICBjb25zdCByZXNwb25zaXZlID0gdGhpcy5yZXNwb25zaXZlLmdldCgpO1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSB1dGlscy5nZXRSZXNwb25zaXZlUmVzb3VyY2UodGhpcy5wcm9wcy5yZXNvdXJjZXMuYmFja2dyb3VuZCwgcmVzcG9uc2l2ZSk7XG5cbiAgICB0aGlzLmxvYWRlci5sb2FkKHsgaW1hZ2VzOiBbYmFja2dyb3VuZCwgdGhpcy5wcm9maWxlXSB9LCB7IHRpbWVvdXQ6IDUgKiAxMDAwIH0pLlxuICAgICAgdGhlbigoKSA9PiB7fSwgKCkgPT4ge30pLlxuICAgICAgdGhlbigoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSwgbG9hZGVkOiB0cnVlIH0pKTtcbiAgfVxuXG4gIG9uTGluayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRlbXBsYXRlKHdpdGhTdHlsZXMoc3R5bGVzKShJbmRleCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwi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