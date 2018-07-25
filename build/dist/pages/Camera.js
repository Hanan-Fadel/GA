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

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reactWebcam = require("react-webcam");

var _reactWebcam2 = _interopRequireDefault(_reactWebcam);

var _actions = require('../actions');

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

var Camera = function (_Component) {
  _inherits(Camera, _Component);

  function Camera(props) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this, props));

    _this.takeScreenshot = _this.takeScreenshot.bind(_this);
    return _this;
  }

  _createClass(Camera, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.mountWebcam(this.refs.webcam);
    }
  }, {
    key: 'takeScreenshot',
    value: function takeScreenshot() {
      var screenshot = this.props.webcam.getScreenshot();
      console.log(screenshot);
      this.props.fetchFace(screenshot);
      this.props.fetchEmotion(screenshot);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactWebcam2.default, {
        ref: 'webcam',
        muted: true,
        height: 400,
        width: 400,
        screenshotFormat: 'image/png'
      });
    }
  }]);

  return Camera;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var webcam = state.webcam;
  return {
    webcam: webcam
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchFace: _actions.fetchFace, fetchEmotion: _actions.fetchEmotion, mountWebcam: _actions.mountWebcam }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Camera);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0NhbWVyYS5qcyJdLCJuYW1lcyI6WyJDYW1lcmEiLCJwcm9wcyIsInRha2VTY3JlZW5zaG90IiwiYmluZCIsIm1vdW50V2ViY2FtIiwicmVmcyIsIndlYmNhbSIsInNjcmVlbnNob3QiLCJnZXRTY3JlZW5zaG90IiwiY29uc29sZSIsImxvZyIsImZldGNoRmFjZSIsImZldGNoRW1vdGlvbiIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLEE7b0JBQ0o7O2tCQUFBLEFBQWEsT0FBTzswQkFBQTs7Z0hBQUEsQUFDWixBQUVOOztVQUFBLEFBQUssaUJBQWlCLE1BQUEsQUFBSyxlQUFMLEFBQW9CLEtBSHhCLEFBR2xCO1dBQ0Q7Ozs7O3dDQUVvQixBQUNuQjtXQUFBLEFBQUssTUFBTCxBQUFXLFlBQVksS0FBQSxBQUFLLEtBQTVCLEFBQWlDLEFBQ2xDOzs7O3FDQUVpQixBQUNoQjtVQUFNLGFBQWEsS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUE5QixBQUFtQixBQUFrQixBQUNyQztjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7V0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLEFBQ3JCO1dBQUEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixBQUN6Qjs7Ozs2QkFFUyxBQUNSOzJDQUNLLGNBQUQ7YUFBQSxBQUNNLEFBQ0o7ZUFGRixBQUdFO2dCQUhGLEFBR1UsQUFDUjtlQUpGLEFBSVMsQUFDUDswQkFOTixBQUNJLEFBS21CLEFBR3hCO0FBUE8sT0FERjs7Ozs7RUFwQmEsTzs7QUErQnJCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBVSxBQUNqQztNQUFNLFNBQVMsTUFBZixBQUFxQixBQUNyQjs7WUFBQSxBQUFPLEFBR1I7QUFIUSxBQUNMO0FBSEo7O0FBT0EsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDO1NBQU8sK0JBQW1CLEVBQUUsb0JBQUYsV0FBYSx1QkFBYixjQUEyQixzQkFBOUMsQUFBbUIsZUFBMUIsQUFBTyxBQUE2RCxBQUNyRTtBQUZEOztrQkFLZSx5QkFBQSxBQUFRLGlCQUFSLEFBQXlCLG9CQUF6QixBQUE2QyxBIiwiZmlsZSI6IkNhbWVyYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2NoZW4vRG93bmxvYWRzL3JvbWVscGVyZXouY29tLW1hc3RlciJ9