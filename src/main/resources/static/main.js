(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-list/car-list.component */ "./src/app/car-list/car-list.component.ts");
/* harmony import */ var _car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./car-edit/car-edit.component */ "./src/app/car-edit/car-edit.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _service_route_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/route-guard.service */ "./src/app/service/route-guard.service.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-todos/list-todos.component */ "./src/app/list-todos/list-todos.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");





//todos





//todos

var routes = [
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    {
        path: 'car-list',
        component: _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_3__["CarListComponent"]
    },
    {
        path: 'car-add',
        component: _car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_4__["CarEditComponent"]
    },
    {
        path: 'car-edit/:id',
        component: _car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_4__["CarEditComponent"]
    },
    { path: 'welcome/:name', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]] },
    { path: 'todos', component: _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_8__["ListTodosComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]] },
    { path: 'todos/:id', component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__["TodoComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]] }
];
// const routes: Routes = [
//   { path: '', component: LoginComponent  },//canActivate, RouteGuardService
//   { path: 'login', component: LoginComponent },
//   { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
//   { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService] },
//   { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },
//   { path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService] },
//   { path: '**', component: ErrorComponent }
// ];
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-menu></app-menu>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n\n\n<!-- <app-car-list></app-car-list> -->\n\n<app-footer></app-footer>\n\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular with Spring Boot';
        this.message = 'Welcome !!';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: API_URL, TODO_JPA_API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODO_JPA_API_URL", function() { return TODO_JPA_API_URL; });
//export const API_URL = "http://localhost:8080"
//export const TODO_JPA_API_URL = "http://localhost:8080/jpa"
var API_URL = "https://javanewproj.appspot.com";
var TODO_JPA_API_URL = "https://javanewproj.appspot.com/jpa";


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-list/car-list.component */ "./src/app/car-list/car-list.component.ts");
/* harmony import */ var _car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./car-edit/car-edit.component */ "./src/app/car-edit/car-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-todos/list-todos.component */ "./src/app/list-todos/list-todos.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");









//todos
//import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';









//todos
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_6__["CarListComponent"],
                _car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_7__["CarEditComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
                _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_12__["ListTodosComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_16__["TodoComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_17__["PortfolioComponent"] //todos end
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [
            //  {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/car-edit/car-edit.component.css":
/*!*************************************************!*\
  !*** ./src/app/car-edit/car-edit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhci1lZGl0L2Nhci1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/car-edit/car-edit.component.html":
/*!**************************************************!*\
  !*** ./src/app/car-edit/car-edit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <form #carForm=\"ngForm\" (ngSubmit)=\"save(carForm.value)\">\n      <h2>{{car.name ? 'Edit' : 'Add'}} Car</h2>\n      <input type=\"hidden\" name=\"href\" [(ngModel)]=\"car.href\">\n        <input  placeholder=\"Car Name\" [(ngModel)]=\"car.name\"\n               required name=\"name\" #name>\n      <button color=\"primary\" type=\"submit\"\n              [disabled]=\"!carForm.form.valid\">Save</button>\n      <button  color=\"secondary\" (click)=\"remove(car.href)\"\n              *ngIf=\"car.href\" type=\"button\">Delete</button>\n      <a routerLink=\"/car-list\">Cancel</a>\n      <!-- <div class=\"giphy\">\n        <img src=\"{{car.giphyUrl}}\" alt=\"{{car.name}}\">\n      </div> -->\n  </form>\n"

/***/ }),

/***/ "./src/app/car-edit/car-edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/car-edit/car-edit.component.ts ***!
  \************************************************/
/*! exports provided: CarEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarEditComponent", function() { return CarEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_car_car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/car/car.service */ "./src/app/shared/car/car.service.ts");




var CarEditComponent = /** @class */ (function () {
    function CarEditComponent(route, router, carService
    //   , private giphyService: GiphyService
    ) {
        this.route = route;
        this.router = router;
        this.carService = carService;
        this.car = {};
    }
    CarEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.carService.get(id).subscribe(function (car) {
                    if (car) {
                        _this.car = car;
                        _this.car.href = car._links.self.href;
                        // this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
                    }
                    else {
                        console.log("Car with id '" + id + "' not found, returning to list");
                        _this.gotoList();
                    }
                });
            }
        });
    };
    CarEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CarEditComponent.prototype.gotoList = function () {
        this.router.navigate(['/car-list']);
    };
    CarEditComponent.prototype.save = function (form) {
        var _this = this;
        this.carService.save(form).subscribe(function (result) {
            _this.gotoList();
        }, function (error) { return console.error(error); });
    };
    CarEditComponent.prototype.remove = function (href) {
        var _this = this;
        this.carService.remove(href).subscribe(function (result) {
            _this.gotoList();
        }, function (error) { return console.error(error); });
    };
    CarEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car-edit',
            template: __webpack_require__(/*! ./car-edit.component.html */ "./src/app/car-edit/car-edit.component.html"),
            styles: [__webpack_require__(/*! ./car-edit.component.css */ "./src/app/car-edit/car-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_car_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"]
            //   , private giphyService: GiphyService
        ])
    ], CarEditComponent);
    return CarEditComponent;
}());



/***/ }),

/***/ "./src/app/car-list/car-list.component.css":
/*!*************************************************!*\
  !*** ./src/app/car-list/car-list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhci1saXN0L2Nhci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/car-list/car-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/car-list/car-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Car List</h2>\n\n      <div *ngFor=\"let car of cars\">\n        <h3>\n          <a [routerLink]=\"['/car-edit', car.id]\">{{car.name}}</a>\n        </h3>\n      </div>\n   \n  <button  [routerLink]=\"['/car-add']\">Add</button>\n"

/***/ }),

/***/ "./src/app/car-list/car-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/car-list/car-list.component.ts ***!
  \************************************************/
/*! exports provided: CarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListComponent", function() { return CarListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_car_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/car/car.service */ "./src/app/shared/car/car.service.ts");



var CarListComponent = /** @class */ (function () {
    function CarListComponent(carService) {
        this.carService = carService;
    }
    CarListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getAll().subscribe(function (data) {
            _this.cars = data;
        });
    };
    CarListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car-list',
            template: __webpack_require__(/*! ./car-list.component.html */ "./src/app/car-list/car-list.component.html"),
            styles: [__webpack_require__(/*! ./car-list.component.css */ "./src/app/car-list/car-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_car_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"]])
    ], CarListComponent);
    return CarListComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{errorMessage}}"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.errorMessage = 'An Error Occured! Contact Support at *** - ***';
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: relative;\n    bottom: 0;\n    width:100%;\nheight: 40px;\n    background-color: #222222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2QsWUFBWTtJQUNSLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6MTAwJTtcbmhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <span class=\"text-muted\">All Rights Reserved @Company</span>\n    </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/list-todos/list-todos.component.css":
/*!*****************************************************!*\
  !*** ./src/app/list-todos/list-todos.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtdG9kb3MvbGlzdC10b2Rvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list-todos/list-todos.component.html":
/*!******************************************************!*\
  !*** ./src/app/list-todos/list-todos.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Todo </h1>\n\n<div class=\"alert alert-success\" *ngIf='message'>{{message}}</div>\n\n<div class=\"container\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Description</th>\n        <th>Target Date</th>\n        <th>is Completed?</th>\n        <th>Update</th>\n        <th>Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <!--   for (Todo todo: todos) {  -->\n              <tr *ngFor=\"let todo of todos\">\n                <td>{{todo.description}}</td>\n                <td>{{todo.targetDate | date | uppercase}}</td>\n                <td>{{todo.done}}</td>\n                <td><button (click)=\"updateTodo(todo.id)\" class=\"btn btn-success\">Update</button></td>\n                <td><button (click)=\"deleteTodo(todo.id)\" class=\"btn btn-warning\">Delete</button></td>\n              </tr>\n      <!-- } -->\n    </tbody>\n\n  </table>\n\n  <div class=\"row\">\n      <button (click)=\"addTodo()\" class=\"btn btn-success\">Add</button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/list-todos/list-todos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/list-todos/list-todos.component.ts ***!
  \****************************************************/
/*! exports provided: Todo, ListTodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTodosComponent", function() { return ListTodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/data/todo-data.service */ "./src/app/service/data/todo-data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Todo = /** @class */ (function () {
    function Todo(id, description, done, targetDate) {
        this.id = id;
        this.description = description;
        this.done = done;
        this.targetDate = targetDate;
    }
    return Todo;
}());

var ListTodosComponent = /** @class */ (function () {
    // = [
    //   new Todo(1, 'Learn to Dance', false, new Date()),
    //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
    //   new Todo(3, 'Visit India', false, new Date())
    //   // {id : 1, description : },
    //   // {id : 2, description : ''},
    //   // {id : 3, description : 'Visit India'}
    // ]
    // todo = {
    //     id : 1,
    //     description: 'Learn to Dance'
    // }
    function ListTodosComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
    }
    ListTodosComponent.prototype.ngOnInit = function () {
        this.refreshTodos();
    };
    ListTodosComponent.prototype.refreshTodos = function () {
        var _this = this;
        this.todoService.retrieveAllTodos('in28minutes').subscribe(function (response) {
            console.log(response);
            _this.todos = response;
        });
    };
    ListTodosComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        console.log("delete todo " + id);
        this.todoService.deleteTodo('in28minutes', id).subscribe(function (response) {
            console.log(response);
            _this.message = "Delete of Todo " + id + " Successful!";
            _this.refreshTodos();
        });
    };
    ListTodosComponent.prototype.updateTodo = function (id) {
        console.log("update " + id);
        this.router.navigate(['todos', id]);
    };
    ListTodosComponent.prototype.addTodo = function () {
        this.router.navigate(['todos', -1]);
    };
    ListTodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list-todos',
            template: __webpack_require__(/*! ./list-todos.component.html */ "./src/app/list-todos/list-todos.component.html"),
            styles: [__webpack_require__(/*! ./list-todos.component.css */ "./src/app/list-todos/list-todos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_1__["TodoDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListTodosComponent);
    return ListTodosComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<H1>Login!</H1>\n\n<div class=\"container\">\n  <div class=\"alert alert-warning\" *ngIf='invalidLogin'>{{errorMessage}}</div>\n\n  <div>\n    User Name : <input type=\"text\" name=\"username\" [(ngModel)]=\"username\">\n    Password  : <input type=\"password\" name=\"password\" [(ngModel)]=\"password\">\n\n    <!-- User Name : {{username}} -->\n\n    <!-- <button (click)=handleLogin() class=\"btn btn-success\">Login</button> -->\n    <!-- <button (click)=handleBasicAuthLogin() class=\"btn btn-success\">Login</button> -->\n    <button (click)=handleJWTAuthLogin() class=\"btn btn-success\">Login</button>\n    \n  </div>\n</div>"

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
/* harmony import */ var _service_basic_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/basic-authentication.service */ "./src/app/service/basic-authentication.service.ts");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    //Router
    //Angular.giveMeRouter
    //Dependency Injection
    function LoginComponent(router, hardcodedAuthenticationService, basicAuthenticationService) {
        this.router = router;
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.basicAuthenticationService = basicAuthenticationService;
        this.username = 'in28minutes';
        this.password = '';
        this.errorMessage = 'Invalid Credentials';
        this.invalidLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.handleLogin = function () {
        // console.log(this.username);
        //if(this.username==="in28minutes" && this.password === 'dummy') {
        if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
            //Redirect to Welcome Page
            this.router.navigate(['welcome', this.username]);
            this.invalidLogin = false;
        }
        else {
            this.invalidLogin = true;
        }
    };
    LoginComponent.prototype.handleBasicAuthLogin = function () {
        var _this = this;
        // console.log(this.username);
        //if(this.username==="in28minutes" && this.password === 'dummy') {
        this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['welcome', _this.username]);
            _this.invalidLogin = false;
        }, function (error) {
            console.log(error);
            _this.invalidLogin = true;
        });
    };
    LoginComponent.prototype.handleJWTAuthLogin = function () {
        var _this = this;
        this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['welcome', _this.username]);
            _this.invalidLogin = false;
        }, function (error) {
            console.log(error);
            _this.invalidLogin = true;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"],
            _service_basic_authentication_service__WEBPACK_IMPORTED_MODULE_1__["BasicAuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<H1>You are logged out</H1>\n<div class=\"container\">\n  Thank You For Using Our Application.\n</div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(hardcodedAuthenticationService) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.hardcodedAuthenticationService.logout();
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthenticationService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n        <!--    <nav class=\"navbar navbar-inverse navbar-fixed-top\">-->\n       <!--    <div class=\"container\">  -->\n        <div><a href=\"/\" class=\"navbar-brand\">\n            ngBoot</a></div>\n          <!--<div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">V</a>\n            </div>-->  \n             \n           <!-- <div class=\"collapse navbar-collapse\"  id=\"myNavbar\">-->\n     <!--   <ul class=\"nav navbar-nav\">-->\n        <ul class=\"navbar-nav\">\n            <li><a *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/welcome/ngBoot\" class=\"nav-link\">Home</a></li>\n            <li><a *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/todos\" class=\"nav-link\">Todos</a></li>\n            <li><a *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/portfolio\" class=\"nav-link\">MyPortfolio</a></li>\n           \n        </ul>\n\n        <ul class=\"navbar-nav navbar-collapse justify-content-end\">\n                <li><a *ngIf=\"!hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/login\" class=\"nav-link\">Login</a></li>\n                <li><a *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/logout\" class=\"nav-link\">Logout</a></li>\n        </ul>\n          <!-- </div>-->\n    <!--</div>-->\n    </nav>\n\n    \n</header>\n\n\n       \n        \n\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var MenuComponent = /** @class */ (function () {
    //isUserLoggedIn: boolean = false;
    function MenuComponent(hardcodedAuthenticationService) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthenticationService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background-color:#FF0!important;\n    \n}\n.s1{\n    color:white;\n    background: url('https://cdn-images-1.medium.com/max/1200/1*tFbqYogOnqbRz1GT0uGzwg.png');\n  }\n.sec1{\n   background-color:#ddd; \n\n  }\n.i1{\n      border-radius:10px;\n\n  }\n.vertical-align {\n      display: flex;\n      flex-direction:column;\n    justify-content:center;\n     align-items: left;\n\n\n  }\n.row-eq-height{\n      display: flex;\n  }\n#section3 {padding-top:50px;height:500px;color: #fff; background-color: #673ab7;}\n#section4 {padding-top:50px;height:500px;color: #ffF; background-color: #0Ff;}\n.s1 {padding-top:0px;height:260px;color: #fff; background-color: #673ab7;}\n.bttns {\n    position: absolute;\n    bottom: 0;\n    right:10px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCOztBQUVuQztBQUNBO0lBQ0ksV0FBVztJQUNYLHdGQUF3RjtFQUMxRjtBQUVBO0dBQ0MscUJBQXFCOztFQUV0QjtBQUNBO01BQ0ksa0JBQWtCOztFQUV0QjtBQUNBO01BQ0ksYUFBYTtNQUNiLHFCQUFxQjtJQUN2QixzQkFBc0I7S0FDckIsaUJBQWlCOzs7RUFHcEI7QUFFQTtNQUlJLGFBQWE7RUFDakI7QUFDRSxXQUFXLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUseUJBQXlCLENBQUM7QUFDakYsV0FBVyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLHNCQUFzQixDQUFDO0FBRTdFLEtBQUssZUFBZSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUseUJBQXlCLENBQUM7QUFDMUU7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkYwIWltcG9ydGFudDtcbiAgICBcbn1cbi5zMXtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vY2RuLWltYWdlcy0xLm1lZGl1bS5jb20vbWF4LzEyMDAvMSp0RmJxWW9nT25xYlJ6MUdUMHVHendnLnBuZycpO1xuICB9XG5cbiAgLnNlYzF7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGQ7IFxuXG4gIH1cbiAgLmkxe1xuICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuXG4gIH1cbiAgLnZlcnRpY2FsLWFsaWduIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgYWxpZ24taXRlbXM6IGxlZnQ7XG5cblxuICB9XG5cbiAgLnJvdy1lcS1oZWlnaHR7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAgICNzZWN0aW9uMyB7cGFkZGluZy10b3A6NTBweDtoZWlnaHQ6NTAwcHg7Y29sb3I6ICNmZmY7IGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7fVxuICAgI3NlY3Rpb240IHtwYWRkaW5nLXRvcDo1MHB4O2hlaWdodDo1MDBweDtjb2xvcjogI2ZmRjsgYmFja2dyb3VuZC1jb2xvcjogIzBGZjt9XG5cbiAgIC5zMSB7cGFkZGluZy10b3A6MHB4O2hlaWdodDoyNjBweDtjb2xvcjogI2ZmZjsgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNzt9XG4gIC5idHRucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDoxMHB4O1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n     <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\"/>\n  <link rel=\"stylesheet\" href=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css\">\n\n</head>\n \n<body>\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark \">\n   <!--<div class=\"collapse navbar-collapse\"  id=\"myNavbar\">--> \n  <div class=\"navbar-header\">\n     <!-- <a class=\"navbar-brand\" href=\"#\">V</a>-->\n<!--        V <img src=\"#\" alt=\"V\"> -->\n\n      <ul class=\"navbar-nav\" id=\"myNavbar\">\n        <!--  <li ><a class=\"nav-link\" href=\"#\">HOME </a></li>-->\n          <li class=\"active\"><a class=\"nav-link\"  href=\"#section2\">PORTFOLIO<span class=\"sr-only\">(current)</span></a></li> \n           <li><a class=\"nav-link\" href=\"#section3\">SERVICES</a></li>     \n           <li><a class=\"nav-link\" href=\"#section4\">ABOUT ME</a></li>  \n      </ul>\n      </div>\n    </nav>\n  <div id=\"section1\" class=\"container-fluid \">\n  <div class=\"row row-eq-height \">\n  <div class=\"s1  col-sm-10 col-md-10 \">\n\n    <h1>Software Developer</h1>\n    <h2>Frontend Web Development and\n      PL/SQL development</h2>\n    <div class=\"bttns pull-right\">\n  <a href=\"https://www.freecodecamp.com/vickispark\" target='_blank'><button class=\"btn btn-info\"><small><span class=\"glyphicon glyphicon-info-sign\"></span>freeCodeCamp</small>\n    </button></a>\n    </div>\n                </div>\n\n   <div class=\"sec1 col-sm-2 col-md-2 vertical-align\">\n      \n<img src=\"https://lh3.googleusercontent.com/-BMeF0fHpWfI/WBZDH4sfV3I/AAAAAAAAAH4/wex3rxNQQTQoNz_cTLi0wKWwvT7yyEUcQCEw/w139-h140-p/_20151217_134105.JPG\" alt=\"...\" class=\"i1 img-responsive\">\n  <br>  \n             <div>\n     <a href=\"https://www.facebook.com/vicki.spark.1\" target='_blank'> <button class=\"btn btn-primary  \"><i class=\"fa fa-facebook-square  fa-2x\"></i></button></a>\n     <a href=\"https://www.linkedin.com/in/vivek-pathi-b3b15448/\" target='_blank'>  <button class=\"btn btn-primary\"><i class=\"fa fa-linkedin-square fa-2x\"></i></button></a>\n             </div>\n    \n         </div>\n    </div>\n</div>\n  \n  <div id=\"section2\" class=\"s2 container-fluid\">\n    <h2 class=\"text-center \">>>>>PORTFOLIO>>>></h2>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n    <img src=\"https://lh5.ggpht.com/9V3yhML2mywA38y4zQH0LPD8M-h6kQCR6KnpxLK2WfEkuL3oKfcwBQzolVx3gqX6fK0=h310\" alt=\"...\" class=\"img-thumbnail img-responsive\"></div>\n            <div class=\"col-sm-6\">\n\n     <img src=\"https://lh5.ggpht.com/9V3yhML2mywA38y4zQH0LPD8M-h6kQCR6KnpxLK2WfEkuL3oKfcwBQzolVx3gqX6fK0=h310\" alt=\"...\" class=\"img-thumbnail img-responsive\"> <br><br></div>\n      \n      <div class=\"col-sm-6\">\n    <img src=\"https://lh5.ggpht.com/9V3yhML2mywA38y4zQH0LPD8M-h6kQCR6KnpxLK2WfEkuL3oKfcwBQzolVx3gqX6fK0=h310\" alt=\"...\" class=\"img-thumbnail img-responsive\"></div>\n        <div class=\"col-sm-6\">\n<img src=\"https://lh5.ggpht.com/9V3yhML2mywA38y4zQH0LPD8M-h6kQCR6KnpxLK2WfEkuL3oKfcwBQzolVx3gqX6fK0=h310\" alt=\"...\" class=\"img-thumbnail img-responsive\"></div>\n    </div>\n  </div>\n  \n  <div id=\"section3\" class=\"s3\">\n    <h2 class=\"text-center\">SERVICES</h2>\n  </div>\n  \n    <div id=\"section4\" class=\"s4\">\n    <h2 class=\"text-center\">ABOUT ME</h2>\n     <h2 id=\"con\" class=\"text-center\">CONTACT</h2>\n\n  </div>\n<script>\n// $(\"#po\").click(function() {\n//$(\"#po\").addClass(\"active\");\n//});\n\n$(document).ready(function() {\n    $(\"#con\").html('<h1>animated fadeOt</h1>');\n  $(\"li\").addClass(\"animated bounceInDown\");\n\n  // Add scrollspy to <body>\n  $('body').scrollspy({\n    target: \".navbar\",\n    offset: 50\n  });\n\n  // Add smooth scrolling on all links inside the navbar\n  $(\"#myNavbar a\").on('click', function(event) {\n    // Make sure this.hash has a value before overriding default behavior\n    if (this.hash !== \"\") {\n      // Prevent default anchor click behavior\n      event.preventDefault();\n\n      // Store hash\n      var hash = this.hash;\n\n      // Using jQuery's animate() method to add smooth page scroll\n      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area\n      $('html, body').animate({\n        scrollTop: $(hash).offset().top\n      }, 800, function() {\n\n        // Add hash (#) to URL when done scrolling (default click behavior)\n        window.location.hash = hash;\n      });\n    } // End if\n  });\n});\n</script>\n  </body>\n<style>\n  \n\n \n</style>  \n  </html>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/service/basic-authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/basic-authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: TOKEN, AUTHENTICATED_USER, BasicAuthenticationService, AuthenticationBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATED_USER", function() { return AUTHENTICATED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthenticationService", function() { return BasicAuthenticationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationBean", function() { return AuthenticationBean; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TOKEN = 'token';
var AUTHENTICATED_USER = 'authenticaterUser';
var BasicAuthenticationService = /** @class */ (function () {
    function BasicAuthenticationService(http) {
        this.http = http;
    }
    BasicAuthenticationService.prototype.executeJWTAuthenticationService = function (username, password) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/authenticate", {
            username: username,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, "Bearer " + data.token);
            return data;
        }));
        //console.log("Execute Hello World Bean Service")
    };
    BasicAuthenticationService.prototype.executeAuthenticationService = function (username, password) {
        var basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: basicAuthHeaderString
        });
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/basicauth", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
        }));
        //console.log("Execute Hello World Bean Service")
    };
    BasicAuthenticationService.prototype.getAuthenticatedUser = function () {
        return sessionStorage.getItem(AUTHENTICATED_USER);
    };
    BasicAuthenticationService.prototype.getAuthenticatedToken = function () {
        if (this.getAuthenticatedUser())
            return sessionStorage.getItem(TOKEN);
    };
    BasicAuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem(AUTHENTICATED_USER);
        return !(user === null);
    };
    BasicAuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem(AUTHENTICATED_USER);
        sessionStorage.removeItem(TOKEN);
    };
    BasicAuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BasicAuthenticationService);
    return BasicAuthenticationService;
}());

var AuthenticationBean = /** @class */ (function () {
    function AuthenticationBean(message) {
        this.message = message;
    }
    return AuthenticationBean;
}());



/***/ }),

/***/ "./src/app/service/data/todo-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/data/todo-data.service.ts ***!
  \***************************************************/
/*! exports provided: TodoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDataService", function() { return TodoDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var TodoDataService = /** @class */ (function () {
    function TodoDataService(http) {
        this.http = http;
    }
    TodoDataService.prototype.retrieveAllTodos = function (username) {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_1__["TODO_JPA_API_URL"] + "/users/" + username + "/todos");
        //console.log("Execute Hello World Bean Service")
    };
    TodoDataService.prototype.deleteTodo = function (username, id) {
        return this.http.delete(_app_constants__WEBPACK_IMPORTED_MODULE_1__["TODO_JPA_API_URL"] + "/users/" + username + "/todos/" + id);
    };
    TodoDataService.prototype.retrieveTodo = function (username, id) {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_1__["TODO_JPA_API_URL"] + "/users/" + username + "/todos/" + id);
    };
    TodoDataService.prototype.updateTodo = function (username, id, todo) {
        return this.http.put(_app_constants__WEBPACK_IMPORTED_MODULE_1__["TODO_JPA_API_URL"] + "/users/" + username + "/todos/" + id, todo);
    };
    TodoDataService.prototype.createTodo = function (username, todo) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_1__["TODO_JPA_API_URL"] + "/users/" + username + "/todos", todo);
    };
    TodoDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoDataService);
    return TodoDataService;
}());



/***/ }),

/***/ "./src/app/service/data/welcome-data.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/data/welcome-data.service.ts ***!
  \******************************************************/
/*! exports provided: HelloWorldBean, WelcomeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldBean", function() { return HelloWorldBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeDataService", function() { return WelcomeDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HelloWorldBean = /** @class */ (function () {
    function HelloWorldBean(message) {
        this.message = message;
    }
    return HelloWorldBean;
}());

var WelcomeDataService = /** @class */ (function () {
    function WelcomeDataService(http) {
        this.http = http;
    }
    WelcomeDataService.prototype.executeHelloWorldBeanService = function () {
        return this.http.get('http://localhost:8080/hello-world-bean');
        //console.log("Execute Hello World Bean Service")
    };
    //http://localhost:8080/hello-world/path-variable/in28minutes
    WelcomeDataService.prototype.executeHelloWorldServiceWithPathVariable = function (name) {
        // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
        // let headers = new HttpHeaders({
        //     Authorization: basicAuthHeaderString
        //   })
        return this.http.get("http://localhost:8080/hello-world/path-variable/" + name);
        //console.log("Execute Hello World Bean Service")
    };
    WelcomeDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WelcomeDataService);
    return WelcomeDataService;
}());



/***/ }),

/***/ "./src/app/service/hardcoded-authentication.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/hardcoded-authentication.service.ts ***!
  \*************************************************************/
/*! exports provided: HardcodedAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardcodedAuthenticationService", function() { return HardcodedAuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HardcodedAuthenticationService = /** @class */ (function () {
    function HardcodedAuthenticationService() {
    }
    HardcodedAuthenticationService.prototype.authenticate = function (username, password) {
        //console.log('before ' + this.isUserLoggedIn());
        // sessionStorage.setItem('authenticaterUser', 'vivek');
        if (username === "in28minutes" && password === 'dummy') {
            sessionStorage.setItem('authenticaterUser', username);
            //console.log('after ' + this.isUserLoggedIn());
            return true;
        }
        return false;
    };
    HardcodedAuthenticationService.prototype.isUserLoggedIn = function () {
        return true;
        //let user = sessionStorage.getItem('authenticaterUser')
        //return !(user === null)
    };
    HardcodedAuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem('authenticaterUser');
    };
    HardcodedAuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HardcodedAuthenticationService);
    return HardcodedAuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/route-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/route-guard.service.ts ***!
  \************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(hardcodedAuthenticationService, router) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.router = router;
    }
    RouteGuardService.prototype.canActivate = function (route, state) {
        if (this.hardcodedAuthenticationService.isUserLoggedIn())
            return true;
        this.router.navigate(['login']);
        return false;
    };
    RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/shared/car/car.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/car/car.service.ts ***!
  \*******************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CarService = /** @class */ (function () {
    function CarService(http) {
        this.http = http;
        //public API = '//localhost:8080';
        this.API = '//javanewproj.appspot.com';
        this.CAR_API = this.API + '/cars';
    }
    CarService.prototype.getAll = function () {
        return this.http.get(this.API + '/cool-cars');
    };
    CarService.prototype.get = function (id) {
        return this.http.get(this.CAR_API + '/' + id);
    };
    CarService.prototype.save = function (car) {
        var result;
        if (car['href']) {
            result = this.http.put(car.href, car);
        }
        else {
            result = this.http.post(this.CAR_API, car);
        }
        return result;
    };
    CarService.prototype.remove = function (href) {
        return this.http.delete(href);
    };
    CarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }) //when you annotated a class with @Injectable(), you had to register it as a provider in a module or component to use it. 
        //In Angular 6+, you can specify providedIn and it will auto-register itself when the app bootstraps.
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-invalid:not(form) {\n    border-left: 5px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<H1>Todo</H1>\n\n<div class=\"container\">\n  <div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && todoForm.invalid\">Enter valid values</div>\n  <div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && targetDate.invalid\">Enter valid Target Date</div>\n  <div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && description.invalid\">Enter atleast 5 characters in Description</div>\n  \n  <form (ngSubmit)=\"!todoForm.invalid && saveTodo()\" #todoForm=\"ngForm\">\n    <fieldset class=\"form-group\">\n      <label>Description</label>\n      <input type=\"text\" #description=\"ngModel\" \n            [(ngModel)]=\"todo.description\" class=\"form-control\" \n                name=\"description\" required=\"required\" minlength=\"5\">\n    </fieldset>\n\n    <fieldset class=\"form-group\">\n        <label>Target Date</label>\n        <input type=\"date\" #targetDate=\"ngModel\"\n        [ngModel]=\"todo.targetDate | date:'yyyy-MM-dd' \"\n        (ngModelChange)=\"todo.targetDate = $event\"\n        class=\"form-control\" name=\"targetDate\" required=\"required\" >\n    </fieldset>\n\n    <button type=\"submit\" class=\"btn btn-success\">Save</button>\n  </form>  \n</div>"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/data/todo-data.service */ "./src/app/service/data/todo-data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list-todos/list-todos.component */ "./src/app/list-todos/list-todos.component.ts");





var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoService, route, router) {
        this.todoService = todoService;
        this.route = route;
        this.router = router;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.todo = new _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_4__["Todo"](this.id, '', false, new Date());
        if (this.id != -1) {
            this.todoService.retrieveTodo('in28minutes', this.id)
                .subscribe(function (data) { return _this.todo = data; });
        }
    };
    TodoComponent.prototype.saveTodo = function () {
        var _this = this;
        if (this.id == -1) { //=== ==
            this.todoService.createTodo('in28minutes', this.todo)
                .subscribe(function (data) {
                console.log(data);
                _this.router.navigate(['todos']);
            });
        }
        else {
            this.todoService.updateTodo('in28minutes', this.id, this.todo)
                .subscribe(function (data) {
                console.log(data);
                _this.router.navigate(['todos']);
            });
        }
    };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_2__["TodoDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<H1>Welcome!</H1>\n\n<div class=\"container\">\n  Welcome {{name}}. You can manage your todos <a routerLink=\"/todos\">here</a>\n</div>\n\n<div class=\"container\">\n  Click here to get a customized welcome message \n  <button (click)=\"getWelcomeMessageWithParameter()\" class=\"btn btn-success\">Get Welcome Message</button>\n</div>\n\n<div class=\"container\" *ngIf=\"welcomeMessageFromService\">\n    <H2>Your Customized Welcome Message</H2>\n    {{welcomeMessageFromService}}\n  </div>\n\n  <!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n    <h1>\n      Welcome to {{ title }}!\n    </h1>\n    <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n  </div>\n  <h2>Here are some links to help you start: </h2>\n  <ul>\n    <li><h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2></li>\n    <li><h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2></li>\n    <li><h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2></li>\n  </ul>\n  "

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent, Class1, Class2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class1", function() { return Class1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class2", function() { return Class2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_data_welcome_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/data/welcome-data.service */ "./src/app/service/data/welcome-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



//package com.in28minutes.springboot.web;
//import org.springframework.boot.SpringApplication;
 //'./app.component';
//import { AppComponent } from '../app.component';
//@ComponentScan(
//      value = "com.in28minutes.springboot.web")
var WelcomeComponent = /** @class */ (function () {
    //String message = "Some Welcome Message"
    //public SpringBootFirstWebApplication() {	
    //ActivatedRoute
    function WelcomeComponent(route, service) {
        this.route = route;
        this.service = service;
        this.title = 'Angular with Spring Boot';
        this.message = 'Some Welcome Message';
        this.name = '';
    }
    // void init() {
    WelcomeComponent.prototype.ngOnInit = function () {
        //COMPILATION ERROR this.message = 5
        //console.log(this.message)
        // console.log(this.route.snapshot.params['name'])
        this.name = this.route.snapshot.params['name'];
    };
    WelcomeComponent.prototype.getWelcomeMessage = function () {
        //console.log(this.service.executeHelloWorldBeanService());
        var _this = this;
        this.service.executeHelloWorldBeanService().subscribe(function (response) { return _this.handleSuccessfulResponse(response); }, function (error) { return _this.handleErrorResponse(error); });
        //console.log('last line of getWelcomeMessage')
        //console.log("get welcome message");
    };
    WelcomeComponent.prototype.getWelcomeMessageWithParameter = function () {
        //console.log(this.service.executeHelloWorldBeanService());
        var _this = this;
        this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(function (response) { return _this.handleSuccessfulResponse(response); }, function (error) { return _this.handleErrorResponse(error); });
        //console.log('last line of getWelcomeMessage')
        //console.log("get welcome message");
    };
    WelcomeComponent.prototype.handleSuccessfulResponse = function (response) {
        this.welcomeMessageFromService = response.message;
        //console.log(response);
        //console.log(response.message);
    };
    WelcomeComponent.prototype.handleErrorResponse = function (error) {
        //console.log(error);
        //console.log(error.error);
        //console.log(error.error.message);
        this.welcomeMessageFromService = error.error.message;
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        })
        //public class SpringBootFirstWebApplication implements SomeInterface{
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_data_welcome_data_service__WEBPACK_IMPORTED_MODULE_1__["WelcomeDataService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());

var Class1 = /** @class */ (function () {
    function Class1() {
    }
    return Class1;
}());

var Class2 = /** @class */ (function () {
    function Class2() {
    }
    return Class2;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vickispark/Desktop/GitRepo/ngboot/aglr-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map