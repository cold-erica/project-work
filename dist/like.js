(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define('like', ['exports'], factory) :
  (global = global || self, factory(global.like = {}));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var esCookie = createCommonjsModule(function (module, exports) {

  var __assign = commonjsGlobal && commonjsGlobal.__assign || function () {
    __assign = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return __assign.apply(this, arguments);
  };

  exports.__esModule = true;

  function stringifyAttribute(name, value) {
    if (!value) {
      return '';
    }

    var stringified = '; ' + name;

    if (value === true) {
      return stringified; // boolean attributes shouldn't have a value
    }

    return stringified + '=' + value;
  }

  function stringifyAttributes(attributes) {
    if (typeof attributes.expires === 'number') {
      var expires = new Date();
      expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
      attributes.expires = expires;
    }

    return stringifyAttribute('Expires', attributes.expires ? attributes.expires.toUTCString() : '') + stringifyAttribute('Domain', attributes.domain) + stringifyAttribute('Path', attributes.path) + stringifyAttribute('Secure', attributes.secure) + stringifyAttribute('SameSite', attributes.sameSite);
  }

  function encode(name, value, attributes) {
    return encodeURIComponent(name).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent) // allowed special characters
    .replace(/\(/g, '%28').replace(/\)/g, '%29') // replace opening and closing parens
    + '=' + encodeURIComponent(value) // allowed special characters
    .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + stringifyAttributes(attributes);
  }

  exports.encode = encode;

  function parse(cookieString) {
    var result = {};
    var cookies = cookieString ? cookieString.split('; ') : [];
    var rdecode = /(%[\dA-F]{2})+/gi;

    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var cookie = parts.slice(1).join('=');

      if (cookie.charAt(0) === '"') {
        cookie = cookie.slice(1, -1);
      }

      try {
        var name_1 = parts[0].replace(rdecode, decodeURIComponent);
        result[name_1] = cookie.replace(rdecode, decodeURIComponent);
      } catch (e) {// ignore cookies with invalid name/value encoding
      }
    }

    return result;
  }

  exports.parse = parse;

  function getAll() {
    return parse(document.cookie);
  }

  exports.getAll = getAll;

  function get(name) {
    return getAll()[name];
  }

  exports.get = get;

  function set(name, value, attributes) {
    document.cookie = encode(name, value, __assign({
      path: '/'
    }, attributes));
  }

  exports.set = set;

  function remove(name, attributes) {
    set(name, '', __assign(__assign({}, attributes), {
      expires: -1
    }));
  }

  exports.remove = remove;
  });

  unwrapExports(esCookie);
  var esCookie_1 = esCookie.encode;
  var esCookie_2 = esCookie.parse;
  var esCookie_3 = esCookie.getAll;
  var esCookie_4 = esCookie.get;
  var esCookie_5 = esCookie.set;
  var esCookie_6 = esCookie.remove;

  var LikeHandler =
  /*#__PURE__*/
  function () {
    function LikeHandler() {
      _classCallCheck(this, LikeHandler);

      this.values = [8000, 7301, 8125];
      this.cookieName = 'like-';
      this.selector = '.js-like';
      this.selectedClass = 'fas';
      this.unselectedClass = 'far';
      this.setInitialState();
    }

    _createClass(LikeHandler, [{
      key: "setInitialState",
      value: function setInitialState() {
        var _this = this;

        var elements = _toConsumableArray(document.querySelectorAll(this.selector));

        elements.forEach(function (element, index) {
          var cookie = esCookie_4(_this.getCookieName(index));
          var cookieIsSet = cookie === '1';

          _this.setLikeState(element, cookieIsSet, _this.values[index]);

          var handler = function handler(e) {
            _this.likeClick(index, e);
          };

          element.addEventListener('click', handler);
        });
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        document.querySelector(this.likeSelector).addEventListener('click', this.likeClick.bind(this));
      }
    }, {
      key: "getSetValue",
      value: function getSetValue(value) {
        return value === true ? '1' : '0';
      }
    }, {
      key: "setLikeState",
      value: function setLikeState(element, value, initialValue) {
        element.dataset.set = this.getSetValue(value);
        var classToRemove = value ? this.unselectedClass : this.selectedClass;
        var classToAdd = value ? this.selectedClass : this.unselectedClass;
        var valueToSet = value ? initialValue + 1 : initialValue;
        element.classList.remove(classToRemove);
        element.classList.add(classToAdd);
        element.innerHTML = " ".concat(valueToSet);
      }
    }, {
      key: "getCookieName",
      value: function getCookieName(index) {
        return "".concat(this.cookieName).concat(index);
      }
    }, {
      key: "likeClick",
      value: function likeClick(index, e) {
        var element = e.target;
        var newSelected = !(element.dataset.set === '1');
        var newCookieValue = newSelected ? '1' : '0';
        esCookie_5(this.getCookieName(index), newCookieValue);
        this.setLikeState(element, newSelected, this.values[index]);
      }
    }]);

    return LikeHandler;
  }();

  exports.LikeHandler = LikeHandler;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
