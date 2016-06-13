(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["material-vue"] = factory();
	else
		root["material-vue"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DatePicker = exports.Dialog = exports.AutoComplete = exports.Popover = exports.TableHeader = exports.TableBody = exports.TableWrapper = exports.Toggle = exports.Radio = exports.CheckBox = exports.TextField = exports.SnackBar = exports.MenuBar = exports.DownMenu = exports.IconMenu = exports.MenuItem = exports.IconButton = exports.NavBar = exports.BaseButton = undefined;

	var _BaseButton2 = __webpack_require__(2);

	var _BaseButton3 = _interopRequireDefault(_BaseButton2);

	var _NavBar2 = __webpack_require__(62);

	var _NavBar3 = _interopRequireDefault(_NavBar2);

	var _IconButton2 = __webpack_require__(64);

	var _IconButton3 = _interopRequireDefault(_IconButton2);

	var _MenuItem2 = __webpack_require__(73);

	var _MenuItem3 = _interopRequireDefault(_MenuItem2);

	var _IconMenu2 = __webpack_require__(76);

	var _IconMenu3 = _interopRequireDefault(_IconMenu2);

	var _DownMenu2 = __webpack_require__(84);

	var _DownMenu3 = _interopRequireDefault(_DownMenu2);

	var _MenuBar2 = __webpack_require__(87);

	var _MenuBar3 = _interopRequireDefault(_MenuBar2);

	var _SnackBar2 = __webpack_require__(96);

	var _SnackBar3 = _interopRequireDefault(_SnackBar2);

	var _TextField2 = __webpack_require__(101);

	var _TextField3 = _interopRequireDefault(_TextField2);

	var _CheckBox2 = __webpack_require__(104);

	var _CheckBox3 = _interopRequireDefault(_CheckBox2);

	var _Radio2 = __webpack_require__(117);

	var _Radio3 = _interopRequireDefault(_Radio2);

	var _Toggle2 = __webpack_require__(130);

	var _Toggle3 = _interopRequireDefault(_Toggle2);

	var _TableWrapper2 = __webpack_require__(133);

	var _TableWrapper3 = _interopRequireDefault(_TableWrapper2);

	var _TableBody2 = __webpack_require__(136);

	var _TableBody3 = _interopRequireDefault(_TableBody2);

	var _TableHeader2 = __webpack_require__(142);

	var _TableHeader3 = _interopRequireDefault(_TableHeader2);

	var _Popover2 = __webpack_require__(78);

	var _Popover3 = _interopRequireDefault(_Popover2);

	var _AutoComplete2 = __webpack_require__(145);

	var _AutoComplete3 = _interopRequireDefault(_AutoComplete2);

	var _Dialog2 = __webpack_require__(148);

	var _Dialog3 = _interopRequireDefault(_Dialog2);

	var _DatePicker2 = __webpack_require__(153);

	var _DatePicker3 = _interopRequireDefault(_DatePicker2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BaseButton = _BaseButton3.default;
	exports.NavBar = _NavBar3.default;
	exports.IconButton = _IconButton3.default;
	exports.MenuItem = _MenuItem3.default;
	exports.IconMenu = _IconMenu3.default;
	exports.DownMenu = _DownMenu3.default;
	exports.MenuBar = _MenuBar3.default;
	exports.SnackBar = _SnackBar3.default;
	exports.TextField = _TextField3.default;
	exports.CheckBox = _CheckBox3.default;
	exports.Radio = _Radio3.default;
	exports.Toggle = _Toggle3.default;
	exports.TableWrapper = _TableWrapper3.default;
	exports.TableBody = _TableBody3.default;
	exports.TableHeader = _TableHeader3.default;
	exports.Popover = _Popover3.default;
	exports.AutoComplete = _AutoComplete3.default;
	exports.Dialog = _Dialog3.default;
	exports.DatePicker = _DatePicker3.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(3)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/BaseButton.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(61)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./BaseButton.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _events = __webpack_require__(41);

	var _events2 = _interopRequireDefault(_events);

	var _touchRipple = __webpack_require__(42);

	var _touchRipple2 = _interopRequireDefault(_touchRipple);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _colorManipulator = __webpack_require__(57);

	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

	var _muiTheme = __webpack_require__(55);

	var _common = __webpack_require__(58);

	var _directive = __webpack_require__(59);

	var _util = __webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var button = _muiTheme.baseTheme.button;
	    var disabledColor = _muiTheme.baseTheme.disabledColor;

	    var styles = {
	      root: {
	        minWidth: '58px',
	        minHeight: button.height,
	        height: '100%',
	        position: 'relative',
	        color: this.disabled ? disabledColor : 'none',
	        direction: this.isIconFront ? 'rtl' : 'ltr',
	        backgroundColor: this.backgroundColor ? this.backgroundColor : 'rgba(0, 0, 0, 0)',
	        boxSizing: "border-box",
	        display: "inline-block",
	        whiteSpace: 'nowrap',
	        fontFamily: "Roboto, sans-serif",
	        lineHeight: '36px',
	        textDecoration: 'none',
	        transition: _transitions2.default.easeOut(),
	        outline: 'none',
	        overflow: 'hidden',
	        cursor: this.disabled ? 'default' : 'pointer',
	        borderRadius: '2px',
	        boxShadow: this.shadowDepth && !this.disabled ? _common.zDepthShadows[this.shadowDepth] : 'none'
	      },
	      label: {
	        fontSize: '14px',
	        letterSpacing: '0',
	        paddingLeft: '24px',
	        paddingRight: '24px',
	        fontWeight: '600'
	      },
	      icon: {
	        verticalAlign: 'middle',
	        marginLeft: this.isIconFront ? '10px' : '0',
	        marginRight: this.isIconFront ? '0' : '10px'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mLabelStyle: (0, _assign2.default)(styles.label, this.labelStyle),
	      mIconStyle: (0, _assign2.default)(styles.icon, this.iconStyle),
	      touch: false,
	      tabPressed: false,
	      tabListening: false,
	      focused: false,
	      forcusTimeout: null,
	      isIE: !!(0, _util.isIE)()
	    };
	  },
	  props: {
	    shadowDepth: {
	      type: Number,
	      default: -1
	    },
	    disabled: Boolean,
	    label: String,
	    onClick: Function,
	    iconClass: String,
	    backgroundColor: String,
	    isIconFront: Boolean,
	    keyboardFocus: {
	      type: Boolean,
	      default: true
	    },
	    isFloat: {
	      type: Boolean,
	      default: true
	    },
	    hover: {
	      type: Boolean,
	      default: true
	    },
	    link: String,
	    styleObj: Object,
	    labelStyle: Object,
	    iconStyle: Object,
	    ripple: {
	      type: Boolean,
	      default: true
	    }
	  },
	  components: {
	    touchRipple: _touchRipple2.default
	  },
	  ready: function ready() {
	    var _this = this;

	    if (!this.tabListening) {
	      _events2.default.on(window, 'keydown', function (event) {
	        _this.tabPressed = _events2.default.keyCodes.tab === event.keyCode;
	      });
	      this.tabListening = true;
	    }
	  },
	  directives: {
	    'delayfocus': _directive.delayfocus
	  },
	  methods: {
	    handleFocus: function handleFocus() {
	      var _this2 = this;

	      this.forcusTimeout = setTimeout(function () {
	        if (_this2.tabPressed) {
	          _this2.focused = true;
	        }
	      }, 150);
	    },
	    cancelFocusTimeout: function cancelFocusTimeout() {
	      if (this.forcusTimeout) {
	        clearTimeout(this.forcusTimeout);
	        this.forcusTimeout = null;
	      }
	    },
	    handleBlur: function handleBlur() {
	      this.tabPressed = false;
	      this.focused = false;
	      this.cancelFocusTimeout();
	    },
	    handleMouseEnter: function handleMouseEnter() {
	      if (this.touch || this.disabled) {
	        this.hover = false;
	      }
	      if (this.hover) {
	        if (this.backgroundColor) {
	          this.$el.style.backgroundColor = _colorManipulator2.default.fade(this.backgroundColor, 0.8);
	        } else {
	          this.$el.style.backgroundColor = _muiTheme.baseTheme.defaultActiveColor;
	        }
	      }
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      if (this.hover) {
	        this.$el.style.backgroundColor = this.backgroundColor ? this.backgroundColor : 'rgba(0, 0, 0, 0)';
	      }
	    },
	    handleTouchStart: function handleTouchStart(event) {
	      this.touch = true;
	      if (this.isFloat) {
	        this.mRootStyle.boxShadow = _common.zDepthShadows[this.shadowDepth + 1];
	      }
	    },
	    handleTouchEnd: function handleTouchEnd(event) {
	      if (this.isFloat) {
	        this.mRootStyle.boxShadow = _common.zDepthShadows[this.shadowDepth];
	      }
	    },
	    handleClick: function handleClick(event) {
	      this.tabPressed = false;
	      this.focused = false;
	      if (this.disabled) {
	        return;
	      }
	      if (this.link && this.link.startsWith('http')) {
	        window.open(this.link);
	      } else if (this.link) {
	        console.warn(this.link + ' is not a valid URL');
	      }
	      if (this.onClick) this.onClick(event, this.label);
	    }
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	module.exports = __webpack_require__(9).Object.assign;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(7);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(22)});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(9)
	  , ctx       = __webpack_require__(10)
	  , hide      = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(11);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(13)
	  , createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(17) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(16)
	  , toPrimitive    = __webpack_require__(20)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function(){
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	  , document = __webpack_require__(8).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(23)
	  , gOPS     = __webpack_require__(38)
	  , pIE      = __webpack_require__(39)
	  , toObject = __webpack_require__(40)
	  , IObject  = __webpack_require__(27)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(18)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(24)
	  , enumBugKeys = __webpack_require__(37);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(25)
	  , toIObject    = __webpack_require__(26)
	  , arrayIndexOf = __webpack_require__(30)(false)
	  , IE_PROTO     = __webpack_require__(34)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(27)
	  , defined = __webpack_require__(29);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(28);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(26)
	  , toLength  = __webpack_require__(31)
	  , toIndex   = __webpack_require__(33);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(32)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(32)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(35)('keys')
	  , uid    = __webpack_require__(36);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 38 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 39 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(29);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  on: function on(el, type, callback, useCapture) {
	    el.addEventListener(type, callback, useCapture);
	  },
	  off: function off(el, type, callback, useCapture) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback, useCapture);
	    }
	  },
	  once: function once(el, type, callback, useCapture) {
	    var _this = this;

	    var remove = function remove() {
	      _this.off(el, type, callback, useCapture);
	      callback.call(el);
	    };
	    this.on(el, type, remove);
	  },

	  keyCodes: {
	    esc: 27,
	    tab: 9,
	    enter: 13,
	    space: 32,
	    'delete': [8, 46],
	    up: 38,
	    left: 37,
	    right: 39,
	    down: 40
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(43)
	__vue_script__ = __webpack_require__(47)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/touchRipple.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(56)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./touchRipple.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(46)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./touchRipple.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./touchRipple.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.tab-transition {\n  -webkit-animation-name: forcus;\n          animation-name: forcus;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(.42, 0, .58, 1);\n          animation-timing-function: cubic-bezier(.42, 0, .58, 1);\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n.tab-enter,\n.tab-leave {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0;\n}\n.touch-transition {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 0;\n}\n.touch-enter {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity:1;\n}\n\n@-webkit-keyframes forcus{\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n  50% {\n    -webkit-transform: scale(.65);\n            transform: scale(.65);\n  }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n}\n\n@keyframes forcus{\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n  50% {\n    -webkit-transform: scale(.65);\n            transform: scale(.65);\n  }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n}\n", ""]);

	// exports


/***/ },
/* 45 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _create = __webpack_require__(48);

	var _create2 = _interopRequireDefault(_create);

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _muiTheme = __webpack_require__(55);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function calcDiag(a, b) {
	  return Math.sqrt(a * a + b * b);
	}

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        width: '100%',
	        height: '100%',
	        position: 'absolute',
	        top: '0',
	        left: '0',
	        overflow: 'hidden'
	      },
	      center: {
	        position: 'absolute',
	        top: '0',
	        left: '0',
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        transition: _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform'),
	        backgroundColor: _muiTheme.baseTheme.defaultActiveColor
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      ripples: [],
	      centerStyle: styles.center,
	      tabRippleStyle: {}
	    };
	  },
	  props: {
	    styleObj: Object,
	    center: Boolean,
	    tabPressed: Boolean
	  },
	  ready: function ready() {
	    this.tabRippleStyle = this.getRippleStyle(null, true);
	  },
	  methods: {
	    handleClick: function handleClick(event) {
	      event.preventDefault();
	      this.addRipple(event);
	    },
	    handleTouchStart: function handleTouchStart(event) {
	      if (event.touches) {
	        this.firstTouchY = event.touches[0].clientY;
	        this.firstTouchX = event.touches[0].clientX;
	        this.startTime = Date.now();
	      }
	    },
	    handleTouchEnd: function handleTouchEnd(event) {
	      var deltaY = Math.abs(event.changedTouches[0].clientY - this.firstTouchY);
	      var deltaX = Math.abs(event.changedTouches[0].clientX - this.firstTouchX);
	      if (deltaY < 6 && deltaX < 6) {
	        this.addRipple(event);
	      }
	    },
	    addRipple: function addRipple(event) {
	      var _this = this;

	      var ripple = (0, _create2.default)(null);
	      ripple.style = this.center ? this.centerStyle : this.getRippleStyle(event);
	      this.ripples.push(ripple);
	      setTimeout(function () {
	        _this.ripples.shift();
	      }, 2000);
	    },
	    getRippleStyle: function getRippleStyle(event, focus) {
	      var style = (0, _create2.default)(null);
	      var el = this.$el;
	      var elHeight = el.offsetHeight;
	      var elWidth = el.offsetWidth;
	      var rect = el.getBoundingClientRect();
	      var offsetTop = rect.top + document.body.scrollTop;
	      var offsetLeft = rect.left + document.body.scrollLeft;
	      var isTouchEvent = event && event.touches && event.touches.length;
	      var pageX = isTouchEvent ? event.touches[0].pageX : focus ? elWidth / 2 + offsetLeft : event.pageX;
	      var pageY = isTouchEvent ? event.touches[0].pageY : focus ? elHeight / 2 + offsetTop : event.pageY;
	      var pointerX = pageX - offsetLeft;
	      var pointerY = pageY - offsetTop;
	      var topLeftDiag = calcDiag(pointerX, pointerY);
	      var topRightDiag = calcDiag(elWidth - pointerX, pointerY);
	      var botRightDiag = calcDiag(elWidth - pointerX, elHeight - pointerY);
	      var botLeftDiag = calcDiag(pointerX, elHeight - pointerY);
	      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	      var rippleSize = rippleRadius * 2;
	      var left = pointerX - rippleRadius;
	      var top = pointerY - rippleRadius;

	      style.height = rippleSize + 'px';
	      style.width = rippleSize + 'px';
	      style.top = top + 'px';
	      style.left = left + 'px';

	      return (0, _assign2.default)({}, this.centerStyle, style);
	    }
	  }
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	var $Object = __webpack_require__(9).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(51)});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(14)
	  , dPs         = __webpack_require__(52)
	  , enumBugKeys = __webpack_require__(37)
	  , IE_PROTO    = __webpack_require__(34)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(19)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(53).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(13)
	  , anObject = __webpack_require__(14)
	  , getKeys  = __webpack_require__(23);

	module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8).document && document.documentElement;

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	    easeFunction = easeFunction || this.easeOutFunction;

	    if (property && Object.prototype.toString.call(property) === '[object Array]') {
	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }

	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';

	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var navPadding = '24px';
	var navHeight = '48px';

	var baseTheme = exports.baseTheme = {
	  navBar: {
	    lineHeight: navHeight,
	    padding: navPadding
	  },
	  button: {
	    height: '36px',
	    iconHeight: '48px'
	  },
	  disabledColor: 'rgba(0, 0, 0, 0.3)',
	  defaultActiveColor: 'rgba(163, 163, 163, 0.71)'
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\"\n  @click=\"handleClick\"\n  @touchstart=\"handleTouchStart($event)\"\n  @touchend=\"handleTouchEnd($event)\"\n>\n  <div v-show=\"tabPressed\" :style=\"tabRippleStyle\" transition=\"tab\"></div>\n  <div v-for=\"ripple in ripples\" :style=\"ripple.style\" transition=\"touch\"></div>\n</div>\n";

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  /**
	   * The relative brightness of any point in a colorspace, normalized to 0 for
	   * darkest black and 1 for lightest white. RGB colors only. Does not take
	   * into account alpha values.
	   *
	   * TODO:
	   * - Take into account alpha values.
	   * - Identify why there are minor discrepancies for some use cases
	   *   (i.e. #F0F & #FFF). Note that these cases rarely occur.
	   *
	   * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	   */

	  luminance: function luminance(color) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('rgb') > -1) {
	      var rgb = color.values.map(function (val) {
	        val /= 255; // normalized
	        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	      });

	      return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
	    } else {
	      return -1;
	    }
	  },


	  /**
	   * @params:
	   * additionalValue = An extra value that has been calculated but not included
	   *                   with the original color object, such as an alpha value.
	   */
	  _convertColorToString: function _convertColorToString(color, additonalValue) {
	    var str = color.type + '(' + parseInt(color.values[0]) + ', ' + parseInt(color.values[1]) + ', ' + parseInt(color.values[2]);

	    if (additonalValue !== undefined) {
	      str += ', ' + additonalValue + ')';
	    } else if (color.values.length === 4) {
	      str += ', ' + color.values[3] + ')';
	    } else {
	      str += ')';
	    }

	    return str;
	  },


	  // Converts a color from hex format to rgb format.
	  _convertHexToRGB: function _convertHexToRGB(color) {
	    if (color.length === 4) {
	      var extendedColor = '#';
	      for (var i = 1; i < color.length; i++) {
	        extendedColor += color.charAt(i) + color.charAt(i);
	      }
	      color = extendedColor;
	    }

	    var values = {
	      r: parseInt(color.substr(1, 2), 16),
	      g: parseInt(color.substr(3, 2), 16),
	      b: parseInt(color.substr(5, 2), 16)
	    };

	    return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
	  },


	  // Returns the type and values of a color of any given type.
	  _decomposeColor: function _decomposeColor(color) {
	    if (color.charAt(0) === '#') {
	      return this._decomposeColor(this._convertHexToRGB(color));
	    }

	    var marker = color.indexOf('(');
	    var type = color.substring(0, marker);
	    var values = color.substring(marker + 1, color.length - 1).split(',');

	    return { type: type, values: values };
	  },


	  // Set the absolute transparency of a color.
	  // Any existing alpha values are overwritten.
	  fade: function fade(color, amount) {
	    color = this._decomposeColor(color);
	    if (color.type === 'rgb' || color.type === 'hsl') color.type += 'a';
	    return this._convertColorToString(color, amount);
	  },


	  // Desaturates rgb and sets opacity (defaults to 0.15)
	  lighten: function lighten(color, amount) {
	    var opacity = arguments.length <= 2 || arguments[2] === undefined ? '0.15' : arguments[2];

	    color = this._decomposeColor(color);

	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 + amount;
	        if (color.values[i] > 255) color.values[i] = 255;
	      }
	    }

	    if (color.type.indexOf('a') <= -1) color.type += 'a';

	    return this._convertColorToString(color, opacity);
	  },
	  darken: function darken(color, amount) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 - amount;
	        if (color.values[i] < 0) color.values[i] = 0;
	      }
	    }

	    return this._convertColorToString(color);
	  },


	  // Calculates the contrast ratio between two colors.
	  //
	  // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
	  contrastRatio: function contrastRatio(background, foreground) {
	    var lumA = this.luminance(background);
	    var lumB = this.luminance(foreground);

	    if (lumA >= lumB) {
	      return ((lumA + 0.05) / (lumB + 0.05)).toFixed(2);
	    } else {
	      return ((lumB + 0.05) / (lumA + 0.05)).toFixed(2);
	    }
	  },


	  /**
	   * Determines how readable a color combination is based on its level.
	   * Levels are defined from @LeaVerou:
	   * https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/contrast-ratio.js
	   */
	  contrastRatioLevel: function contrastRatioLevel(background, foreground) {
	    var levels = {
	      'fail': {
	        range: [0, 3],
	        color: 'hsl(0, 100%, 40%)'
	      },
	      'aa-large': {
	        range: [3, 4.5],
	        color: 'hsl(40, 100%, 45%)'
	      },
	      'aa': {
	        range: [4.5, 7],
	        color: 'hsl(80, 60%, 45%)'
	      },
	      'aaa': {
	        range: [7, 22],
	        color: 'hsl(95, 60%, 41%)'
	      }
	    };

	    var ratio = this.contrastRatio(background, foreground);

	    for (var level in levels) {
	      var range = levels[level].range;
	      if (ratio >= range[0] && ratio <= range[1]) return level;
	    }
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var zDepthShadows = exports.zDepthShadows = [[1, 6, 0.12, 1, 4, 0.12], [3, 10, 0.16, 3, 10, 0.23], [10, 30, 0.19, 6, 10, 0.23], [14, 45, 0.25, 10, 18, 0.22], [19, 60, 0.30, 15, 20, 0.22]].map(function (d) {
	  return "0 " + d[0] + "px " + d[1] + "px rgba(0, 0, 0, " + d[2] + "),\n   0 " + d[3] + "px " + d[4] + "px rgba(0, 0, 0, " + d[5] + ")";
	});

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.delayfocus = delayfocus;
	function delayfocus(val) {
	  if (!val) {
	    return;
	  }
	  var el = this.el;
	  setTimeout(function () {
	    el.focus();
	  }, 0);
	}

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isIE = isIE;
	function isIE() {
	  var myNav = navigator.userAgent.toLowerCase();
	  return myNav.indexOf('msie') != -1 ? parseInt(myNav.split('msie')[1]) : false;
	}

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\"\n    v-delayfocus=\"isIE\"\n    @focus=\"handleFocus($event)\"\n    @blur=\"handleBlur($event)\"\n    @touchstart=\"handleTouchStart($event)\"\n    @touchend=\"handleTouchEnd($event)\"\n    @mouseenter=\"handleMouseEnter\"\n    @mouseleave=\"handleMouseLeave\"\n    @click=\"handleClick\"\n    :tabIndex=\"keyboardFocus ? 0 : -1\">\n  <span v-if=\"label\" :style=\"mLabelStyle\" >{{label}}</span>\n  <span v-if=\"iconClass\" :class=\"iconClass\" :style=\"mIconStyle\"></span>\n  <touch-ripple v-if=\"!disabled && ripple\" :tab-pressed=\"focused\"></touch-ripple>\n</div>\n";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(63)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/NavBar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(72)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./NavBar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _BaseButton = __webpack_require__(2);

	var _BaseButton2 = _interopRequireDefault(_BaseButton);

	var _IconButton = __webpack_require__(64);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _muiTheme = __webpack_require__(55);

	var _util = __webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var button = _muiTheme.baseTheme.button;
	    var navBar = _muiTheme.baseTheme.navBar;

	    var useFlexbox = (0, _util.isIE)() > 9;
	    var styles = {
	      root: {
	        display: useFlexbox ? '-ms-flexbox' : 'flex',
	        position: 'fixed',

	        width: '100%',
	        backgroundColor: 'rgb(41, 43, 38)',
	        lineHeight: navBar.lineHeight,
	        height: navBar.lineHeight
	      },
	      title: {
	        flex: '1',
	        padding: '0 20px',
	        color: 'white',
	        fontWeight: '700',
	        fontSize: '20px'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mTitleStyle: (0, _assign2.default)(styles.title, this.titleStyle)
	    };
	  },
	  props: {
	    barLeft: Array,
	    barRight: Array,
	    title: Array,
	    styleObj: Object,
	    titleStyle: Object
	  },
	  components: {
	    BaseButton: _BaseButton2.default,
	    IconButton: _IconButton2.default
	  }
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(65)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/IconButton.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(71)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./IconButton.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _events = __webpack_require__(41);

	var _events2 = _interopRequireDefault(_events);

	var _touchRipple = __webpack_require__(42);

	var _touchRipple2 = _interopRequireDefault(_touchRipple);

	var _common = __webpack_require__(58);

	var _Tooltip = __webpack_require__(66);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _muiTheme = __webpack_require__(55);

	var _directive = __webpack_require__(59);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var button = _muiTheme.baseTheme.button;
	    var disabledColor = _muiTheme.baseTheme.disabledColor;

	    var styles = {
	      root: {
	        borderRadius: '50%',
	        height: button.iconHeight,
	        width: '48px',
	        border: '10px',
	        lineHeight: '48px',
	        display: 'inline-block',
	        position: 'relative',
	        color: this.disabled ? disabledColor : 'none',
	        outline: 'none',
	        textDecoration: 'none',
	        backgroundColor: 'rgba(0,0,0,0)',
	        cursor: this.disabled ? 'default' : 'pointer',
	        boxShadow: this.shadowDepth && !this.disabled ? _common.zDepthShadows[this.shadowDepth] : 'none'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      centerStyle: {
	        marginLeft: '50%',
	        transform: 'translateX(-50%)',
	        lineHeight: '48px'
	      },
	      msg: false,
	      tabPressed: false,
	      tabListening: false,
	      focused: false,
	      forcusTimeout: null
	    };
	  },
	  props: {
	    shadowDepth: {
	      type: Number,
	      default: -1
	    },
	    disabled: Boolean,
	    tooltip: String,
	    verticalPosition: {
	      type: String,
	      default: "bottom"
	    },
	    horizontalPosition: {
	      type: String,
	      default: "left"
	    },
	    onClick: Function,
	    onMouseEnter: Function,
	    onMouseLeave: Function,
	    iconClass: String,
	    link: String,
	    styleObj: Object,
	    keyboardFocus: {
	      type: Boolean,
	      default: true
	    },
	    isFloat: {
	      type: Boolean,
	      default: true
	    }
	  },
	  components: {
	    touchRipple: _touchRipple2.default,
	    Tooltip: _Tooltip2.default
	  },
	  ready: function ready() {
	    var _this = this;

	    if (!this.tabListening) {
	      _events2.default.on(window, 'keydown', function (event) {
	        _this.tabPressed = _events2.default.keyCodes.tab === event.keyCode;
	      });
	      this.tabListening = true;
	    }
	  },
	  directives: {
	    'delayfocus': _directive.delayfocus
	  },
	  methods: {
	    handleFocus: function handleFocus() {
	      var _this2 = this;

	      this.forcusTimeout = setTimeout(function () {
	        if (_this2.tabPressed) {
	          _this2.focused = true;
	        }
	      }, 150);
	    },
	    cancelFocusTimeout: function cancelFocusTimeout() {
	      if (this.forcusTimeout) {
	        clearTimeout(this.forcusTimeout);
	        this.forcusTimeout = null;
	      }
	    },
	    handleBlur: function handleBlur() {
	      this.tabPressed = false;
	      this.focused = false;
	      this.cancelFocusTimeout();
	    },
	    handleTouchStart: function handleTouchStart(event) {
	      if (this.isFloat) {
	        this.mRootStyle.boxShadow = _common.zDepthShadows[this.shadowDepth + 1];
	      }
	    },
	    handleTouchEnd: function handleTouchEnd(event) {
	      if (this.isFloat) {
	        this.mRootStyle.boxShadow = _common.zDepthShadows[this.shadowDepth];
	      }
	    },
	    handleMouseEnter: function handleMouseEnter() {
	      if (!this.disabled) {
	        this.msg = true;
	      }
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      if (!this.disabled) {
	        this.msg = false;
	      }
	    },
	    handleClick: function handleClick() {
	      if (this.disabled) {
	        return;
	      }
	      if (this.link && this.link.startsWith('http')) {
	        window.open(this.link);
	      } else if (this.link) {
	        console.warn(this.link + ' is not a valid URL');
	      }
	      if (this.onClick) {
	        this.onClick();
	      }
	    }
	  }
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(67)
	__vue_script__ = __webpack_require__(69)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/Tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(70)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./Tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(68);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(46)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.tooltip-transition {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.tooltip-enter,\n.tooltip-leave {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n", ""]);

	// exports


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        position: 'absolute',
	        color: '#fff',
	        fontSize: '10px',
	        fontFamily: 'Roboto, sans-serif',
	        overflow: 'hidden',
	        minWidth: '50px',
	        lineHeight: '3',

	        whiteSpace: 'nowrap',
	        fontWeight: '500',
	        height: '30px',
	        boxSizing: 'border-box',
	        top: '-1000em',

	        opacity: '1',
	        backgroundColor: 'rgba(97, 97, 97, .9)',
	        borderRadius: '2px',
	        willChange: 'transform',
	        padding: '0px 8px',
	        transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'], null)
	      }
	    };
	    var vo = this.verticalPosition === 'top' ? '-30px' : '30px';
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      verticalOffset: vo
	    };
	  },
	  ready: function ready() {
	    var parentWidth = +this.$parent.$el.style.width.replace('px', '');
	    var width = +this.$el.offsetWidth;
	    var offset = parentWidth - width;
	    this.$el.style.left = this.horizontalPosition === 'left' ? '0' : this.horizontalPosition === 'center' ? offset / 2 + 'px' : offset + 'px';
	  },
	  watch: {
	    note: function note() {
	      if (this.note) {
	        this.$el.style.top = this.verticalPosition === 'top' ? '0px' : '18px';
	        this.$el.style.visibility = 'visible';
	        this.$el.style.opacity = '1';
	        this.$el.style.transform = 'translate(0px, ' + this.verticalOffset + ')';
	      } else {
	        this.$el.style.top = '-1000em';
	        this.$el.style.visibility = 'hidden';
	        this.$el.style.opacity = '0';
	        this.$el.style.transform = 'translate(0, 0)';
	      }
	    }
	  },
	  props: {
	    styleObj: Object,
	    note: Boolean,
	    message: String,
	    verticalPosition: {
	      type: String,
	      default: 'top'
	    },
	    horizontalPosition: {
	      type: String,
	      default: 'left'
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.$parent.$refs.touch.$el.click();
	    }
	  }
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\" @click=\"handleClick\">\n  {{message}}\n</div>\n";

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\"\n    v-delayfocus=\"true\"\n    @focus=\"handleFocus($event)\"\n    @blur=\"handleBlur($event)\"\n    @touchstart=\"handleTouchStart($event)\"\n    @touchend=\"handleTouchEnd($event)\"\n    @mouseenter=\"handleMouseEnter\"\n    @mouseleave=\"handleMouseLeave\"\n    @click=\"handleClick\"\n    :tabIndex=\"keyboardFocus ? 0 : -1\">\n  <tooltip\n    v-if=\"tooltip\"\n    :note=\"msg\"\n    :message=\"tooltip\"\n    :vertical-position=\"verticalPosition\"\n    :horizontal-position=\"horizontalPosition\">\n  </tooltip>\n\n  <span :class=\"iconClass\" :style=\"centerStyle\"></span>\n  <touch-ripple v-ref:touch :tab-pressed=\"focused\" v-if=\"!disabled\" :center=\"true\" ></touch-ripple>\n</div>\n";

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\">\n  <div :style=\"\">\n    <slot name=\"leftNav\"></slot>\n  </div>\n  <div :style=\"mTitleStyle\">\n    <slot name=\"title\"></slot>\n  </div>\n  <div :style=\"\">\n    <slot name=\"rightNav\"></slot>\n  </div>\n</div>\n";

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(74)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MenuItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(75)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./MenuItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _BaseButton = __webpack_require__(2);

	var _BaseButton2 = _interopRequireDefault(_BaseButton);

	var _IconButton = __webpack_require__(64);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _util = __webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var useFlexbox = (0, _util.isIE)() > 9;
	    var styles = {
	      root: {
	        display: useFlexbox ? '-ms-flexbox' : 'flex',
	        justifyContent: 'space-between',
	        MsFlexPack: 'justify'
	      },
	      icon: {
	        flex: '2'
	      },
	      button: {
	        flex: '5',
	        lineHeight: '48px',
	        width: '100%'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mButtonStyle: (0, _assign2.default)(styles.button, this.buttonStyle),
	      mIconStyle: (0, _assign2.default)(styles.icon, this.iconStyle)
	    };
	  },
	  props: {
	    styleObj: Object,
	    isHorizen: Boolean,

	    shadowDepth: Number,
	    label: String,
	    hover: Boolean,
	    link: String,
	    buttonStyle: Object,
	    labelStyle: Object,
	    ripple: {
	      type: Boolean,
	      default: true
	    },

	    iconClass: String,
	    iconStyle: Object,
	    iconOnClick: Function,
	    labelOnClick: Function
	  },
	  components: {
	    BaseButton: _BaseButton2.default,
	    IconButton: _IconButton2.default
	  },
	  methods: {}
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\">\n  <base-button\n    :style-obj=\"mButtonStyle\"\n    :shadow-depth=\"shadowDepth\"\n    :label=\"label\"\n    :hover=\"ripple\"\n    :link=\"link\"\n    :label-style=\"labelStyle\"\n    :ripple=\"ripple\"\n    :on-click=\"labelOnClick\"\n  >\n  </base-button>\n  <icon-button\n    v-if=\"iconClass\"\n    :style-obj=\"mIconStyle\"\n    :icon-style=\"iconStyle\"\n    :icon-class=\"iconClass\"\n    :on-click=\"iconOnClick\"\n  >\n  </icon-button>\n</div>\n";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(77)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/IconMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(83)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./IconMenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _events = __webpack_require__(41);

	var _events2 = _interopRequireDefault(_events);

	var _IconButton = __webpack_require__(64);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _Popover = __webpack_require__(78);

	var _Popover2 = _interopRequireDefault(_Popover);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _common = __webpack_require__(58);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var transformOrigin = this.horizontalPosition == 'left' ? '0 ' : '100% ';
	    transformOrigin += this.verticalPosition == 'top' ? '100%' : '0%';
	    var styles = {
	      root: {
	        display: 'inline-block',
	        position: 'relative'
	      },
	      menu: {
	        transformOrigin: transformOrigin
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mMenuStyle: (0, _assign2.default)(styles.menu, this.menuStyle),
	      open: false
	    };
	  },
	  props: {
	    disabled: Boolean,
	    onClick: Function,
	    onMouseEnter: Function,
	    onMouseLeave: Function,
	    iconClass: String,
	    styleObj: Object,
	    menuStyle: Object,
	    verticalPosition: {
	      type: String,
	      default: 'bottom'
	    },
	    horizontalPosition: {
	      type: String,
	      default: 'left'
	    }
	  },
	  components: {
	    IconButton: _IconButton2.default,
	    Popover: _Popover2.default
	  },
	  ready: function ready() {
	    _events2.default.on(window, 'click', this.clickAway);
	    var height = this.$refs.iconb.$el.offsetHeight;
	    var vOrient = this.verticalPosition == 'top' ? { bottom: height + 'px' } : { top: height + 'px' };
	    var hOrient = this.horizontalPosition == 'left' ? { left: 0 } : { right: 0 };
	    this.mMenuStyle = (0, _assign2.default)({}, this.mMenuStyle, vOrient, hOrient);
	  },
	  destroyed: function destroyed() {
	    _events2.default.off(window, 'click', this.clickAway);
	  },
	  methods: {
	    handleClick: function handleClick(event) {
	      this.open = true;
	    },
	    clickAway: function clickAway(event) {
	      if (!(this.$el && this.$el.contains(event.target)) && this.open) {
	        this.open = false;
	      }
	    }
	  }
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(79)
	__vue_script__ = __webpack_require__(81)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/Popover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(82)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./Popover.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(46)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.vertical-pop-transition {\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n  opacity: 1;\n  visibility: visible;\n}\n.vertical-pop-leave,\n.vertical-pop-enter {\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  opacity: 0;\n  visibility: hidden;\n}\n.popover-transition {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n  visibility: visible;\n}\n.popover-leave,\n.popover-enter {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0;\n  visibility: hidden;\n}\n", ""]);

	// exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        boxShadow: _common.zDepthShadows[0],
	        position: 'absolute',
	        overflow: 'auto',
	        maxHeight: '150px',
	        minWidth: '58px',
	        willChange: 'transform',
	        backgroundColor: 'white',
	        zIndex: '1',
	        transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj)
	    };
	  },
	  watch: {
	    styleObj: function styleObj() {
	      this.mRootStyle = (0, _assign2.default)({}, this.mRootStyle, this.styleObj);
	    }
	  },
	  props: {
	    styleObj: Object,
	    open: Boolean,
	    verticalAnimation: Boolean
	  }
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\" v-show=\"open\" :transition=\"verticalAnimation ? 'vertical-pop':'popover'\">\n  <slot name=\"popover\"></slot>\n</div>\n";

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "\n<div @click=\"handleClick($event)\" :style=\"mRootStyle\">\n  <icon-button\n    v-ref:iconb\n    :disabled=\"disabled\"\n    :on-click=\"onClick\"\n    :on-mouseEnter=\"onMouseEnter\"\n    :icon-class=\"iconClass\"\n    >\n  </icon-button>\n  <popover :open=\"open\" :style-obj=\"mMenuStyle\">\n    <slot name=\"iconList\" slot=\"popover\"></slot>\n  </popover>\n</div>\n";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(85)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/DownMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(86)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./DownMenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _events = __webpack_require__(41);

	var _events2 = _interopRequireDefault(_events);

	var _BaseButton = __webpack_require__(2);

	var _BaseButton2 = _interopRequireDefault(_BaseButton);

	var _Popover = __webpack_require__(78);

	var _Popover2 = _interopRequireDefault(_Popover);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        display: 'inline-block',
	        position: 'relative',
	        fontFamily: 'Roboto, sans-serif'
	      },
	      button: {
	        display: 'block',
	        width: '100%'
	      },
	      menu: {
	        transformOrigin: '50% 0%'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mMenuStyle: (0, _assign2.default)(styles.menu, this.menuStyle),
	      mButtonstyle: this.buttonStyle,
	      open: false
	    };
	  },
	  props: {
	    disabled: Boolean,
	    label: String,
	    buttonStyle: Object,
	    styleObj: Object,
	    menuStyle: Object
	  },
	  components: {
	    Popover: _Popover2.default,
	    BaseButton: _BaseButton2.default
	  },
	  ready: function ready() {
	    _events2.default.on(window, 'click', this.clickAway);

	    var height = this.$refs.downb.$el.offsetHeight;
	    this.mMenuStyle.top = height + 'px';
	  },
	  destroyed: function destroyed() {
	    _events2.default.off(window, 'click', this.clickAway);
	  },
	  methods: {
	    handleClick: function handleClick(event) {
	      if (event.stopPropagation) {
	        event.stopPropagation();
	      } else if (event.cancelBubble) {
	        event.cancelBubble = true;
	      }
	      if (!this.disabled) {
	        this.open = true;
	      }
	    },
	    clickAway: function clickAway(event) {
	      if (!(this.$el && this.$el.contains(event.target)) && this.open) {
	        this.open = false;
	      }
	    }
	  }
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "\n<div @click=\"handleClick($event)\" :style=\"mRootStyle\">\n  <base-button\n    v-ref:downb\n    :disabled=\"disabled\"\n    :label=\"label\"\n    :style-obj=\"mButtonstyle\"\n    >\n  </base-button>\n  <popover :open=\"open\" :style-obj=\"mMenuStyle\" v-if=\"!disabled\" :vertical-animation=\"true\">\n    <slot name=\"downList\" slot=\"popover\"></slot>\n  </popover>\n</div>\n";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(88)
	__vue_script__ = __webpack_require__(90)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MenuBar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(95)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./MenuBar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(89);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(46)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MenuBar.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MenuBar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.mask {\n  top: 0;\n  right: 0;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transition-duration: .5s;\n          transition-duration: .5s;\n}\n.mask-transition {\n  opacity: 1;\n}\n.mask-enter,\n.mask-leave {\n  opacity: 0;\n}\n.slide-transition {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.slide-enter,\n.slide-leave {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n", ""]);

	// exports


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _defineProperty2 = __webpack_require__(91);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _events = __webpack_require__(41);

	var _events2 = _interopRequireDefault(_events);

	var _touchRipple = __webpack_require__(42);

	var _touchRipple2 = _interopRequireDefault(_touchRipple);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _muiTheme = __webpack_require__(55);

	var _common = __webpack_require__(58);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var _root;

	    var styles = {
	      root: (_root = {
	        height: '100%',
	        width: '150px',
	        position: 'fixed',
	        top: '0',
	        left: '0',
	        backgroundColor: 'white',
	        fontFamily: 'Roboto, sans-serif',
	        willChange: 'transform',
	        transition: _transitions2.default.easeOut('200ms', 'transform', ''),
	        boxShadow: _common.zDepthShadows[this.shadowDepth - 1]
	      }, (0, _defineProperty3.default)(_root, 'height', '100%'), (0, _defineProperty3.default)(_root, 'overflowY', 'auto'), (0, _defineProperty3.default)(_root, 'zIndex', '1'), _root)
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      added: false
	    };
	  },
	  props: {
	    shadowDepth: {
	      type: Number,
	      default: 1
	    },
	    open: Boolean,
	    styleObj: Object,
	    docked: {
	      type: Boolean,
	      default: true
	    }
	  },
	  created: function created() {
	    if (!this.docked) {
	      _events2.default.on(window, 'click', this.clickAway, true);

	      this.added = true;
	    }
	  },
	  destroyed: function destroyed() {
	    if (!this.docked) {
	      _events2.default.off(window, 'click', this.clickAway, true);
	    }
	  },
	  watch: {
	    open: function open() {
	      if (this.open && !this.docked) {
	        _events2.default.on(window, 'click', this.clickAway, true);
	      } else {
	        _events2.default.off(window, 'click', this.clickAway, true);
	      }
	    }
	  },
	  methods: {
	    clickAway: function clickAway(event) {
	      if (!(this.$el.children[1] && this.$el.children[1].contains(event.target)) && this.open && !this.docked) {
	        this.open = false;
	      }
	    },
	    handleClick: function handleClick(event) {
	      var itemNode = event.target.closest('[slot="menuList"]');
	      if (!this.docked && itemNode.contains(event.target)) {
	        this.open = false;
	      }
	    }
	  }
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(92);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(94);
	var $Object = __webpack_require__(9).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(17), 'Object', {defineProperty: __webpack_require__(13).f});

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "\n<div >\n  <div class=\"mask\" v-show=\"!docked && open\" transition=\"mask\"></div>\n  <div :style=\"mRootStyle\" @click=\"handleClick($event)\" v-show=\"open\" transition=\"slide\">\n    <slot name=\"menuList\"></slot>\n  </div>\n</div>\n";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(97)
	__vue_script__ = __webpack_require__(99)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/SnackBar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(100)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./SnackBar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(98);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(46)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SnackBar.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SnackBar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.snack-transition {\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  visibility: visible;\n}\n.snack-enter,\n.snack-leave {\n  visibility: hidden;\n  -webkit-transform: translate(-50%, 80px);\n          transform: translate(-50%, 80px);\n}\n", ""]);

	// exports


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _BaseButton = __webpack_require__(2);

	var _BaseButton2 = _interopRequireDefault(_BaseButton);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _events = __webpack_require__(41);

	var _events2 = _interopRequireDefault(_events);

	var _util = __webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var useFlexbox = (0, _util.isIE)() > 9;
	    var styles = {
	      root: {
	        minWidth: '288px',
	        position: 'fixed',
	        justifyContent: 'space-between',
	        MsFlexPack: 'justify',
	        bottom: '0',
	        willChange: 'transform',
	        fontFamily: 'Roboto, sans-serif',
	        left: '50%',
	        whiteSpace: 'nowrap',
	        backgroundColor: 'rgb(7, 7, 8)',
	        transition: _transitions2.default.easeOut('400ms', 'transform') + ',\n                     ' + _transitions2.default.easeOut('400ms', 'visibility')
	      },
	      snack: {
	        display: useFlexbox ? '-ms-flexbox' : 'flex',
	        width: '100%',
	        alignItems: 'center'
	      },
	      message: {
	        textAlign: 'center',
	        fontSize: '14px',
	        color: 'white',
	        padding: '14px 10px 14px 10px',
	        verticalAlign: 'middle',
	        letterSpacing: '0',
	        textTransform: 'uppercase',
	        flex: '1'
	      },
	      undo: {
	        color: 'red',
	        cursor: 'pointer'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mSnackWrapper: styles.snack,
	      mMessageStyles: (0, _assign2.default)(styles.message, this.messageStyle),
	      mUndoStyles: (0, _assign2.default)(styles.undo, this.undoStyle),
	      autoHideTimer: null
	    };
	  },
	  props: {
	    open: Boolean,
	    message: String,
	    undo: Boolean,
	    styleObj: Object,
	    snackStyle: Object,
	    messageStyle: Object,
	    undoStyle: Object,
	    showDuration: {
	      type: Number,
	      default: 5000
	    }
	  },
	  components: {
	    BaseButton: _BaseButton2.default
	  },
	  ready: function ready() {
	    _events2.default.on(window, 'click', this.clickAway, true);
	  },
	  destroyed: function destroyed() {
	    _events2.default.off(window, 'click', this.clickAway, true);
	    if (this.autoHideTimer) {
	      clearTimeout(this.autoHideTimer);
	    }
	  },
	  watch: {
	    open: function open() {
	      var _this = this;

	      if (this.open) {
	        if (this.autoHideTimer) {
	          clearTimeout(this.autoHideTimer);
	        }
	        this.autoHideTimer = setTimeout(function () {
	          _this.open = false;
	        }, this.showDuration);
	      }
	    }
	  },
	  methods: {
	    clickAway: function clickAway() {
	      if (!(this.$el && this.$el.contains(event.target)) && this.open) {
	        this.open = false;
	      }
	    }
	  }
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\" v-show=\"open\" transition=\"snack\">\n  <div :style=\"mSnackWrapper\">\n    <span :style=\"mMessageStyles\">{{message}}</span>\n    <base-button :style-obj=\"mUndoStyles\" v-if=\"undo\" label=\"UNDO\" :hover=\"false\"></base-button>\n  </div>\n</div>\n";

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(102)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/TextField.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(103)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./TextField.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _directive = __webpack_require__(59);

	var _util = __webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var lineStyle = {
	      border: 'none',
	      width: '100%',
	      borderBottom: this.disabled ? 'dotted 2px' : 'solid 1px',
	      boxSizing: 'content-box',
	      position: 'absolute',
	      bottom: this.floatContent ? '25px' : '10px',
	      borderColor: '#e0e0e0',
	      margin: '0'
	    };
	    var forcusStyle = {
	      borderColor: 'rgb(0, 188, 212)',
	      transform: 'scaleX(0)',
	      borderBottom: 'solid 2px',
	      transition: _transitions2.default.easeOut()
	    };
	    var styles = {
	      root: {
	        fontSize: '16px',
	        lineHeight: '24px',
	        width: '256px',
	        height: this.floatContent ? '72px' : '48px',
	        display: 'inline-block',
	        position: 'relative',
	        backgroundColor: this.backgroundColor,
	        fontFamily: 'Roboto, sans-serif',
	        transition: _transitions2.default.easeOut('200ms', 'height')
	      },
	      float: {
	        position: 'absolute',
	        lineHeight: '22px',
	        top: '25px',
	        willChange: 'transform',
	        transform: this.defaultContent ? 'perspective(1px) scale(0.75) translate3d(0, -28px, 0)' : 'scale(1) translate3d(0, 0, 0)',
	        transition: _transitions2.default.easeOut(),
	        cursor: this.disabled ? 'default' : 'text',
	        transformOrigin: 'left top',
	        color: 'rgb(192, 198, 201)'
	      },
	      hint: {
	        position: 'absolute',
	        lineHeight: '22px',
	        top: this.floatContent ? '25px' : '13px',
	        color: 'rgb(192, 198, 201)'
	      },
	      input: {
	        padding: '0',
	        width: '100%',
	        height: '100%',
	        border: 'none',
	        outline: 'none',
	        backgroundColor: 'rgba(0,0,0,0)',
	        fontSize: 'inherit',
	        fontFamily: 'inherit'
	      },
	      underline: {
	        border: 'none',
	        width: '100%',
	        borderBottom: this.disabled ? 'dotted 2px' : 'solid 1px',
	        boxSizing: 'content-box',
	        position: 'absolute',
	        bottom: this.floatContent ? '25px' : '10px',
	        borderColor: '#e0e0e0',
	        margin: '0'
	      },
	      forcusUnderline: (0, _assign2.default)({}, lineStyle, forcusStyle)
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mFloatStyle: styles.float,
	      mHintStyle: (0, _assign2.default)(styles.hint, this.hintStyle),
	      mInputStyle: (0, _assign2.default)(styles.input, this.inputStyle),
	      mUnderlineStyle: (0, _assign2.default)(styles.underline, this.underlineStyle),
	      mForcusUnderlineStyle: styles.forcusUnderline,
	      isForcused: false,
	      isIE: !!(0, _util.isIE)(),
	      show: this.isForcused && this.floatContent && this.hintContent || this.hintContent && !this.defaultContent && !this.floatContent
	    };
	  },
	  props: {
	    styleObj: Object,
	    floatStyle: Object,
	    hintStyle: Object,
	    inputStyle: Object,
	    underlineStyle: Object,
	    forcusUnderlineStyle: Object,
	    backgroundColor: String,
	    floatContent: String,
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    hintContent: String,
	    defaultContent: String,
	    value: String,
	    onBlur: Function,
	    onFocus: Function
	  },
	  directives: {
	    'delayfocus': _directive.delayfocus
	  },
	  methods: {
	    handleFocus: function handleFocus(event) {
	      this.isForcused = true;
	      this.show = event.target.value ? false : true;
	      this.$set('mForcusUnderlineStyle.transform', 'scaleX(1)');
	      this.$set('mFloatStyle.transform', 'perspective(1px) scale(0.75) translate3d(0, -28px, 0)');
	      this.$set('mFloatStyle.pointerEvents', 'none');
	      this.$set('mFloatStyle.color', 'rgb(105, 189, 242)');

	      if (this.onFocus) {
	        this.onFocus(event);
	      }
	    },
	    handleBlur: function handleBlur(event) {
	      this.isForcused = false;
	      this.show = this.floatContent || event.target.value ? false : true;
	      this.$set('mForcusUnderlineStyle.transform', 'scaleX(0)');
	      if (!event.target.value) {
	        this.$set('mFloatStyle.transform', 'scale(1) translate3d(0, 0, 0)');
	        this.$set('mFloatStyle.pointerEvents', 'auto');
	        this.$set('mFloatStyle.color', 'rgb(192, 198, 201)');
	      }
	      if (this.onBlur) {
	        this.onBlur(event);
	      }
	    },
	    handleInput: function handleInput(event) {
	      this.show = event.target.value ? false : this.isForcused && this.floatContent && this.hintContent ? true : !this.floatContent && this.hintContent ? true : false;
	    }
	  }
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\">\n  <label v-if=\"floatContent\" for=\"sp\" :style=\"mFloatStyle\">{{floatContent}}</label>\n  <div :style=\"mHintStyle\" v-show=\"show\" v-if=\"hintContent\">\n    {{hintContent}}\n  </div>\n  <div>\n    <hr :style=\"mUnderlineStyle\" />\n    <hr :style=\"mForcusUnderlineStyle\" />\n  </div>\n  <input :disabled=\"disabled\" type=\"text\" :style=\"mInputStyle\" id=\"sp\" v-delayfocus=\"isIE\"\n         @focus=\"handleFocus($event)\" @blur=\"handleBlur($event)\"\n         @input=\"handleInput($event)\" :value=\"value || defaultContent\"/>\n</div>\n";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(105)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/CheckBox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(116)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CheckBox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _touchRipple = __webpack_require__(42);

	var _touchRipple2 = _interopRequireDefault(_touchRipple);

	var _CheckBoxOutline = __webpack_require__(106);

	var _CheckBoxOutline2 = _interopRequireDefault(_CheckBoxOutline);

	var _CheckBoxInline = __webpack_require__(111);

	var _CheckBoxInline2 = _interopRequireDefault(_CheckBoxInline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        display: 'inline-block',
	        position: 'relative',
	        height: '24px',
	        width: '24px',
	        cursor: this.disabled ? 'default' : 'pointer'
	      },
	      input: {
	        position: 'absolute',
	        opacity: '0',
	        top: '0',
	        left: '0',
	        width: '100%',
	        height: '100%'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mInputStyle: styles.input,
	      zoom: {
	        height: '200%',
	        width: '200%',
	        top: '-12px',
	        left: '-12px'
	      }
	    };
	  },
	  props: {
	    styleObj: Object,
	    disabled: Boolean,
	    labelId: String,
	    trigger: {
	      type: Boolean,
	      default: false
	    }
	  },
	  components: {
	    CheckBoxOutline: _CheckBoxOutline2.default,
	    CheckBoxInline: _CheckBoxInline2.default,
	    touchRipple: _touchRipple2.default
	  },
	  methods: {
	    handleClick: function handleClick() {
	      if (!this.disabled) {
	        this.trigger = !this.trigger;
	      }
	    }
	  }
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(107)
	__vue_script__ = __webpack_require__(109)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/svg/CheckBoxOutline.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(110)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CheckBoxOutline.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(108);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(46)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckBoxOutline.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckBoxOutline.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _muiTheme = __webpack_require__(55);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        position: 'absolute',
	        height: 'inherit',
	        width: 'inherit',
	        fill: this.disabled ? _muiTheme.baseTheme.disabledColor : this.trigger ? "rgb(44, 107, 201)" : "rgb(0,0,0)"
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      viewBox: '0 0 24 24'
	    };
	  },
	  watch: {
	    trigger: function trigger() {
	      this.mRootStyle.fill = this.trigger ? "rgb(44, 107, 201)" : "rgb(0,0,0)";
	    }
	  },
	  props: {
	    styleObj: Object,
	    trigger: Boolean,
	    disabled: Boolean
	  }
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "\n<svg :style=\"mRootStyle\" :viewBox='viewBox'>\n  <path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/>\n</svg>\n";

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(112)
	__vue_script__ = __webpack_require__(114)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/svg/CheckBoxInline.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(115)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CheckBoxInline.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(113);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(46)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckBoxInline.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckBoxInline.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.trigger-transition {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n.trigger-enter {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0;\n}\n.trigger-leave {\n  opacity: 0;\n}\n", ""]);

	// exports


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        position: 'absolute',
	        transformOrigin: '50% 50%',
	        height: 'inherit',
	        width: 'inherit',
	        fill: "rgb(44, 107, 201)",
	        transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms')
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      viewBox: '0 0 24 24'
	    };
	  },
	  props: {
	    styleObj: Object,
	    trigger: Boolean
	  }
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "\n<svg :style=\"mRootStyle\" :viewBox='viewBox' v-show=\"trigger\" transition=\"trigger\">\n  <path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/>\n</svg>\n";

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\" @click=\"handleClick\">\n  <input :style=\"mInputStyle\" type=\"checkbox\" :id=\"labelId\" ></input>\n  <check-box-inline :trigger=\"trigger\" v-if=\"!disabled\"></check-box-inline>\n  <check-box-outline :trigger=\"trigger\" :disabled=\"disabled\"></check-box-outline>\n  <touch-ripple :style-obj=\"zoom\" v-if=\"!disabled\" :center=\"true\"></touch-ripple>\n</div>\n";

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(118)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/Radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(129)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./Radio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _touchRipple = __webpack_require__(42);

	var _touchRipple2 = _interopRequireDefault(_touchRipple);

	var _RadioChecked = __webpack_require__(119);

	var _RadioChecked2 = _interopRequireDefault(_RadioChecked);

	var _RadioUnchecked = __webpack_require__(124);

	var _RadioUnchecked2 = _interopRequireDefault(_RadioUnchecked);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        display: 'inline-block',
	        position: 'relative',
	        height: '24px',
	        width: '24px',
	        cursor: this.disabled ? 'default' : 'pointer'
	      },
	      input: {
	        position: 'absolute',
	        opacity: '0',
	        top: '0',
	        left: '0',
	        width: '100%',
	        height: '100%'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mInputStyle: styles.input,
	      zoom: {
	        height: '200%',
	        width: '200%',
	        top: '-12px',
	        left: '-12px'
	      }
	    };
	  },
	  props: {
	    styleObj: Object,
	    trigger: {
	      type: Boolean,
	      default: false
	    },
	    labelId: String,
	    disabled: Boolean
	  },
	  components: {
	    RadioChecked: _RadioChecked2.default,
	    RadioUnchecked: _RadioUnchecked2.default,
	    touchRipple: _touchRipple2.default
	  },
	  methods: {
	    handleClick: function handleClick() {
	      if (!this.disabled) {
	        this.trigger = !this.trigger;
	      }
	    }
	  }
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(120)
	__vue_script__ = __webpack_require__(122)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/svg/RadioChecked.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(123)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./RadioChecked.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(46)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RadioChecked.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RadioChecked.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.trigger-transition {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n.trigger-enter,\n.trigger-leave {\n  -webkit-transform: scale(.5);\n          transform: scale(.5);\n  opacity: 0;\n}\n", ""]);

	// exports


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        transformOrigin: '50% 50%',
	        position: 'absolute',
	        height: 'inherit',
	        width: 'inherit',
	        fill: "rgb(44, 107, 201)",
	        transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms')
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      viewBox: '0 0 24 24'
	    };
	  },
	  props: {
	    styleObj: Object,
	    trigger: Boolean
	  }
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "\n<svg :style=\"mRootStyle\" :viewBox='viewBox' v-show=\"trigger\" transition=\"trigger\">\n  <path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>\n</svg>\n";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(125)
	__vue_script__ = __webpack_require__(127)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/svg/RadioUnchecked.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(128)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./RadioUnchecked.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(126);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(46)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RadioUnchecked.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RadioUnchecked.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.trigger-transition {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n.trigger-enter,\n.trigger-leave {\n  -webkit-transform: scale(.5);\n          transform: scale(.5);\n  opacity: 0;\n}\n", ""]);

	// exports


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _muiTheme = __webpack_require__(55);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        height: 'inherit',
	        width: 'inherit',
	        position: 'absolute',
	        fill: this.disabled ? _muiTheme.baseTheme.disabledColor : this.trigger ? "rgb(44, 107, 201)" : "rgb(0,0,0)",
	        transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms'),
	        transformOrigin: '50% 50%'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      viewBox: '0 0 24 24'
	    };
	  },
	  props: {
	    styleObj: Object,
	    trigger: Boolean,
	    disabled: Boolean
	  }
	};

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "\n<svg :style=\"mRootStyle\" :viewBox='viewBox' v-show=\"!trigger\" transition=\"trigger\">\n  <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>\n</svg>\n";

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\" @click=\"handleClick\">\n  <input :style=\"mInputStyle\" type=\"checkbox\" :id=\"labelId\">\n  <radio-checked :trigger=\"trigger\" v-if=\"!disabled\"></radio-checked>\n  <radio-unchecked :trigger=\"trigger\" :disabled=\"disabled\"></radio-unchecked>\n  <touch-ripple :style-obj=\"zoom\" v-if=\"!disabled\" :center=\"true\"></touch-ripple>\n</div>\n";

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(131)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/Toggle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(132)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./Toggle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _touchRipple = __webpack_require__(42);

	var _touchRipple2 = _interopRequireDefault(_touchRipple);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        display: 'inline-block',
	        height: '24px',
	        width: '36px',
	        position: 'relative',
	        cursor: this.disabled ? 'default' : 'pointer'
	      },
	      thumb: {
	        transition: _transitions2.default.easeOut(),
	        top: '50%',
	        transform: 'translateY(-50%)',
	        height: '14px',
	        width: '100%',
	        backgroundColor: this.disabled ? 'rgb(189, 189, 189)' : this.trigger ? 'rgba(0, 188, 212, 0.498039)' : 'rgb(189, 189, 189)',
	        borderRadius: '30px',
	        position: 'absolute'
	      },
	      circle: {
	        transition: _transitions2.default.easeOut(),
	        borderRadius: '50%',
	        backgroundColor: this.disabled ? '#e0e0e0' : this.trigger ? 'rgb(0, 188, 212)' : 'rgb(245, 245, 245)',
	        top: '50%',
	        left: this.disabled ? '0' : this.trigger ? '16px' : '0',
	        transform: 'translateY(-50%)',
	        height: '20px',
	        width: '20px',
	        position: 'absolute',
	        boxShadow: _common.zDepthShadows[0]
	      },
	      input: {
	        position: 'absolute',
	        opacity: '0',
	        top: '0',
	        left: '0',
	        width: '100%',
	        height: '100%'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mThumbStyle: (0, _assign2.default)(styles.thumb, this.thumbStyle),
	      mCircleStyle: (0, _assign2.default)(styles.circle, this.circleStyle),
	      mInputStyle: styles.input,
	      zoom: {
	        height: '200%',
	        width: '200%',
	        top: '-10px',
	        left: '-10px'
	      }
	    };
	  },
	  watch: {
	    trigger: function trigger() {
	      if (!this.disabled) {
	        this.mThumbStyle.backgroundColor = this.trigger ? 'rgba(0, 188, 212, 0.498039)' : 'rgb(189, 189, 189)';
	        this.mCircleStyle.backgroundColor = this.trigger ? 'rgb(0, 188, 212)' : 'rgb(245, 245, 245)';
	        this.mCircleStyle.left = this.trigger ? '16px' : '0';
	      }
	    }
	  },
	  props: {
	    styleObj: Object,
	    trigger: {
	      type: Boolean,
	      default: false
	    },
	    disabled: Boolean,
	    circleStyle: Object,
	    thumbStyle: Object,
	    labelId: String
	  },
	  components: {
	    touchRipple: _touchRipple2.default
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.trigger = !this.trigger;
	    }
	  }
	};

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\" @click=\"handleClick\">\n  <input :style=\"mInputStyle\" type=\"checkbox\" :id=\"labelId\">\n  <span :style=\"mThumbStyle\"></span>\n  <span :style=\"mCircleStyle\">\n    <touch-ripple :center=true v-if=\"!disabled\" :style-obj=\"zoom\"></touch-ripple>\n  </span>\n</div>\n";

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(134)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/TableWrapper.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(135)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./TableWrapper.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        height: 'auto',

	        overflow: 'auto'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj)
	    };
	  },
	  props: {
	    styleObj: Object
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\">\n  <slot name=\"header\"></slot>\n  <slot name=\"body\"></slot>\n</div>\n";

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(137)
	__vue_script__ = __webpack_require__(139)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/TableBody.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(141)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./TableBody.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(46)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TableBody.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TableBody.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.selected {\n  background-color: rgb(224, 224, 224);\n}\n", ""]);

	// exports


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _CheckBox = __webpack_require__(104);

	var _CheckBox2 = _interopRequireDefault(_CheckBox);

	__webpack_require__(140);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        backgroundColor: '#fff',
	        padding: '0 24px',
	        borderCollapse: 'collapse',
	        width: '100%',
	        borderSpacing: '0',
	        tableLayout: 'fixed',
	        fontFamily: 'Roboto, sans-serif'
	      },
	      td: {
	        fontWeight: 'normal',
	        fontSize: '14px',
	        padding: '6px 13px',
	        height: '56px',
	        textAlign: 'left',
	        position: 'relative',
	        wordWrap: 'break-word',
	        whiteSpace: 'normal'
	      },
	      tr: {
	        borderBottom: '1px solid #e0e0e0'
	      },
	      checkbox: {
	        width: '24px'
	      }
	    };
	    return {
	      mTrStyle: (0, _assign2.default)(styles.tr, this.trStyle),
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mTdStyle: (0, _assign2.default)(styles.td, this.tdStyle),
	      mSelectStyle: (0, _assign2.default)((0, _assign2.default)({}, styles.td, styles.checkbox), this.tdStyle),
	      selectedRow: []
	    };
	  },
	  props: {
	    styleObj: Object,
	    bodyContent: Array,
	    striped: Boolean,
	    selectable: Boolean,
	    checkbox: Boolean,
	    trStyle: Object,
	    tdStyle: Object,
	    isOrder: {
	      type: Boolean,
	      default: true
	    }
	  },
	  components: {
	    CheckBox: _CheckBox2.default
	  },
	  methods: {
	    handleClick: function handleClick(e) {
	      var node;
	      if (e.target.nodeName === 'TR') {
	        node = e.target.nodeName;
	      } else {
	        node = e.target.closest('tr');
	      }
	      if (this.selectable) {
	        this.selectedRow = Array(this.bodyContent.length).fill(false);
	        var rowIndex = node.getAttribute('key');
	        var prev = this.selectedRow[rowIndex];
	        this.selectedRow.$set(rowIndex, !prev);
	      }
	    },
	    firstLetter: function firstLetter(a, b) {
	      if (this.isOrder) {
	        return a[0] > b[0] ? 1 : -1;
	      } else {
	        return true;
	      }
	    }
	  }
	};

/***/ },
/* 140 */
/***/ function(module, exports) {

	'use strict';

	if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector;
	if (!Element.prototype.closest) Element.prototype.closest = function (selector) {
	  var el = this;
	  while (el) {
	    if (el.matches(selector)) {
	      return el;
	    }
	    el = el.parentElement;
	  }
	};

	if (!Array.prototype.fill) {
	  Array.prototype.fill = function (value) {

	    // Steps 1-2.
	    if (this == null) {
	      throw new TypeError('this is null or not defined');
	    }

	    var O = Object(this);

	    // Steps 3-5.
	    var len = O.length >>> 0;

	    // Steps 6-7.
	    var start = arguments[1];
	    var relativeStart = start >> 0;

	    // Step 8.
	    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);

	    // Steps 9-10.
	    var end = arguments[2];
	    var relativeEnd = end === undefined ? len : end >> 0;

	    // Step 11.
	    var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);

	    // Step 12.
	    while (k < final) {
	      O[k] = value;
	      k++;
	    }

	    // Step 13.
	    return O;
	  };
	}

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <table :style=\"mRootStyle\">\n    <tbody>\n      <tr v-for=\"row in bodyContent | orderBy firstLetter\" :style=\"mTrStyle\" @click=\"handleClick\"\n          key=\"{{$index}}\" :class=\"selectedRow[$index] ? 'selected':''\" >\n        <td v-if=\"checkbox\" :style=\"mSelectStyle\"><check-box :trigger=\"selectedRow[$index]\"></check-box></td>\n        <td v-for=\"col in row \" :style=\"mTdStyle\" track-by=\"$index\">\n          {{col}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n";

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(143)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/TableHeader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(144)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./TableHeader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _CheckBox = __webpack_require__(104);

	var _CheckBox2 = _interopRequireDefault(_CheckBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        backgroundColor: '#fff',
	        padding: '0 24px',
	        borderCollapse: 'collapse',
	        width: '100%',
	        borderSpacing: '0',
	        tableLayout: 'fixed',
	        fontFamily: 'Roboto, sans-serif',
	        borderBottom: '1px solid #e0e0e0'
	      },
	      th: {
	        fontWeight: 'normal',
	        fontSize: '16px',
	        padding: '6px 13px',
	        height: '56px',
	        textAlign: 'left',
	        whiteSpace: 'nowrap',
	        textOverflow: 'ellipsis',
	        color: '#9e9e9e',
	        position: 'relative'
	      },
	      checkbox: {
	        width: '24px'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mThStyle: (0, _assign2.default)(styles.th, this.thStyle),
	      mSelectStyle: (0, _assign2.default)((0, _assign2.default)({}, styles.th, styles.checkbox), this.thStyle)
	    };
	  },
	  props: {
	    styleObj: Object,
	    headers: Array,
	    checkbox: Boolean,
	    thStyle: Object
	  },
	  components: {
	    CheckBox: _CheckBox2.default
	  }
	};

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <table :style=\"mRootStyle\">\n    <thead>\n      <tr>\n        <td v-if=\"checkbox\" :style=\"mSelectStyle\"><check-box :disabled=\"true\"></check-box></td>\n        <th v-for=\"col in headers\" :style=\"mThStyle\" track-by=\"$index\">\n          {{col | capitalize}}\n        </th>\n      </tr>\n    </thead>\n  </table>\n</div>\n";

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(146)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/AutoComplete.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(147)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./AutoComplete.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _TextField = __webpack_require__(101);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _Popover = __webpack_require__(78);

	var _Popover2 = _interopRequireDefault(_Popover);

	var _events = __webpack_require__(41);

	var _events2 = _interopRequireDefault(_events);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _MenuItem = __webpack_require__(73);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        display: 'inline-block'
	      },
	      menu: {
	        transformOrigin: '50% 0%'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mMenuStyle: (0, _assign2.default)(styles.menu, this.menuStyle),
	      open: false,
	      value: null,
	      inputValue: ''
	    };
	  },
	  props: {
	    styleObj: Object,
	    menuStyle: Object,
	    floatStyle: Object,
	    hintStyle: Object,
	    inputStyle: Object,
	    underlineStyle: Object,
	    forcusUnderlineStyle: Object,
	    backgroundColor: String,
	    floatContent: String,
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    hintContent: String,
	    defaultContent: String,
	    onBlur: Function,
	    onFocus: Function,
	    matchCase: {
	      type: Boolean,
	      default: true
	    },
	    completion: Array
	  },
	  components: {
	    MenuItem: _MenuItem2.default,
	    TextField: _TextField2.default,
	    Popover: _Popover2.default
	  },
	  ready: function ready() {
	    _events2.default.on(window, 'click', this.clickAway);
	  },
	  destroyed: function destroyed() {
	    _events2.default.off(window, 'click', this.clickAway);
	  },
	  methods: {
	    handleClick: function handleClick(event, label) {
	      this.value = label;
	      this.open = false;
	    },
	    handleInput: function handleInput(event) {
	      var value = event.target.value;
	      this.inputValue = this.matchCase ? value : value.toLowerCase();
	      this.open = value ? true : false;
	    },
	    clickAway: function clickAway(event) {
	      if (!this.$refs.popover.$el.contains(event.target) && this.open) {
	        this.open = false;
	      }
	    },
	    defaultFilter: function defaultFilter(comp) {
	      var str = this.matchCase ? comp : comp.toLowerCase();
	      var index = str.indexOf(this.inputValue);
	      return index >= 0;
	    }
	  }
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\"\n     @input=\"handleInput($event)\"\n     >\n  <text-field\n    :style-obj=\"mTextStyle\"\n    :float-style=\"floatStyle\"\n    :hint-style=\"hintStyle\"\n    :input-style=\"inputStyle\"\n    :underline-style=\"underlineStyle\"\n    :forcusUnderline-style=\"forcusUnderlineStyle\"\n    :background-color=\"backgroundColor\"\n    :float-content=\"floatContent\"\n    :disabled=\"disabled\"\n    :hint-content=\"hintContent\"\n    :default-content=\"defaultContent\"\n    :on-blur=\"onBlur\"\n    :on-focus=\"onFocus\"\n    :value=\"value\"\n  >\n  </text-field>\n  <popover :open=\"open\" :style-obj=\"mMenuStyle\" v-if=\"!disabled\" :vertical-animation=\"true\" v-ref:popover>\n    <menu-item v-for=\"comp in completion | filterBy defaultFilter \"\n               :label=\"comp\"\n               slot=\"popover\"\n               :key=\"comp\"\n               :label-on-click=\"handleClick\">\n    </menu-item>\n  </popover>\n</div>\n";

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(149)
	__vue_script__ = __webpack_require__(151)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/Dialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(152)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./Dialog.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(150);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(46)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dialog.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dialog.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.dialog-transition {\n  opacity: 1;\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  -webkit-transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);*/\n  transform: scale(1);\n}\n.dialog-leave,\n.dialog-enter {\n  opacity: 0;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n", ""]);

	// exports


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _events = __webpack_require__(41);

	var _events2 = _interopRequireDefault(_events);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _util = __webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var useFlexbox = (0, _util.isIE)() > 9;
	    var styles = {
	      root: {
	        position: 'fixed',
	        top: '0',
	        left: '0',
	        width: '100vw',
	        backgroundColor: 'rgba(0, 0, 0, 0.5)',
	        height: '100vh',
	        zIndex: '2'
	      },
	      content: {
	        display: useFlexbox ? '-ms-flexbox' : 'flex',
	        justifyContent: 'center',
	        MsFlexPack: 'center',
	        alignItems: 'center',
	        MsFlexAlign: 'center',
	        width: '100%',
	        height: '100%'
	      },
	      wrapper: {
	        backgroundColor: 'white',
	        width: '70%',
	        textAlign: 'left',
	        padding: '20px'
	      },
	      action: {
	        display: 'block',
	        float: 'right',
	        padding: '10px'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mWrapperStyle: (0, _assign2.default)(styles.wrapper, this.wrapperStyle),
	      mActionStyle: styles.action,
	      mContentStyle: styles.content
	    };
	  },
	  props: {
	    styleObj: Object,
	    title: String,
	    wrapperStyle: Object,
	    open: false
	  },
	  watch: {
	    open: function open() {
	      if (this.open) {
	        _events2.default.on(window, 'keydown', this.escKeyDown);
	      } else {
	        _events2.default.off(window, 'keydown', this.escKeyDown);
	      }
	    }
	  },
	  beforeCompile: function beforeCompile() {
	    this.open && _events2.default.on(window, 'keydown', this.escKeyDown);
	  },
	  methods: {
	    clickAway: function clickAway(event) {
	      var panel = this.$el.children[0].children[0];
	      if (!panel.contains(event.target) && this.open) {
	        this.open = false;
	      }
	    },
	    escKeyDown: function escKeyDown(event) {
	      if (_events2.default.keyCodes.esc === event.keyCode) {
	        this.open = false;
	      }
	    }
	  }
	};

/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = "\n<div v-show=\"open\" transition=\"dialog\" :style=\"mRootStyle\">\n  <div :style=\"mContentStyle\" @click=\"clickAway($event)\">\n    <div :style=\"mWrapperStyle\">\n      <h3 v-if=\"title\">{{title}}</h3>\n      <slot name=\"dialogBody\"></slot>\n      <div :style=\"mActionStyle\">\n        <slot name=\"dialogAction\"></slot>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(154)
	__vue_script__ = __webpack_require__(156)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/DatePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(192)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./DatePicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(155);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(46)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DatePicker.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DatePicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.leftSlide-transition,\n.rightSlide-transition {\n  opacity: 1;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.leftSlide-enter {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  opacity: 0;\n}\n.leftSlide-leave {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  opacity: 0;\n}\n.rightSlide-enter {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  opacity: 0;\n}\n.rightSlide-leave {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  opacity: 0;\n}\n", ""]);

	// exports


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(157);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _keys = __webpack_require__(177);

	var _keys2 = _interopRequireDefault(_keys);

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _TextField = __webpack_require__(101);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _Dialog = __webpack_require__(148);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _BaseButton = __webpack_require__(2);

	var _BaseButton2 = _interopRequireDefault(_BaseButton);

	__webpack_require__(140);

	var _DateMonth = __webpack_require__(181);

	var _DateMonth2 = _interopRequireDefault(_DateMonth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {},
	      textField: {},
	      dialog: {
	        width: '320px',
	        padding: '0',
	        fontSize: '12px',
	        lineHeight: '36px'
	      },
	      calender: {
	        transition: _transitions2.default.easeOut(),
	        height: '216px',
	        position: 'relative',
	        overflow: 'hidden'
	      },
	      calInner: {
	        willChange: 'transform, opacity',
	        boxSizing: 'border-box',
	        padding: '16px 14px 0',
	        position: 'absolute',
	        transition: _transitions2.default.easeOut(),
	        top: '0',
	        left: '0',
	        width: '100%',
	        height: '100%'
	      },
	      rowStyle: {
	        height: '40px',
	        textAlign: 'center'
	      },
	      colStyle: {
	        display: 'inline-block',
	        width: '40px',
	        padding: '4px 2px',
	        boxSizing: 'border-box',
	        cursor: 'pointer'
	      },
	      day: {
	        borderRadius: '50%',
	        position: 'absolute',
	        height: '36px',
	        width: '36px',
	        opacity: '0',
	        transform: 'scale(0)',
	        transition: _transitions2.default.easeOut('200ms', ['transform', 'opacity'], '')
	      },
	      number: {
	        position: 'relative'
	      },
	      weekRowStyle: {
	        padding: '0 14px',
	        lineHeight: '12px',
	        opacity: '0.5',
	        height: '12px',
	        fontWeight: '500',
	        textAlign: 'center'
	      },
	      weekColStyle: {
	        width: '40px',
	        display: 'inline-block'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      mTextStyle: (0, _assign2.default)(styles.textField, this.textFieldStyle),
	      mDialogStyle: (0, _assign2.default)(styles.dialog, this.dialogStyle),
	      rowStyle: styles.rowStyle,
	      colStyle: styles.colStyle,
	      weekRowStyle: styles.weekRowStyle,
	      weekColStyle: styles.weekColStyle,
	      calInnerStyle: styles.calInner,
	      calendarStyle: styles.calender,
	      dayStyle: styles.day,
	      numStyle: styles.number,
	      weekShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	      calenders: [],
	      prevSelect: null,
	      open: false,
	      dateSelected: new Date(),
	      selectedString: null
	    };
	  },
	  props: {
	    styleObj: Object,
	    textFieldStyle: Object,
	    dialogStyle: Object
	  },
	  components: {
	    TextField: _TextField2.default,
	    BaseButton: _BaseButton2.default,
	    DateMonth: _DateMonth2.default,
	    Dialog: _Dialog2.default
	  },
	  beforeCompile: function beforeCompile() {
	    var _this = this;

	    this.$on('back', function (date) {
	      _this.handleSlide(date, 'leftSlide', true);
	    });
	    this.$on('forward', function (date) {
	      _this.handleSlide(date, 'rightSlide', true);
	    });
	    this.handleSlide(new Date(), 'leftSlide');
	  },
	  methods: {
	    handleSlide: function handleSlide(date, direction, shift) {
	      this.calenders.push({ days: this.getMonthDays(date), direction: direction });
	      if (shift) {
	        this.calenders.shift();
	      }
	    },
	    getDaysInMonth: function getDaysInMonth(date) {
	      var resultDate = new Date(date.getFullYear(), date.getMonth(), 1);
	      resultDate.setMonth(resultDate.getMonth() + 1);
	      resultDate.setDate(resultDate.getDate() - 1);
	      return resultDate;
	    },
	    getMonthDays: function getMonthDays(d) {

	      var days = [];
	      var firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
	      var dayOfWeek = Array(firstDay.getDay()).fill('');
	      var lastDate = this.getDaysInMonth(d);
	      var emptyDays = 6 - lastDate.getDay();

	      var daysOfMonth = dayOfWeek.concat((0, _keys2.default)([].concat((0, _toConsumableArray3.default)(Array(lastDate.getDate() + 1)))).slice(1));
	      daysOfMonth = daysOfMonth.concat(Array(emptyDays).fill(''));
	      var index = 0;
	      while (index < daysOfMonth.length) {
	        index += 7;
	        days.push(daysOfMonth.slice(index - 7, index));
	      }
	      this.dateSelected = d;
	      this.calendarStyle.height = days.length === 5 ? '216px' : '256px';
	      return days;
	    },
	    handleClick: function handleClick(event) {
	      var node;
	      var parent = event.target.closest('[key]');
	      if (this.prevSelect) {
	        this.prevSelect.style.backgroundColor = '';
	        this.prevSelect.opacity = '0';
	        this.prevSelect.style.transform = 'scale(0)';
	      }

	      if (node = parent.children[0]) {
	        node.style.backgroundColor = 'rgb(126, 116, 230)';
	        node.style.transform = 'scale(1)';
	        node.style.opacity = '1';
	        this.prevSelect = node;
	        this.dateSelected.setDate(parent.textContent.trim());
	      }
	    },
	    handleFocus: function handleFocus() {
	      this.open = true;
	    },
	    handleCancel: function handleCancel() {
	      this.open = false;
	    },
	    handleOK: function handleOK() {
	      this.open = false;
	      this.selectedString = this.dateSelected.toLocaleDateString();
	    }
	  }
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(158);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(159), __esModule: true };

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(160);
	__webpack_require__(170);
	module.exports = __webpack_require__(9).Array.from;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(161)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(162)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(32)
	  , defined   = __webpack_require__(29);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(163)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(164)
	  , hide           = __webpack_require__(12)
	  , has            = __webpack_require__(25)
	  , Iterators      = __webpack_require__(165)
	  , $iterCreate    = __webpack_require__(166)
	  , setToStringTag = __webpack_require__(167)
	  , getPrototypeOf = __webpack_require__(169)
	  , ITERATOR       = __webpack_require__(168)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12);

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(51)
	  , descriptor     = __webpack_require__(21)
	  , setToStringTag = __webpack_require__(167)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(12)(IteratorPrototype, __webpack_require__(168)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(13).f
	  , has = __webpack_require__(25)
	  , TAG = __webpack_require__(168)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(35)('wks')
	  , uid        = __webpack_require__(36)
	  , Symbol     = __webpack_require__(8).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(25)
	  , toObject    = __webpack_require__(40)
	  , IE_PROTO    = __webpack_require__(34)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(10)
	  , $export        = __webpack_require__(7)
	  , toObject       = __webpack_require__(40)
	  , call           = __webpack_require__(171)
	  , isArrayIter    = __webpack_require__(172)
	  , toLength       = __webpack_require__(31)
	  , createProperty = __webpack_require__(173)
	  , getIterFn      = __webpack_require__(174);

	$export($export.S + $export.F * !__webpack_require__(176)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(14);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(165)
	  , ITERATOR   = __webpack_require__(168)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(13)
	  , createDesc      = __webpack_require__(21);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(175)
	  , ITERATOR  = __webpack_require__(168)('iterator')
	  , Iterators = __webpack_require__(165);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(28)
	  , TAG = __webpack_require__(168)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(168)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(178), __esModule: true };

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(179);
	module.exports = __webpack_require__(9).Object.keys;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(40)
	  , $keys    = __webpack_require__(23);

	__webpack_require__(180)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(7)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(18);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(182)
	__vue_script__ = __webpack_require__(184)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/DateMonth.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(191)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./DateMonth.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(183);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(46)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DateMonth.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DateMonth.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.upSlide-transition,\n.downSlide-transition {\n  opacity: 1;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n.upSlide-enter {\n  opacity: 0;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n.upSlide-leave {\n  opacity: 0;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n}\n\n.downSlide-enter {\n  opacity: 0;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n}\n.downSlide-leave {\n  opacity: 0;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n\n.leftArrow:after,\n.leftArrow:before {\n  content: ' ';\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: 20px;\n  border: solid transparent;\n}\n\n.rightArrow:after,\n.rightArrow:before {\n  content: ' ';\n  position: absolute;\n  height: 0;\n  width: 0;\n  border: solid transparent;\n  left: 20px;\n}\n\n.leftArrow:after {\n  border-right-color: white;\n  border-width: 9px;\n  top: 15px;\n}\n.leftArrow:before {\n  border-right-color: black;\n  border-width: 12px;\n  top: 12px;\n}\n.rightArrow:after {\n  border-left-color: white;\n  border-width: 9px;\n  top: 15px;\n}\n.rightArrow:before {\n  border-left-color: black;\n  border-width: 12px;\n  top: 12px;\n}\n", ""]);

	// exports


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	var _common = __webpack_require__(58);

	var _transitions = __webpack_require__(54);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _ArrowLeft = __webpack_require__(185);

	var _ArrowLeft2 = _interopRequireDefault(_ArrowLeft);

	var _ArrowRight = __webpack_require__(188);

	var _ArrowRight2 = _interopRequireDefault(_ArrowRight);

	var _touchRipple = __webpack_require__(42);

	var _touchRipple2 = _interopRequireDefault(_touchRipple);

	var _util = __webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	exports.default = {
	  data: function data() {
	    var useFlexbox = (0, _util.isIE)() > 9;
	    var today = new Date();
	    var month = monthList[today.getMonth()];
	    var year = today.getFullYear();
	    var styles = {
	      root: {
	        display: useFlexbox ? '-ms-flexbox' : 'flex',
	        boxSizing: 'border-box',
	        justifyContent: 'space-between',
	        MsFlexPack: 'justify',
	        alignItems: 'center',
	        MsFlexAlign: 'center',
	        position: 'relative'
	      },
	      date: {
	        willChange: 'transform, opacity',
	        position: 'absolute',
	        top: '6px',
	        left: '135px',
	        textAlign: 'center',
	        transition: _transitions2.default.easeOut()
	      },
	      arrow: {
	        position: 'relative',
	        width: '48px',
	        height: '48px',
	        cursor: 'pointer'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      dateStyle: styles.date,
	      arrowStyle: styles.arrow,
	      curYear: year,
	      curMonth: today.getMonth(),
	      curDate: month + ' ' + year,
	      dateSet: [{ date: month + ' ' + year, direction: 'upSlide' }]
	    };
	  },
	  props: {
	    styleObj: Object
	  },
	  components: {
	    touchRipple: _touchRipple2.default,
	    ArrowLeft: _ArrowLeft2.default,
	    ArrowRight: _ArrowRight2.default
	  },
	  methods: {
	    handleback: function handleback() {
	      this.dateSet.$set(this.dateSet.length - 1, { date: this.curDate, direction: 'upSlide' });
	      if (this.curMonth === 0) {
	        this.curMonth = 11;
	        this.curYear -= 1;
	      } else {
	        this.curMonth -= 1;
	      }
	      this.curDate = monthList[this.curMonth] + ' ' + this.curYear;
	      this.dateSet.push({ date: this.curDate, direction: 'upSlide' });
	      this.$dispatch('back', new Date(this.curYear, this.curMonth));
	      this.dateSet.shift();
	    },
	    handleforward: function handleforward() {
	      this.dateSet.$set(this.dateSet.length - 1, { date: this.curDate, direction: 'downSlide' });
	      if (this.curMonth === 11) {
	        this.curMonth = 0;
	        this.curYear += 1;
	      } else {
	        this.curMonth += 1;
	      }
	      this.curDate = monthList[this.curMonth] + ' ' + this.curYear;
	      this.dateSet.push({ date: this.curDate, direction: 'downSlide' });
	      this.$dispatch('forward', new Date(this.curYear, this.curMonth));
	      this.dateSet.shift();
	    },
	    showLast: function showLast(d, index) {
	      return this.dateSet[this.dateSet.length - 1] === d;
	    }
	  }
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(186)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/svg/ArrowLeft.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(187)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./ArrowLeft.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        position: 'absolute',
	        height: '24px',
	        width: '24px',
	        top: '12px',
	        left: '12px'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      viewBox: '0 0 24 24'
	    };
	  }

	};

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = "\n<svg :style=\"mRootStyle\" :viewBox='viewBox' >\n  <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n</svg>\n";

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(189)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/svg/ArrowRight.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(190)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./ArrowRight.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(4);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var styles = {
	      root: {
	        position: 'absolute',
	        height: '24px',
	        width: '24px',
	        top: '12px',
	        left: '12px'
	      }
	    };
	    return {
	      mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
	      viewBox: '0 0 24 24'
	    };
	  }

	};

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "\n<svg :style=\"mRootStyle\" :viewBox='viewBox'>\n  <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n</svg>\n";

/***/ },
/* 191 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\">\n  <div :style=\"arrowStyle\" @click=\"handleback\">\n    <arrow-left></arrow-left>\n    <touch-ripple :style-obj=\"zoom\" :center=\"true\"></touch-ripple>\n  </div>\n  <span v-for=\"d in dateSet\" :transition=\"d.direction\" :style=\"dateStyle\">{{d.date}}</span>\n  <div :style=\"arrowStyle\" @click=\"handleforward\">\n    <arrow-right></arrow-right>\n    <touch-ripple :style-obj=\"zoom\" :center=\"true\"></touch-ripple>\n  </div>\n</div>\n";

/***/ },
/* 192 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"mRootStyle\">\n  <text-field :style-obj=\"mTextStyle\" :on-focus=\"handleFocus\" :value=\"selectedString\"></text-field>\n  <dialog :open.sync=\"open\" :wrapper-style=\"mDialogStyle\" v-ref:dialog>\n    <div slot=\"dialogBody\">\n      <date-month></date-month>\n      <div :style=\"weekRowStyle\">\n        <div v-for=\"t in weekShort\" track-by=\"$index\" :style=\"weekColStyle\">\n          {{t}}\n        </div>\n      </div>\n      <div :style=\"calendarStyle\">\n        <div v-for=\"calender in calenders\" :transition=\"calender.direction\" :style=\"calInnerStyle\">\n          <div v-for=\"row in calender.days\" :style=\"rowStyle\">\n            <div key v-for=\"col in row\" track-by=\"$index\" :style=\"colStyle\" @click=\"handleClick($event)\">\n              <div :style=\"dayStyle\">\n              </div>\n              <span :style=\"numStyle\">{{col}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <base-button label=\"CANCEL\" slot=\"dialogAction\" :on-click=\"handleCancel\"></base-button>\n    <base-button label=\"OK\" slot=\"dialogAction\" :on-click=\"handleOK\"></base-button>\n  </dialog>\n</div>\n";

/***/ }
/******/ ])
});
;