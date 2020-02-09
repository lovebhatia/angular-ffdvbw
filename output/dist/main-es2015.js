(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin-layout/admin-layout.module": [
		"./src/app/admin-layout/admin-layout.module.ts",
		"admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-layout/admin-layout/admin-layout.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-layout/admin-layout/admin-layout.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <html>\n      <div>\n        <app-navbar></app-navbar>\n      </div>\n    \n      <!--<app-sidebar></app-sidebar>-->\n      <div>\n          <app-footer></app-footer>\n      </div>\n    </html>\n    \n\n\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-ques/admin-ques.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-ques/admin-ques.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\">\n  <div fxFlex=\"100\">\n    <mat-card class=\"example-card\">\n    <!--<mat-card-header>\n      <mat-card-title>Add Course</mat-card-title>\n    </mat-card-header>-->\n    <mat-card-content>\n\n      <div class=\"form-group\">\n        <label >Course</label>\n        <mat-select  class=\"form-control\"  id=\"course\"\n                required\n                [(ngModel)]=\"model1.courseName\" (selectionChange)=\"loadMasterValues(model1.courseName)\"  name=\"power\">\n                <mat-option value=\"-Select-\">--Select--</mat-option>\n          <mat-option *ngFor=\"let course of courselist\" [value]=\"course\">{{course}}</mat-option>\n        </mat-select>\n      </div>\n\n      <div class=\"form-group\">\n        \n          <label> Topic Name</label>\n          <mat-select  class=\"form-control\"  id=\"topic\"\n                  required\n                  [(ngModel)]=\"modelTopic.topicName\" (selectionChange)=\"loadMasterValues1(modelTopic.topicName)\"  name=\"topicName\">\n                  <mat-option value=\"-Select-\">--Select--</mat-option>\n            <mat-option *ngFor=\"let topic of topicList                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            \" [value]=\"topic\">{{topic}}</mat-option>\n          </mat-select>\n     \n     \n      </div>\n      <div class=\"form-group\">\n        <label>Sub Topic Name</label>\n        <mat-select class=\"form-control\"  id=\"subTopic\"\n                required\n                [(ngModel)]=\"modelSubTopic.subTopicName\" name=\"subTopic\">\n          <mat-option *ngFor=\"let subTopic of SubTopicList\" [value]=\"subTopic\">{{subTopic}}</mat-option>\n        </mat-select>\n      </div>\n\n      <div class=\"form-group\">\n            <label for=\"title\">Question</label>\n            <!--<input type=\"text\" class=\"form-control\" id=\"title\" required [(ngModel)]=\"modelQues.questions_name\" name=\"title\">-->\n            <ejs-richtexteditor id='iframeRTE1' [iframeSettings]='iframe' #rte [insertImageSettings]='imageSetting' [(ngModel)]=\"modelQues.questions_name\"  (toolbarClick)='onToolbarClick($event)'  [toolbarSettings]='tools'></ejs-richtexteditor>\n\n          \n      </div>\n\n      <div>\n        <label for=\"url\">Answer</label>\n            \n            <ejs-richtexteditor id='iframeRTE2'  #rte [insertImageSettings]='imageSetting' [(ngModel)]=\"modelans.ans\"  (toolbarClick)='onToolbarClick($event)'  [toolbarSettings]='tools'></ejs-richtexteditor>\n           \n          \n  </div>\n  <!--\n <ckeditor [(ngModel)]=\"ans\" (ready)=\"onReady($event)\" [editor]=\"Editor\"></ckeditor>\n -->\n\n<div class=\"container\">\n        \n            \n          \n</div>\n{{modelans.ans}}\n        \n        <div *ngIf=\"selectedFile\" class=\"img-preview-container\">\n        <div class=\"img-preview{{selectedFile.status === 'fail' ? '-error' : ''}}\"\n         [ngStyle]=\"{'background-image': 'url('+ selectedFile.src + ')'}\">\n        </div>\n\n      <div *ngIf=\"selectedFile.pending\" class=\"img-loading-overlay\">\n        <div class=\"img-spinning-circle\"></div>\n      </div>\n\n      <div *ngIf=\"selectedFile.status === 'ok'\" class=\"alert alert-success\"> Image Uploaded Succesfuly!</div>\n        <div *ngIf=\"selectedFile.status === 'fail'\" class=\"alert alert-danger\"> Image Upload Failed!</div>\n      </div>\n      <h3>Angular 7 Image Preview before Upload:</h3>\n      <span style=\"color:red;\" *ngIf=\"message\">{{message}}</span>\n      <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n      <div>\n        <button type=\"submit photo\" (click)=processFile() class=\"btn btn-default\">Upload Photo</button>\n      </div>\n      <br/>\n      <button type=\"submit Answer\" (click)=addCourse(modelans.ans,modelSubTopic.subTopicName) class=\"btn btn-default\">Submit</button>\n\n\n      </mat-card-content>\n\n\n  <mat-card-actions>\n   \n  </mat-card-actions>\n</mat-card>\n</div>\n\n<!--\n<form #form='ngForm' (ngSubmit)=\"onSubmit(form)\">\n  <div class=\"form-group\"> \n      <ejs-richtexteditor #fromRTE [(value)]='value' required name=\"name\" (toolbarClick)='ontoolbarClick($event)' [(ngModel)]=\"modelans.ans\" ></ejs-richtexteditor>\n      <button type=\"submit\" ejs-button>Submit</button>\n  </div>\n</form>\n\n-->\n\n\n<!--<input type=\"text\" class=\"form-control\" id=\"url\" [(ngModel)]=\"modelans.ans\" name=\"url\">-->\n           <!-- <ckeditor [(ngModel)]=\"ans\" (ready)=\"onReady($event)\" [editor]=\"Editor\"></ckeditor>\n-->\n\n<!---\n</div>\n</div>\n  <div>\n    <h2>Model:</h2>\n    {{ currentBook }}\n </div>\n<div fxFlex style=\"margin-top: 40 ;\">\n<div style=\"margin-top: 40 ;\">\n\n</div>\n\n</div>\n\n\n\n</div>\n\n-->\n <!---\n          <div class=\"form-group\">\n            <label >Course</label>\n            <mat-select  class=\"form-control\"  id=\"course\"\n                    required\n                    [(ngModel)]=\"model1.courseName\" (selectionChange)=\"loadMasterValues(model1.courseName)\"  name=\"power\">\n                    <mat-option value=\"-Select-\">--Select--</mat-option>\n              <mat-option *ngFor=\"let course of courselist\" [value]=\"course\">{{course}}</mat-option>\n            </mat-select>\n          </div>\n\n          <div class=\"form-group\">\n            \n              <label> Topic Name</label>\n              <mat-select  class=\"form-control\"  id=\"topic\"\n                      required\n                      [(ngModel)]=\"modelTopic.topicName\" (selectionChange)=\"loadMasterValues1(modelTopic.topicName)\"  name=\"topicName\">\n                      <mat-option value=\"-Select-\">--Select--</mat-option>\n                <mat-option *ngFor=\"let topic of topicList                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            \" [value]=\"topic\">{{topic}}</mat-option>\n              </mat-select>\n         \n         \n          </div>\n          <div class=\"form-group\">\n            <label>Sub Topic Name</label>\n            <mat-select class=\"form-control\"  id=\"subTopic\"\n                    required\n                    [(ngModel)]=\"modelSubTopic.subTopicName\" name=\"subTopic\">\n              <mat-option *ngFor=\"let subTopic of SubTopicList\" [value]=\"subTopic\">{{subTopic}}</mat-option>\n            </mat-select>\n          </div>\n\n        -->\n\n        <!--\n<label class=\"image-upload-container btn btn-bwm\">\n  <span>Select Image</span>\n  <input #imageInput\n         type=\"file\"\n         accept=\"image/*\"\n         (change)=\"processFile(imageInput)\">\n</label>\n\n-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <!-- nav -->\n<!--<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n</nav>-->\n <router-outlet></router-outlet>\n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>footer works</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n     <span>Crack Interview</span>\n      <span class=\"example-spacer\"></span>\n      <div>\n        <a mat-button [routerLink]=\"['/java', '1']\"> Java </a>\n        <a mat-button  [routerLink]=\"['/react', '5']\"> React </a>\n        <a mat-button [routerLink]=\"['/angular', '2']\"> Angular 7 </a>\n      </div>\n      <button mat-button [matMenuTriggerFor]=\"appMenu\"><mat-icon>settings</mat-icon></button>\n      <mat-menu #appMenu=\"matMenu\">\n        <button mat-menu-item (click)=\"logout()\"> Log out </button>\n        <button mat-menu-item> Help </button>\n      </mat-menu>\n      </mat-toolbar-row>\n  </mat-toolbar>\n<div>\n<mat-sidenav-container class=\"example-container\">\n    <!--<mat-sidenav #sidenav class=\"example-sidenav\">\n     <mat-list class=\"list-nav\">\n      <mat-nav-list>\n        <mat-list-item *ngFor=\"let link of menuItems\">\n          <mat-icon>{{link.icon}}</mat-icon>\n            <a class=\"nav-link\" [routerLink]=\"[link.path]\">{{link.title}}</a>\n         </mat-list-item>\n      </mat-nav-list>\n    </mat-list>\n  </mat-sidenav>-->\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n  \n\n\n\n    <!--\n  <mat-menu #javaMenu=\"matMenu\">\n    <button mat-menu-item [routerLink]=\"'/user-profile'\"> 0-2yrs </button>\n    <button mat-menu-item> 2-4yrs </button>\n  </mat-menu>\n  \n  <mat-menu #reactMenu=\"matMenu\">\n     <button mat-menu-item> 0-2yrs </button>\n    <button mat-menu-item> 2-4yrs </button>\n  </mat-menu>\n  <mat-menu #angularMenu=\"matMenu\">\n     <button mat-menu-item> 0-2yrs </button>\n    <button mat-menu-item> 2-4yrs </button>\n  </mat-menu>-->\n\n <!--<a mat-button [matMenuTriggerFor]=\"javaMenu\" [routerLink]=\"['/java', '3']\"> Java </a>-->\n    <!--<button mat-button (click)=\"sidenav.open ()\" ><mat-icon>menu</mat-icon></button>-->\n       <!-- <a mat-button  [routerLink]=\"'/java'\"> Java </a>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n<div fxLayout=\"row\">\n\t  <div fxFlex>First item in column</div>\n\t  <div fxFlex>First item in column</div>\n\t  <div fxFlex>First item in column</div>\n</div>\n\n<div fxLayout=\"row\">\n  <div fxFlex=\"20\">\n<mat-accordion  *ngFor=\"let course of courses first as isFirst\">\n<mat-expansion-panel\n *ngFor=\"let topic of course.topics \"\n beforePanelClosed\n (opened)=\"panelOpenState = true\"\n (closed)=\"panelOpenState = false\"  [expanded]=\"isFirst\">\n\t\t\t\t  <mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t<a> {{topic.topicName}}</a>\n\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t<mat-panel-description >\n\t\t\t\t\t \n\t\t\t\t\t</mat-panel-description>\n\t\t\t\t  </mat-expansion-panel-header>\n\t\t\t\t  \t<p  *ngFor=\"let sub of topic.topicsSet\">\n\t\t\t\t\t  <a  [routerLink]=\"[course.courseName,course.courseId,topic.topicName,topic.topicId,sub.subTopicName,sub.subTopicId]\" name=\"vvv\" (click)=\"getsubTopicQuestion(sub.subTopicId)\" style=\"color:blue;text-align:center\">{{sub.subTopicName}}</a>\n\t\t\t\t\t</p>\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t\t</mat-expansion-panel>\n\t\t\t  </mat-accordion>\n\n\n</div>\n  <div fxFlex=\"1\"></div>\n  <!--\n  <div fxFlex=\"60\">\n  \n\t<mat-accordion >\n  <mat-expansion-panel *ngFor=\"let link of questions first as isFirst\" id =\"locate_{{link.question_id}}\" (opened)=\"getAnswer(link.question_id)\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n\t\t<p>{{link.questions_name}}</p>\n\n      </mat-panel-title>\n      <mat-panel-description>\n        \n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\t\n    <div  style=\"color:blue\">\n\t  <div innerHTML=\"{{answers}}\"></div>\n\t\t</div>\n\t  \n  </mat-expansion-panel>\n</mat-accordion>\n\n\t</div>\n\t<div fxFlex=\"1\"></div>\n\t <div fxFlex>\n\t<mat-card>Simple card</mat-card>\n\t</div>\n\t\n</div>\n<div fxLayout=\"column\">\n  <div fxFlex>First item in column</div>\n\t\n\n</div>\n</html>\n-->\n\n\n\n<div fxFlex=\"60\">\n\n<mat-accordion>\n\n\n  <mat-expansion-panel *ngFor=\"let link of questions first as isFirst\" id =\"locate_{{link.question_id}}\" (opened)=\"getAnswer(link.question_id)\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n\t\t<p>{{link.questions_name}}</p>\n\n      </mat-panel-title>\n      <mat-panel-description>\n        \n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\t\n    <div  style=\"color:blue\">\n\t  <div innerHTML=\"{{answers}}\"></div>\n\t\t</div>\n\t  \n  </mat-expansion-panel>\n\n\n\n  <mat-expansion-panel id=\"panel-1\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n\n\n  </mat-accordion>\n</div>\n<div fxFlex=\"1\"></div>\n <div fxFlex>\n<mat-card>Simple card</mat-card>\n</div>\n\n</div>\n<div fxLayout=\"column\">\n<div fxFlex>First item in column</div>\n</div>\n\n\n<!--\n   <mat-expansion-panel id=\"panel-1\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n\n  <mat-expansion-panel id=\"panel-2\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel> \n\n   <mat-expansion-panel id=\"panel-3\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-4\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-5\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-6\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-7\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-8\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-9\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-21\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-22\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-2\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-23\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-24\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-25\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-26\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-27\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-29\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-29\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-30\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-2\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n   <mat-expansion-panel id=\"panel-31\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n  <div>\n   <mat-expansion-panel id=\"locate_18\">\n\n    <mat-expansion-panel-header>\n\n      <mat-panel-title>Lorem ipsum</mat-panel-title>\n\n    </mat-expansion-panel-header>\n\n    <p>\n\n      Lorem ipsum dolor sit amet,\n\n      consetetur sadipscing elitr,\n\n      sed diam nonumy eirmod tempor invidunt...\n\n    </p>\n\n  </mat-expansion-panel>\n  -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6 offset-md-3 mt-5\">\n  <div class=\"alert alert-info\">\n      Username: test<br />\n      Password: test\n  </div>\n  <div class=\"card\">\n      <h4 class=\"card-header\">Angular 8 JWT Login Example</h4>\n      <div class=\"card-body\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n                  <label for=\"username\">Username</label>\n                  <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                  <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                  </div>\n              </div>\n              <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                  <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                  Login\n              </button>\n              <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n\n\n\n\n\n\n          </form>\n      </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(loginPayload) {
        const headers = {
            'Authorization': 'Basic ' + btoa('testjwtclientid:XY7kmzoNzl100'),
            'Content-type': 'application/x-www-form-urlencoded'
        };
        console.log(loginPayload + " " + headers);
        return this.http.post('http://localhost:8083/' + 'oauth/token', loginPayload, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            if (user && user.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log(user.access_token);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
        }));
    }
    login1(username, password) {
        return this.http.post(`/users/authenticate`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthenticationService);

/*

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";


import { User } from '../_models/user';
import { config } from '../config';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../Services/auth.constant';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    static AUTH_TOKEN = 'http://localhost:8083/oauth/token';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    /*login(username: string, password: string) {
        return this.http.post<any>(`localhost:8083/oauth/token`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }*/
/*
    login(loginPayload) {
        const headers = {
          'Authorization': 'Basic ' + btoa('testjwtclientid:XY7kmzoNzl100'),
          'Content-type': 'application/x-www-form-urlencoded'
        }

        console.log(loginPayload +" "+headers);

        return this.http.post('http://localhost:8083/' + 'oauth/token', loginPayload, {headers})
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
       
      }


    




     logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

       
}

export interface AuthToken {
    access_token: string,
    token_type: string,
    expires_in: number,
    refresh_token: string,
    scope: Array<string>
}























 /*login(username:string, password:string) {
        return this.http.post<{access_token:  string}>('http://www.your-server.com/auth/login', {username, password}).pipe(tap(res => {
        localStorage.setItem('access_token', res.access_token);
    }))
    }*/
/* login(username: string, password: string) {
     const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;
 
     const headers = new HttpHeaders);
     headers.append('Content-Type', 'application/x-www-form-urlencoded');
     headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));
 
     const request = this.evidenceService.get().pipe(
         map((res) => res.data)),
         catchError(error => Observable.of(null))
       );
       




     return this.http.post(AuthenticationService.AUTH_TOKEN, body, {headers})
       .pipe(map((res)))
   }



   login1(username: string, password: string) {

     this.getAccessToken(username, password).subscribe(
         response => {
             // ...any login logic- cookies and all the good stuff goes here
            // this.isLoggedIn = true;
             console.log(response);
         },
         error => {
             //this.isLoggedIn = false;
             console.log(error);
         });
 }





 getAccessToken(username: string, password: string): Observable<AuthToken> {

     let oauth2_token_endpoint = 'localhost:8083/oauth/token';
     let oauth2_client_id = 'testjwtclientid';
     let oauth2_client_secret = 'XY7kmzoNzl100';
  
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              // 'Authorization': 'Basic ' + btoa(oauth2_client_id + ':' + oauth2_client_secret)
          })
      };
  
  
      const body = 'client_id={0}&client_secret={1}&grant_type=password&username={2}&password={3}'
          .replace('{0}', oauth2_client_id)
          .replace('{1}', oauth2_client_secret)
          .replace('{2}', username)
          .replace('{3}', password);
  
      // console.log(body);
  
      return this.http.post<AuthToken>(oauth2_token_endpoint, body, httpOptions);
  }

 */ 


/***/ }),

/***/ "./src/app/Services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/users`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");




let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add auth header with jwt if user is logged in and request is to api url
        const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
        const isApiUrl = request.url.startsWith(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], JwtInterceptor);



/***/ }),

/***/ "./src/app/admin-layout/admin-layout/admin-layout.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin-layout/admin-layout/admin-layout.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQvYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin-layout/admin-layout/admin-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin-layout/admin-layout/admin-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");




let AdminLayoutComponent = class AdminLayoutComponent {
    constructor(authenticationService, userService) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }
    ngOnInit() {
    }
};
AdminLayoutComponent.ctorParameters = () => [
    { type: src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-layout/admin-layout/admin-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/admin-layout/admin-layout/admin-layout.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
        src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], AdminLayoutComponent);



/***/ }),

/***/ "./src/app/admin-ques/UploadAdapter.ts":
/*!*********************************************!*\
  !*** ./src/app/admin-ques/UploadAdapter.ts ***!
  \*********************************************/
/*! exports provided: UploadAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadAdapter", function() { return UploadAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ImageSnippet {
    constructor(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
}
/*
export class UploadAdapterTest{
  selectedFile: ImageSnippet;
  private imageService : ImageService

    private http : HttpClient
    constructor(
      private loader
      ) {
    }
  
    
    private onSuccess() {
      this.selectedFile.pending = false;
      this.selectedFile.status = 'ok';
    }
  
    private onError() {
      this.selectedFile.pending = false;
      this.selectedFile.status = 'fail';
      this.selectedFile.src = '';
    }


  //the uploadFile method use to upload image to your server
  uploadFile(file,url?:string){
    let name = '';
    url='your api';
    let formData:FormData = new FormData();
    let headers = new Headers();
    name = file.name;
    formData.append('attachment', file, name);
    const dotIndex = name.lastIndexOf('.');
    const fileName  = dotIndex>0?name.substring(0,dotIndex):name;
    formData.append('name', fileName);
    //formData.append('source', user);
  
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    console.log('formData',formData);
    let params = new HttpParams();
    const options = {
        params: params,
        reportProgress: true,
    };
  //http post return an observer
  //so I need to convert to Promise
return this.http.post('http://localhost:8083/crack/uploadFile/1',formData).toPromise;
  }
  //implement the upload
  
  upload() {
     let upload = new Promise((resolve, reject)=>{
        this.loader['file'].then(
            (data)=>{
                this.uploadFile(data)
                .subscribe(
                    (result)=>{

                      resolve({ default: result['attachment'] })
                    },
                    (error)=>{
                        reject(data.msg);
                    }
                );
            }
        );
      });
      



  }


    abort() {
      console.log("abort")
  }
  }
  */
class UploadAdapter {
    constructor(loader) {
        this.loader = loader;
        console.log(this.readThis(loader.file));
    }
    upload() {
        //"data:image/png;base64,"+ btoa(binaryString) 
        return this.readThis(this.loader.file);
    }
    readThis(file) {
        console.log(file);
        let imagePromise = new Promise((resolve, reject) => {
            this.loader['file'].then((data) => {
                var myReader = new FileReader();
                let image = myReader.result;
                console.log(image);
                return { 'http://localhost:8083/crack/uploadFile/1': "data:image/png;base64," + data };
                resolve();
            });
        });
        return imagePromise;
    }
}


/***/ }),

/***/ "./src/app/admin-ques/admin-ques.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin-ques/admin-ques.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FkbWluLXF1ZXMvYWRtaW4tcXVlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin-ques/admin-ques.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-ques/admin-ques.component.ts ***!
  \****************************************************/
/*! exports provided: AdminQuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminQuesComponent", function() { return AdminQuesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _models_ans_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/ans.model */ "./src/app/models/ans.model.ts");
/* harmony import */ var _models_ques_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/ques.model */ "./src/app/models/ques.model.ts");
/* harmony import */ var _models_topic_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/topic.model */ "./src/app/models/topic.model.ts");
/* harmony import */ var _models_course_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/course.model */ "./src/app/models/course.model.ts");
/* harmony import */ var _models_subTopic_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/subTopic.model */ "./src/app/models/subTopic.model.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _admin_ques_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-ques.service */ "./src/app/admin-ques/admin-ques.service.ts");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image.service */ "./src/app/admin-ques/image.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _UploadAdapter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./UploadAdapter */ "./src/app/admin-ques/UploadAdapter.ts");
















let AdminQuesComponent = class AdminQuesComponent {
    constructor(formBuilder, route, router, authenticationService, quesAddService, imageService, http) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.quesAddService = quesAddService;
        this.imageService = imageService;
        this.http = http;
        this.value = '<p>The RichTextEditor triggers events based on its actions. </p>';
        this.loading = false;
        this.submitted = false;
        this.groupTopics = [];
        this.groupSubTopics = [];
        this.groupQuestions = [];
        this.groupAnswers = [];
        this.courselist = [];
        this.topicList = [];
        this.SubTopicList = [];
        this.error = '';
        this.ans = '';
        this.url = _config__WEBPACK_IMPORTED_MODULE_10__["config"].apiUrl;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_13__;
        this.model = {
            editorData: '<p>Hello, world!</p>'
        };
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.modelans = new _models_ans_model__WEBPACK_IMPORTED_MODULE_5__["Answers"]('');
        this.modelQues = new _models_ques_model__WEBPACK_IMPORTED_MODULE_6__["Question"]('', this.groupAnswers);
        this.modelSubTopic = new _models_subTopic_model__WEBPACK_IMPORTED_MODULE_9__["subTopics"]('', this.groupQuestions);
        this.modelTopic = new _models_topic_model__WEBPACK_IMPORTED_MODULE_7__["Topic"]('', this.groupSubTopics);
        this.model1 = new _models_course_model__WEBPACK_IMPORTED_MODULE_8__["Course"]('', this.groupTopics);
        this.imageSetting = {
            path: "http://localhost:8083/crack/uploadFile/1",
        };
        this.tools = {
            items: [
                'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
                'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
                'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
                'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen'
            ]
        };
        this.iframe = {
            enable: true,
        };
    }
    get currentBook() {
        return JSON.stringify(this.model1);
    }
    onReady(eventData) {
        eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
            console.log(btoa(loader.file));
            return new _UploadAdapter__WEBPACK_IMPORTED_MODULE_15__["UploadAdapter"](loader);
        };
    }
    preview(files) {
        if (files.length === 0)
            return;
        this.filetoUpload = files[0];
        var filename = files[0].name;
        this.urlMake = '<html><br><img src=' + "'" + this.url + 'downloadFile/' + filename + "'" + ' class="rounded"  width="100%" height="100%"></html></br>';
        this.modelans.ans = this.modelans.ans + this.urlMake;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
        };
    }
    processFile() {
        // const file: File = imageInput.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            this.selectedFile = new ImageSnippet(event.target.result, this.filetoUpload);
            this.selectedFile.pending = true;
            this.imageService.uploadImage(this.selectedFile.file).subscribe((res) => {
                this.onSuccess();
            }, (err) => {
                this.onError();
            });
        });
        reader.readAsDataURL(this.filetoUpload);
    }
    onSuccess() {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'ok';
    }
    onError() {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'fail';
        this.selectedFile.src = '';
    }
    get currentBook1() {
        return JSON.stringify(this.modelSubTopic);
    }
    loadMasterValues(value) {
        this.quesAddService.getTopics(value).subscribe(data => {
            console.log(data);
            this.topicList = data;
            console.log(this.topicList);
        });
        //return this.topicList;
    }
    loadMasterValues1(value) {
        this.quesAddService.getSubTopics(value).subscribe(data => {
            console.log(data);
            this.SubTopicList = data;
            console.log(this.SubTopicList);
        });
        //return this.topicList;
    }
    ngOnInit() {
        this.quesAddService.getCourses().subscribe(courseData => {
            console.log(courseData);
            this.courselist = courseData;
            console.log(courseData);
        });
    }
    addCourse(value, dataAns) {
        let replaceVal = "<pre style='background: #f4f4f4;border: 1px solid #ddd;border-left: 3px solid #f36d33;color: #666;page-break-inside: avoid;font-family: monospace;font-size: 15px;line-height: 1.6;margin-bottom: 1.6em;width: 100%;overflow: auto;padding: 1em 1.5em;display: block;word-wrap: break-word;'></pre>";
        dataAns = dataAns.replace(/<pre/g, replaceVal);
        this.modelans.ans = dataAns.replace(/"/g, "'");
        this.groupAnswers.push(this.modelans);
        this.groupQuestions.push(this.modelQues);
        this.groupSubTopics.push(this.modelSubTopic);
        this.groupTopics.push(this.modelTopic);
        console.log(JSON.stringify(this.modelTopic));
        this.quesAddService.addQuestions(value, this.modelSubTopic);
    }
    addQuestion(value) {
        //this.modelans.ans=this.modelans.ans.replace(/"/g, "'");
        this.groupAnswers.push(this.modelans);
        this.groupQuestions.push(this.modelQues);
        this.quesAddService.addQuestions1(this.modelQues);
        alert("Your question and answer has been added");
        //window.location.reload();
        this.modelQues.questions_name = '';
        this.modelans.ans = '';
        this.modelQues = null;
    }
};
AdminQuesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _admin_ques_service__WEBPACK_IMPORTED_MODULE_11__["AdminQuesService"] },
    { type: _image_service__WEBPACK_IMPORTED_MODULE_12__["ImageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"] }
];
AdminQuesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-ques',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-ques.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-ques/admin-ques.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-ques.component.scss */ "./src/app/admin-ques/admin-ques.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _admin_ques_service__WEBPACK_IMPORTED_MODULE_11__["AdminQuesService"],
        _image_service__WEBPACK_IMPORTED_MODULE_12__["ImageService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]])
], AdminQuesComponent);

class ImageSnippet {
    constructor(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
}
/*




class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}

*/


/***/ }),

/***/ "./src/app/admin-ques/admin-ques.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin-ques/admin-ques.service.ts ***!
  \**************************************************/
/*! exports provided: AdminQuesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminQuesService", function() { return AdminQuesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");




let AdminQuesService = class AdminQuesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = _config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl;
    }
    getCourses() {
        return this.httpClient.get(this.url + 'courses');
    }
    getTopics(value) {
        return this.httpClient.get(this.url + 'topics/' + value.split(',')[1]);
    }
    getSubTopics(value) {
        return this.httpClient.get(this.url + 'subTopics/' + value.split(',')[1]);
    }
    addQuestions(value, data) {
        return this.httpClient.post(this.url + 'subtopic/' + value.split(',')[1] + '/question', data).
            subscribe(res => console.log(res));
    }
    addQuestions1(data) {
        console.log(JSON.stringify(data));
        return this.httpClient.post(this.url + 'questions', data)
            .subscribe(res => console.log(res));
    }
};
AdminQuesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminQuesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AdminQuesService);



/***/ }),

/***/ "./src/app/admin-ques/image.service.ts":
/*!*********************************************!*\
  !*** ./src/app/admin-ques/image.service.ts ***!
  \*********************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ImageService = class ImageService {
    constructor(httpClint) {
        this.httpClint = httpClint;
    }
    uploadImage(image) {
        const formData = new FormData();
        formData.append('file', image);
        console.log(formData);
        return this.httpClint.post('http://localhost:8083/crack/uploadFile/1', formData);
    }
};
ImageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ImageService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_layout_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-layout/admin-layout/admin-layout.component */ "./src/app/admin-layout/admin-layout/admin-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_ques_admin_ques_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-ques/admin-ques.component */ "./src/app/admin-ques/admin-ques.component.ts");







const routes = [
    /*{
     path: '',
     redirectTo : 'dashboard',
     pathMatch : 'full'
 
   },
   */
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: '',
        component: _admin_layout_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './admin-layout/admin-layout.module#AdminLayoutModule'
            }],
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'adminDash',
        component: _admin_ques_admin_ques_component__WEBPACK_IMPORTED_MODULE_6__["AdminQuesComponent"],
    },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _admin_layout_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-layout/admin-layout/admin-layout.component */ "./src/app/admin-layout/admin-layout/admin-layout.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_ques_admin_ques_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-ques/admin-ques.component */ "./src/app/admin-ques/admin-ques.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ "./node_modules/@syncfusion/ej2-angular-richtexteditor/@syncfusion/ej2-angular-richtexteditor.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");










// tslint:disable-next-line: max-line-length











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _admin_layout_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__["AdminLayoutComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
            _admin_ques_admin_ques_component__WEBPACK_IMPORTED_MODULE_16__["AdminQuesComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
            _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_18__["RichTextEditorAllModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"], multi: true
            },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");







// tslint:disable-next-line: max-line-length



let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
        ],
        exports: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/navbar/nav-api.service.ts":
/*!******************************************************!*\
  !*** ./src/app/components/navbar/nav-api.service.ts ***!
  \******************************************************/
/*! exports provided: NavApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavApiService", function() { return NavApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let NavApiService = class NavApiService {
    constructor(http) {
        this.http = http;
        this.api_key = '3998abc8b6774dd7aa4ef48ebbce74eb';
        this.apiUrl = "http://localhost:8083/getAllQues";
    }
    getQuestions() {
        return this.http.get('//localhost:8083/crack/course/1');
        //.map(response => response.json());
    }
    /*getQuestions()
    {
        return this.http.get(this.apiUrl).map((res : Response) => res.json)
    }*/
    initSources() {
        //return this.http.get('//localhost:8083/');
    }
    initArticles() {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
    }
    getArticlesByID(source) {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
    }
};
NavApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NavApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], NavApiService);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.example-card {\n  margin-top: 4px;\n}\n\n.example-header-image {\n  background-size: cover;\n}\n\n.title {\n  font-weight: bold;\n}\n\n.img-article {\n  height: 350px;\n}\n\n.action-buttons {\n  text-align: center;\n}\n\n.example-container {\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(111, 111, 111, 0.5);\n}\n\n.example-sidenav-content {\n  display: -webkit-box;\n  display: flex;\n  height: 75%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n\n.source-name {\n  margin-left: 5px;\n}\n\n.list-item:hover {\n  cursor: pointer;\n  background-color: #3f51b5;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xvdmUvRG9jdW1lbnRzL2FuZ3VsYXJwcm9qZWN0cy9DcmFja0ludGVydmlldy9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FDQ0Y7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoiLi4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmV4YW1wbGUtY2FyZHtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50aXRsZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmltZy1hcnRpY2xle1xuICAgIGhlaWdodDogMzUwcHg7XG59XG5cbi5hY3Rpb24tYnV0dG9uc3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTExLCAxMTEsIDExMSwgMC41MCk7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc291cmNlLW5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OjVweDtcbn1cblxuLmxpc3QtaXRlbTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4iLCIuZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbWctYXJ0aWNsZSB7XG4gIGhlaWdodDogMzUwcHg7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTEsIDExMSwgMTExLCAwLjUpO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDc1JTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc291cmNlLW5hbWUge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubGlzdC1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavBar, ROUTES, NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return NavBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nav_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-api.service */ "./src/app/components/navbar/nav-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/authentication.service */ "./src/app/Services/authentication.service.ts");





class NavBar {
}
const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
    { path: '/java/:id', title: 'java', icon: 'content_paste', class: '' },
    { path: '/tyuser-pography', title: 'Typography', icon: 'library_books', class: '' },
    { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];
let NavbarComponent = class NavbarComponent {
    constructor(_Activatedroute, navService, authService, router) {
        this._Activatedroute = _Activatedroute;
        this.navService = navService;
        this.authService = authService;
        this.router = router;
        this.data = {};
    }
    ngOnInit() {
        this.sub = this._Activatedroute.paramMap.subscribe(params => {
            console.log(params);
            this.id = params.get('id');
            //let products=this._productService.getProducts();
            //this.product=products.find(p => p.productID==this.id);    
        });
        //this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.navService.getQuestions().subscribe(data => {
            console.log(data);
            this.menuItems = data;
        });
        this.navService.initArticles().subscribe(data => this.mArticles = data['articles']);
        //this.navService.initSources().subscribe(data=> this.mSources = data['sources']);
    }
    searchArticles(source) {
        console.log("selected source is: " + source);
        this.navService.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _nav_api_service__WEBPACK_IMPORTED_MODULE_1__["NavApiService"] },
    { type: src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _nav_api_service__WEBPACK_IMPORTED_MODULE_1__["NavApiService"],
        src_app_Services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xvdmUvRG9jdW1lbnRzL2FuZ3VsYXJwcm9qZWN0cy9DcmFja0ludGVydmlldy9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiLi4vc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7QUNFRiIsImZpbGUiOiIuLi9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufSIsIi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SidebarComponent = class SidebarComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: config, TOKEN_AUTH_USERNAME, TOKEN_AUTH_PASSWORD, TOKEN_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_AUTH_USERNAME", function() { return TOKEN_AUTH_USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_AUTH_PASSWORD", function() { return TOKEN_AUTH_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_NAME", function() { return TOKEN_NAME; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const config = {
    apiUrl1: 'http://localhost:8083/crack/',
    apiUrl: 'http://crackinterview-dev.us-west-2.elasticbeanstalk.com/crack/'
};
const TOKEN_AUTH_USERNAME = 'testjwtclientid';
const TOKEN_AUTH_PASSWORD = 'XY7kmzoNzl100';
const TOKEN_NAME = 'access_token';


/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
    }
    getAllQuestions() {
        return this.http.get('//localhost:8083/crack/questions');
    }
    getAllTopics() {
        //return this.http.get('//localhost:8083/crack/topics');
        return this.http.get('//localhost:8083/crack/course');
    }
    gettopicQuestion(topicid) {
        return this.http.get('http://localhost:8083/crack/topic/' + topicid);
    }
    getSubTopicQuestion(subTopicId) {
        alert(subTopicId);
        return this.http.get('http://localhost:8083/crack/subTopic/' + subTopicId);
    }
    getAnswer(quesId) {
        return this.http.get('http://localhost:8083/crack/question/' + quesId + '/answer');
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DashboardService);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(dashboardService, router) {
        // this.router=router;
        this.dashboardService = dashboardService;
        this.panelOpenState = false;
    }
    ngOnInit() {
        this.dashboardService.getAllTopics().subscribe(data => {
            console.log(data);
            this.courses = data;
        });
        this.dashboardService.getAllQuestions().subscribe(data => {
            console.log(data);
            this.questions = data;
        });
    }
    beforePanelClosed(panel) {
        panel.isExpanded = false;
        console.log("Panel going to close!");
    }
    beforePanelOpened(panel) {
        panel.isExpanded = true;
        console.log("Panel going to  open!");
    }
    afterPanelClosed() {
        console.log("Panel closed!");
    }
    afterPanelOpened() {
        console.log("Panel opened!");
    }
    ngAfterViewChecked() {
        this.scroll("panel-1");
    }
    scroll(id) {
        console.log(`scrolling to ${id}`);
        let el = document.getElementById(id);
        el.scrollIntoView();
    }
    expand() {
        alert('set');
        //this.isExpanded = !this.isExpanded;
    }
    gettopicQuestion(topicid) {
        this.dashboardService.gettopicQuestion(topicid).subscribe(data => {
            this.questions = data.questionsSet;
        });
    }
    getsubTopicQuestion(subTopicId) {
        this.dashboardService.getSubTopicQuestion(subTopicId).subscribe(data => {
            this.questions = data.questionsSet;
        });
    }
    getAnswer(questionid) {
        this.answers = '';
        this.dashboardService.getAnswer(questionid).subscribe(data => {
            if (data.length != 0) {
                this.answers = data[0].split(',')[1];
            }
            else {
                this.answers = '';
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
            .set('username', this.loginForm.controls.username.value)
            .set('password', this.loginForm.controls.password.value)
            .set('grant_type', 'password');
        this.authenticationService.login(body.toString()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            console.log(error);
        });
        /*.subscribe(data => {
          window.sessionStorage.setItem('token', JSON.stringify(data));
          console.log(window.sessionStorage.getItem('token'));
          
          this.router.navigate([this.returnUrl]);
        }, error => {
            alert(error.error.error_description)
        });

*/
    }
    onSubmit1() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
            .set('username', this.loginForm.controls.username.value)
            .set('password', this.loginForm.controls.password.value)
            .set('grant_type', 'password');
        this.loading = true;
        this.authenticationService.login(body.toString())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            this.loading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
], LoginComponent);

/*git add .
git commit -m "Add new Files"
git push --mirror https://github.com/lovebhatia/crack.git

/*import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../Services/authentication.service';
import { HttpParams } from '@angular/common/http';



@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

   
    onSubmit() {
        if (this.loginForm.invalid) {
          return;
        }
        const body = new HttpParams()
          .set('username', this.loginForm.controls.username.value)
          .set('password', this.loginForm.controls.password.value)
          .set('grant_type', 'password');
    
        this.authenticationService.login(body.toString()).subscribe(data => {
          window.sessionStorage.setItem('token', JSON.stringify(data));
          console.log(window.sessionStorage.getItem('token'));
         this.router.navigate(['/']);
                             //this.router.navigate([this.returnUrl]);

        }, error => {
            alert(error.error.error_description)
        });
      }




}
*/ 


/***/ }),

/***/ "./src/app/models/ans.model.ts":
/*!*************************************!*\
  !*** ./src/app/models/ans.model.ts ***!
  \*************************************/
/*! exports provided: Answers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answers", function() { return Answers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Answers {
    constructor(ans) {
        this.ans = ans;
    }
}


/***/ }),

/***/ "./src/app/models/course.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/course.model.ts ***!
  \****************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Course {
    constructor(courseName, topicData) {
        //this.courseId=courseId;
        this.courseName = courseName;
        this.topics = topicData;
    }
}


/***/ }),

/***/ "./src/app/models/ques.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/ques.model.ts ***!
  \**************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Question {
    constructor(questions_name, answers) {
        this.questions_name = questions_name;
        this.answers = answers;
    }
}


/***/ }),

/***/ "./src/app/models/subTopic.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/subTopic.model.ts ***!
  \******************************************/
/*! exports provided: subTopics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subTopics", function() { return subTopics; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class subTopics {
    constructor(subtopicName, questinSetData) {
        this.subTopicName = subtopicName;
        this.questionsSet = questinSetData;
    }
}


/***/ }),

/***/ "./src/app/models/topic.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/topic.model.ts ***!
  \***************************************/
/*! exports provided: Topic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic", function() { return Topic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Topic {
    constructor(topicName, topicSet) {
        this.topicName = topicName;
        this.topicsSet = topicSet;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/love/Documents/angularprojects/CrackInterview/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map