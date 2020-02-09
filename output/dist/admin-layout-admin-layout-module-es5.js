function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-layout-admin-layout-module"], {
  /***/
  "./node_modules/clipboard/dist/clipboard.js":
  /*!**************************************************!*\
    !*** ./node_modules/clipboard/dist/clipboard.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesClipboardDistClipboardJs(module, exports, __webpack_require__) {
    /*!
     * clipboard.js v2.0.4
     * https://zenorocha.github.io/clipboard.js
     * 
     * Licensed MIT © Zeno Rocha
     */
    (function webpackUniversalModuleDefinition(root, factory) {
      if (true) module.exports = factory();else {}
    })(this, function () {
      return (
        /******/
        function (modules) {
          // webpackBootstrap

          /******/
          // The module cache

          /******/
          var installedModules = {};
          /******/

          /******/
          // The require function

          /******/

          function __webpack_require__(moduleId) {
            /******/

            /******/
            // Check if module is in cache

            /******/
            if (installedModules[moduleId]) {
              /******/
              return installedModules[moduleId].exports;
              /******/
            }
            /******/
            // Create a new module (and put it into the cache)

            /******/


            var module = installedModules[moduleId] = {
              /******/
              i: moduleId,

              /******/
              l: false,

              /******/
              exports: {}
              /******/

            };
            /******/

            /******/
            // Execute the module function

            /******/

            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/

            /******/
            // Flag the module as loaded

            /******/

            module.l = true;
            /******/

            /******/
            // Return the exports of the module

            /******/

            return module.exports;
            /******/
          }
          /******/

          /******/

          /******/
          // expose the modules object (__webpack_modules__)

          /******/


          __webpack_require__.m = modules;
          /******/

          /******/
          // expose the module cache

          /******/

          __webpack_require__.c = installedModules;
          /******/

          /******/
          // define getter function for harmony exports

          /******/

          __webpack_require__.d = function (exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
              /******/
              Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
              });
              /******/
            }
            /******/

          };
          /******/

          /******/
          // define __esModule on exports

          /******/


          __webpack_require__.r = function (exports) {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
              /******/
              Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
              });
              /******/
            }
            /******/


            Object.defineProperty(exports, '__esModule', {
              value: true
            });
            /******/
          };
          /******/

          /******/
          // create a fake namespace object

          /******/
          // mode & 1: value is a module id, require it

          /******/
          // mode & 2: merge all properties of value into the ns

          /******/
          // mode & 4: return value when already ns object

          /******/
          // mode & 8|1: behave like require

          /******/


          __webpack_require__.t = function (value, mode) {
            /******/
            if (mode & 1) value = __webpack_require__(value);
            /******/

            if (mode & 8) return value;
            /******/

            if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
            /******/

            var ns = Object.create(null);
            /******/

            __webpack_require__.r(ns);
            /******/


            Object.defineProperty(ns, 'default', {
              enumerable: true,
              value: value
            });
            /******/

            if (mode & 2 && typeof value != 'string') for (var key in value) {
              __webpack_require__.d(ns, key, function (key) {
                return value[key];
              }.bind(null, key));
            }
            /******/

            return ns;
            /******/
          };
          /******/

          /******/
          // getDefaultExport function for compatibility with non-harmony modules

          /******/


          __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
            /******/
            function getDefault() {
              return module['default'];
            } :
            /******/
            function getModuleExports() {
              return module;
            };
            /******/

            __webpack_require__.d(getter, 'a', getter);
            /******/


            return getter;
            /******/
          };
          /******/

          /******/
          // Object.prototype.hasOwnProperty.call

          /******/


          __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          /******/

          /******/
          // __webpack_public_path__

          /******/


          __webpack_require__.p = "";
          /******/

          /******/

          /******/
          // Load entry module and return exports

          /******/

          return __webpack_require__(__webpack_require__.s = 0);
          /******/
        }(
        /************************************************************************/

        /******/
        [
        /* 0 */

        /***/
        function (module, exports, __webpack_require__) {
          "use strict";

          var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _clipboardAction = __webpack_require__(1);

          var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

          var _tinyEmitter = __webpack_require__(3);

          var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

          var _goodListener = __webpack_require__(4);

          var _goodListener2 = _interopRequireDefault(_goodListener);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (typeof call === "object" || typeof call === "function") ? call : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }
          /**
           * Base class which takes one or more elements, adds event listeners to them,
           * and instantiates a new `ClipboardAction` on each click.
           */


          var Clipboard = function (_Emitter) {
            _inherits(Clipboard, _Emitter);
            /**
             * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
             * @param {Object} options
             */


            function Clipboard(trigger, options) {
              _classCallCheck(this, Clipboard);

              var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

              _this.resolveOptions(options);

              _this.listenClick(trigger);

              return _this;
            }
            /**
             * Defines if attributes would be resolved using internal setter functions
             * or custom functions that were passed in the constructor.
             * @param {Object} options
             */


            _createClass(Clipboard, [{
              key: 'resolveOptions',
              value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
              }
              /**
               * Adds a click event listener to the passed trigger.
               * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
               */

            }, {
              key: 'listenClick',
              value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                  return _this2.onClick(e);
                });
              }
              /**
               * Defines a new `ClipboardAction` on each click event.
               * @param {Event} e
               */

            }, {
              key: 'onClick',
              value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                  this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                  action: this.action(trigger),
                  target: this.target(trigger),
                  text: this.text(trigger),
                  container: this.container,
                  trigger: trigger,
                  emitter: this
                });
              }
              /**
               * Default `action` lookup function.
               * @param {Element} trigger
               */

            }, {
              key: 'defaultAction',
              value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
              }
              /**
               * Default `target` lookup function.
               * @param {Element} trigger
               */

            }, {
              key: 'defaultTarget',
              value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                  return document.querySelector(selector);
                }
              }
              /**
               * Returns the support of the given action, or all actions if no action is
               * given.
               * @param {String} [action]
               */

            }, {
              key: 'defaultText',

              /**
               * Default `text` lookup function.
               * @param {Element} trigger
               */
              value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
              }
              /**
               * Destroy lifecycle.
               */

            }, {
              key: 'destroy',
              value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                  this.clipboardAction.destroy();
                  this.clipboardAction = null;
                }
              }
            }], [{
              key: 'isSupported',
              value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;
                actions.forEach(function (action) {
                  support = support && !!document.queryCommandSupported(action);
                });
                return support;
              }
            }]);

            return Clipboard;
          }(_tinyEmitter2.default);
          /**
           * Helper function to retrieve attribute value.
           * @param {String} suffix
           * @param {Element} element
           */


          function getAttributeValue(suffix, element) {
            var attribute = 'data-clipboard-' + suffix;

            if (!element.hasAttribute(attribute)) {
              return;
            }

            return element.getAttribute(attribute);
          }

          module.exports = Clipboard;
          /***/
        },
        /* 1 */

        /***/
        function (module, exports, __webpack_require__) {
          "use strict";

          var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };

          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var _select = __webpack_require__(2);

          var _select2 = _interopRequireDefault(_select);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              default: obj
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          /**
           * Inner class which performs selection from either `text` or `target`
           * properties and then executes copy or cut operations.
           */


          var ClipboardAction = function () {
            /**
             * @param {Object} options
             */
            function ClipboardAction(options) {
              _classCallCheck(this, ClipboardAction);

              this.resolveOptions(options);
              this.initSelection();
            }
            /**
             * Defines base properties passed from constructor.
             * @param {Object} options
             */


            _createClass(ClipboardAction, [{
              key: 'resolveOptions',
              value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;
                this.selectedText = '';
              }
              /**
               * Decides which selection strategy is going to be applied based
               * on the existence of `text` and `target` properties.
               */

            }, {
              key: 'initSelection',
              value: function initSelection() {
                if (this.text) {
                  this.selectFake();
                } else if (this.target) {
                  this.selectTarget();
                }
              }
              /**
               * Creates a fake textarea element, sets its value from `text` property,
               * and makes a selection on it.
               */

            }, {
              key: 'selectFake',
              value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';
                this.removeFake();

                this.fakeHandlerCallback = function () {
                  return _this.removeFake();
                };

                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
                this.fakeElem = document.createElement('textarea'); // Prevent zooming on iOS

                this.fakeElem.style.fontSize = '12pt'; // Reset box model

                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0'; // Move element out of screen horizontally

                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';
                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;
                this.container.appendChild(this.fakeElem);
                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
              }
              /**
               * Only removes the fake element after another click event, that way
               * a user can hit `Ctrl+C` to copy because selection still exists.
               */

            }, {
              key: 'removeFake',
              value: function removeFake() {
                if (this.fakeHandler) {
                  this.container.removeEventListener('click', this.fakeHandlerCallback);
                  this.fakeHandler = null;
                  this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                  this.container.removeChild(this.fakeElem);
                  this.fakeElem = null;
                }
              }
              /**
               * Selects the content from element passed on `target` property.
               */

            }, {
              key: 'selectTarget',
              value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
              }
              /**
               * Executes the copy operation based on the current selection.
               */

            }, {
              key: 'copyText',
              value: function copyText() {
                var succeeded = void 0;

                try {
                  succeeded = document.execCommand(this.action);
                } catch (err) {
                  succeeded = false;
                }

                this.handleResult(succeeded);
              }
              /**
               * Fires an event based on the copy operation result.
               * @param {Boolean} succeeded
               */

            }, {
              key: 'handleResult',
              value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                  action: this.action,
                  text: this.selectedText,
                  trigger: this.trigger,
                  clearSelection: this.clearSelection.bind(this)
                });
              }
              /**
               * Moves focus away from `target` and back to the trigger, removes current selection.
               */

            }, {
              key: 'clearSelection',
              value: function clearSelection() {
                if (this.trigger) {
                  this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
              }
              /**
               * Sets the `action` to be performed which can be either 'copy' or 'cut'.
               * @param {String} action
               */

            }, {
              key: 'destroy',

              /**
               * Destroy lifecycle.
               */
              value: function destroy() {
                this.removeFake();
              }
            }, {
              key: 'action',
              set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                  throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
              }
              /**
               * Gets the `action` property.
               * @return {String}
               */
              ,
              get: function get() {
                return this._action;
              }
              /**
               * Sets the `target` property using an element
               * that will be have its content copied.
               * @param {Element} target
               */

            }, {
              key: 'target',
              set: function set(target) {
                if (target !== undefined) {
                  if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                      throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                      throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                  } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                  }
                }
              }
              /**
               * Gets the `target` property.
               * @return {String|HTMLElement}
               */
              ,
              get: function get() {
                return this._target;
              }
            }]);

            return ClipboardAction;
          }();

          module.exports = ClipboardAction;
          /***/
        },
        /* 2 */

        /***/
        function (module, exports) {
          function select(element) {
            var selectedText;

            if (element.nodeName === 'SELECT') {
              element.focus();
              selectedText = element.value;
            } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
              var isReadOnly = element.hasAttribute('readonly');

              if (!isReadOnly) {
                element.setAttribute('readonly', '');
              }

              element.select();
              element.setSelectionRange(0, element.value.length);

              if (!isReadOnly) {
                element.removeAttribute('readonly');
              }

              selectedText = element.value;
            } else {
              if (element.hasAttribute('contenteditable')) {
                element.focus();
              }

              var selection = window.getSelection();
              var range = document.createRange();
              range.selectNodeContents(element);
              selection.removeAllRanges();
              selection.addRange(range);
              selectedText = selection.toString();
            }

            return selectedText;
          }

          module.exports = select;
          /***/
        },
        /* 3 */

        /***/
        function (module, exports) {
          function E() {// Keep this empty so it's easier to inherit from
            // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
          }

          E.prototype = {
            on: function on(name, callback, ctx) {
              var e = this.e || (this.e = {});
              (e[name] || (e[name] = [])).push({
                fn: callback,
                ctx: ctx
              });
              return this;
            },
            once: function once(name, callback, ctx) {
              var self = this;

              function listener() {
                self.off(name, listener);
                callback.apply(ctx, arguments);
              }

              ;
              listener._ = callback;
              return this.on(name, listener, ctx);
            },
            emit: function emit(name) {
              var data = [].slice.call(arguments, 1);
              var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
              var i = 0;
              var len = evtArr.length;

              for (i; i < len; i++) {
                evtArr[i].fn.apply(evtArr[i].ctx, data);
              }

              return this;
            },
            off: function off(name, callback) {
              var e = this.e || (this.e = {});
              var evts = e[name];
              var liveEvents = [];

              if (evts && callback) {
                for (var i = 0, len = evts.length; i < len; i++) {
                  if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
                }
              } // Remove event from queue to prevent memory leak
              // Suggested by https://github.com/lazd
              // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910


              liveEvents.length ? e[name] = liveEvents : delete e[name];
              return this;
            }
          };
          module.exports = E;
          /***/
        },
        /* 4 */

        /***/
        function (module, exports, __webpack_require__) {
          var is = __webpack_require__(5);

          var delegate = __webpack_require__(6);
          /**
           * Validates all params and calls the right
           * listener function based on its target type.
           *
           * @param {String|HTMLElement|HTMLCollection|NodeList} target
           * @param {String} type
           * @param {Function} callback
           * @return {Object}
           */


          function listen(target, type, callback) {
            if (!target && !type && !callback) {
              throw new Error('Missing required arguments');
            }

            if (!is.string(type)) {
              throw new TypeError('Second argument must be a String');
            }

            if (!is.fn(callback)) {
              throw new TypeError('Third argument must be a Function');
            }

            if (is.node(target)) {
              return listenNode(target, type, callback);
            } else if (is.nodeList(target)) {
              return listenNodeList(target, type, callback);
            } else if (is.string(target)) {
              return listenSelector(target, type, callback);
            } else {
              throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
            }
          }
          /**
           * Adds an event listener to a HTML element
           * and returns a remove listener function.
           *
           * @param {HTMLElement} node
           * @param {String} type
           * @param {Function} callback
           * @return {Object}
           */


          function listenNode(node, type, callback) {
            node.addEventListener(type, callback);
            return {
              destroy: function destroy() {
                node.removeEventListener(type, callback);
              }
            };
          }
          /**
           * Add an event listener to a list of HTML elements
           * and returns a remove listener function.
           *
           * @param {NodeList|HTMLCollection} nodeList
           * @param {String} type
           * @param {Function} callback
           * @return {Object}
           */


          function listenNodeList(nodeList, type, callback) {
            Array.prototype.forEach.call(nodeList, function (node) {
              node.addEventListener(type, callback);
            });
            return {
              destroy: function destroy() {
                Array.prototype.forEach.call(nodeList, function (node) {
                  node.removeEventListener(type, callback);
                });
              }
            };
          }
          /**
           * Add an event listener to a selector
           * and returns a remove listener function.
           *
           * @param {String} selector
           * @param {String} type
           * @param {Function} callback
           * @return {Object}
           */


          function listenSelector(selector, type, callback) {
            return delegate(document.body, selector, type, callback);
          }

          module.exports = listen;
          /***/
        },
        /* 5 */

        /***/
        function (module, exports) {
          /**
           * Check if argument is a HTML element.
           *
           * @param {Object} value
           * @return {Boolean}
           */
          exports.node = function (value) {
            return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
          };
          /**
           * Check if argument is a list of HTML elements.
           *
           * @param {Object} value
           * @return {Boolean}
           */


          exports.nodeList = function (value) {
            var type = Object.prototype.toString.call(value);
            return value !== undefined && (type === '[object NodeList]' || type === '[object HTMLCollection]') && 'length' in value && (value.length === 0 || exports.node(value[0]));
          };
          /**
           * Check if argument is a string.
           *
           * @param {Object} value
           * @return {Boolean}
           */


          exports.string = function (value) {
            return typeof value === 'string' || value instanceof String;
          };
          /**
           * Check if argument is a function.
           *
           * @param {Object} value
           * @return {Boolean}
           */


          exports.fn = function (value) {
            var type = Object.prototype.toString.call(value);
            return type === '[object Function]';
          };
          /***/

        },
        /* 6 */

        /***/
        function (module, exports, __webpack_require__) {
          var closest = __webpack_require__(7);
          /**
           * Delegates event to a selector.
           *
           * @param {Element} element
           * @param {String} selector
           * @param {String} type
           * @param {Function} callback
           * @param {Boolean} useCapture
           * @return {Object}
           */


          function _delegate(element, selector, type, callback, useCapture) {
            var listenerFn = listener.apply(this, arguments);
            element.addEventListener(type, listenerFn, useCapture);
            return {
              destroy: function destroy() {
                element.removeEventListener(type, listenerFn, useCapture);
              }
            };
          }
          /**
           * Delegates event to a selector.
           *
           * @param {Element|String|Array} [elements]
           * @param {String} selector
           * @param {String} type
           * @param {Function} callback
           * @param {Boolean} useCapture
           * @return {Object}
           */


          function delegate(elements, selector, type, callback, useCapture) {
            // Handle the regular Element usage
            if (typeof elements.addEventListener === 'function') {
              return _delegate.apply(null, arguments);
            } // Handle Element-less usage, it defaults to global delegation


            if (typeof type === 'function') {
              // Use `document` as the first parameter, then apply arguments
              // This is a short way to .unshift `arguments` without running into deoptimizations
              return _delegate.bind(null, document).apply(null, arguments);
            } // Handle Selector-based usage


            if (typeof elements === 'string') {
              elements = document.querySelectorAll(elements);
            } // Handle Array-like based usage


            return Array.prototype.map.call(elements, function (element) {
              return _delegate(element, selector, type, callback, useCapture);
            });
          }
          /**
           * Finds closest match and invokes callback.
           *
           * @param {Element} element
           * @param {String} selector
           * @param {String} type
           * @param {Function} callback
           * @return {Function}
           */


          function listener(element, selector, type, callback) {
            return function (e) {
              e.delegateTarget = closest(e.target, selector);

              if (e.delegateTarget) {
                callback.call(element, e);
              }
            };
          }

          module.exports = delegate;
          /***/
        },
        /* 7 */

        /***/
        function (module, exports) {
          var DOCUMENT_NODE_TYPE = 9;
          /**
           * A polyfill for Element.matches()
           */

          if (typeof Element !== 'undefined' && !Element.prototype.matches) {
            var proto = Element.prototype;
            proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
          }
          /**
           * Finds the closest parent that matches a selector.
           *
           * @param {Element} element
           * @param {String} selector
           * @return {Function}
           */


          function closest(element, selector) {
            while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
              if (typeof element.matches === 'function' && element.matches(selector)) {
                return element;
              }

              element = element.parentNode;
            }
          }

          module.exports = closest;
          /***/
        }
        /******/
        ])
      );
    });
    /***/

  },

  /***/
  "./node_modules/prismjs/components/prism-css.js":
  /*!******************************************************!*\
    !*** ./node_modules/prismjs/components/prism-css.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismCssJs(module, exports) {
    (function (Prism) {
      var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      Prism.languages.css = {
        'comment': /\/\*[\s\S]*?\*\//,
        'atrule': {
          pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
          inside: {
            'rule': /@[\w-]+/ // See rest below

          }
        },
        'url': {
          pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
          inside: {
            'function': /^url/i,
            'punctuation': /^\(|\)$/
          }
        },
        'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
        'string': {
          pattern: string,
          greedy: true
        },
        'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        'important': /!important\b/i,
        'function': /[-a-z0-9]+(?=\()/i,
        'punctuation': /[(){};:,]/
      };
      Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
      var markup = Prism.languages.markup;

      if (markup) {
        markup.tag.addInlined('style', 'css');
        Prism.languages.insertBefore('inside', 'attr-value', {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': {
                pattern: /^\s*style/i,
                inside: markup.tag.inside
              },
              'punctuation': /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': {
                pattern: /.+/i,
                inside: Prism.languages.css
              }
            },
            alias: 'language-css'
          }
        }, markup.tag);
      }
    })(Prism);
    /***/

  },

  /***/
  "./node_modules/prismjs/components/prism-java.js":
  /*!*******************************************************!*\
    !*** ./node_modules/prismjs/components/prism-java.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismJavaJs(module, exports) {
    (function (Prism) {
      var keywords = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|null|open|opens|package|private|protected|provides|public|requires|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/; // based on the java naming conventions

      var className = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
      Prism.languages.java = Prism.languages.extend('clike', {
        'class-name': [className, // variables and parameters
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
        'keyword': keywords,
        'function': [Prism.languages.clike.function, {
          pattern: /(\:\:)[a-z_]\w*/,
          lookbehind: true
        }],
        'number': /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
        'operator': {
          pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
          lookbehind: true
        }
      });
      Prism.languages.insertBefore('java', 'string', {
        'triple-quoted-string': {
          // http://openjdk.java.net/jeps/355#Description
          pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
          greedy: true,
          alias: 'string'
        }
      });
      Prism.languages.insertBefore('java', 'class-name', {
        'annotation': {
          alias: 'punctuation',
          pattern: /(^|[^.])@\w+/,
          lookbehind: true
        },
        'namespace': {
          pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(?:\.[a-z]\w*)+/,
          lookbehind: true,
          inside: {
            'punctuation': /\./
          }
        },
        'generics': {
          pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
          inside: {
            'class-name': className,
            'keyword': keywords,
            'punctuation': /[<>(),.:]/,
            'operator': /[?&|]/
          }
        }
      });
    })(Prism);
    /***/

  },

  /***/
  "./node_modules/prismjs/components/prism-javascript.js":
  /*!*************************************************************!*\
    !*** ./node_modules/prismjs/components/prism-javascript.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismJavascriptJs(module, exports) {
    Prism.languages.javascript = Prism.languages.extend('clike', {
      'class-name': [Prism.languages.clike['class-name'], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: true
      }],
      'keyword': [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: true
      }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }],
      'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
    });
    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore('javascript', 'keyword', {
      'regex': {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: true,
        greedy: true
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      'function-variable': {
        pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: 'function'
      },
      'parameter': [{
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }],
      'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore('javascript', 'string', {
      'template-string': {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: true,
        inside: {
          'template-punctuation': {
            pattern: /^`|`$/,
            alias: 'string'
          },
          'interpolation': {
            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
            lookbehind: true,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\${|}$/,
                alias: 'punctuation'
              },
              rest: Prism.languages.javascript
            }
          },
          'string': /[\s\S]+/
        }
      }
    });

    if (Prism.languages.markup) {
      Prism.languages.markup.tag.addInlined('script', 'javascript');
    }

    Prism.languages.js = Prism.languages.javascript;
    /***/
  },

  /***/
  "./node_modules/prismjs/components/prism-markup.js":
  /*!*********************************************************!*\
    !*** ./node_modules/prismjs/components/prism-markup.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismMarkupJs(module, exports) {
    Prism.languages.markup = {
      'comment': /<!--[\s\S]*?-->/,
      'prolog': /<\?[\s\S]+?\?>/,
      'doctype': {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
        greedy: true
      },
      'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
      'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: true,
        inside: {
          'tag': {
            pattern: /^<\/?[^\s>\/]+/i,
            inside: {
              'punctuation': /^<\/?/,
              'namespace': /^[^\s>\/:]+:/
            }
          },
          'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
            inside: {
              'punctuation': [/^=/, {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }]
            }
          },
          'punctuation': /\/?>/,
          'attr-name': {
            pattern: /[^\s>\/]+/,
            inside: {
              'namespace': /^[^\s>\/:]+:/
            }
          }
        }
      },
      'entity': /&#?[\da-z]{1,8};/i
    };
    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

    Prism.hooks.add('wrap', function (env) {
      if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
      }
    });
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside['language-' + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism.languages[lang]
        };
        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
          'included-cdata': {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside
          }
        };
        inside['language-' + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism.languages[lang]
        };
        var def = {};
        def[tagName] = {
          pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
          lookbehind: true,
          greedy: true,
          inside: inside
        };
        Prism.languages.insertBefore('markup', 'cdata', def);
      }
    });
    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    /***/
  },

  /***/
  "./node_modules/prismjs/components/prism-sass.js":
  /*!*******************************************************!*\
    !*** ./node_modules/prismjs/components/prism-sass.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismSassJs(module, exports) {
    (function (Prism) {
      Prism.languages.sass = Prism.languages.extend('css', {
        // Sass comments don't need to be closed, only indented
        'comment': {
          pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
          lookbehind: true
        }
      });
      Prism.languages.insertBefore('sass', 'atrule', {
        // We want to consume the whole line
        'atrule-line': {
          // Includes support for = and + shortcuts
          pattern: /^(?:[ \t]*)[@+=].+/m,
          inside: {
            'atrule': /(?:@[\w-]+|[+=])/m
          }
        }
      });
      delete Prism.languages.sass.atrule;
      var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
      var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
        pattern: /(\s+)-(?=\s)/,
        lookbehind: true
      }];
      Prism.languages.insertBefore('sass', 'property', {
        // We want to consume the whole line
        'variable-line': {
          pattern: /^[ \t]*\$.+/m,
          inside: {
            'punctuation': /:/,
            'variable': variable,
            'operator': operator
          }
        },
        // We want to consume the whole line
        'property-line': {
          pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
          inside: {
            'property': [/[^:\s]+(?=\s*:)/, {
              pattern: /(:)[^:\s]+/,
              lookbehind: true
            }],
            'punctuation': /:/,
            'variable': variable,
            'operator': operator,
            'important': Prism.languages.sass.important
          }
        }
      });
      delete Prism.languages.sass.property;
      delete Prism.languages.sass.important; // Now that whole lines for other patterns are consumed,
      // what's left should be selectors

      Prism.languages.insertBefore('sass', 'punctuation', {
        'selector': {
          pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
          lookbehind: true
        }
      });
    })(Prism);
    /***/

  },

  /***/
  "./node_modules/prismjs/components/prism-scss.js":
  /*!*******************************************************!*\
    !*** ./node_modules/prismjs/components/prism-scss.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismScssJs(module, exports) {
    Prism.languages.scss = Prism.languages.extend('css', {
      'comment': {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: true
      },
      'atrule': {
        pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
        inside: {
          'rule': /@[\w-]+/ // See rest below

        }
      },
      // url, compassified
      'url': /(?:[-a-z]+-)?url(?=\()/i,
      // CSS selector regex is not appropriate for Sass
      // since there can be lot more things (var, @ directive, nesting..)
      // a selector must start at the end of a property or after a brace (end of other rules or nesting)
      // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
      // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
      // can "pass" as a selector- e.g: proper#{$erty})
      // this one was hard to do, so please be careful if you edit this one :)
      'selector': {
        // Initial look-ahead is used to prevent matching of blank selectors
        pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
        inside: {
          'parent': {
            pattern: /&/,
            alias: 'important'
          },
          'placeholder': /%[-\w]+/,
          'variable': /\$[-\w]+|#\{\$[-\w]+\}/
        }
      },
      'property': {
        pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
        inside: {
          'variable': /\$[-\w]+|#\{\$[-\w]+\}/
        }
      }
    });
    Prism.languages.insertBefore('scss', 'atrule', {
      'keyword': [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
        pattern: /( +)(?:from|through)(?= )/,
        lookbehind: true
      }]
    });
    Prism.languages.insertBefore('scss', 'important', {
      // var and interpolated vars
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    });
    Prism.languages.insertBefore('scss', 'function', {
      'placeholder': {
        pattern: /%[-\w]+/,
        alias: 'selector'
      },
      'statement': {
        pattern: /\B!(?:default|optional)\b/i,
        alias: 'keyword'
      },
      'boolean': /\b(?:true|false)\b/,
      'null': {
        pattern: /\bnull\b/,
        alias: 'keyword'
      },
      'operator': {
        pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
        lookbehind: true
      }
    });
    Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;
    /***/
  },

  /***/
  "./node_modules/prismjs/components/prism-typescript.js":
  /*!*************************************************************!*\
    !*** ./node_modules/prismjs/components/prism-typescript.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismTypescriptJs(module, exports) {
    Prism.languages.typescript = Prism.languages.extend('javascript', {
      // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
      'keyword': /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
      'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
    });
    Prism.languages.ts = Prism.languages.typescript;
    /***/
  },

  /***/
  "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsPluginsCopyToClipboardPrismCopyToClipboardJs(module, exports, __webpack_require__) {
    (function () {
      if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
      }

      if (!Prism.plugins.toolbar) {
        console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');
        return;
      }

      var ClipboardJS = window.ClipboardJS || undefined;

      if (!ClipboardJS && "function" === 'function') {
        ClipboardJS = __webpack_require__(
        /*! clipboard */
        "./node_modules/clipboard/dist/clipboard.js");
      }

      var callbacks = [];

      if (!ClipboardJS) {
        var script = document.createElement('script');
        var head = document.querySelector('head');

        script.onload = function () {
          ClipboardJS = window.ClipboardJS;

          if (ClipboardJS) {
            while (callbacks.length) {
              callbacks.pop()();
            }
          }
        };

        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js';
        head.appendChild(script);
      }

      Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
        var linkCopy = document.createElement('button');
        linkCopy.textContent = 'Copy';

        if (!ClipboardJS) {
          callbacks.push(registerClipboard);
        } else {
          registerClipboard();
        }

        return linkCopy;

        function registerClipboard() {
          var clip = new ClipboardJS(linkCopy, {
            'text': function text() {
              return env.code;
            }
          });
          clip.on('success', function () {
            linkCopy.textContent = 'Copied!';
            resetText();
          });
          clip.on('error', function () {
            linkCopy.textContent = 'Press Ctrl+C to copy';
            resetText();
          });
        }

        function resetText() {
          setTimeout(function () {
            linkCopy.textContent = 'Copy';
          }, 5000);
        }
      });
    })();
    /***/

  },

  /***/
  "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js":
  /*!***************************************************************!*\
    !*** ./node_modules/prismjs/plugins/toolbar/prism-toolbar.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsPluginsToolbarPrismToolbarJs(module, exports) {
    (function () {
      if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
      }

      var callbacks = [];
      var map = {};

      var noop = function noop() {};

      Prism.plugins.toolbar = {};
      /**
       * @typedef ButtonOptions
       * @property {string} text The text displayed.
       * @property {string} [url] The URL of the link which will be created.
       * @property {Function} [onClick] The event listener for the `click` event of the created button.
       * @property {string} [className] The class attribute to include with element.
       */

      /**
       * Register a button callback with the toolbar.
       *
       * @param {string} key
       * @param {ButtonOptions|Function} opts
       */

      var registerButton = Prism.plugins.toolbar.registerButton = function (key, opts) {
        var callback;

        if (typeof opts === 'function') {
          callback = opts;
        } else {
          callback = function callback(env) {
            var element;

            if (typeof opts.onClick === 'function') {
              element = document.createElement('button');
              element.type = 'button';
              element.addEventListener('click', function () {
                opts.onClick.call(this, env);
              });
            } else if (typeof opts.url === 'string') {
              element = document.createElement('a');
              element.href = opts.url;
            } else {
              element = document.createElement('span');
            }

            if (opts.className) {
              element.classList.add(opts.className);
            }

            element.textContent = opts.text;
            return element;
          };
        }

        if (key in map) {
          console.warn('There is a button with the key "' + key + '" registered already.');
          return;
        }

        callbacks.push(map[key] = callback);
      };
      /**
       * Post-highlight Prism hook callback.
       *
       * @param env
       */


      var hook = Prism.plugins.toolbar.hook = function (env) {
        // Check if inline or actual code block (credit to line-numbers plugin)
        var pre = env.element.parentNode;

        if (!pre || !/pre/i.test(pre.nodeName)) {
          return;
        } // Autoloader rehighlights, so only do this once.


        if (pre.parentNode.classList.contains('code-toolbar')) {
          return;
        } // Create wrapper for <pre> to prevent scrolling toolbar with content


        var wrapper = document.createElement("div");
        wrapper.classList.add("code-toolbar");
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre); // Setup the toolbar

        var toolbar = document.createElement('div');
        toolbar.classList.add('toolbar');

        if (document.body.hasAttribute('data-toolbar-order')) {
          callbacks = document.body.getAttribute('data-toolbar-order').split(',').map(function (key) {
            return map[key] || noop;
          });
        }

        callbacks.forEach(function (callback) {
          var element = callback(env);

          if (!element) {
            return;
          }

          var item = document.createElement('div');
          item.classList.add('toolbar-item');
          item.appendChild(element);
          toolbar.appendChild(item);
        }); // Add our toolbar to the currently created wrapper of <pre> tag

        wrapper.appendChild(toolbar);
      };

      registerButton('label', function (env) {
        var pre = env.element.parentNode;

        if (!pre || !/pre/i.test(pre.nodeName)) {
          return;
        }

        if (!pre.hasAttribute('data-label')) {
          return;
        }

        var element, template;
        var text = pre.getAttribute('data-label');

        try {
          // Any normal text will blow up this selector.
          template = document.querySelector('template#' + text);
        } catch (e) {}

        if (template) {
          element = template.content;
        } else {
          if (pre.hasAttribute('data-url')) {
            element = document.createElement('a');
            element.href = pre.getAttribute('data-url');
          } else {
            element = document.createElement('span');
          }

          element.textContent = text;
        }

        return element;
      });
      /**
       * Register the toolbar with Prism.
       */

      Prism.hooks.add('complete', hook);
    })();
    /***/

  },

  /***/
  "./node_modules/prismjs/prism.js":
  /*!***************************************!*\
    !*** ./node_modules/prismjs/prism.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsPrismJs(module, exports, __webpack_require__) {
    /* **********************************************
         Begin prism-core.js
    ********************************************** */
    var _self = typeof window !== 'undefined' ? window // if in browser
    : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
    : {} // if in node js
    ;
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     * MIT license http://www.opensource.org/licenses/mit-license.php/
     * @author Lea Verou http://lea.verou.me
     */


    var Prism = function (_self) {
      // Private helper vars
      var lang = /\blang(?:uage)?-([\w-]+)\b/i;
      var uniqueId = 0;
      var _ = {
        manual: _self.Prism && _self.Prism.manual,
        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
        util: {
          encode: function encode(tokens) {
            if (tokens instanceof Token) {
              return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
            } else if (Array.isArray(tokens)) {
              return tokens.map(_.util.encode);
            } else {
              return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
            }
          },
          type: function type(o) {
            return Object.prototype.toString.call(o).slice(8, -1);
          },
          objId: function objId(obj) {
            if (!obj['__id']) {
              Object.defineProperty(obj, '__id', {
                value: ++uniqueId
              });
            }

            return obj['__id'];
          },
          // Deep clone a language definition (e.g. to extend it)
          clone: function deepClone(o, visited) {
            var clone,
                id,
                type = _.util.type(o);

            visited = visited || {};

            switch (type) {
              case 'Object':
                id = _.util.objId(o);

                if (visited[id]) {
                  return visited[id];
                }

                clone = {};
                visited[id] = clone;

                for (var key in o) {
                  if (o.hasOwnProperty(key)) {
                    clone[key] = deepClone(o[key], visited);
                  }
                }

                return clone;

              case 'Array':
                id = _.util.objId(o);

                if (visited[id]) {
                  return visited[id];
                }

                clone = [];
                visited[id] = clone;
                o.forEach(function (v, i) {
                  clone[i] = deepClone(v, visited);
                });
                return clone;

              default:
                return o;
            }
          },

          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function getLanguage(element) {
            while (element && !lang.test(element.className)) {
              element = element.parentElement;
            }

            if (element) {
              return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
            }

            return 'none';
          },

          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function currentScript() {
            if (typeof document === 'undefined') {
              return null;
            }

            if ('currentScript' in document) {
              return document.currentScript;
            } // IE11 workaround
            // we'll get the src of the current script by parsing IE11's error stack trace
            // this will not work for inline scripts


            try {
              throw new Error();
            } catch (err) {
              // Get file src url from stack. Specifically works with the format of stack traces in IE.
              // A stack will look like this:
              //
              // Error
              //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
              //    at Global code (http://localhost/components/prism-core.js:606:1)
              var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];

              if (src) {
                var scripts = document.getElementsByTagName('script');

                for (var i in scripts) {
                  if (scripts[i].src == src) {
                    return scripts[i];
                  }
                }
              }

              return null;
            }
          }
        },
        languages: {
          extend: function extend(id, redef) {
            var lang = _.util.clone(_.languages[id]);

            for (var key in redef) {
              lang[key] = redef[key];
            }

            return lang;
          },

          /**
           * Insert a token before another token in a language literal
           * As this needs to recreate the object (we cannot actually insert before keys in object literals),
           * we cannot just provide an object, we need an object and a key.
           * @param inside The key (or language id) of the parent
           * @param before The key to insert before.
           * @param insert Object with the key/value pairs to insert
           * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
           */
          insertBefore: function insertBefore(inside, before, insert, root) {
            root = root || _.languages;
            var grammar = root[inside];
            var ret = {};

            for (var token in grammar) {
              if (grammar.hasOwnProperty(token)) {
                if (token == before) {
                  for (var newToken in insert) {
                    if (insert.hasOwnProperty(newToken)) {
                      ret[newToken] = insert[newToken];
                    }
                  }
                } // Do not insert token which also occur in insert. See #1525


                if (!insert.hasOwnProperty(token)) {
                  ret[token] = grammar[token];
                }
              }
            }

            var old = root[inside];
            root[inside] = ret; // Update references in other language definitions

            _.languages.DFS(_.languages, function (key, value) {
              if (value === old && key != inside) {
                this[key] = ret;
              }
            });

            return ret;
          },
          // Traverse a language definition with Depth First Search
          DFS: function DFS(o, callback, type, visited) {
            visited = visited || {};
            var objId = _.util.objId;

            for (var i in o) {
              if (o.hasOwnProperty(i)) {
                callback.call(o, i, o[i], type || i);

                var property = o[i],
                    propertyType = _.util.type(property);

                if (propertyType === 'Object' && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, null, visited);
                } else if (propertyType === 'Array' && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, i, visited);
                }
              }
            }
          }
        },
        plugins: {},
        highlightAll: function highlightAll(async, callback) {
          _.highlightAllUnder(document, async, callback);
        },
        highlightAllUnder: function highlightAllUnder(container, async, callback) {
          var env = {
            callback: callback,
            container: container,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };

          _.hooks.run('before-highlightall', env);

          env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

          _.hooks.run('before-all-elements-highlight', env);

          for (var i = 0, element; element = env.elements[i++];) {
            _.highlightElement(element, async === true, env.callback);
          }
        },
        highlightElement: function highlightElement(element, async, callback) {
          // Find language
          var language = _.util.getLanguage(element);

          var grammar = _.languages[language]; // Set language on the element, if not present

          element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language; // Set language on the parent, for styling

          var parent = element.parentNode;

          if (parent && parent.nodeName.toLowerCase() === 'pre') {
            parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
          }

          var code = element.textContent;
          var env = {
            element: element,
            language: language,
            grammar: grammar,
            code: code
          };

          function insertHighlightedCode(highlightedCode) {
            env.highlightedCode = highlightedCode;

            _.hooks.run('before-insert', env);

            env.element.innerHTML = env.highlightedCode;

            _.hooks.run('after-highlight', env);

            _.hooks.run('complete', env);

            callback && callback.call(env.element);
          }

          _.hooks.run('before-sanity-check', env);

          if (!env.code) {
            _.hooks.run('complete', env);

            callback && callback.call(env.element);
            return;
          }

          _.hooks.run('before-highlight', env);

          if (!env.grammar) {
            insertHighlightedCode(_.util.encode(env.code));
            return;
          }

          if (async && _self.Worker) {
            var worker = new Worker(_.filename);

            worker.onmessage = function (evt) {
              insertHighlightedCode(evt.data);
            };

            worker.postMessage(JSON.stringify({
              language: env.language,
              code: env.code,
              immediateClose: true
            }));
          } else {
            insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
          }
        },
        highlight: function highlight(text, grammar, language) {
          var env = {
            code: text,
            grammar: grammar,
            language: language
          };

          _.hooks.run('before-tokenize', env);

          env.tokens = _.tokenize(env.code, env.grammar);

          _.hooks.run('after-tokenize', env);

          return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        matchGrammar: function matchGrammar(text, strarr, grammar, index, startPos, oneshot, target) {
          for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
              continue;
            }

            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];

            for (var j = 0; j < patterns.length; ++j) {
              if (target && target == token + ',' + j) {
                return;
              }

              var pattern = patterns[j],
                  inside = pattern.inside,
                  lookbehind = !!pattern.lookbehind,
                  greedy = !!pattern.greedy,
                  lookbehindLength = 0,
                  alias = pattern.alias;

              if (greedy && !pattern.pattern.global) {
                // Without the global flag, lastIndex won't work
                var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
                pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
              }

              pattern = pattern.pattern || pattern; // Don’t cache length as it changes during the loop

              for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
                var str = strarr[i];

                if (strarr.length > text.length) {
                  // Something went terribly wrong, ABORT, ABORT!
                  return;
                }

                if (str instanceof Token) {
                  continue;
                }

                if (greedy && i != strarr.length - 1) {
                  pattern.lastIndex = pos;
                  var match = pattern.exec(text);

                  if (!match) {
                    break;
                  }

                  var from = match.index + (lookbehind && match[1] ? match[1].length : 0),
                      to = match.index + match[0].length,
                      k = i,
                      p = pos;

                  for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                    p += strarr[k].length; // Move the index i to the element in strarr that is closest to from

                    if (from >= p) {
                      ++i;
                      pos = p;
                    }
                  } // If strarr[i] is a Token, then the match starts inside another Token, which is invalid


                  if (strarr[i] instanceof Token) {
                    continue;
                  } // Number of tokens to delete and replace with the new match


                  delNum = k - i;
                  str = text.slice(pos, p);
                  match.index -= pos;
                } else {
                  pattern.lastIndex = 0;
                  var match = pattern.exec(str),
                      delNum = 1;
                }

                if (!match) {
                  if (oneshot) {
                    break;
                  }

                  continue;
                }

                if (lookbehind) {
                  lookbehindLength = match[1] ? match[1].length : 0;
                }

                var from = match.index + lookbehindLength,
                    match = match[0].slice(lookbehindLength),
                    to = from + match.length,
                    before = str.slice(0, from),
                    after = str.slice(to);
                var args = [i, delNum];

                if (before) {
                  ++i;
                  pos += before.length;
                  args.push(before);
                }

                var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
                args.push(wrapped);

                if (after) {
                  args.push(after);
                }

                Array.prototype.splice.apply(strarr, args);
                if (delNum != 1) _.matchGrammar(text, strarr, grammar, i, pos, true, token + ',' + j);
                if (oneshot) break;
              }
            }
          }
        },
        tokenize: function tokenize(text, grammar) {
          var strarr = [text];
          var rest = grammar.rest;

          if (rest) {
            for (var token in rest) {
              grammar[token] = rest[token];
            }

            delete grammar.rest;
          }

          _.matchGrammar(text, strarr, grammar, 0, 0, false);

          return strarr;
        },
        hooks: {
          all: {},
          add: function add(name, callback) {
            var hooks = _.hooks.all;
            hooks[name] = hooks[name] || [];
            hooks[name].push(callback);
          },
          run: function run(name, env) {
            var callbacks = _.hooks.all[name];

            if (!callbacks || !callbacks.length) {
              return;
            }

            for (var i = 0, callback; callback = callbacks[i++];) {
              callback(env);
            }
          }
        },
        Token: Token
      };
      _self.Prism = _;

      function Token(type, content, alias, matchedStr, greedy) {
        this.type = type;
        this.content = content;
        this.alias = alias; // Copy of the full string this token was created from

        this.length = (matchedStr || '').length | 0;
        this.greedy = !!greedy;
      }

      Token.stringify = function (o, language) {
        if (typeof o == 'string') {
          return o;
        }

        if (Array.isArray(o)) {
          return o.map(function (element) {
            return Token.stringify(element, language);
          }).join('');
        }

        var env = {
          type: o.type,
          content: Token.stringify(o.content, language),
          tag: 'span',
          classes: ['token', o.type],
          attributes: {},
          language: language
        };

        if (o.alias) {
          var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
          Array.prototype.push.apply(env.classes, aliases);
        }

        _.hooks.run('wrap', env);

        var attributes = Object.keys(env.attributes).map(function (name) {
          return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
        }).join(' ');
        return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
      };

      if (!_self.document) {
        if (!_self.addEventListener) {
          // in Node.js
          return _;
        }

        if (!_.disableWorkerMessageHandler) {
          // In worker
          _self.addEventListener('message', function (evt) {
            var message = JSON.parse(evt.data),
                lang = message.language,
                code = message.code,
                immediateClose = message.immediateClose;

            _self.postMessage(_.highlight(code, _.languages[lang], lang));

            if (immediateClose) {
              _self.close();
            }
          }, false);
        }

        return _;
      } //Get current script and highlight


      var script = _.util.currentScript();

      if (script) {
        _.filename = script.src;

        if (script.hasAttribute('data-manual')) {
          _.manual = true;
        }
      }

      if (!_.manual) {
        var highlightAutomaticallyCallback = function highlightAutomaticallyCallback() {
          if (!_.manual) {
            _.highlightAll();
          }
        }; // If the document state is "loading", then we'll use DOMContentLoaded.
        // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
        // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
        // might take longer one animation frame to execute which can create a race condition where only some plugins have
        // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
        // See https://github.com/PrismJS/prism/issues/2102


        var readyState = document.readyState;

        if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
          document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
        } else {
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(highlightAutomaticallyCallback);
          } else {
            window.setTimeout(highlightAutomaticallyCallback, 16);
          }
        }
      }

      return _;
    }(_self);

    if (true && module.exports) {
      module.exports = Prism;
    } // hack for components to work correctly in node.js


    if (typeof global !== 'undefined') {
      global.Prism = Prism;
    }
    /* **********************************************
         Begin prism-markup.js
    ********************************************** */


    Prism.languages.markup = {
      'comment': /<!--[\s\S]*?-->/,
      'prolog': /<\?[\s\S]+?\?>/,
      'doctype': {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
        greedy: true
      },
      'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
      'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: true,
        inside: {
          'tag': {
            pattern: /^<\/?[^\s>\/]+/i,
            inside: {
              'punctuation': /^<\/?/,
              'namespace': /^[^\s>\/:]+:/
            }
          },
          'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
            inside: {
              'punctuation': [/^=/, {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }]
            }
          },
          'punctuation': /\/?>/,
          'attr-name': {
            pattern: /[^\s>\/]+/,
            inside: {
              'namespace': /^[^\s>\/:]+:/
            }
          }
        }
      },
      'entity': /&#?[\da-z]{1,8};/i
    };
    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

    Prism.hooks.add('wrap', function (env) {
      if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
      }
    });
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside['language-' + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism.languages[lang]
        };
        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
          'included-cdata': {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside
          }
        };
        inside['language-' + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism.languages[lang]
        };
        var def = {};
        def[tagName] = {
          pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
          lookbehind: true,
          greedy: true,
          inside: inside
        };
        Prism.languages.insertBefore('markup', 'cdata', def);
      }
    });
    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    /* **********************************************
         Begin prism-css.js
    ********************************************** */

    (function (Prism) {
      var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      Prism.languages.css = {
        'comment': /\/\*[\s\S]*?\*\//,
        'atrule': {
          pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
          inside: {
            'rule': /@[\w-]+/ // See rest below

          }
        },
        'url': {
          pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
          inside: {
            'function': /^url/i,
            'punctuation': /^\(|\)$/
          }
        },
        'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
        'string': {
          pattern: string,
          greedy: true
        },
        'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        'important': /!important\b/i,
        'function': /[-a-z0-9]+(?=\()/i,
        'punctuation': /[(){};:,]/
      };
      Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
      var markup = Prism.languages.markup;

      if (markup) {
        markup.tag.addInlined('style', 'css');
        Prism.languages.insertBefore('inside', 'attr-value', {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': {
                pattern: /^\s*style/i,
                inside: markup.tag.inside
              },
              'punctuation': /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': {
                pattern: /.+/i,
                inside: Prism.languages.css
              }
            },
            alias: 'language-css'
          }
        }, markup.tag);
      }
    })(Prism);
    /* **********************************************
         Begin prism-clike.js
    ********************************************** */


    Prism.languages.clike = {
      'comment': [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
      }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }],
      'string': {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      'class-name': {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          'punctuation': /[.\\]/
        }
      },
      'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
      'boolean': /\b(?:true|false)\b/,
      'function': /\w+(?=\()/,
      'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
      'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      'punctuation': /[{}[\];(),.:]/
    };
    /* **********************************************
         Begin prism-javascript.js
    ********************************************** */

    Prism.languages.javascript = Prism.languages.extend('clike', {
      'class-name': [Prism.languages.clike['class-name'], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: true
      }],
      'keyword': [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: true
      }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }],
      'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
    });
    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore('javascript', 'keyword', {
      'regex': {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: true,
        greedy: true
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      'function-variable': {
        pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: 'function'
      },
      'parameter': [{
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }],
      'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore('javascript', 'string', {
      'template-string': {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: true,
        inside: {
          'template-punctuation': {
            pattern: /^`|`$/,
            alias: 'string'
          },
          'interpolation': {
            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
            lookbehind: true,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\${|}$/,
                alias: 'punctuation'
              },
              rest: Prism.languages.javascript
            }
          },
          'string': /[\s\S]+/
        }
      }
    });

    if (Prism.languages.markup) {
      Prism.languages.markup.tag.addInlined('script', 'javascript');
    }

    Prism.languages.js = Prism.languages.javascript;
    /* **********************************************
         Begin prism-file-highlight.js
    ********************************************** */

    (function () {
      if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
        return;
      }
      /**
       * @param {Element} [container=document]
       */


      self.Prism.fileHighlight = function (container) {
        container = container || document;
        var Extensions = {
          'js': 'javascript',
          'py': 'python',
          'rb': 'ruby',
          'ps1': 'powershell',
          'psm1': 'powershell',
          'sh': 'bash',
          'bat': 'batch',
          'h': 'c',
          'tex': 'latex'
        };
        Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
          // ignore if already loaded
          if (pre.hasAttribute('data-src-loaded')) {
            return;
          } // load current


          var src = pre.getAttribute('data-src');
          var language,
              parent = pre;
          var lang = /\blang(?:uage)?-([\w-]+)\b/i;

          while (parent && !lang.test(parent.className)) {
            parent = parent.parentNode;
          }

          if (parent) {
            language = (pre.className.match(lang) || [, ''])[1];
          }

          if (!language) {
            var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
            language = Extensions[extension] || extension;
          }

          var code = document.createElement('code');
          code.className = 'language-' + language;
          pre.textContent = '';
          code.textContent = 'Loading…';
          pre.appendChild(code);
          var xhr = new XMLHttpRequest();
          xhr.open('GET', src, true);

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status < 400 && xhr.responseText) {
                code.textContent = xhr.responseText;
                Prism.highlightElement(code); // mark as loaded

                pre.setAttribute('data-src-loaded', '');
              } else if (xhr.status >= 400) {
                code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
              } else {
                code.textContent = '✖ Error: File does not exist or is empty';
              }
            }
          };

          xhr.send(null);
        });
      };

      document.addEventListener('DOMContentLoaded', function () {
        // execute inside handler, for dropping Event as argument
        self.Prism.fileHighlight();
      });
    })();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<html>\n<!--<div fxLayout=\"row\">\n\t  <div fxFlex>First item in column</div>\n\t  <div fxFlex>First item in column</div>\n\t  <div fxFlex>First item in column</div>\n</div>-->\n\n<div fxLayout=\"row\">\n  <div fxFlex=\"20\">\n<mat-accordion  *ngFor=\"let course of courses\">\n<mat-expansion-panel \n *ngFor=\"let topic of course.topics\"\n beforePanelClosed\n (opened)=\"panelOpenState = true\"\n (closed)=\"panelOpenState = false\" [expanded]=\"isFirst\">\n\n <!--<mat-accordion>\n  <mat-expansion-panel\n   *ngFor=\"let topic of topics first as isFirst\"\n   beforePanelClosed\n   (opened)=\"panelOpenState = true\"\n   (closed)=\"panelOpenState = false\"  [expanded]=\"isFirst\">\n -->\n\n\n\t\t\t\t  <mat-expansion-panel-header >\n\t\t\t\t\t<mat-panel-title >\n\t\t\t\t\t\t\t<a > {{topic.topicName}}</a>\n\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t<mat-panel-description >\n\t\t\t\t\t \n\t\t\t\t\t</mat-panel-description>\n          </mat-expansion-panel-header>\n          <div ccCardHover>\n\t\t\t\t  \t<p   *ngFor=\"let sub of topic.topicsSet\">\n            <a  [routerLink]=\"[course.courseName,course.courseId,topic.topicName,topic.topicId,sub.subTopicName,sub.subTopicId]\" name=\"vvv\" (click)=\"getsubTopicQuestion(sub.subTopicId)\" style=\"color:blue;text-align:center\">{{sub.subTopicName}}</a> \n            \n\t\t\t\t\t</p>\n        </div>\n\t\t\t\t\n\t\t\t\t</mat-expansion-panel>\n\t\t\t  </mat-accordion>\n\n\n</div>\n  <div fxFlex=\"1\"></div>\n<div fxFlex=\"60\">\n<mat-accordion>\n\n\n  <mat-expansion-panel *ngFor=\"let link of questions first as isFirst\" [expanded]=\"isFirst\" id =\"locate_{{link.question_id}}\" (opened)=\"getAnswer(link.question_id)\">\n    <mat-expansion-panel-header class=\"disable_ripple\">\n      <mat-panel-title>\n    <!--<p [routerLink]=\"[link.question_id]\"  \n     >{{link.questions_name}}</p >-->\n\n\n     <div [innerHTML]=\"link.questions_name | safeHtml\">\n\n      \n       \n      \n      \n     </div>\n\n   \n    \n    </mat-panel-title>\n      <mat-panel-description>\n        \n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <div class=\"container\">\n   <div>\n   <!-- <div  ccCardHover innerHTML=\"{{answers}}\"></div>-->\n   <div  [innerHTML]=\"answers | safeHtml\">\n\n\n  </div>\n    \n    </div>\n    </div>\n  \n\t  \n  </mat-expansion-panel>\n  </mat-accordion>\n  <div >\n  \n</div>\n</div>\n<div fxFlex=\"1\"></div>\n <div fxFlex>\n<mat-card>Simple card</mat-card>\n</div>\n\n</div>\n<div fxLayout=\"column\">\n<div fxFlex>First item in column</div>\n\n\n</div>\n</html>\n\n\n\n\n\n\n\n<!--\n   <mat-expansion-panel id=\"panel-1\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n\n  <mat-expansion-panel id=\"panel-2\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel> \n\n   <mat-expansion-panel id=\"panel-3\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-4\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-5\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-6\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-7\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-8\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-9\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-21\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-22\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-2\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-23\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-24\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-25\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-26\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-27\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-29\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-29\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-30\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-2\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-31\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n  <div>\n   <mat-expansion-panel id=\"locate_18\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n  -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/javac/javac.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/javac/javac.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJavacJavacComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<html>\n  <!--\n  <div fxLayout=\"row\">\n      <div fxFlex>First item in column</div>\n      <div fxFlex>First item in column</div>\n      <div fxFlex>First item in column</div>\n  </div>\n  -->\n  <div fxLayout=\"row\">\n    <div fxFlex=\"20\">\n  \n  \n  \n      <mat-accordion>\n          \n        <mat-expansion-panel *ngFor=\"let topic of topics first as isFirst\" (opened)=\"panelOpenState = true\"\n                     (closed)=\"panelOpenState = false\" [expanded]=\"isFirst\">\n            <mat-expansion-panel-header>\n            <mat-panel-title>\n                {{topic.topicName}}\n            </mat-panel-title>\n            <mat-panel-description >\n             \n            </mat-panel-description>\n            </mat-expansion-panel-header>\n            <p  *ngFor=\"let sub of topic.topicsSet\">\n              <a   name=\"vvv\" [routerLink]=\"['/java',topic.topicId,topic.topicName,sub.subTopicName,sub.subTopicId]\" ng-click=\"getsubTopicQuestion(sub.subTopicId)\" style=\"color:blue;text-align:center\">{{sub.subTopicName}}</a>\n            </p>\n            \n            \n          </mat-expansion-panel>\n          </mat-accordion>\n  \n  \n  \n  \n  \n  \n  \n  \n    </div>\n    <div fxFlex=\"1\"></div>\n    <div fxFlex=\"60\">\n    <mat-accordion >\n    <mat-expansion-panel *ngFor=\"let link of questions first as isFirst\" \n     (opened)=\"getAnswer(link.question_id)\"\n                         (closed)=\"panelOpenState = false\" [expanded]=\"isFirst\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{link.questions_name}} \n        </mat-panel-title>\n        <mat-panel-description>\n          \n        </mat-panel-description>\n      </mat-expansion-panel-header>\n    \n      <div  style=\"color:blue\">\n      <div innerHTML=\"{{answers}}\"></div>\n      </div>\n     \n      \n      \n    </mat-expansion-panel>\n  </mat-accordion>\n    </div>\n    <div fxFlex=\"1\"></div>\n     <div fxFlex>\n    <mat-card>Simple card</mat-card>\n    </div>\n    \n  </div>\n\n  <!--\n  <div fxLayout=\"column\">\n    <div fxFlex>First item in column</div>\n    \n  \n  </div>\n-->\n\n  </html>\n\n\n     \n      \n     <!--<div  style=\"color:blue\"*ngFor=\"let light of link.answers\">\n      <div>image</div>\n      </div>\n      <div  style=\"color:blue\"*ngFor=\"let light of link.answers\">\n      <div>add</div>\n      </div>-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/react/react.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/react/react.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReactReactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>bdkabdkbakb</p>\n\n<div fxLayout=\"row\">\n    <div fxFlex>\n\t<mat-card class=\"card\" >\n     <mat-card-content>\n          <mat-card-title> {{title}}</mat-card-title>\n          <mat-card-subtitle> {{subtitle}} </mat-card-subtitle>\n     </mat-card-content>\n</mat-card>\n\t\n\t\n\t\n\t</div>\n    <div fxFlex>Second item in row</div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/Services/highlight.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/Services/highlight.service.ts ***!
    \***********************************************/

  /*! exports provided: HighlightService */

  /***/
  function srcAppServicesHighlightServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightService", function () {
      return HighlightService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! clipboard */
    "./node_modules/clipboard/dist/clipboard.js");
    /* harmony import */


    var clipboard__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! prismjs */
    "./node_modules/prismjs/prism.js");
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! prismjs/plugins/toolbar/prism-toolbar */
    "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
    /* harmony import */


    var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */
    "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
    /* harmony import */


    var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! prismjs/components/prism-css */
    "./node_modules/prismjs/components/prism-css.js");
    /* harmony import */


    var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! prismjs/components/prism-javascript */
    "./node_modules/prismjs/components/prism-javascript.js");
    /* harmony import */


    var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! prismjs/components/prism-java */
    "./node_modules/prismjs/components/prism-java.js");
    /* harmony import */


    var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! prismjs/components/prism-markup */
    "./node_modules/prismjs/components/prism-markup.js");
    /* harmony import */


    var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! prismjs/components/prism-typescript */
    "./node_modules/prismjs/components/prism-typescript.js");
    /* harmony import */


    var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! prismjs/components/prism-sass */
    "./node_modules/prismjs/components/prism-sass.js");
    /* harmony import */


    var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! prismjs/components/prism-scss */
    "./node_modules/prismjs/components/prism-scss.js");
    /* harmony import */


    var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_13__);

    var HighlightService =
    /*#__PURE__*/
    function () {
      function HighlightService(platformId) {
        _classCallCheck2(this, HighlightService);

        this.platformId = platformId;
      }

      _createClass2(HighlightService, [{
        key: "highlightAll",
        value: function highlightAll() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
          }
        }
      }]);

      return HighlightService;
    }();

    HighlightService.ctorParameters = function () {
      return [{
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }];
    };

    HighlightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])], HighlightService);
    /***/
  },

  /***/
  "./src/app/admin-layout/admin-layout.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/admin-layout/admin-layout.module.ts ***!
    \*****************************************************/

  /*! exports provided: AdminLayoutModule */

  /***/
  function srcAppAdminLayoutAdminLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function () {
      return AdminLayoutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _admin_layout_admin_layout_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin-layout/admin-layout-routing.module */
    "./src/app/admin-layout/admin-layout/admin-layout-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _javac_javac_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../javac/javac.component */
    "./src/app/javac/javac.component.ts");
    /* harmony import */


    var _react_react_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../react/react.component */
    "./src/app/react/react.component.ts");
    /* harmony import */


    var _dashboard_card_hover_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../dashboard/card-hover.directive */
    "./src/app/dashboard/card-hover.directive.ts");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _Services_highlight_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../Services/highlight.service */
    "./src/app/Services/highlight.service.ts");
    /* harmony import */


    var _dashboard_safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../dashboard/safe-html.pipe */
    "./src/app/dashboard/safe-html.pipe.ts");

    var AdminLayoutModule = function AdminLayoutModule() {
      _classCallCheck2(this, AdminLayoutModule);
    };

    AdminLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"], _javac_javac_component__WEBPACK_IMPORTED_MODULE_10__["JavacComponent"], _react_react_component__WEBPACK_IMPORTED_MODULE_11__["ReactComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _dashboard_card_hover_directive__WEBPACK_IMPORTED_MODULE_12__["CardHoverDirective"], _dashboard_safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__["SafeHtmlPipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(_admin_layout_admin_layout_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminLayoutRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ScrollingModule"]],
      providers: [_Services_highlight_service__WEBPACK_IMPORTED_MODULE_14__["HighlightService"]]
    })], AdminLayoutModule);
    /***/
  },

  /***/
  "./src/app/admin-layout/admin-layout/admin-layout-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/admin-layout/admin-layout/admin-layout-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: AdminLayoutRoutes, AdminLayoutRoutingModule */

  /***/
  function srcAppAdminLayoutAdminLayoutAdminLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function () {
      return AdminLayoutRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutingModule", function () {
      return AdminLayoutRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _javac_javac_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../javac/javac.component */
    "./src/app/javac/javac.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _react_react_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../react/react.component */
    "./src/app/react/react.component.ts");

    var AdminLayoutRoutes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: 'java/:courseId',
      component: _javac_javac_component__WEBPACK_IMPORTED_MODULE_1__["JavacComponent"]
    }, {
      path: 'react/:id',
      component: _react_react_component__WEBPACK_IMPORTED_MODULE_4__["ReactComponent"]
    }, {
      path: 'user-profile',
      component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"]
    }, {
      path: 'java/:courseId/:topicName/:topicId/:subTopicName/:subTopicId',
      component: _javac_javac_component__WEBPACK_IMPORTED_MODULE_1__["JavacComponent"]
    }, {
      path: 'java/:topicId/:topicName/:subTopicName/:subTopicId',
      component: _javac_javac_component__WEBPACK_IMPORTED_MODULE_1__["JavacComponent"]
    }, {
      path: 'java/:topicId/:topicName/:subTopicName/:subTopicId',
      component: _javac_javac_component__WEBPACK_IMPORTED_MODULE_1__["JavacComponent"]
    }, {
      path: 'react/:topicName/:subTopicName/:subTopicId',
      component: _react_react_component__WEBPACK_IMPORTED_MODULE_4__["ReactComponent"]
    }];

    var AdminLayoutRoutingModule = function AdminLayoutRoutingModule() {
      _classCallCheck2(this, AdminLayoutRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/dashboard/card-hover.directive.ts":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/card-hover.directive.ts ***!
    \***************************************************/

  /*! exports provided: CardHoverDirective */

  /***/
  function srcAppDashboardCardHoverDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardHoverDirective", function () {
      return CardHoverDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardHoverDirective =
    /*#__PURE__*/
    function () {
      function CardHoverDirective() {
        _classCallCheck2(this, CardHoverDirective);
      }

      _createClass2(CardHoverDirective, [{
        key: "ngOnInit",
        //@HostBinding('class')
        //elementClass = 'pre';

        /* constructor(private el: ElementRef,
           private renderer: Renderer) {
             el.nativeElement.style.fontSize = "30px";
             el.nativeElement.style.color = "red";
        }*/
        value: function ngOnInit() {//this.renderer.setElementStyle(this.el.nativeElement, 'font-size', this.sizer);
          //this.renderer.setElementStyle(this.el.nativeElement, 'color', this.color);  
        }
      }]);

      return CardHoverDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CardHoverDirective.prototype, "sizer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CardHoverDirective.prototype, "color", void 0);
    CardHoverDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ccCardHover]'
    })], CardHoverDirective);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n}\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  align-self: center;\n}\n\n.viewport {\n  height: 400px;\n  width: 1000%;\n  background: #C4BBB8;\n  margin: 2em 8em 8em;\n  box-shadow: 1px 1px 1px grey;\n}\n\n.preDemo {\n  background: #f4f4f4;\n  border: 1px solid #ddd;\n  border-left: 3px solid #f36d33;\n  color: #666;\n  page-break-inside: avoid;\n  font-family: monospace;\n  font-size: 15px;\n  line-height: 1.6;\n  margin-bottom: 1.6em;\n  width: 100%;\n  overflow: auto;\n  padding: 1em 1.5em;\n  display: block;\n  word-wrap: break-word;\n}\n\n.error {\n  color: red;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xvdmUvRG9jdW1lbnRzL2FuZ3VsYXJwcm9qZWN0cy9DcmFja0ludGVydmlldy9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIuLi9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUZBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ0VGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoiLi4vc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5pbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udmlld3BvcnQge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMTAwMCU7XG4gIGJhY2tncm91bmQ6ICNDNEJCQjg7XG4gIG1hcmdpbjogMmVtIDhlbSA4ZW07XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IGdyZXk7XG59XG5cblxuLnByZURlbW8ge1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmMzZkMzM7XG4gIGNvbG9yOiAjNjY2O1xuICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luLWJvdHRvbTogMS42ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMWVtIDEuNWVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuXG4iLCIuZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnZpZXdwb3J0IHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDEwMDAlO1xuICBiYWNrZ3JvdW5kOiAjQzRCQkI4O1xuICBtYXJnaW46IDJlbSA4ZW0gOGVtO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBncmV5O1xufVxuXG4ucHJlRGVtbyB7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2YzNmQzMztcbiAgY29sb3I6ICM2NjY7XG4gIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW4tYm90dG9tOiAxLjZlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: QUESTIONS, DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QUESTIONS", function () {
      return QUESTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.service */
    "./src/app/dashboard/dashboard.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _Services_highlight_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Services/highlight.service */
    "./src/app/Services/highlight.service.ts");

    var QUESTIONS = [{
      path: '/dashboard',
      title: 'Dashboard',
      icon: 'dashboard',
      class: ''
    }, {
      path: '/user-profile',
      title: 'User Profile',
      icon: 'person',
      class: ''
    }, {
      path: '/table-list',
      title: 'Table List',
      icon: 'content_paste',
      class: ''
    }, {
      path: '/tyuser-pography',
      title: 'Typography',
      icon: 'library_books',
      class: ''
    }, {
      path: '/icons',
      title: 'Icons',
      icon: 'bubble_chart',
      class: ''
    }, {
      path: '/maps',
      title: 'Maps',
      icon: 'location_on',
      class: ''
    }, {
      path: '/notifications',
      title: 'Notifications',
      icon: 'notifications',
      class: ''
    }, {
      path: '/upgrade',
      title: 'Upgrade to PRO',
      icon: 'unarchive',
      class: 'active-pro'
    }];

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(dashboardService, router, breakpointObserver, highlightService) {
        _classCallCheck2(this, DashboardComponent);

        this.dashboardService = dashboardService;
        this.breakpointObserver = breakpointObserver;
        this.highlightService = highlightService;
        this.highlighted = false;
        this.panelOpenState = false;
        this.router = router;
      }

      _createClass2(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllTopics();
          this.getAllQuestion();
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.highlightService.highlightAll();
          this.highlighted = true;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          setTimeout(function () {
            _this3.scroll('locate_17');

            console.log("--------------------------------------------");
          }, 200);
        }
      }, {
        key: "scroll",
        value: function scroll(id) {
          console.log("scrolling to ".concat(id));
          var el = document.getElementById(id);
          el.scrollIntoView();
        }
      }, {
        key: "getAllTopics",
        value: function getAllTopics() {
          var _this4 = this;

          this.dashboardService.getAllTopics().subscribe(function (data) {
            console.log(data); //this.topics=data;

            _this4.courses = data;
          });
        }
      }, {
        key: "getAllQuestion",
        value: function getAllQuestion() {
          var _this5 = this;

          this.dashboardService.getAllQuestions().subscribe(function (data) {
            console.log(data);
            _this5.questions = data;
          });
        }
      }, {
        key: "getAnswer",
        value: function getAnswer(questionid) {
          var _this6 = this;

          //this.location.replace("/some/newstate/");
          this.answers = '';
          this.dashboardService.getAnswer(questionid).subscribe(function (data) {
            if (data.length != 0) {
              _this6.answers = data[0].split(',')[1]; // document.getElementById('test').innerHTML = this.answers+"";
            } else {
              _this6.answers = '';
            }
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"]
      }, {
        type: _Services_highlight_service__WEBPACK_IMPORTED_MODULE_6__["HighlightService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('accordion', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"])], DashboardComponent.prototype, "Accordion", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"], _Services_highlight_service__WEBPACK_IMPORTED_MODULE_6__["HighlightService"]])], DashboardComponent);
    /*
    
    
    
    
    
    
     
        gettopicQuestion(topicid)
        {
          this.dashboardService.gettopicQuestion(topicid).subscribe(data =>
            {
              this.questions=data.questionsSet;
            });
         }
    
         getsubTopicQuestion(subTopicId)
        {
          this.dashboardService.getSubTopicQuestion(subTopicId).subscribe(data =>
            {
              this.questions=data.questionsSet;
            });
         }
    
    
        this.breakpointObserver.observe([
          Breakpoints.XSmall,
          Breakpoints.Small,
          Breakpoints.Medium,
          Breakpoints.Large,
          Breakpoints.XLarge
        ]).subscribe( (state: BreakpointState) => {
          if (state.breakpoints[Breakpoints.XSmall]) {
               console.log( 'Matches XSmall viewport');
          }
          if (state.breakpoints[Breakpoints.Small]) {
               console.log( 'Matches Small viewport');
          }
          if (state.breakpoints[Breakpoints.Medium]) {
               console.log( 'Matches Medium  viewport');
          }
          if (state.breakpoints[Breakpoints.Large]) {
    
              console.log( 'Matches Large viewport');
          }
          if (state.breakpoints[Breakpoints.XLarge]) {
    
             console.log( 'Matches XLarge viewport');
          }
        });
    
    
    
    
    
    
        beforePanelClosed(panel){
          panel.isExpanded = false;
          console.log("Panel going to close!");
        }
        beforePanelOpened(panel){
          panel.isExpanded = true;
          console.log("Panel going to  open!");
        }
       
        afterPanelClosed(){
          console.log("Panel closed!");
        }
        afterPanelOpened(){
          console.log("Panel opened!");
        }
       
       
        closeAllPanels(){
          this.Accordion.closeAll();
        }
        openAllPanels(){
          this.Accordion.openAll();
        }
    
       expand(){
          alert('set');
          //this.isExpanded = !this.isExpanded;
          }
    
    
    */

    /***/
  },

  /***/
  "./src/app/dashboard/safe-html.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/dashboard/safe-html.pipe.ts ***!
    \*********************************************/

  /*! exports provided: SafeHtmlPipe */

  /***/
  function srcAppDashboardSafeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
      return SafeHtmlPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var SafeHtmlPipe =
    /*#__PURE__*/
    function () {
      function SafeHtmlPipe(sanitizer) {
        _classCallCheck2(this, SafeHtmlPipe);

        this.sanitizer = sanitizer;
      }

      _createClass2(SafeHtmlPipe, [{
        key: "transform",
        value: function transform(html) {
          return this.sanitizer.bypassSecurityTrustHtml(html);
        }
      }]);

      return SafeHtmlPipe;
    }();

    SafeHtmlPipe.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'safeHtml'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])], SafeHtmlPipe);
    /***/
  },

  /***/
  "./src/app/javac/java.service.ts":
  /*!***************************************!*\
    !*** ./src/app/javac/java.service.ts ***!
    \***************************************/

  /*! exports provided: JavaService */

  /***/
  function srcAppJavacJavaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JavaService", function () {
      return JavaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");

    var JavaService =
    /*#__PURE__*/
    function () {
      function JavaService(http) {
        _classCallCheck2(this, JavaService);

        this.http = http;
        this.url = _config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl;
      }

      _createClass2(JavaService, [{
        key: "getAllTopics",
        value: function getAllTopics(id) {
          return this.http.get(this.url + 'course/' + id);
        }
      }, {
        key: "gettopicQuestion",
        value: function gettopicQuestion(topicid) {
          return this.http.get(this.url + 'topic/' + topicid);
        }
      }, {
        key: "getSubTopicQuestion",
        value: function getSubTopicQuestion(topicName, subTopicName, subTopicId) {
          return this.http.get(this.url + 'java/topicName/subTopicName/' + subTopicId);
        }
      }, {
        key: "getAnswer",
        value: function getAnswer(quesId) {
          return this.http.get(this.url + 'question/' + quesId + '/answer');
        }
      }, {
        key: "getAllQuestionsbyCourse",
        value: function getAllQuestionsbyCourse(id) {
          return this.http.get(this.url + 'java/' + id + '/questions');
        }
      }]);

      return JavaService;
    }();

    JavaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    JavaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], JavaService);
    /***/
  },

  /***/
  "./src/app/javac/javac.component.scss":
  /*!********************************************!*\
    !*** ./src/app/javac/javac.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppJavacJavacComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2phdmFjL2phdmFjLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/javac/javac.component.ts":
  /*!******************************************!*\
    !*** ./src/app/javac/javac.component.ts ***!
    \******************************************/

  /*! exports provided: JavacComponent */

  /***/
  function srcAppJavacJavacComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JavacComponent", function () {
      return JavacComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _java_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./java.service */
    "./src/app/javac/java.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var JavacComponent =
    /*#__PURE__*/
    function () {
      function JavacComponent(activated_route, javaService) {
        _classCallCheck2(this, JavacComponent);

        this.activated_route = activated_route;
        this.javaService = javaService;
      }

      _createClass2(JavacComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.sub = this.activated_route.paramMap.subscribe(function (params) {
            console.log(params);
            _this7.courseId = +params.get('courseId');
            _this7.topicName = params.get('topicName');
            _this7.subTopicName = params.get('subTopicName');
            _this7.topicId = +params.get('topicId');
            _this7.subTopicId = +params.get('subTopicId');
            console.log(_this7.courseId + " " + _this7.topicName + " " + _this7.topicId + " " + _this7.subTopicId + " " + _this7.subTopicName);

            if (_this7.topicName != null && _this7.subTopicName != null && _this7.subTopicId != null) {
              var topics = _this7.getTopics(_this7.courseId);

              var questions = _this7.getSubTopicQuestion(_this7.topicName, _this7.subTopicName, _this7.subTopicId);
            } else if (_this7.courseId != null) {
              var _topics = _this7.getTopics(_this7.courseId);

              var questionByCourseId = _this7.getQuestionByCourse(_this7.courseId);
            }
          });
        }
      }, {
        key: "getTopics",
        value: function getTopics(id) {
          var _this8 = this;

          this.javaService.getAllTopics(1).subscribe(function (data) {
            _this8.topics = data.topics;

            if (_this8.topics != null) {
              _this8.topics.push(_this8.topics.filter(function (x) {
                return x.topicId === _this8.topicId;
              })); //this.topics1.push(this.topics.filter(x => x.topicId != this.topicId));
              //console.log(this.topics1+"after filter topics");

            }
          });
        }
      }, {
        key: "getSubTopicQuestion",
        value: function getSubTopicQuestion(topicName, subTopicName, subtopicId) {
          var _this9 = this;

          this.javaService.getSubTopicQuestion(topicName, subTopicName, subtopicId).subscribe(function (data) {
            _this9.questions = data.questionsSet;
          });
        }
      }, {
        key: "getQuestionByCourse",
        value: function getQuestionByCourse(id) {
          var _this10 = this;

          this.javaService.getAllQuestionsbyCourse(id).subscribe(function (data) {
            _this10.questions = data;

            if (_this10.questions != null) {
              _this10.questions = _this10.questions.filter(function (x) {
                return x.courseId === _this10.courseId;
              });
            }

            console.log(_this10.questions + "after filter");
          });
        }
      }, {
        key: "getAllTopics",
        value: function getAllTopics(id) {
          var _this11 = this;

          this.javaService.getAllTopics(id).subscribe(function (data) {
            console.log(data);
            _this11.topics = data.topics;
          });
        }
      }, {
        key: "getAnswer",
        value: function getAnswer(questionid) {
          var _this12 = this;

          this.answers = '';
          this.javaService.getAnswer(questionid).subscribe(function (data) {
            _this12.answers = data[0].split(',')[1];
          });
        }
      }, {
        key: "getDimensionsByFilter",
        value: function getDimensionsByFilter(id) {
          return this.questions.filter(function (x) {
            return x.courseId === id;
          });
        }
      }]);

      return JavacComponent;
    }();

    JavacComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _java_service__WEBPACK_IMPORTED_MODULE_2__["JavaService"]
      }];
    };

    JavacComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-javac',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./javac.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/javac/javac.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./javac.component.scss */
      "./src/app/javac/javac.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _java_service__WEBPACK_IMPORTED_MODULE_2__["JavaService"]])], JavacComponent);
    /*gettopicQuestion(topicid)
    {
      this.javaService.gettopicQuestion(topicid).subscribe(data =>
        {
          this.questions=data.questionsSet;
        });
     }*/

    /*
      function getDimensionsByFilter(id){
        return questions.filter(x => x.category === 'Financial');
        }
        
        function getDimensionsByFind(id){
        return questions.find(x => x.category === 'Financial');
        }
    
        var questions = getDimensionsByFilter(10);
        console.log(questions1.id+"questions add");
        
        var questions1 = getDimensionsByFind(10);
        console.log(questions1.id+"questions add1");
    
    
    
    /* var questions = [
        {id: 1, question: "Do you feel a connection to a higher source and have a sense of comfort knowing that you are part of something greater than yourself?", category: "Spiritual", subs: []},
        {id: 2, question: "Do you feel you are free of unhealthy behavior that impacts your overall well-being?", category: "Habits", subs: []},
        {id: 3, question: "Do you feel you have healthy and fulfilling relationships?", category: "Relationships", subs: []},
        {id: 4, question: "Do you feel you have a sense of purpose and that you have a positive outlook about yourself and life?", category: "Emotional Well-being", subs: []},
        {id: 5, question: "Do you feel you have a healthy diet and that you are fueling your body for optimal health? ", category: "Eating Habits ", subs: []},
        {id: 6, question: "Do you feel that you get enough rest and that your stress level is healthy?", category: "Relaxation ", subs: []},
        {id: 7, question: "Do you feel you get enough physical activity for optimal health?", category: "Exercise ", subs: []},
        {id: 8, question: "Do you feel you practice self-care and go to the doctor regularly?", category: "Medical Maintenance", subs: []},
        {id: 9, question: "Do you feel satisfied with your income and economic stability?", category: "Financial", subs: []},
        {id: 10, question: "Do you feel you do fun things and laugh enough in your life?", category: "Play", subs: []},
        {id: 11, question: "Do you feel you have a healthy sense of balance in this area of your life?", category: "Work-life Balance", subs: []},
        {id: 12, question: "Do you feel a sense of peace and contentment  in your home? ", category: "Home Environment", subs: []},
        {id: 13, question: "Do you feel that you are challenged and growing as a person?", category: "Intellectual Wellbeing", subs: []},
        {id: 14, question: "Do you feel content with what you see when you look in the mirror?", category: "Self-image", subs: []},
        {id: 15, question: "Do you feel engaged at work and a sense of fulfillment with your job?", category: "Work Satisfaction", subs: []}
    ];
    
    */
    //var questions = getDimensionsByFilter(10);
    //console.log(questions);
    //var questions1 = getDimensionsByFind(10);
    //console.log(questions1);
    //var questions;

    /*this.javaService.getAllTopics().subscribe(data =>
     {
     console.log(data);
     this.topics = data;
    });*/

    /*this.javaService.getAllTopics(1).subscribe(data =>
    {
    
      console.log(data);
      this.topics=data.topics;
    });*/

    /***/
  },

  /***/
  "./src/app/react/react.component.scss":
  /*!********************************************!*\
    !*** ./src/app/react/react.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppReactReactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button.calendar, button.calendar:active {\n  width: 2.75rem;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=\") !important;\n  background-repeat: no-repeat;\n  background-size: 23px;\n  background-position: center;\n}\n\n/* Sortable table demo */\n\nth[sortable] {\n  cursor: pointer;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\nth[sortable].desc:before, th[sortable].asc:before {\n  content: \"\";\n  display: block;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAmxJREFUeAHtmksrRVEUx72fH8CIGQNJkpGUUmakDEiZSJRIZsRQmCkTJRmZmJgQE0kpX0D5DJKJgff7v+ru2u3O3vvc67TOvsdatdrnnP1Y///v7HvvubdbUiIhBISAEBACQkAICAEhIAQ4CXSh2DnyDfmCPEG2Iv9F9MPlM/LHyAecdyMzHYNwR3fdNK/OH9HXl1UCozD24TCvILxizEDWIEzA0FcM8woCgRrJCoS5PIwrANQSMAJX1LEI9bqpQo4JYNFFKRSvIgsxHDVnqZgIkPnNBM0rIGtYk9YOOsqgbgepRCfdbmFtqhFkVEDVPjJp0+Z6e6hRHhqBKgg6ZDCvYBygVmUoEGoh5JTRvIJwhJo1aUOoh4CLPMyvxxi7EWOMgnCGsXXI1GIXlZUYX7ucU+kbR8NW8lh3O7cue0Pk32MKndfUxQFAwxdirk3fHappAnc0oqDPzDfGTBrCfHP04dM4oTV8cxr0SVzH9FF07xD3ib6xCDE+M+aUcVygtWzzbtGX2rPBrEUYfecfQkaFzYi6HjVnGBdtL7epqAlc1+jRdAap74RrnPc4BCijttY2tRcdN0g17w7HqZrXhdJTYAuS3hd8z+vKgK3V1zWPae0mZDMykadBn1hTQBLnZNwVrJpSe/NwEeDsEwCctEOsJTsgxLvCqUl2ACftEGvJDgjxrnBqkh3ASTvEWrIDQrwrnJpkB3DSDrGW7IAQ7wqnJtkBnLRztejXXVu4+mxz/nQ9jR1w5VB86ejLTFcnnDwhzV+F6T+CHZlx6THSjn76eyyBIOPHyDakhBAQAkJACAgBISAEhIAQYCLwC8JxpAmsEGt6AAAAAElFTkSuQmCC\") no-repeat;\n  background-size: 22px;\n  width: 22px;\n  height: 22px;\n  float: left;\n  margin-left: -22px;\n}\n\nth[sortable].desc:before {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n}\n\n/* Filtering table demo */\n\nngbd-table-filtering span.ngb-highlight {\n  background-color: yellow;\n}\n\n/* Complete table demo */\n\nngbd-table-complete span.ngb-highlight {\n  background-color: yellow;\n}\n\nngb-carousel .picsum-img-wrapper {\n  position: relative;\n  height: 0;\n  padding-top: 55%;\n  /* Keep ratio for 900x500 images */\n}\n\nngb-carousel .picsum-img-wrapper > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xvdmUvRG9jdW1lbnRzL2FuZ3VsYXJwcm9qZWN0cy9DcmFja0ludGVydmlldy9zcmMvYXBwL3JlYWN0L3JlYWN0LmNvbXBvbmVudC5zY3NzIiwiLi4vc3JjL2FwcC9yZWFjdC9yZWFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwwbEJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFRSx3QkFBQTs7QUFFQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtHQUFBLHFCQUFBO09BQUEsaUJBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSwyOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURHRSx5QkFBQTs7QUFDQTtFQUNFLHdCQUFBO0FDQUo7O0FER0Usd0JBQUE7O0FBQ0E7RUFDRSx3QkFBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFBa0Isa0NBQUE7QUNDdEI7O0FERUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNDSiIsImZpbGUiOiIuLi9zcmMvYXBwL3JlYWN0L3JlYWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLmNhbGVuZGFyLCBidXR0b24uY2FsZW5kYXI6YWN0aXZlIHtcbiAgICB3aWR0aDogMi43NXJlbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0lBQUFBY0NBWUFBQUFFTjIwZkFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBT3hBQUFEc1FCbFNzT0d3QUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQUVVU1VSQlZFaUo3WlF4VG9WQUVJWS9ZQ0hHeE42WEdPSXBucGFFc0JTZVFDOUFyWmJtOVRaNkFEeUJOekFoUUdHbDhSaXY0QkxBV0FnbWtwQllrSDFiOEZXVDJXSy96SjhaSjRxaUk2WFVJM0FObkdLV0JuaHQyL1pCRFJLM2hnVkdOc0NkNy91aStKa0VJckt0cXVyTHBFV2FwaGQ5MzMrSXlJM0xFSWRwQ1lDaUtENkhjdU9hL253T2EwU2NKRW5rMEJKZzBVVFVXSlJsNlJ4Q1lFekVtb21zSWxQVTNJUFcrZ3JJQWJxdXkrcTZmbHV5LzI4UklCZVJNd0RYZFhNZ1hMai9CMnVpbVJYcHVpNEQ5c0JlUkxLbCsxTitMK3Q2UndiV3JabGlUVFRyMW94WXR6VldpVFFBY1J4dlRYK2VKTW5sVURhTzF2cFpSTzVOUzB4NDhzSXdmUGM4N3hnNEIwNE1DelFpOGhJRXdlNGJsMURuRk1DTjJ6c0FBQUFBU1VWT1JLNUNZSUk9JykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjNweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC8qIFNvcnRhYmxlIHRhYmxlIGRlbW8gKi9cbiAgXG4gIHRoW3NvcnRhYmxlXSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIHRoW3NvcnRhYmxlXS5kZXNjOmJlZm9yZSwgdGhbc29ydGFibGVdLmFzYzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUFYTlNSMElBcnM0YzZRQUFBbXhKUkVGVWVBSHRta3NyUlZFVXg3MmZIOENJR1FOSmtwR1VVbWFrREVpWlNKUklac1JRbUNrVEpSbVptSmdRRTBrcFgwRDVESktKZ2ZmN3YrcnUydTNPM3Z2YzY3VE92c2RhdGRybm5QMVkvLy92N0h2dnViZGJVaUloQklTQUVCQUNRa0FJQ0FFaElBUTRDWFNoMkRueURmbUNQRUcySXY5RjlNUGxNL0xIeUFlY2R5TXpIWU53UjNmZE5LL09IOUhYbDFVQ296RDI0VEN2SUx4aXpFRFdJRXpBMEZjTTh3b0NnUnJKQ29TNVBJd3JBTlFTTUFKWDFMRUk5YnFwUW80SllORkZLUlN2SWdzeEhEVm5xWmdJa1BuTkJNMHJJR3RZazlZT09zcWdiZ2VwUkNmZGJtRnRxaEZrVkVEVlBqSnAwK1o2ZTZoUkhocUJLZ2c2WkRDdllCeWdWbVVvRUdvaDVKVFJ2SUp3aEpvMWFVT29oNENMUE15dnh4aTdFV09NZ25DR3NYWEkxR0lYbFpVWVg3dWNVK2tiUjhOVzhsaDNPN2N1ZTBQazMyTUtuZGZVeFFGQXd4ZGlyazNmSGFwcEFuYzBvcURQekRmR1RCckNmSFAwNGRNNG9UVjhjeHIwU1Z6SDlGRjA3eEQzaWI2eENERStNK2FVY1Z5Z3RXenpidEdYMnJQQnJFVVlmZWNmUWthRnpZaTZIalZuR0JkdEw3ZXBxQWxjMStqUmRBYXA3NFJyblBjNEJDaWp0dFkydFJjZE4wZzE3dzdIcVpyWGhkSlRZQXVTM2hkOHordktnSzNWMXpXUGFlMG1aRE15a2FkQm4xaFRRQkxuWk53VnJKcFNlL053RWVEc0V3Q2N0RU9zSlRzZ3hMdkNxVWwyQUNmdEVHdkpEZ2p4cm5CcWtoM0FTVHZFV3JJRFFyd3JuSnBrQjNEU0RyR1c3SUFRN3dxbkp0a0JuTFJ6dGVqWFhWdTQrbXh6L25ROWpSMXc1VkI4NmVqTFRGY25uRHdoelYrRjZUK0NIWmx4NlRIU2puNzZleXlCSU9QSHlEYWtoQkFRQWtKQUNBZ0JJU0FFaElBUVlDTHdDOEp4cEFtc0VHdDZBQUFBQUVsRlRrU3VRbUNDJykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjJweDtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xuICB9XG4gIFxuICB0aFtzb3J0YWJsZV0uZGVzYzpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgXG4gIC8qIEZpbHRlcmluZyB0YWJsZSBkZW1vICovXG4gIG5nYmQtdGFibGUtZmlsdGVyaW5nIHNwYW4ubmdiLWhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICB9XG4gIFxuICAvKiBDb21wbGV0ZSB0YWJsZSBkZW1vICovXG4gIG5nYmQtdGFibGUtY29tcGxldGUgc3Bhbi5uZ2ItaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIH1cbiAgXG4gIG5nYi1jYXJvdXNlbCAucGljc3VtLWltZy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmctdG9wOiA1NSU7IC8qIEtlZXAgcmF0aW8gZm9yIDkwMHg1MDAgaW1hZ2VzICovXG4gIH1cbiAgXG4gIG5nYi1jYXJvdXNlbCAucGljc3VtLWltZy13cmFwcGVyPmltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgfSIsImJ1dHRvbi5jYWxlbmRhciwgYnV0dG9uLmNhbGVuZGFyOmFjdGl2ZSB7XG4gIHdpZHRoOiAyLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNJQUFBQWNDQVlBQUFBRU4yMGZBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQU94QUFBRHNRQmxTc09Hd0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFFVVNVUkJWRWlKN1pReFRvVkFFSVkvWUNIR3hONlhHT0lwbnBhRXNCU2VRQzlBclpibTlUWjZBRHlCTnpBaFFHR2w4Uml2NEJMQVdBZ21rcEJZa0gxYjhGV1QyV0sveko4Wko0cWlJNlhVSTNBTm5HS1dCbmh0Mi9aQkRSSzNoZ1ZHTnNDZDcvdWkrSmtFSXJLdHF1ckxwRVdhcGhkOTMzK0l5STNMRUlkcENZQ2lLRDZIY3VPYS9ud09hMFNjSkVuazBCSmcwVVRVV0pSbDZSeENZRXpFbW9tc0lsUFUzSVBXK2dySUFicXV5K3E2Zmx1eS8yOFJJQmVSTXdEWGRYTWdYTGovQjJ1aW1SWHB1aTREOXNCZVJMS2wrMU4rTCt0NlJ3YldyWmxpVFRUcjFveFl0elZXaVRRQWNSeHZUWCtlSk1ubFVEYU8xdnBaUk81TlMweDQ4c0l3ZlBjODd4ZzRCMDRNQ3pRaThoSUV3ZTRibDFEbkZNQ04yenNBQUFBQVNVVk9SSzVDWUlJPVwiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIzcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLyogU29ydGFibGUgdGFibGUgZGVtbyAqL1xudGhbc29ydGFibGVdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxudGhbc29ydGFibGVdLmRlc2M6YmVmb3JlLCB0aFtzb3J0YWJsZV0uYXNjOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQVhOU1IwSUFyczRjNlFBQUFteEpSRUZVZUFIdG1rc3JSVkVVeDcyZkg4Q0lHUU5Ka3BHVVVtYWtERWlaU0pSSVpzUlFtQ2tUSlJtWm1KZ1FFMGtwWDBENURKS0pnZmY3ditydTJ1M08zdnZjNjdUT3ZzZGF0ZHJublAxWS8vL3Y3SHZ2dWJkYlVpSWhCSVNBRUJBQ1FrQUlDQUVoSUFRNENYU2gyRG55RGZtQ1BFRzJJdjlGOU1QbE0vTEh5QWVjZHlNekhZTndSM2ZkTksvT0g5SFhsMVVDb3pEMjRUQ3ZJTHhpekVEV0lFekEwRmNNOHdvQ2dSckpDb1M1UEl3ckFOUVNNQUpYMUxFSTlicXBRbzRKWU5GRktSU3ZJZ3N4SERWbnFaZ0lrUG5OQk0wcklHdFlrOVlPT3NxZ2JnZXBSQ2ZkYm1GdHFoRmtWRURWUGpKcDArWjZlNmhSSGhxQktnZzZaREN2WUJ5Z1ZtVW9FR29oNUpUUnZJSndoSm8xYVVPb2g0Q0xQTXl2eHhpN0VXT01nbkNHc1hYSTFHSVhsWlVZWDd1Y1Ura2JSOE5XOGxoM083Y3VlMFBrMzJNS25kZlV4UUZBd3hkaXJrM2ZIYXBwQW5jMG9xRFB6RGZHVEJyQ2ZIUDA0ZE00b1RWOGN4cjBTVnpIOUZGMDd4RDNpYjZ4Q0RFK00rYVVjVnlndFd6emJ0R1gyclBCckVVWWZlY2ZRa2FGellpNkhqVm5HQmR0TDdlcHFBbGMxK2pSZEFhcDc0UnJuUGM0QkNpanR0WTJ0UmNkTjBnMTd3N0hxWnJYaGRKVFlBdVMzaGQ4eit2S2dLM1YxeldQYWUwbVpETXlrYWRCbjFoVFFCTG5aTndWckpwU2UvTndFZURzRXdDY3RFT3NKVHNneEx2Q3FVbDJBQ2Z0RUd2SkRnanhybkJxa2gzQVNUdkVXcklEUXJ3cm5KcGtCM0RTRHJHVzdJQVE3d3FuSnRrQm5MUnp0ZWpYWFZ1NCtteHovblE5alIxdzVWQjg2ZWpMVEZjbm5Ed2h6VitGNlQrQ0habHg2VEhTam43NmV5eUJJT1BIeURha2hCQVFBa0pBQ0FnQklTQUVoSUFRWUNMd0M4SnhwQW1zRUd0NkFBQUFBRWxGVGtTdVFtQ0NcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogLTIycHg7XG59XG5cbnRoW3NvcnRhYmxlXS5kZXNjOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4vKiBGaWx0ZXJpbmcgdGFibGUgZGVtbyAqL1xubmdiZC10YWJsZS1maWx0ZXJpbmcgc3Bhbi5uZ2ItaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4vKiBDb21wbGV0ZSB0YWJsZSBkZW1vICovXG5uZ2JkLXRhYmxlLWNvbXBsZXRlIHNwYW4ubmdiLWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxubmdiLWNhcm91c2VsIC5waWNzdW0taW1nLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDU1JTtcbiAgLyogS2VlcCByYXRpbyBmb3IgOTAweDUwMCBpbWFnZXMgKi9cbn1cblxubmdiLWNhcm91c2VsIC5waWNzdW0taW1nLXdyYXBwZXIgPiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/react/react.component.ts":
  /*!******************************************!*\
    !*** ./src/app/react/react.component.ts ***!
    \******************************************/

  /*! exports provided: ReactComponent */

  /***/
  function srcAppReactReactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactComponent", function () {
      return ReactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReactComponent =
    /*#__PURE__*/
    function () {
      function ReactComponent() {
        _classCallCheck2(this, ReactComponent);
      }

      _createClass2(ReactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReactComponent;
    }();

    ReactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-react',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./react.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/react/react.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./react.component.scss */
      "./src/app/react/react.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ReactComponent);
    /***/
  },

  /***/
  "./src/app/user-profile/user-profile.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/user-profile/user-profile.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProfileUserProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user-profile/user-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user-profile/user-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserProfileComponent =
    /*#__PURE__*/
    function () {
      function UserProfileComponent() {
        _classCallCheck2(this, UserProfileComponent);
      }

      _createClass2(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.scss */
      "./src/app/user-profile/user-profile.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UserProfileComponent);
    /***/
  }
}]);
//# sourceMappingURL=admin-layout-admin-layout-module-es5.js.map