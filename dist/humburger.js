(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define('humburger', ['exports'], factory) :
  (global = global || self, factory(global.humburger = {}));
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

  var HumburgerMenu =
  /*#__PURE__*/
  function () {
    function HumburgerMenu() {
      var _this = this;

      _classCallCheck(this, HumburgerMenu);

      this.opened = false;
      this.el = document.querySelector('.js-humburger');
      this.menuEl = document.querySelector('.js-header-menu');
      this.visibleClass = 'visible';
      this.hiddenClass = 'hidden';
      this.el.addEventListener('click', function () {
        if (!_this.opened) {
          _this.open();
        } else {
          _this.close();
        }
      });
    }

    _createClass(HumburgerMenu, [{
      key: "open",
      value: function open() {
        this.menuEl.classList.add(this.visibleClass);
        this.el.classList.add(this.hiddenClass);
        this.opened = !this.opened;
      }
    }, {
      key: "close",
      value: function close() {
        this.menuEl.classList.remove(this.visibleClass);
        this.el.classList.remove(this.hiddenClass);
        this.opened = !this.opened;
      }
    }]);

    return HumburgerMenu;
  }();

  exports.HumburgerMenu = HumburgerMenu;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
