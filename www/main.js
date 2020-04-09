(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adventure/adventure.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adventure/adventure.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head></head>\n\n<body>\n    <div class=\"bulk\">\n        <nav class=\"navbar fixed-top navbar-dark bg-dark\">\n            <span class=\"navbar-brand mb-0 h1 center\">Training</span>\n            <div *ngIf=\"!collapsed\" class=\"bg-dark navigation\">\n                <div *ngIf=\"!fighting\">\n                    <button routerLink=\"/home\" type=\"button\" class=\"btn btn-outline-primary\">Return Home</button>\n                    <button type=\"button\" class=\"btn btn-outline-secondary\">Training Adventure</button>\n                    <button routerLink=\"/combat\" type=\"button\" class=\"btn btn-outline-primary\">Combat Adventure</button>\n                    <button routerLink=\"/stats\" type=\"button\" class=\"btn btn-outline-primary\">View Stats</button>\n                </div>\n            </div>\n            <button (click)=\"collapsed = !collapsed\" class=\"navbar-toggler toggle-button btn btn-outline-primary\" type=\"button\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n        </nav>\n        <div class=\"content\">\n            <button class=\"exercisebtn btn btn-primary navbutton\" routerLink=\"/tracker\">New Tracked Expedition</button> <br>\n            <button class=\"exercisebtn btn btn-success navbutton\" routerLink=\"/forms\">Report Untracked Expedition</button> <br>\n        </div>\n    </div>\n    <nav class=\"navbar fixed-bottom navbar-dark bg-dark\">\n        <button type=\"button\" (click)=\"help()\" class=\"btn btn-outline-primary helpButton\">?</button>\n      </nav>\n</body>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/combat/combat.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/combat/combat.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head></head>\r\n\r\n<body>\r\n    <div class=\"bulk\">\r\n        <nav class=\"navbar fixed-top navbar-dark bg-dark\">\r\n            <span class=\"navbar-brand mb-0 h1 center\">Combat</span>\r\n            <div *ngIf=\"!collapsed\" class=\"bg-dark navigation\">\r\n                <div *ngIf=\"!fighting\">\r\n                    <button routerLink=\"/home\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"saveData()\">Return\r\n                        Home</button>\r\n                    <button routerLink=\"/adventure\" type=\"button\" class=\"btn btn-outline-primary\"\r\n                        (click)=\"saveData()\">Training Adventure</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-secondary\">Combat Adventure</button>\r\n                    <button routerLink=\"/stats\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"saveData()\">View\r\n                        Stats</button>\r\n                </div>\r\n            </div>\r\n            <button (click)=\"collapsed = !collapsed\" *ngIf=\"!fighting\" class=\"navbar-toggler toggle-button btn btn-outline-primary\" type=\"button\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <button (click)=\"collapsed = !collapsed\" *ngIf=\"fighting\" class=\"navbar-toggler toggle-button btn btn-outline-danger\" type=\"button\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n        </nav>\r\n        <div class=\"content\">\r\n            <div *ngIf=\"dailyAdventure\">\r\n                <div *ngIf=\"!fighting\" class=\"container\">\r\n                    <div class=\"row table\">\r\n                        <div class=\"col-7\">\r\n                            <p class=\"text-left stat\"><b>Current Health:</b></p>\r\n                        </div>\r\n                        <div class=\"col-3\">\r\n                            <img src=\"././assets/heart.png\" alt=\"heart\" class=\"icons align-right\">\r\n                        </div>\r\n                        <div class=\"col-2\">\r\n                            <h5 class=\"text-right stat\">{{yourHealth}}</h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row table\">\r\n                        <div class=\"col-7\">\r\n                            <p class=\"text-left stat\"><b>Current Energy:</b></p>\r\n                        </div>\r\n                        <div class=\"col-3\">\r\n                            <img src=\"././assets/energy.png\" alt=\"Energy\" class=\"icons align-right\">\r\n                        </div>\r\n                        <div class=\"col-2\">\r\n                            <h5 class=\"text-right stat\">{{yourEnergy}}</h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row table\">\r\n                        <div class=\"col-7\">\r\n                            <p class=\"text-left stat\"><b>Gold earned this expedition:</b></p>\r\n                        </div>\r\n                        <div class=\"col-3\">\r\n                            <img src=\"././assets/gold.png\" alt=\"Gold\" class=\"icons align-right\">\r\n                        </div>\r\n                        <div class=\"col-2 stat\">\r\n                            <h5 class=\"text-right\">{{earnedGold}}</h5>\r\n                        </div>\r\n                    </div>\r\n                    <button *ngIf=\"yourHealth > 0\" (click)=\"getEnemy()\" class=\"fightbtn btn btn-primary\">Get a new enemy\r\n                        to fight!</button>\r\n                </div>\r\n                <div *ngIf=\"fighting\">\r\n                    <div class=\"container\">\r\n                        <div class=\"\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12\">\r\n                                    <img src=\"././assets/background.png\" alt=\"background\" class=\"background\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\" *ngIf=\"pHit\">\r\n                                    <img src=\"././assets/M.png\" alt=\"Player\" class=\"yourIcon pHit align-left float\">\r\n                                </div>\r\n                                <div class=\"col-6\" *ngIf=\"!pHit\">\r\n                                    <img src=\"././assets/M.png\" alt=\"Player\" class=\"yourIcon align-left float\">\r\n                                </div>\r\n                                <div class=\"col-6\" *ngIf=\"eHit\">\r\n                                    <img src=\"././assets/{{enemyName}}.png\" alt=\"Enemy\" class=\"enemyIcon eHit align-right float\">\r\n                                </div>\r\n                                <div class=\"col-6\" *ngIf=\"!eHit\">\r\n                                    <img src=\"././assets/{{enemyName}}.png\" alt=\"Enemy\" class=\"enemyIcon  align-right float\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                                <h5 class=\"text-left\">You</h5>\r\n                                <p class=\"text-left\"><img src=\"././assets/heart.png\" alt=\"heart\" class=\"iconsmall\"> <b>{{yourHealth}}</b></p>\r\n                                <p class=\"text-left\"><img src=\"././assets/energy.png\" alt=\"Energy\" class=\"iconsmall\"> <b>{{yourEnergy}}</b></p>\r\n                            </div>\r\n                            <div class=\"col-6\">\r\n                                <h5 class=\"text-right\">{{enemyName}}</h5>\r\n                                <p class=\"text-right\"><b>{{enemyHealth}}</b><img src=\"././assets/heart.png\" alt=\"heart\" class=\"iconsmall\"></p>\r\n                                <p class=\"text-right\"><b>{{enemyEnergy}}</b><img src=\"././assets/energy.png\" alt=\"Energy\" class=\"iconsmall\"></p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\" *ngIf=\"startMessage && attackPower == 0\">\r\n                        <div class=\"col-12\">\r\n                            <p class=\"notification float\">Move the slider to adjust attack power!</p>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"slidecontainer\">\r\n                        <input type=\"range\" min=\"0\" max=\"{{yourEnergy}}\" value=\"0\" class=\"slider\"\r\n                            [(ngModel)]=\"attackPower\">\r\n                        <button *ngIf=\"attackPower == 0\" (click)=\"action()\" type=\"button\" class=\"btn btn-outline-primary\">Defend!</button>\r\n                        <button *ngIf=\"attackPower > 0\" (click)=\"action()\" type=\"button\" class=\"btn btn-outline-primary\">Attack! for {{attackPower}}</button>\r\n                        <div *ngIf=\"battleMessage\">\r\n                            <p class=\"battleMessage\">{{battleMessage}}</p>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!dailyAdventure\">\r\n                <h5 class=\"text-center\">You have already gone on an adventure today!</h5>\r\n                <p class=\"text-center\">You can go on another adventure tomorrow!</p>\r\n                <p><img src=\"././assets/knight-idle-2.gif\" alt=\"idle\" class=\"center\"></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <nav class=\"navbar fixed-bottom navbar-dark bg-dark\">\r\n        <button type=\"button\" (click)=\"help()\" class=\"btn btn-outline-primary helpButton\">?</button>\r\n      </nav>\r\n</body>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head></head>\n\n<body>\n    <div class=\"bulk\">\n\n        <nav class=\"navbar fixed-top navbar-dark bg-dark\">\n            <span class=\"navbar-brand mb-0 h1 center\">Previous Workout</span>\n            <button (click)=\"collapsed = !collapsed\" class=\"navbar-toggler toggle-button btn btn-outline-danger\" type=\"button\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n        </nav>\n\n\n        <div class=\"content\">\n\n            <div class=\"row\">\n                <div class=\"col-12 background\">\n                    <img src=\"././assets/knight-run-2.gif\" alt=\"running\" class=\"yourIcon center\">\n                </div>\n            </div>\n\n            <select [(ngModel)]=\"selectedExercise\" (change)=\"selected()\">\n                <option *ngFor=\"let item of data\" [ngValue]=\"item\">{{item.name}}</option>\n            </select>\n\n            <br><br>\n\n            <div class=\"container\" *ngIf=\"selectedExercise.name == 'Run'\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Distance (km):</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <input class=\"input distance\" type=\"number\" [(ngModel)]=\"distance\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Time:</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <p class=\"timeContainer\">\n                            <input class=\"time\" type=\"number\" min=\"0\" max=\"12\" placeholder=\"HR\" [(ngModel)]=\"hours\">\n                            :\n                            <input class=\"time\" type=\"number\" min=\"0\" max=\"59\" placeholder=\"MIN\" [(ngModel)]=\"minutes\">\n                            :\n                            <input class=\"time\" type=\"number\" min=\"0\" max=\"59\" placeholder=\"SEC\" [(ngModel)]=\"seconds\">\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\" *ngIf=\"selectedExercise.name == 'Swim'\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Distance (km):</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <input class=\"input distance\" type=\"number\" [(ngModel)]=\"distance\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Time:</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <p class=\"timeContainer\">\n                            <input class=\"time\" type=\"number\" min=\"0\" max=\"12\" placeholder=\"HR\" [(ngModel)]=\"hours\">\n                            :\n                            <input class=\"time\" type=\"number\" min=\"0\" max=\"59\" placeholder=\"MIN\" [(ngModel)]=\"minutes\">\n                            :\n                            <input class=\"time\" type=\"number\" min=\"0\" max=\"59\" placeholder=\"SEC\" [(ngModel)]=\"seconds\">\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\" *ngIf=\"selectedExercise.name == 'Bike'\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Distance (km):</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <input class=\"input distance\" type=\"number\" [(ngModel)]=\"distance\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Time:</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <p class=\"timeContainer\">\n                            <input class=\"time\" type=\"number\" min=\"0\" max=\"12\" placeholder=\"HR\" [(ngModel)]=\"hours\">\n                            :\n                            <input class=\"time\" type=\"number\" min=\"0\" max=\"59\" placeholder=\"MIN\" [(ngModel)]=\"minutes\">\n                            :\n                            <input class=\"time\" type=\"number\" min=\"0\" max=\"59\" placeholder=\"SEC\" [(ngModel)]=\"seconds\">\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\" *ngIf=\"selectedExercise.name == 'Lift Weights'\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Weight (lbs):</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <input type=\"number\" [(ngModel)]=\"weight\" class=\"input weight\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Reps:</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <input type=\"number\" [(ngModel)]=\"reps\" class=\"input reps\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Sets:</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <input type=\"number\" [(ngModel)]=\"sets\" class=\"input sets\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\" *ngIf=\"selectedExercise.name == 'Push Ups'\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Reps:</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <input type=\"number\" [(ngModel)]=\"reps\" class=\"input reps\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Sets:</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <input type=\"number\" [(ngModel)]=\"sets\" class=\"input sets\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\" *ngIf=\"selectedExercise.name == 'Sit Ups'\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Reps:</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <input type=\"number\" [(ngModel)]=\"reps\" class=\"input reps\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Sets:</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <input type=\"number\" [(ngModel)]=\"sets\" class=\"input sets\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\" *ngIf=\"selectedExercise.name == 'Chin Ups'\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Reps:</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <input type=\"number\" [(ngModel)]=\"reps\" class=\"input reps\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <label>Sets:</label>\n                    </div>\n                    <div class=\"col-6\">\n                        <input type=\"number\" [(ngModel)]=\"sets\" class=\"input sets\">\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"fixed-bottom bottom\">\n        <button *ngIf=\"selectedExercise.name != 'Default'\" (click)=\"submit()\"\n                class=\"btn btn-outline-primary\">Submit</button>\n        <button *ngIf=\"selectedExercise.name == 'Default'\"\n                class=\"btn btn-outline-secondary\">Submit</button>\n        <button routerLink=\"/adventure\" class=\"btn btn-outline-primary\">Cancel</button>\n    </div>\n    <nav class=\"navbar fixed-bottom navbar-dark bg-dark\">\n        <button type=\"button\" (click)=\"help()\" class=\"btn btn-outline-primary helpButton\">?</button>\n      </nav>\n</body>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n  <link href=\"././assets/css-circular-prog-bar.css\" rel=\"stylesheet\">\r\n\r\n</head>\r\n\r\n<body>\r\n  <nav class=\"navbar fixed-top navbar-dark bg-dark\">\r\n    <span class=\"navbar-brand mb-0 h1 center\">Home</span>\r\n    <div *ngIf=\"!collapsed\" class=\"bg-dark navigation\">\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Return Home</button>\r\n      <button routerLink=\"/adventure\" type=\"button\" class=\"btn btn-outline-primary\">Training Adventure</button>\r\n      <button routerLink=\"/combat\" type=\"button\" class=\"btn btn-outline-primary\">Combat Adventure</button>\r\n      <button routerLink=\"/stats\" type=\"button\" class=\"btn btn-outline-primary\">View Stats</button>\r\n    </div>\r\n    <button (click)=\"collapsed = !collapsed\" class=\"navbar-toggler toggle-button btn btn-outline-primary\" type=\"button\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  </nav>\r\n  <div class=\"bulk\">\r\n\r\n    <div *ngIf=\"!firstTime\">\r\n      <div class=\"icon\">\r\n        <img src=\"././assets/chest.png\" alt=\"RPG: Regular Phitness Game\" class=\"icon\">\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <p class=\"progressLabel\"><b>Progress until next Endurance Increase</b></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"progress\">\r\n              <span class=\"percentageLabel\">{{endurancePercentage}}%</span>\r\n              <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{'width': endurancePercentage+'%'}\"\r\n                aria-valuenow=\"endurancePercentage\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <button (click)=\"enduranceGoal()\" type=\"button\" class=\"btn btn-outline-primary progressButton\">Check\r\n              Goal</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <p class=\"progressLabel\"><b>Progress until next Strength Increase</b></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"progress\">\r\n              <span class=\"percentageLabel\">{{strengthPercentage}}%</span>\r\n              <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{'width': strengthPercentage+'%'}\"\r\n                aria-valuenow=\"strengthPercentage\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <button (click)=\"strengthGoal()\" type=\"button\" class=\"btn btn-outline-primary progressButton\">Check\r\n              Goal</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"firstTime\" class=\"bulk\">\r\n      <br>\r\n      <div class=\"icon\">\r\n        <img src=\"././assets/chest.png\" alt=\"RPG: Regular Phitness Game\" class=\"icon\">\r\n      </div>\r\n      <h5 class=\"text-center\">Hello, and welcome to RPG!</h5>\r\n      <p class=\"text-center\">This is an exercise app, developed over the course of a semester by developer Ben Michener.\r\n        If this is your first time using the app, please make sure to click on the \"Help\" buttons on each new screen!\r\n      </p>\r\n      <p class=\"text-center\">The help button can be found in the nav menu on each screen. When in doubt, do your best to\r\n        find out!</p>\r\n    </div>\r\n  </div>\r\n  <nav class=\"navbar fixed-bottom navbar-dark bg-dark\">\r\n    <button type=\"button\" (click)=\"help()\" class=\"btn btn-outline-primary helpButton\">?</button>\r\n  </nav>\r\n</body>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head></head>\n<body>\n    <h1>404 - I messed up error</h1>\n    <p>You shouldn't be here. I messed up some how...</p>\n    <a routerLink=\"/home\">Take the main road back to Town!</a>\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stats/stats.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stats/stats.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head></head>\n\n<body>\n    <div class=\"bulk\">\n        <nav class=\"navbar fixed-top navbar-dark bg-dark\">\n            <span class=\"navbar-brand mb-0 h1 center\">Stats</span>\n            <div *ngIf=\"!collapsed\" class=\"bg-dark navigation\">\n                <button routerLink=\"/home\" type=\"button\" class=\"btn btn-outline-primary\">Return Home</button>\n                <button routerLink=\"/adventure\" type=\"button\" class=\"btn btn-outline-primary\">Training\n                    Adventure</button>\n                <button routerLink=\"/combat\" type=\"button\" class=\"btn btn-outline-primary\">Combat Adventure</button>\n                <button type=\"button\" class=\"btn btn-outline-secondary\">View Stats</button>\n            </div>\n            <button (click)=\"collapsed = !collapsed\" class=\"navbar-toggler toggle-button btn btn-outline-primary\" type=\"button\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n        </nav>\n        \n        <div class=\"content\">\n\n            <div class=\"container head\">\n                <div class=\"row\">\n                    <div class=\"col-3\">\n                        <button class=\"btn btn-outline-primary changeCat align-left\" (click)=\"catDown()\">&#60;</button>\n                    </div>\n                    <div class=\"col-6\">\n                        <h5 class=\"text-center\">{{category[index]}}:</h5>\n                    </div>\n                    <div class=\"col-3\">\n                        <button class=\"btn btn-outline-primary changeCat align-right\" (click)=\"catUp()\">&#62;</button>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"\" *ngIf=\"category[index] == 'User Data'\">\n                <div class=\"container\">\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Endurance:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{endurance}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Strength:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{strength}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Gold:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{gold}}</p>\n                        </div>\n                    </div>\n                    <div class=\"table row\">\n                    </div>\n                    <div class=\"table row\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"\" *ngIf=\"category[index] == 'Running'\">\n                <div class=\"container\">\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Distance:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{runDistance | number:'.3-3'}} Km</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Time:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{runTime | date:'HH:mm:ss'}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Runs Recorded:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{runNumber}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Runs Until Stat Increase:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{4 - runSuccess}}</p>\n                        </div>\n                    </div>\n                    <div class=\"table row\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"\" *ngIf=\"category[index] == 'Swimming'\">\n                <div class=\"container\">\n                    <div class=\" table row\">\n                        <div class=\"col-7\">\n                            <p><b>Distance:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{swimDistance | number:'.3-3'}} Km</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Time:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{swimTime | date:'HH:mm:ss'}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Swims Recorded:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{swimNumber}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Swims Until Stat Increase:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{4 - swimSuccess}}</p>\n                        </div>\n                    </div>\n                    <div class=\"table row\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"\" *ngIf=\"category[index] == 'Biking'\">\n                <div class=\"container\">\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Distance:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{bikeDistance | number:'.3-3'}} Km</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Time:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{bikeTime | date:'HH:mm:ss'}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Rides Recorded:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{bikeNumber}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Rides Until Stat Increase:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{4 - bikeSuccess}}</p>\n                        </div>\n                    </div>\n                    <div class=\"table row\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"\" *ngIf=\"category[index] == 'Weights'\">\n                <div class=\"container\">\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Weight:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{weightWeight | number:'.0-0'}} lbs</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Reps:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{weightReps | number:'.0-0'}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Sets:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{weightSets | number:'.0-0'}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Sessions Recorded:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{weightNumber}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Sessions Until Stat Increase:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{4 - weightSuccess}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"\" *ngIf=\"category[index] == 'Push Ups'\">\n                <div class=\"container\">\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Reps:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{pushReps | number:'.0-0'}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Sets:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{pushSets | number:'.0-0'}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Sessions Recorded:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{pushNumber}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Sessions Until Stat Increase:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{4 - pushSuccess}}</p>\n                        </div>\n                    </div>\n                    <div class=\"table row\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"\" *ngIf=\"category[index] == 'Sit Ups'\">\n                <div class=\"container\">\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Reps:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{sitReps | number:'.0-0'}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Sets:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{sitSets | number:'.0-0'}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Sessions Recorded:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{sitNumber}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Sessions Until Stat Increase:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{4 - sitSuccess}}</p>\n                        </div>\n                    </div>\n                    <div class=\"table row\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"\" *ngIf=\"category[index] == 'Chin Ups'\">\n                <div class=\"container\">\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Reps:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{chinReps | number:'.0-0'}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Sets:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{chinSets | number:'.0-0'}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Sessions Recorded:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{chinNumber}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"table row\">\n                        <div class=\"col-7\">\n                            <p><b>Sessions Until Stat Increase:</b></p>\n                        </div>\n                        <div class=\"col-5 data\">\n                            <p>{{4 - chinSuccess}}</p>\n                        </div>\n                    </div>\n                    <div class=\"table row\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <nav class=\"navbar fixed-bottom navbar-dark bg-dark\">\n        <button type=\"button\" (click)=\"help()\" class=\"btn btn-outline-primary helpButton\">?</button>\n      </nav>\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tracker/tracker.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tracker/tracker.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n    <link href=\"././assets/css-circular-prog-bar.css\" rel=\"stylesheet\">\n</head>\n\n<body>\n    <div class=\"bulk\">\n\n        <nav class=\"navbar fixed-top navbar-dark bg-dark\">\n            <span class=\"navbar-brand mb-0 h1 center\">Tracking</span>\n            <button (click)=\"collapsed = !collapsed\" class=\"navbar-toggler toggle-button btn btn-outline-danger\" type=\"button\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n        </nav>\n        <!-- <p *ngIf=\"!tracking\">tracker is off!</p>\n        <p *ngIf=\"tracking\">tracker is on!</p> -->\n        <div class=\"content\">\n            <div class=\"row\">\n                <div *ngIf=\"tracking\" class=\"col-12 background\">\n                    <img src=\"././assets/knight-run-2.gif\" alt=\"running\" class=\"yourIcon center\">\n                </div>\n                <div *ngIf=\"!tracking\" class=\"col-12 background\">\n                    <img src=\"././assets/knight-idle-2.gif\" alt=\"running\" class=\"yourIcon center\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h5 class=\"text-center\"><b>Progress to Goal</b></h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"progress\">\n                        <span class=\"percentageLabel\">{{goalPercentage}}%</span>\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{'width': goalPercentage +'%'}\"\n                            aria-valuenow=\"goalPercentage\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                </div>\n            </div>\n            <button class=\"btn btn-outline-primary\" (click)=\"toggleTracking()\" *ngIf=\"!tracking\">Start Tracking</button>\n            <button class=\"btn btn-outline-primary\" (click)=\"toggleTracking()\" *ngIf=\"tracking\">Stop Tracking</button>\n            <div class=\"row\">\n                <div class=\"col-7 text-left\">\n                    <p><b>Distance travelled: </b></p>\n                </div>\n                <div class=\"col-5 text-right\">\n                    <p>{{currentDistance | number:'.3-3'}} km</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-7 text-left\">\n                    <p><b>Time Elapsed: </b></p>\n                </div>\n                <div class=\"col-5 text-right\">\n                    <p>{{time | date:'HH:mm:ss'}}</p>\n                </div>\n            </div>\n\n            <div class=\"row\" *ngIf=\"savedLatitude\">\n                <div class=\"col-7 text-left\">\n                    <p><b>Current Latitude: </b></p>\n                </div>\n                <div class=\"col-5 text-right\">\n                    <p>{{savedLatitude}}</p>\n                </div>\n                <div class=\"col-7 text-left\">\n                    <p><b>Current Longitude: </b></p>\n                </div>\n                <div class=\"col-5 text-right\">\n                    <p>{{savedLongitude}}</p>\n                </div>\n            </div>\n\n            <div class=\"row\" *ngIf=\"!savedLatitude\">\n                <div class=\"col-7 text-left\">\n                    <p><b>Current Latitude: </b></p>\n                </div>\n                <div class=\"col-5 text-right\">\n                    <p>Obtaining...</p>\n                </div>\n                <div class=\"col-7 text-left\">\n                    <p><b>Current Longitude: </b></p>\n                </div>\n                <div class=\"col-5 text-right\">\n                    <p>Obtaining...</p>\n                </div>\n            </div>\n            \n        </div>\n        <div *ngIf=\"!tracking\" class=\"fixed-bottom bottom\">\n            <button class=\"btn btn-outline-primary\" routerLink=\"/adventure\" (click)=\"saveData()\">End Your\n                Adventure</button>\n        </div>\n        <div *ngIf=\"tracking\" class=\"fixed-bottom bottom\">\n            <button class=\"btn btn-outline-secondary\">End Your\n                Adventure</button>\n        </div>\n    </div>\n    <nav class=\"navbar fixed-bottom navbar-dark bg-dark\">\n        <button type=\"button\" (click)=\"help()\" class=\"btn btn-outline-primary helpButton\">?</button>\n    </nav>\n</body>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

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

/***/ "./src/app/adventure/adventure.component.css":
/*!***************************************************!*\
  !*** ./src/app/adventure/adventure.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".exercisebtn{\r\n    width: 100%;\r\n    height: 220px;\r\n    margin-top: 20px;\r\n    font-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2ZW50dXJlL2FkdmVudHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkdmVudHVyZS9hZHZlbnR1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGVyY2lzZWJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/adventure/adventure.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adventure/adventure.component.ts ***!
  \**************************************************/
/*! exports provided: AdventureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureComponent", function() { return AdventureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var AdventureComponent = /** @class */ (function () {
    function AdventureComponent() {
        this.storage = window.localStorage;
    }
    AdventureComponent.prototype.ngOnInit = function () {
        this.collapsed = true;
        this.averageDistance = Number(this.storage.getItem("runDistance"));
        this.averageTime = new Date(0, 0, 0, 0, 0, 0);
        this.averageTime.setSeconds(Number(this.storage.getItem("runTime")) / 1000);
        if (this.averageDistance == 0) {
            this.firstRun = true;
        }
        this.updateStats();
        //Get Player's Stats (from Database)
        this.playerEndurance = Number(this.storage.getItem("endurance"));
        this.playerStrength = Number(this.storage.getItem("strength"));
        this.playerGold = Number(this.storage.getItem("gold"));
    };
    AdventureComponent.prototype.updateStats = function () {
        if (Number(this.storage.getItem("runSuccess")) > 3) {
            this.storage.setItem("endurance", String(Number(this.storage.getItem("endurance")) + 1));
            this.storage.setItem("runSuccess", '0');
            this.storage.setItem("lastEnduranceDate", Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en'));
            alert("Your endurance has increased!");
        }
        if (Number(this.storage.getItem("swimSuccess")) > 3) {
            this.storage.setItem("endurance", String(Number(this.storage.getItem("endurance")) + 1));
            this.storage.setItem("swimSuccess", '0');
            this.storage.setItem("lastEnduranceDate", Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en'));
            alert("Your endurance has increased!");
        }
        if (Number(this.storage.getItem("bikeSuccess")) > 3) {
            this.storage.setItem("endurance", String(Number(this.storage.getItem("endurance")) + 1));
            this.storage.setItem("bikeSuccess", '0');
            this.storage.setItem("lastEnduranceDate", Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en'));
            alert("Your endurance has increased!");
        }
        if (Number(this.storage.getItem("weightSuccess")) > 3) {
            this.storage.setItem("strength", String(Number(this.storage.getItem("strength")) + 1));
            this.storage.setItem("weightSuccess", '0');
            this.storage.setItem("lastStrengthDate", Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en'));
            alert("Your strength has increased!");
        }
        if (Number(this.storage.getItem("pushSuccess")) > 3) {
            this.storage.setItem("strength", String(Number(this.storage.getItem("strength")) + 1));
            this.storage.setItem("pushSuccess", '0');
            this.storage.setItem("lastStrengthDate", Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en'));
            alert("Your strength has increased!");
        }
        if (Number(this.storage.getItem("sitSuccess")) > 3) {
            this.storage.setItem("strength", String(Number(this.storage.getItem("strength")) + 1));
            this.storage.setItem("sitSuccess", '0');
            this.storage.setItem("lastStrengthDate", Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en'));
            alert("Your strength has increased!");
        }
        if (Number(this.storage.getItem("chinSuccess")) > 3) {
            this.storage.setItem("strength", String(Number(this.storage.getItem("strength")) + 1));
            this.storage.setItem("chinSuccess", '0');
            this.storage.setItem("lastStrengthDate", Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en'));
            alert("Your strength has increased!");
        }
    };
    AdventureComponent.prototype.help = function () {
        if (confirm("This is the hub for working out, where you can either go on a tracked workout, or an untracked workout.")) {
            if (confirm("In a tracked workout, the app will use the phone's GPS to get an approximation of the distance traveled during your run.")) {
                if (confirm("In an untracked workout, you will be able to report a previously completed but unreported workout by filling out the information in text format. Here you will also be able to record information about other types of exercise besides running, such as weight lifting, push ups, or swimming.")) {
                    if (confirm("Your goal for each workout is to get withing 10% of your average. Doing so will count as one \"success\" towards a stat increase. If you manage to go at least 15% above your average, you will be rewarded with a second \"success\".")) { }
                }
            }
        }
    };
    AdventureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adventure',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adventure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adventure/adventure.component.html"))["default"],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adventure.component.css */ "./src/app/adventure/adventure.component.css"))["default"]]
        })
    ], AdventureComponent);
    return AdventureComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tracker/tracker.component */ "./src/app/tracker/tracker.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _adventure_adventure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adventure/adventure.component */ "./src/app/adventure/adventure.component.ts");
/* harmony import */ var _combat_combat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combat/combat.component */ "./src/app/combat/combat.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");










var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'tracker', component: _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_4__["TrackerComponent"] },
    { path: 'adventure', component: _adventure_adventure_component__WEBPACK_IMPORTED_MODULE_6__["AdventureComponent"] },
    { path: 'forms', component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_8__["FormsComponent"] },
    { path: 'combat', component: _combat_combat_component__WEBPACK_IMPORTED_MODULE_7__["CombatComponent"] },
    { path: 'stats', component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_9__["StatsComponent"] },
    { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'rpg';
        this.storage = window.localStorage;
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener("deviceready", function () {
            document.addEventListener("backbutton", function (e) {
                e.preventDefault();
            }, false);
            var storage = window.localStorage;
            if (!Number(storage.getItem("firstTime"))) {
                storage.setItem("firstTime", "true");
            }
            if (!Number(storage.getItem("runDistance"))) {
                storage.setItem("runDistance", "0");
            }
            if (!Number(storage.getItem("runTime"))) {
                storage.setItem("runTime", "0");
            }
            if (!Number(storage.getItem("runNumber"))) {
                storage.setItem("runNumber", "0");
            }
            if (!Number(storage.getItem("runSuccess"))) {
                storage.setItem("runSuccess", "0");
            }
            if (!Number(storage.getItem("swimDistance"))) {
                storage.setItem("swimDistance", "0");
            }
            if (!Number(storage.getItem("swimTime"))) {
                storage.setItem("swimTime", "0");
            }
            if (!Number(storage.getItem("swimNumber"))) {
                storage.setItem("swimNumber", "0");
            }
            if (!Number(storage.getItem("swimSuccess"))) {
                storage.setItem("swimSuccess", "0");
            }
            if (!Number(storage.getItem("bikeDistance"))) {
                storage.setItem("bikeDistance", "0");
            }
            if (!Number(storage.getItem("bikeTime"))) {
                storage.setItem("bikeTime", "0");
            }
            if (!Number(storage.getItem("bikeNumber"))) {
                storage.setItem("bikeNumber", "0");
            }
            if (!Number(storage.getItem("bikeSuccess"))) {
                storage.setItem("bikeSuccess", "0");
            }
            if (!Number(storage.getItem("weightWeight"))) {
                storage.setItem("weightWeight", "0");
            }
            if (!Number(storage.getItem("weightReps"))) {
                storage.setItem("weightReps", "0");
            }
            if (!Number(storage.getItem("weightSets"))) {
                storage.setItem("weightSets", "0");
            }
            if (!Number(storage.getItem("weightNumber"))) {
                storage.setItem("weightNumber", "0");
            }
            if (!Number(storage.getItem("weightSuccess"))) {
                storage.setItem("weightSuccess", "0");
            }
            if (!Number(storage.getItem("pushReps"))) {
                storage.setItem("pushReps", "0");
            }
            if (!Number(storage.getItem("pushSets"))) {
                storage.setItem("pushSets", "0");
            }
            if (!Number(storage.getItem("pushNumber"))) {
                storage.setItem("pushNumber", "0");
            }
            if (!Number(storage.getItem("pushSuccess"))) {
                storage.setItem("pushSuccess", "0");
            }
            if (!Number(storage.getItem("sitReps"))) {
                storage.setItem("sitReps", "0");
            }
            if (!Number(storage.getItem("sitSets"))) {
                storage.setItem("sitSets", "0");
            }
            if (!Number(storage.getItem("sitNumber"))) {
                storage.setItem("sitNumber", "0");
            }
            if (!Number(storage.getItem("sitSuccess"))) {
                storage.setItem("sitSuccess", "0");
            }
            if (!Number(storage.getItem("chinReps"))) {
                storage.setItem("chinReps", "0");
            }
            if (!Number(storage.getItem("chinSets"))) {
                storage.setItem("chinSets", "0");
            }
            if (!Number(storage.getItem("chinNumber"))) {
                storage.setItem("chinNumber", "0");
            }
            if (!Number(storage.getItem("chinSuccess"))) {
                storage.setItem("chinSuccess", "0");
            }
            if (!Number(storage.getItem("endurance"))) {
                storage.setItem("endurance", "10");
            }
            if (!Number(storage.getItem("strength"))) {
                storage.setItem("strength", "10");
            }
            if (!Number(storage.getItem("gold"))) {
                storage.setItem("gold", "0");
            }
        }, false);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"))["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, AppBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBootstrapModule", function() { return AppBootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tracker/tracker.component */ "./src/app/tracker/tracker.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _adventure_adventure_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adventure/adventure.component */ "./src/app/adventure/adventure.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _combat_combat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./combat/combat.component */ "./src/app/combat/combat.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_11__["TrackerComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                _adventure_adventure_component__WEBPACK_IMPORTED_MODULE_13__["AdventureComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_14__["FormsComponent"],
                _combat_combat_component__WEBPACK_IMPORTED_MODULE_15__["CombatComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_17__["StatsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["NoopAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    return AppBootstrapModule;
}());



/***/ }),

/***/ "./src/app/combat/combat.component.css":
/*!*********************************************!*\
  !*** ./src/app/combat/combat.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body{\r\n  margin:4px;\r\n}\r\n\r\n.enemyIcon {\r\n  width: 80%;\r\n  bottom: -20%;\r\n  left: 45px;\r\n\r\n  position: absolute;\r\n}\r\n\r\n.eHit{\r\n  left: 0px;\r\n  right: 40px;\r\n}\r\n\r\n.yourIcon {\r\n  width: 80%;\r\n  bottom: -20%;\r\n  right: 45px;\r\n  -webkit-transform: scaleX(-1);\r\n  transform: scaleX(-1);\r\n\r\n  position: absolute;\r\n}\r\n\r\n.pHit{\r\n  right: 0px;\r\n  left: 40px;\r\n}\r\n\r\n.background{\r\n  width: 130%;\r\n  position: relative;\r\n  right: 15%;\r\n  border: 5px solid black;\r\n}\r\n\r\n.icons{\r\n  width: 130%;\r\n}\r\n\r\n.iconsmall{\r\n  width: 25%;\r\n}\r\n\r\n.stat{\r\n  margin-top: 15px;\r\n}\r\n\r\n.table{\r\n  border:3px solid black;\r\n  margin-top: 1px;\r\n  margin-bottom: 1px;\r\n  width: 100%;\r\n  height: 70px;\r\n\r\n}\r\n\r\n.float{\r\n  z-index: 2;\r\n}\r\n\r\n.fightbtn{\r\n  width: 100%;\r\n  height: 220px;\r\n  margin-top: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\n.battleMessage{\r\n  text-align: center;\r\n  font-size: 18px;\r\n  border: 2px solid;\r\n  border-color: black;\r\n  height: 160px;\r\n}\r\n\r\n.border{\r\n  border: 3px solid;\r\n  border-color: black;\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 15px;\r\n  border-radius: 5px;\r\n  background: black;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  -webkit-transition: .2s;\r\n  -webkit-transition: opacity .2s;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: rgb(218, 28, 28);\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: rgb(218, 28, 28);\r\n  cursor: pointer;\r\n}\r\n\r\n.notification{\r\n  bottom: -20%;\r\n\r\n  position: absolute;\r\n\r\n  color: white;\r\n  background-color: rgb(218, 28, 28);\r\n  border:2px solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tYmF0L2NvbWJhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVOztFQUVWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IscUJBQXFCOztFQUVyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLCtCQUF1QjtFQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZOztFQUVaLGtCQUFrQjs7RUFFbEIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21iYXQvY29tYmF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICBtYXJnaW46NHB4O1xyXG59XHJcblxyXG4uZW5lbXlJY29uIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGJvdHRvbTogLTIwJTtcclxuICBsZWZ0OiA0NXB4O1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5lSGl0e1xyXG4gIGxlZnQ6IDBweDtcclxuICByaWdodDogNDBweDtcclxufVxyXG5cclxuLnlvdXJJY29uIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGJvdHRvbTogLTIwJTtcclxuICByaWdodDogNDVweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnBIaXR7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBsZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZHtcclxuICB3aWR0aDogMTMwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDE1JTtcclxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmljb25ze1xyXG4gIHdpZHRoOiAxMzAlO1xyXG59XHJcbi5pY29uc21hbGx7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnN0YXR7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnRhYmxle1xyXG4gIGJvcmRlcjozcHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcblxyXG59XHJcblxyXG4uZmxvYXR7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmZpZ2h0YnRue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5iYXR0bGVNZXNzYWdle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xyXG59XHJcblxyXG4uc2xpZGVyOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjE4LCAyOCwgMjgpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjE4LCAyOCwgMjgpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbntcclxuICBib3R0b206IC0yMCU7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDI4LCAyOCk7XHJcbiAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/combat/combat.component.ts":
/*!********************************************!*\
  !*** ./src/app/combat/combat.component.ts ***!
  \********************************************/
/*! exports provided: CombatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatComponent", function() { return CombatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var CombatComponent = /** @class */ (function () {
    function CombatComponent() {
        this.storage = window.localStorage;
        this.startMessage = true;
        this.pHit = false;
        this.eHit = false;
        this.fighting = false;
        this.today = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en');
        this.enemies = {
            'enemy': [
                { 'name': 'Bandit', 'health': 10, 'energy': 15, 'reward': 2 },
                { 'name': 'Bandit', 'health': 10, 'energy': 15, 'reward': 2 },
                { 'name': 'Bandit', 'health': 10, 'energy': 15, 'reward': 2 },
                { 'name': 'Bandit', 'health': 10, 'energy': 15, 'reward': 2 },
                { 'name': 'Marauder', 'health': 20, 'energy': 6, 'reward': 4 },
                { 'name': 'Marauder', 'health': 20, 'energy': 6, 'reward': 4 },
                { 'name': 'Marauder', 'health': 20, 'energy': 6, 'reward': 4 },
                { 'name': 'Wolf', 'health': 8, 'energy': 20, 'reward': 3 },
                { 'name': 'Wolf', 'health': 8, 'energy': 20, 'reward': 3 },
                { 'name': 'Wolf', 'health': 8, 'energy': 20, 'reward': 3 },
                { 'name': 'Wolf', 'health': 8, 'energy': 20, 'reward': 3 },
                { 'name': 'Dire Wolf', 'health': 20, 'energy': 20, 'reward': 8 },
                { 'name': 'Necromancer', 'health': 15, 'energy': 50, 'reward': 15 },
                { 'name': 'Troll', 'health': 30, 'energy': 12, 'reward': 5 },
                { 'name': 'Troll', 'health': 30, 'energy': 12, 'reward': 5 },
                { 'name': 'Ogre', 'health': 45, 'energy': 15, 'reward': 8 },
                { 'name': 'Skeleton', 'health': 10, 'energy': 5, 'reward': 2 },
                { 'name': 'Assassin', 'health': 15, 'energy': 25, 'reward': 10 },
                { 'name': 'Israphel', 'health': 50, 'energy': 25, 'reward': 15 },
                { 'name': 'Dragon', 'health': 100, 'energy': 50, 'reward': 20 }
            ]
        };
    }
    CombatComponent.prototype.ngOnInit = function () {
        this.collapsed = true;
        this.yourHealth = Number(this.storage.getItem("endurance"));
        this.yourEnergy = Number(this.storage.getItem("strength"));
        this.attackPower = 0;
        this.earnedGold = 0;
        this.combatEncounters = 0;
        var diff = Math.abs(new Date(this.storage.getItem("lastCombatDate")).getTime() - new Date(this.today).getTime());
        var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        if (diffDays < 1) {
            this.dailyAdventure = false;
        }
        else {
            this.dailyAdventure = true;
        }
    };
    CombatComponent.prototype.getEnemy = function () {
        this.combatEncounters++;
        this.fighting = !this.fighting;
        var enemy = this.enemies.enemy[Math.floor(Math.random() * this.enemies.enemy.length)];
        this.enemyName = enemy.name;
        this.enemyHealth = enemy.health;
        this.enemyEnergy = enemy.energy;
        this.reward = enemy.reward;
        this.battleMessage = "You encounter a " + this.enemyName.toLowerCase();
        this.checkStatus();
    };
    CombatComponent.prototype.action = function () {
        this.startMessage = false;
        this.pHit = false;
        this.eHit = false;
        if (this.attackPower == 0 && this.enemyAttack > 0) {
            this.yourHealth -= 1;
            this.yourEnergy += 3;
            this.enemyEnergy -= this.enemyAttack;
            this.battleMessage = "You block an enemy attack";
            this.eHit = true;
        }
        else if (this.attackPower > 0 && this.enemyAttack == 0) {
            this.yourEnergy -= this.attackPower;
            this.enemyHealth -= 1;
            this.enemyEnergy += 3;
            this.battleMessage = "The enemy blocks one of your attacks";
            this.pHit = true;
        }
        else if (this.attackPower == 0 && this.enemyAttack == 0) {
            this.yourEnergy += 3;
            this.enemyEnergy += 3;
            this.battleMessage = "Both of you ready yourselves for an attack that doesn't come";
        }
        else if (this.attackPower > this.enemyAttack) {
            this.yourEnergy -= this.attackPower;
            this.enemyHealth -= this.attackPower - this.enemyAttack;
            this.enemyEnergy -= this.enemyAttack;
            this.battleMessage = "Your attack overcomes the enemy's, dealing " + (this.attackPower - this.enemyAttack) + " damage";
            this.pHit = true;
        }
        else if (this.attackPower < this.enemyAttack) {
            this.yourHealth -= this.enemyAttack - this.attackPower;
            this.yourEnergy -= this.attackPower;
            this.enemyEnergy -= this.enemyAttack;
            this.battleMessage = "You are overwhelmed by the enemy's attack and take " + (this.enemyAttack - this.attackPower) + " damage";
            this.eHit = true;
        }
        else if (this.attackPower == this.enemyAttack) {
            this.yourEnergy -= this.attackPower;
            this.enemyEnergy -= this.enemyAttack;
            this.battleMessage = "Your attacks bounce off of each other, perfectly balanced in power. Neither of you take any damage";
        }
        this.checkStatus();
    };
    CombatComponent.prototype.checkStatus = function () {
        if (this.yourHealth <= 0 || this.enemyHealth <= 0) {
            this.fighting = !this.fighting;
            this.yourEnergy = Number(this.storage.getItem("strength"));
            if (this.yourHealth > 0) {
                // console.log(this.earnedGold)
                this.earnedGold += this.reward;
                this.battleMessage = "";
                // console.log(this.earnedGold)
            }
            else {
                this.earnedGold = 0;
            }
        }
        this.attackPower = 0;
        this.enemyAttack = Math.floor(Math.random() * this.enemyEnergy);
        if (this.enemyAttack == 0) {
            this.battleMessage = this.battleMessage + ". It looks like the enemy is preparing to block your attack.";
        }
        else if (this.enemyAttack < 8) {
            this.battleMessage = this.battleMessage + ". It looks like the enemy is preparing for a light attack.";
        }
        else if (this.enemyAttack < 15) {
            this.battleMessage = this.battleMessage + ". It looks like the enemy is preparing for a medium attack.";
        }
        else {
            this.battleMessage = this.battleMessage + ". It looks like the enemy is preparing for a heavy attack.";
        }
        this.startMessage = false;
        //this.pHit = false;
        //this.eHit = false;
    };
    CombatComponent.prototype.saveData = function () {
        this.storage.setItem("gold", String(Number(this.storage.getItem("gold")) + this.earnedGold));
        if (this.combatEncounters > 0) {
            this.storage.setItem("lastCombatDate", this.today);
        }
    };
    CombatComponent.prototype.help = function () {
        if (confirm("This is the combat game, where the stats you work to level up come in to play. Here, you fight enemies one at a time to earn gold. After each fight, you have the option of leaving with what you have earned, or fighting a new monster for more gold. Choose wisely, because if you die in combat, you lose all of the gold you have earned this expedition!")) {
            if (confirm("Combat is simple. You and the enemy both have health and energy. Energy corresponds to how hard you can hit the enemy for, and health corresponds to how hard you can be hit before you die. The goal is to reduce the enemy's health to zero while taking as little damage as possible.")) {
                if (confirm("You decide how hard you want to hit the enemy for by adjusting the slider. You can attack for damage up to your current energy. Once you have confirmed the amount you want to attack for, your wagered energy will be compared to the enemy's wagered energy. Whoever wagered more deals damage equal to the difference in energies to the opponent.")) {
                    if (confirm("You always have the option to defend by not spending any energy. This will reduce any damage you would have taken down to 1, and allows you to regain 3 energy. This can be extremely helpful for surviving possible killing blows. Be careful, though! The enemy can do it too!")) {
                        if (confirm("Your health carries over between fights, but your energy resets each time. When you finally decide to leave, simply navigate away to another page. Your data will be saved.")) { }
                    }
                }
            }
        }
    };
    CombatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-combat',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./combat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/combat/combat.component.html"))["default"],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./combat.component.css */ "./src/app/combat/combat.component.css"))["default"]]
        })
    ], CombatComponent);
    return CombatComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.css":
/*!*******************************************!*\
  !*** ./src/app/forms/forms.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input{\r\n    width: 100%;\r\n}\r\n\r\n.bottom{\r\n    margin-bottom: 20%;\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n}\r\n\r\n.background{\r\n    background-color: #4A4849;\r\n    border: 2px solid black;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.yourIcon{\r\n    width: 60px;\r\n    height: 50px;\r\n}\r\n\r\n.time{\r\n    width: 27%;\r\n}\r\n\r\n.timeContainer, .distance, .sets, .reps, .weight{\r\n    width: 130%;\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvZm9ybXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm90dG9te1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QTQ4NDk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnlvdXJJY29ue1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi50aW1le1xyXG4gICAgd2lkdGg6IDI3JTtcclxufVxyXG5cclxuLnRpbWVDb250YWluZXIsIC5kaXN0YW5jZSwgLnNldHMsIC5yZXBzLCAud2VpZ2h0e1xyXG4gICAgd2lkdGg6IDEzMCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FormsComponent = /** @class */ (function () {
    function FormsComponent(router) {
        this.router = router;
        this.storage = window.localStorage;
        this.selectedExercise = { id: -1, name: "Default" };
        this.data = [
            { id: 0, name: "Run" },
            { id: 1, name: "Swim" },
            { id: 2, name: "Bike" },
            { id: 3, name: "Lift Weights" },
            { id: 4, name: "Push Ups" },
            { id: 5, name: "Sit Ups" },
            { id: 6, name: "Chin Ups" }
        ];
    }
    ;
    FormsComponent.prototype.ngOnInit = function () {
        this.collapsed = true;
    };
    FormsComponent.prototype.selected = function () {
        console.log(this.selectedExercise);
        this.distance = null;
        this.time = null;
        this.hours = null;
        this.minutes = null;
        this.seconds = null;
        this.weight = null;
        this.reps = null;
        this.sets = null;
    };
    FormsComponent.prototype.submit = function () {
        if (this.selectedExercise.name == "Run") {
            if (this.hours >= 0 && this.hours <= 12 && this.minutes >= 0 && this.minutes <= 59 && this.seconds >= 0 && this.seconds <= 59 && this.distance > 0) {
                var counter = this.hours * 3600000 + this.minutes * 60000 + this.seconds * 1000;
                var oldRunDistance = this.storage.getItem("runDistance");
                var oldRunTime = this.storage.getItem("runTime");
                //Getting withing 10% of your regular goal marks a success for the week
                //Getting above 15% of your average marks an extra success
                if (Number(oldRunDistance) * 1.15 <= this.distance) {
                    var success = this.storage.getItem("runSuccess");
                    success = String(Number(success) + 2);
                    this.storage.setItem("runSuccess", success);
                }
                else if (Number(oldRunDistance) * 0.9 < this.distance) {
                    var success = this.storage.getItem("runSuccess");
                    success = String(Number(success) + 1);
                    this.storage.setItem("runSuccess", success);
                }
                var newRunNumber = Number(this.storage.getItem("runNumber"));
                var newRunDistance = ((Number(this.storage.getItem("runDistance")) * Number(newRunNumber)) + this.distance) / (newRunNumber + 1);
                var newRunTime = ((Number(this.storage.getItem("runTime")) * Number(newRunNumber)) + counter) / (newRunNumber + 1);
                newRunNumber++;
                this.storage.setItem("runDistance", String(newRunDistance));
                this.storage.setItem("runNumber", String(newRunNumber));
                this.storage.setItem("runTime", String(newRunTime));
                this.router.navigateByUrl("/adventure");
            }
            else {
                alert("Please enter valid numbers for time!");
            }
        }
        if (this.selectedExercise.name == "Swim") {
            if (this.hours >= 0 && this.hours <= 12 && this.minutes >= 0 && this.minutes <= 59 && this.seconds >= 0 && this.seconds <= 59 && this.distance > 0) {
                var counter = this.hours * 3600000 + this.minutes * 60000 + this.seconds * 1000;
                var oldSwimDistance = this.storage.getItem("swimDistance");
                var oldSwimTime = this.storage.getItem("swimTime");
                //Getting withing 10% of your regular goal marks a success for the week
                //Getting above 15% of your average marks an extra success
                if (Number(oldSwimDistance) * 1.15 <= this.distance) {
                    var success = this.storage.getItem("swimSuccess");
                    success = String(Number(success) + 2);
                    this.storage.setItem("swimSuccess", success);
                }
                else if (Number(oldSwimDistance) * 0.9 < this.distance) {
                    var success = this.storage.getItem("swimSuccess");
                    success = String(Number(success) + 1);
                    this.storage.setItem("swimSuccess", success);
                }
                var newSwimNumber = Number(this.storage.getItem("swimNumber"));
                var newSwimDistance = ((Number(this.storage.getItem("swimDistance")) * Number(newSwimNumber)) + this.distance) / (newSwimNumber + 1);
                var newSwimTime = ((Number(this.storage.getItem("swimTime")) * Number(newSwimNumber)) + counter) / (newSwimNumber + 1);
                newSwimNumber++;
                this.storage.setItem("swimDistance", String(newSwimDistance));
                this.storage.setItem("swimNumber", String(newSwimNumber));
                this.storage.setItem("swimTime", String(newSwimTime));
                this.router.navigateByUrl("/adventure");
            }
            else {
                alert("Please enter valid numbers for time!");
            }
        }
        if (this.selectedExercise.name == "Bike") {
            if (this.hours >= 0 && this.hours <= 12 && this.minutes >= 0 && this.minutes <= 59 && this.seconds >= 0 && this.seconds <= 59 && this.distance > 0) {
                var counter = this.hours * 3600000 + this.minutes * 60000 + this.seconds * 1000;
                var oldBikeDistance = this.storage.getItem("bikeDistance");
                var oldBikeTime = this.storage.getItem("bikeTime");
                //Getting withing 10% of your regular goal marks a success for the week
                //Getting above 15% of your average marks an extra success
                if (Number(oldBikeDistance) * 1.15 <= this.distance) {
                    var success = this.storage.getItem("bikeSuccess");
                    success = String(Number(success) + 2);
                    this.storage.setItem("bikeSuccess", success);
                }
                else if (Number(oldBikeDistance) * 0.9 < this.distance) {
                    var success = this.storage.getItem("bikeSuccess");
                    success = String(Number(success) + 1);
                    this.storage.setItem("bikeSuccess", success);
                }
                var newBikeNumber = Number(this.storage.getItem("bikeNumber"));
                var newBikeDistance = ((Number(this.storage.getItem("bikeDistance")) * Number(newBikeNumber)) + this.distance) / (newBikeNumber + 1);
                var newBikeTime = ((Number(this.storage.getItem("bikeTime")) * Number(newBikeNumber)) + counter) / (newBikeNumber + 1);
                newBikeNumber++;
                this.storage.setItem("bikeDistance", String(newBikeDistance));
                this.storage.setItem("bikeNumber", String(newBikeNumber));
                this.storage.setItem("bikeTime", String(newBikeTime));
                this.router.navigateByUrl("/adventure");
            }
            else {
                alert("Please enter valid numbers for time!");
            }
        }
        if (this.selectedExercise.name == "Lift Weights") {
            if (this.weight > 0 && this.reps > 0 && this.sets > 0) {
                var oldWeightWeight = this.storage.getItem("weightWeight");
                var oldWeightReps = this.storage.getItem("weightReps");
                var oldWeightSets = this.storage.getItem("weightSets");
                //Getting withing 10% of your regular goal marks a success for the week
                //Getting above 15% of your average marks an extra success
                if (Number(oldWeightWeight) * Number(oldWeightReps) * Number(oldWeightSets) * 1.15 <= this.weight * this.reps * this.sets) {
                    var success = this.storage.getItem("weightSuccess");
                    success = String(Number(success) + 2);
                    this.storage.setItem("weightSuccess", success);
                }
                else if (Number(oldWeightWeight) * Number(oldWeightReps) * Number(oldWeightSets) * 0.9 <= this.weight * this.reps * this.sets) {
                    var success = this.storage.getItem("weightSuccess");
                    success = String(Number(success) + 1);
                    this.storage.setItem("weightSuccess", success);
                }
                var newWeightNumber = Number(this.storage.getItem("weightNumber"));
                var newWeightWeight = ((Number(this.storage.getItem("weightWeight")) * Number(newWeightNumber)) + this.weight) / (newWeightNumber + 1);
                var newWeightReps = ((Number(this.storage.getItem("weightReps")) * Number(newWeightNumber)) + this.reps) / (newWeightNumber + 1);
                var newWeightSets = ((Number(this.storage.getItem("weightSets")) * Number(newWeightNumber)) + this.sets) / (newWeightNumber + 1);
                newWeightNumber++;
                this.storage.setItem("weightWeight", String(newWeightWeight));
                this.storage.setItem("weightReps", String(newWeightReps));
                this.storage.setItem("weightSets", String(newWeightSets));
                this.storage.setItem("weightNumber", String(newWeightNumber));
                this.router.navigateByUrl("/adventure");
            }
            else {
                alert("Please enter nonegative numbers for your values!");
            }
        }
        if (this.selectedExercise.name == "Push Ups") {
            if (this.reps > 0 && this.sets > 0) {
                var oldPushReps = this.storage.getItem("pushReps");
                var oldPushSets = this.storage.getItem("pushSets");
                //Getting withing 10% of your regular goal marks a success for the week
                //Getting above 15% of your average marks an extra success
                if (Number(oldPushReps) * Number(oldPushSets) * 1.15 <= this.reps * this.sets) {
                    var success = this.storage.getItem("pushSuccess");
                    success = String(Number(success) + 2);
                    this.storage.setItem("pushSuccess", success);
                }
                else if (Number(oldPushReps) * Number(oldPushSets) * 0.9 <= this.reps * this.sets) {
                    var success = this.storage.getItem("pushSuccess");
                    success = String(Number(success) + 1);
                    this.storage.setItem("pushSuccess", success);
                }
                var newPushNumber = Number(this.storage.getItem("pushNumber"));
                var newPushReps = ((Number(this.storage.getItem("pushReps")) * Number(newPushNumber)) + this.reps) / (newPushNumber + 1);
                var newPushSets = ((Number(this.storage.getItem("pushSets")) * Number(newPushNumber)) + this.sets) / (newPushNumber + 1);
                newPushNumber++;
                this.storage.setItem("pushReps", String(newPushReps));
                this.storage.setItem("pushSets", String(newPushSets));
                this.storage.setItem("pushNumber", String(newPushNumber));
                this.router.navigateByUrl("/adventure");
            }
            else {
                alert("Please enter nonegative numbers for your values!");
            }
        }
        if (this.selectedExercise.name == "Sit Ups") {
            if (this.reps > 0 && this.sets > 0) {
                var oldSitReps = this.storage.getItem("sitReps");
                var oldSitSets = this.storage.getItem("sitSets");
                //Getting withing 10% of your regular goal marks a success for the week
                //Getting above 15% of your average marks an extra success
                if (Number(oldSitReps) * Number(oldSitSets) * 1.15 <= this.reps * this.sets) {
                    var success = this.storage.getItem("sitSuccess");
                    success = String(Number(success) + 2);
                    this.storage.setItem("sitSuccess", success);
                }
                else if (Number(oldSitReps) * Number(oldSitSets) * 0.9 <= this.reps * this.sets) {
                    var success = this.storage.getItem("sitSuccess");
                    success = String(Number(success) + 1);
                    this.storage.setItem("sitSuccess", success);
                }
                var newSitNumber = Number(this.storage.getItem("sitNumber"));
                var newSitReps = ((Number(this.storage.getItem("sitReps")) * Number(newSitNumber)) + this.reps) / (newSitNumber + 1);
                var newSitSets = ((Number(this.storage.getItem("sitSets")) * Number(newSitNumber)) + this.sets) / (newSitNumber + 1);
                newSitNumber++;
                this.storage.setItem("sitReps", String(newSitReps));
                this.storage.setItem("sitSets", String(newSitSets));
                this.storage.setItem("sitNumber", String(newSitNumber));
                this.router.navigateByUrl("/adventure");
            }
            else {
                alert("Please enter nonegative numbers for your values!");
            }
        }
        if (this.selectedExercise.name == "Chin Ups") {
            if (this.reps > 0 && this.sets > 0) {
                var oldChinReps = this.storage.getItem("chinReps");
                var oldChinSets = this.storage.getItem("chinSets");
                console.log(oldChinReps + ", " + oldChinSets);
                //Getting withing 10% of your regular goal marks a success for the week
                //Getting above 15% of your average marks an extra success
                if (Number(oldChinReps) * Number(oldChinSets) * 1.15 <= this.reps * this.sets) {
                    var success = this.storage.getItem("chinSuccess");
                    success = String(Number(success) + 2);
                    this.storage.setItem("chinSuccess", success);
                }
                if (Number(oldChinReps) * Number(oldChinSets) * 0.9 <= this.reps * this.sets) {
                    var success = this.storage.getItem("chinSuccess");
                    success = String(Number(success) + 1);
                    this.storage.setItem("chinSuccess", success);
                }
                var newChinNumber = Number(this.storage.getItem("chinNumber"));
                var newChinReps = ((Number(this.storage.getItem("chinReps")) * Number(newChinNumber)) + this.reps) / (newChinNumber + 1);
                var newChinSets = ((Number(this.storage.getItem("chinSets")) * Number(newChinNumber)) + this.sets) / (newChinNumber + 1);
                newChinNumber++;
                this.storage.setItem("chinReps", String(newChinReps));
                this.storage.setItem("chinSets", String(newChinSets));
                this.storage.setItem("chinNumber", String(newChinNumber));
                this.router.navigateByUrl("/adventure");
            }
            else {
                alert("Please enter nonegative numbers for your values!");
            }
        }
    };
    FormsComponent.prototype.help = function () {
        if (confirm("In an untracked workout, you will be able to report a previously completed but unreported workout by filling out the information in text format. Here you will also be able to record information about other types of exercise besides running, such as weight lifting, push ups, or swimming.")) {
            if (confirm("Your goal for each workout is to get withing 10% of your average. Doing so will count as one \"success\" towards a stat increase. If you manage to go at least 15% above your average, you will be rewarded with a second \"success\".")) { }
        }
    };
    FormsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html"))["default"],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forms.component.css */ "./src/app/forms/forms.component.css"))["default"]]
        })
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.progressLabel{ \r\n  text-align: center;\r\n  margin-top: 10%;\r\n  }\r\n\r\n.progress-bar{\r\n  color: #ffffff;\r\n  background-color: #5e0003;\r\n  border: solid #000000;\r\n  \r\n}\r\n\r\n.progress{\r\n  height: 25px;\r\n  background-color:#344042;\r\n  margin-top: 5px;\r\n  margin-bottom:10px;\r\n}\r\n\r\n.progressButton{\r\n  width: 100%;\r\n}\r\n\r\n.helpButton{\r\n  width: 20%;\r\n}\r\n\r\n.align-left{\r\n  float: left;\r\n}\r\n\r\n.align-right{\r\n  float:right;\r\n}\r\n\r\n.icon{\r\n  margin-top: 40%;\r\n  margin-bottom: 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Y7O0FBRUY7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjs7QUFFdkI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnByb2dyZXNzTGFiZWx7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgfVxyXG5cclxuLnByb2dyZXNzLWJhcntcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWUwMDAzO1xyXG4gIGJvcmRlcjogc29saWQgIzAwMDAwMDtcclxuICBcclxufVxyXG4ucHJvZ3Jlc3N7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzM0NDA0MjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NCdXR0b257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWxwQnV0dG9ue1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5hbGlnbi1sZWZ0e1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uYWxpZ24tcmlnaHR7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gIG1hcmdpbi10b3A6IDQwJTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.storage = window.localStorage;
        this.today = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en');
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.collapsed = true;
        this.firstTime = Boolean(this.storage.getItem("firstTime"));
        this.lastEnduranceDate = this.storage.getItem("lastEnduranceDate");
        this.lastStrengthDate = this.storage.getItem("lastStrengthDate");
        var diff = Math.abs(new Date(this.storage.getItem("lastEnduranceDate")).getTime() - new Date(this.today).getTime());
        var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        var lastdiff = Math.abs(new Date(this.storage.getItem("lastEnduranceDecrease")).getTime() - new Date(this.today).getTime());
        var lastdiffDays = Math.ceil(lastdiff / (1000 * 3600 * 24));
        var endurance = this.storage.getItem("endurance");
        if (diffDays > 10 && lastdiffDays > 3 && Number(endurance) > 10) {
            if (Number(endurance) >= 11) {
                this.storage.setItem("endurance", String(Number(endurance) - 1));
                alert("Due to inactivity in endurance related activities, your endurance has decreased.");
            }
            else {
                this.storage.setItem("endurance", String(11));
                alert("Due to inactivity in endurance related activities, your endurance is now back down to its original value of 10.");
            }
            this.storage.setItem("lastEnduranceDecrease", Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en'));
        }
        diff = Math.abs(new Date(this.storage.getItem("lastStrengthDate")).getTime() - new Date(this.today).getTime());
        diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        lastdiff = Math.abs(new Date(this.storage.getItem("lastStrengthDecrease")).getTime() - new Date(this.today).getTime());
        lastdiffDays = Math.ceil(lastdiff / (1000 * 3600 * 24));
        var strength = this.storage.getItem("strength");
        if (diffDays > 10 && lastdiffDays > 3 && Number(strength) > 10) {
            if (Number(strength) >= 11) {
                this.storage.setItem("strength", String(Number(strength) - 1));
                alert("Due to inactivity in strength related activities, your strength has decreased.");
            }
            else {
                this.storage.setItem("strength", String(11));
                alert("Due to inactivity in strength related activities, your strength is now back down to its original value of 10.");
            }
            this.storage.setItem("lastStrengthDecrease", Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en'));
        }
        this.getGoals();
    };
    HomeComponent.prototype.getGoals = function () {
        var runSuccess = Number(this.storage.getItem("runSuccess"));
        var bikeSuccess = Number(this.storage.getItem("bikeSuccess"));
        var swimSuccess = Number(this.storage.getItem("swimSuccess"));
        if (runSuccess >= bikeSuccess && runSuccess >= swimSuccess) {
            this.enduranceType = "run";
            this.endurancePercentage = 100 * (runSuccess / 4);
        }
        else if (bikeSuccess >= runSuccess && bikeSuccess >= swimSuccess) {
            this.enduranceType = "bike";
            this.endurancePercentage = 100 * (bikeSuccess / 4);
        }
        else if (swimSuccess >= runSuccess && swimSuccess >= bikeSuccess) {
            this.enduranceType = "swim";
            this.endurancePercentage = 100 * (swimSuccess / 4);
        }
        else {
            this.enduranceType = "run";
            this.endurancePercentage = 0;
        }
        var weightSuccess = Number(this.storage.getItem("weightSuccess"));
        var pushSuccess = Number(this.storage.getItem("pushSuccess"));
        var sitSuccess = Number(this.storage.getItem("sitSuccess"));
        var chinSuccess = Number(this.storage.getItem("chinSuccess"));
        if (weightSuccess >= pushSuccess && weightSuccess >= sitSuccess && weightSuccess >= chinSuccess) {
            this.strengthType = "weight";
            this.strengthPercentage = 100 * (weightSuccess / 4);
        }
        else if (pushSuccess >= weightSuccess && pushSuccess >= sitSuccess && pushSuccess >= chinSuccess) {
            this.strengthType = "push";
            this.strengthPercentage = 100 * (pushSuccess / 4);
        }
        else if (sitSuccess >= pushSuccess && sitSuccess >= weightSuccess && sitSuccess >= chinSuccess) {
            this.strengthType = "sit";
            this.strengthPercentage = 100 * (sitSuccess / 4);
        }
        else if (chinSuccess >= pushSuccess && chinSuccess >= sitSuccess && chinSuccess >= weightSuccess) {
            this.strengthType = "chin";
            this.strengthPercentage = 100 * (chinSuccess / 4);
        }
        else {
            this.strengthPercentage = 0;
            this.strengthType = "weight";
        }
        if (!(Number(this.storage.getItem("runDistance")) == 0 && Number(this.storage.getItem("bikeDistance")) == 0 && Number(this.storage.getItem("swimDistance")) == 0 && Number(this.storage.getItem("weightReps")) == 0 && Number(this.storage.getItem("pushReps")) == 0 && Number(this.storage.getItem("sitReps")) == 0 && Number(this.storage.getItem("chinReps")) == 0)) {
            this.firstTime = false;
            this.storage.setItem("firstTime", "false");
        }
    };
    HomeComponent.prototype.enduranceGoal = function () {
        if (Number(this.storage.getItem(this.enduranceType + "Distance")) > 0) {
            var newEnduranceGoal = (1.15 * Number(this.storage.getItem(this.enduranceType + "Distance"))).toFixed(3);
            alert("Your Next Goal: \nTry to " + this.enduranceType + " at least " + newEnduranceGoal + " km to get two more successes towards your Endurance.");
        }
        else {
            alert("You have not gone on an endurance related workout yet. Head on over to the Training Adventure page to get started!");
        }
    };
    HomeComponent.prototype.strengthGoal = function () {
        var newStrengthGoal = (1.15 * Number(this.storage.getItem(this.strengthType + "Reps"))).toFixed(0);
        if (Number(this.storage.getItem(this.strengthType + "Reps")) > 0) {
            if (this.strengthType == "weight") {
                alert("Your Next Goal: \nTry to lift " + Number(this.storage.getItem("weightWeight")).toFixed(0) + " lbs for at least " + Number(this.storage.getItem("weightSets")).toFixed(0) + " sets of " + newStrengthGoal + " reps to get two more successes towards your Strength.");
            }
            if (this.strengthType == "push") {
                alert("Your Next Goal: \nTry to do at least " + Number(this.storage.getItem("pushSets")).toFixed(0) + " sets of push ups, with " + newStrengthGoal + " reps to get two more successes towards your Strength.");
            }
            if (this.strengthType == "sit") {
                alert("Your Next Goal: \nTry to do at least " + Number(this.storage.getItem("sitSets")).toFixed(0) + " sets of sit ups, with " + newStrengthGoal + " reps to get two more successes towards your Strength.");
            }
            if (this.strengthType == "chin") {
                alert("Your Next Goal: \nTry to do at least " + Number(this.storage.getItem("chinSets")).toFixed(0) + " sets of chin ups, with " + newStrengthGoal + " reps to get two more successes towards your Strength.");
            }
        }
        else {
            alert("You have not gone on a strength related workout yet. Head on over to the Training Adventure page to get started!");
        }
    };
    HomeComponent.prototype.help = function () {
        if (confirm("This is the home page, where information about your progress towards stat increases are displayed. As you make progress towards your goals in the different exercise categories, you will get closer to increasing that exercise's governing stat.")) {
            if (confirm("This page will show the exercises that are closest to being leveled up. For information on your goals for these exercises, click the buttons associated with each exercise on this page.")) { }
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css"))["default"]]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html"))["default"],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css"))["default"]]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/stats/stats.component.css":
/*!*******************************************!*\
  !*** ./src/app/stats/stats.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".data{\r\n    text-align: right;\r\n    float: right;\r\n}\r\n\r\n.changeCat{\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n}\r\n\r\n.table{\r\n    border:3px solid black;\r\n    margin-top: 1px;\r\n    margin-bottom: 1px;\r\n    width: 100%;\r\n    height: 70px;\r\n\r\n}\r\n\r\n.row{\r\n    width: 100%;\r\n    margin-left: 0px;\r\n\r\n}\r\n\r\n.head{\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHMvc3RhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc3RhdHMvc3RhdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhe1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jaGFuZ2VDYXR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4udGFibGV7XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcblxyXG59XHJcblxyXG4ucm93e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG5cclxufVxyXG5cclxuLmhlYWR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
        this.storage = window.localStorage;
        this.category = ["User Data",
            "Running",
            "Swimming",
            "Biking",
            "Weights",
            "Push Ups",
            "Sit Ups",
            "Chin Ups"];
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.collapsed = true;
        this.index = 0;
        this.runDistance = this.storage.getItem("runDistance");
        this.runTime = new Date(0, 0, 0, 0, 0, 0);
        this.runTime.setSeconds(Number(this.storage.getItem("runTime")) / 1000);
        this.runNumber = this.storage.getItem("runNumber");
        this.runSuccess = this.storage.getItem("runSuccess");
        this.swimDistance = this.storage.getItem("swimDistance");
        this.swimTime = new Date(0, 0, 0, 0, 0, 0);
        this.swimTime.setSeconds(Number(this.storage.getItem("swimTime")) / 1000);
        this.swimNumber = this.storage.getItem("swimNumber");
        this.swimSuccess = this.storage.getItem("swimSuccess");
        this.bikeDistance = this.storage.getItem("bikeDistance");
        this.bikeTime = new Date(0, 0, 0, 0, 0, 0);
        this.bikeTime.setSeconds(Number(this.storage.getItem("bikeTime")) / 1000);
        this.bikeNumber = this.storage.getItem("bikeNumber");
        this.bikeSuccess = this.storage.getItem("bikeSuccess");
        this.weightWeight = this.storage.getItem("weightWeight");
        this.weightReps = this.storage.getItem("weightReps");
        this.weightSets = this.storage.getItem("weightSets");
        this.weightNumber = this.storage.getItem("weightNumber");
        this.weightSuccess = this.storage.getItem("weightSuccess");
        this.pushReps = this.storage.getItem("pushReps");
        this.pushSets = this.storage.getItem("pushSets");
        this.pushNumber = this.storage.getItem("pushNumber");
        this.pushSuccess = this.storage.getItem("pushSuccess");
        this.sitReps = this.storage.getItem("sitReps");
        this.sitSets = this.storage.getItem("sitSets");
        this.sitNumber = this.storage.getItem("sitNumber");
        this.sitSuccess = this.storage.getItem("sitSuccess");
        this.chinReps = this.storage.getItem("chinReps");
        this.chinSets = this.storage.getItem("chinSets");
        this.chinNumber = this.storage.getItem("chinNumber");
        this.chinSuccess = this.storage.getItem("chinSuccess");
        this.endurance = this.storage.getItem("endurance");
        this.strength = this.storage.getItem("strength");
        this.gold = this.storage.getItem("gold");
    };
    StatsComponent.prototype.catUp = function () {
        this.index++;
        if (this.index >= this.category.length) {
            this.index = 0;
        }
        console.log(this.index);
    };
    StatsComponent.prototype.catDown = function () {
        this.index--;
        if (this.index == -1) {
            this.index = this.category.length - 1;
        }
        console.log(this.index);
    };
    StatsComponent.prototype.help = function () {
        if (confirm("This is the page where you can view all of the data collected by the app! Feel free to poke around. There is some cool stuff here.")) { }
    };
    StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stats/stats.component.html"))["default"],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stats.component.css */ "./src/app/stats/stats.component.css"))["default"]]
        })
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/tracker/tracker.component.css":
/*!***********************************************!*\
  !*** ./src/app/tracker/tracker.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".percentage{\r\n    margin-right: 10%;\r\n}\r\n\r\n.yourIcon{\r\n    width: 60px;\r\n    height: 50px;\r\n}\r\n\r\n.background{\r\n    background-color: #4A4849;\r\n    border: 2px solid black;\r\n}\r\n\r\n.bottom{\r\n    margin-bottom: 20%;\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2tlci90cmFja2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3RyYWNrZXIvdHJhY2tlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcmNlbnRhZ2V7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLnlvdXJJY29ue1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRBNDg0OTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uYm90dG9te1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/tracker/tracker.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tracker/tracker.component.ts ***!
  \**********************************************/
/*! exports provided: TrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerComponent", function() { return TrackerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var TrackerComponent = /** @class */ (function () {
    function TrackerComponent() {
        this.storage = window.localStorage;
        this.tracking = false;
        this.currentDistance = 0;
    }
    TrackerComponent.prototype.ngOnInit = function () {
        this.collapsed = true;
        this.time = new Date(0, 0, 0, 0, 0, 0);
        this.time.setSeconds(0);
        this.getLocation();
        console.log("Saved Latitude: " + this.savedLatitude);
        console.log("Saved Longitude: " + this.savedLongitude);
        this.goalPercentage = 0;
        this.goal = Number(this.storage.getItem("runDistance"));
        if (this.goal == 0) {
            this.goal = 0.001;
        }
    };
    TrackerComponent.prototype.toggleTracking = function () {
        var _this = this;
        if (!this.tracking) {
            this.tracking = true;
            console.log("Beginning Tracking");
            this.startTracking();
            var startTime_1 = Date.now() - (this.counter || 0);
            this.timerRef = setInterval(function () {
                _this.counter = Date.now() - startTime_1;
                _this.time = new Date(0, 0, 0, 0, 0, 0);
                _this.time.setSeconds(_this.counter / 1000);
            });
        }
        else {
            this.tracking = false;
            clearInterval(this.timerRef);
            console.log("Ending Tracking");
            window.navigator.geolocation.clearWatch(this.watchID);
        }
    };
    TrackerComponent.prototype.startTracking = function () {
        var _this = this;
        var opts = { maximumAge: 1000, timeout: 5000, enableHighAccuracy: false };
        this.watchID = navigator.geolocation.watchPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            if (_this.savedLatitude == null && _this.savedLongitude == null) {
                _this.savedLatitude = latitude;
                _this.savedLongitude = longitude;
            }
            if (latitude - _this.savedLatitude != 0 && longitude - _this.savedLongitude != 0) {
                console.log(position);
                console.log("Current Distance: " + _this.currentDistance);
                var calculatedDistance = _this.calculateDistance(latitude, longitude, _this.savedLatitude, _this.savedLongitude);
                if (calculatedDistance > 0.0005 && calculatedDistance < 0.10) {
                    _this.currentDistance += calculatedDistance;
                }
                console.log("New Distance: " + _this.currentDistance);
                _this.savedLatitude = latitude;
                _this.savedLongitude = longitude;
                _this.goalPercentage = Number((100 * (_this.currentDistance / _this.goal)).toFixed());
            }
            //setTimeout(() => {}, 5000);
        }, function (err) {
            console.log(err);
        }, opts);
    };
    TrackerComponent.prototype.calculateDistance = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = (lat2 - lat1) * Math.PI / 180; // deg2rad below
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a = 0.5 - Math.cos(dLat) / 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * (1 - Math.cos(dLon)) / 2;
        var ret = R * 2 * Math.asin(Math.sqrt(a));
        console.log(ret);
        return ret;
    };
    TrackerComponent.prototype.getLocation = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            if (position) {
                _this.savedLatitude = position.coords.latitude;
                _this.savedLongitude = position.coords.longitude;
            }
        }, function (error) { return console.log(error); });
    };
    TrackerComponent.prototype.saveData = function () {
        var oldRunDistance = this.storage.getItem("runDistance");
        var oldRunTime = this.storage.getItem("runTime");
        //Getting withing 10% of your regular goal marks a success for the week
        //Getting above 15% of your average marks an extra success
        if (Number(oldRunDistance) > 0 && Number(oldRunDistance) * 1.15 <= this.currentDistance) //Getting withing 10% of your regular goal marks a success for the week
         {
            var success = this.storage.getItem("runSuccess");
            success = String(Number(success) + 2);
            this.storage.setItem("runSuccess", success);
        }
        else if (Number(oldRunDistance) > 0 && Number(oldRunDistance) * 0.9 < this.currentDistance) //Getting above 15% of your average marks an extra success
         {
            var success = this.storage.getItem("runSuccess");
            success = String(Number(success) + 1);
            this.storage.setItem("runSuccess", success);
        }
        if (this.currentDistance > 0) {
            var newRunNumber = Number(this.storage.getItem("runNumber"));
            var newRunDistance = ((Number(this.storage.getItem("runDistance")) * Number(newRunNumber)) + this.currentDistance) / (newRunNumber + 1);
            var newRunTime = ((Number(this.storage.getItem("runTime")) * Number(newRunNumber)) + this.counter) / (newRunNumber + 1);
            newRunNumber++;
            console.log(newRunNumber);
            console.log(newRunDistance);
            console.log(newRunTime);
            this.storage.setItem("runDistance", String(newRunDistance));
            this.storage.setItem("runNumber", String(newRunNumber));
            this.storage.setItem("runTime", String(newRunTime));
            this.storage.setItem("lastRunDate", Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en'));
        }
    };
    TrackerComponent.prototype.help = function () {
        if (confirm("In a tracked workout, the app will use the phone's GPS to get an approximation of the distance traveled during your run.")) {
            if (confirm("Your goal for each workout is to get withing 10% of your average. Doing so will count as one \"success\" towards a stat increase. If you manage to go at least 15% above your average, you will be rewarded with a second \"success\".")) { }
        }
    };
    TrackerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tracker',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tracker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tracker/tracker.component.html"))["default"],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tracker.component.css */ "./src/app/tracker/tracker.component.css"))["default"]]
        })
    ], TrackerComponent);
    return TrackerComponent;
}());



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

var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) { return console.error(err); });
var onDeviceReady = function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
};
document.addEventListener('deviceready', onDeviceReady, false);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\benmi\Documents\Senior Project\mcla_senior_project\merged attempt\rpg\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map