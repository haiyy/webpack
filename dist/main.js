/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

class Test{
    constructor(obj){
        this.warp=document.createElement("div");
        this.warp.className="warp";
        document.body.append(this.warp);
        this.cont=obj.cont;
        this.init();
    }
    init(){
        this.createtitle();
        this.addEvent();
    }
    createtitle(){
        var tit=document.createElement("div");
        tit.className="tit";
        [...this.cont].forEach((item,index)=>{
            var span=document.createElement("span");
            span.innerHTML=item.let;
            tit.append(span);
        });
         this.warp.append(tit);
        return tit;
    }
    createcontent(){
        var content=document.createElement("div");
        content.className="content";
        content.innerHTML=this.cont[0]["text"];
        this.warp.append(content);
        return content;
    }
    addEvent(){
        let span=document.querySelectorAll("span");
        let tent=this.createcontent();
        for(let i=0;i<span.length;i++){
            span[i].addEventListener("click",(event)=>{
               tent.innerHTML=this.cont[i]["text"];
            },false)
        }
    }
}
let test=new Test({
    cont:[{"id":1,"let":"水果","text":["草莓","香蕉","苹果"]},{"id":2,"let":"蔬菜","text":["豆角","茄子","土豆"]},{"id":3,"let":"零食","text":["饼干","虾条","薯片"]}]
})

/***/ })
/******/ ]);