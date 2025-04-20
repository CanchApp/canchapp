(self["webpackChunkmf_host"] = self["webpackChunkmf_host"] || []).push([[962],{

/***/ 1388:
/*!********************************************************!*\
  !*** ./projects/mf-host/src/app/app-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 690);
/* harmony import */ var _angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular-architects/module-federation */ 3879);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ 4897);
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ 9970);
/* harmony import */ var _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/main-layout/main-layout.component */ 1074);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/register/register.component */ 3969);
/* harmony import */ var _guards_authGuard_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/authGuard.guard */ 8983);
/* harmony import */ var _pages_multilogin_multilogin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/multilogin/multilogin.component */ 3851);
/* harmony import */ var _pages_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/unauthorized/unauthorized.component */ 6679);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ 2086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_10__);













const routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: '',
  component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__.AuthLayoutComponent,
  children: [{
    path: 'home',
    component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
  }, {
    path: 'login',
    component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
  }, {
    path: 'register',
    component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent
  }, {
    path: 'multilogin',
    component: _pages_multilogin_multilogin_component__WEBPACK_IMPORTED_MODULE_7__.MultiLoginComponent,
    canActivate: [_guards_authGuard_guard__WEBPACK_IMPORTED_MODULE_6__.authGuardMultilogin]
  }]
}, {
  path: '',
  component: _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__.MainLayoutComponent,
  children: [{
    path: 'unauthorized',
    component: _pages_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_8__.UnauthorizedComponent,
    canActivate: [_guards_authGuard_guard__WEBPACK_IMPORTED_MODULE_6__.authGuard]
  }, {
    path: 'user-management',
    canActivate: [_guards_authGuard_guard__WEBPACK_IMPORTED_MODULE_6__.authGuard],
    loadChildren: () => (0,_angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_11__.loadRemoteModule)({
      type: 'module',
      remoteEntry: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.remotes.mfUser,
      exposedModule: './UserModule'
    }).then(m => m.UserModule)
  }, {
    path: 'dashboard',
    canActivate: [_guards_authGuard_guard__WEBPACK_IMPORTED_MODULE_6__.authGuard],
    loadChildren: () => (0,_angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_11__.loadRemoteModule)({
      type: 'module',
      remoteEntry: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.remotes.mfDashBoard,
      exposedModule: './DashboardModule'
    }).then(m => m.DashboardModule)
  }, {
    path: 'company',
    canActivate: [_guards_authGuard_guard__WEBPACK_IMPORTED_MODULE_6__.authGuard],
    loadChildren: () => (0,_angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_11__.loadRemoteModule)({
      type: 'module',
      remoteEntry: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.remotes.mfCompany,
      exposedModule: './CompanyModule'
    }).then(m => m.CompanyModule)
  }, {
    path: 'catalog',
    canActivate: [_guards_authGuard_guard__WEBPACK_IMPORTED_MODULE_6__.authGuard],
    loadChildren: () => (0,_angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_11__.loadRemoteModule)({
      type: 'module',
      remoteEntry: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.remotes.mfCatalog,
      exposedModule: './CatalogModule'
    }).then(m => m.CatalogModule)
  }, {
    path: 'booking',
    canActivate: [_guards_authGuard_guard__WEBPACK_IMPORTED_MODULE_6__.authGuard],
    loadChildren: () => (0,_angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_11__.loadRemoteModule)({
      type: 'module',
      remoteEntry: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.remotes.mfBooking,
      exposedModule: './BookingModule'
    }).then(m => m.BookingModule)
  }, {
    path: 'report',
    canActivate: [_guards_authGuard_guard__WEBPACK_IMPORTED_MODULE_6__.authGuard],
    loadChildren: () => (0,_angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_11__.loadRemoteModule)({
      type: 'module',
      remoteEntry: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.remotes.mfReport,
      exposedModule: './ReportModule'
    }).then(m => m.ReportModule)
  }]
}];
let AppRoutingModule = /*#__PURE__*/(() => {
  class AppRoutingModule {
    static {
      this.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
      });
    }
  }
  return AppRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ }),

/***/ 5338:
/*!***************************************************!*\
  !*** ./projects/mf-host/src/app/app.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);



let AppComponent = /*#__PURE__*/(() => {
  class AppComponent {
    constructor(translate) {
      this.translate = translate;
      this.title = 'mf-host';
      translate.setDefaultLang('es');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang ?? 'en');
    }
    static {
      this.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return AppComponent;
})();

/***/ }),

/***/ 8173:
/*!************************************************!*\
  !*** ./projects/mf-host/src/app/app.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6306);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 63);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 1522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 7229);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 6762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 1388);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 5338);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ 690);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ 4897);
/* harmony import */ var _pages_multilogin_multilogin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/multilogin/multilogin.component */ 3851);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 6919);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 2369);
/* harmony import */ var _components_foot_foot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/foot/foot.component */ 3841);
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ 9970);
/* harmony import */ var _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/main-layout/main-layout.component */ 1074);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/register/register.component */ 3969);
/* harmony import */ var _pages_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/unauthorized/unauthorized.component */ 6679);
/* harmony import */ var auth_lib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! auth-lib */ 6907);
/* harmony import */ var auth_lib__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(auth_lib__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! commons-lib */ 8883);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(commons_lib__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-mask */ 3489);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ngx_mask__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_20__);






















function HttpLoaderFactory(httpClient) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}
let AppModule = /*#__PURE__*/(() => {
  class AppModule {
    static {
      this.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent]
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
        providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.provideClientHydration)(), (0,ngx_mask__WEBPACK_IMPORTED_MODULE_19__.provideNgxMask)()],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, auth_lib__WEBPACK_IMPORTED_MODULE_17__.AuthLibModule, commons_lib__WEBPACK_IMPORTED_MODULE_18__.CommonLibModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule.forRoot({
          defaultLanguage: 'es',
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient]
          }
        })]
      });
    }
  }
  return AppModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__.LoginComponent, _pages_multilogin_multilogin_component__WEBPACK_IMPORTED_MODULE_9__.MultiLoginComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.SidebarComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__.NavbarComponent, _components_foot_foot_component__WEBPACK_IMPORTED_MODULE_12__.FootComponent, _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__.AuthLayoutComponent, _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_14__.MainLayoutComponent, _pages_register_register_component__WEBPACK_IMPORTED_MODULE_15__.RegisterComponent, _pages_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_16__.UnauthorizedComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, auth_lib__WEBPACK_IMPORTED_MODULE_17__.AuthLibModule, commons_lib__WEBPACK_IMPORTED_MODULE_18__.CommonLibModule, ngx_mask__WEBPACK_IMPORTED_MODULE_19__.NgxMaskDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_19__.NgxMaskPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule]
  });
})();

/***/ }),

/***/ 3841:
/*!********************************************************************!*\
  !*** ./projects/mf-host/src/app/components/foot/foot.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FootComponent: () => (/* binding */ FootComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

let FootComponent = /*#__PURE__*/(() => {
  class FootComponent {
    static {
      this.ɵfac = function FootComponent_Factory(t) {
        return new (t || FootComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FootComponent,
        selectors: [["foot"]],
        decls: 19,
        vars: 0,
        consts: [[1, "footer"], [1, "container-fluid"], [1, "pull-left"], [1, "nav"], [1, "nav-item"], ["href", "http://www.themekita.com", 1, "nav-link"], ["href", "#", 1, "nav-link"], [1, "copyright", "ms-auto"], [1, "fa", "fa-heart", "heart", "text-danger"], ["href", "http://www.themekita.com"]],
        template: function FootComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "nav", 2)(3, "ul", 3)(4, "li", 4)(5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ThemeKita ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4)(8, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Help ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4)(11, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Licenses ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 2024, made with ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " by ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ThemeKita");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          }
        },
        encapsulation: 2
      });
    }
  }
  return FootComponent;
})();

/***/ }),

/***/ 2369:
/*!************************************************************************!*\
  !*** ./projects/mf-host/src/app/components/navbar/navbar.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 8086);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 6762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);




let NavbarComponent = /*#__PURE__*/(() => {
  class NavbarComponent {
    constructor(translate, authService) {
      this.translate = translate;
      this.authService = authService;
    }
    onClicklogOut() {
      this.authService.logout();
    }
    static {
      this.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["navbar"]],
        decls: 217,
        vars: 3,
        consts: [[1, "main-header"], [1, "main-header-logo"], ["data-background-color", "dark", 1, "logo-header"], ["href", "index.html", 1, "logo"], ["src", "assets/img/kaiadmin/logo_light.svg", "alt", "navbar brand", "height", "20", 1, "navbar-brand"], [1, "nav-toggle"], [1, "btn", "btn-toggle", "toggle-sidebar"], [1, "gg-menu-right"], [1, "btn", "btn-toggle", "sidenav-toggler"], [1, "gg-menu-left"], [1, "topbar-toggler", "more"], [1, "gg-more-vertical-alt"], [1, "navbar", "navbar-header", "navbar-header-transparent", "navbar-expand-lg", "border-bottom"], [1, "container-fluid"], [1, "navbar", "navbar-header-left", "navbar-expand-lg", "navbar-form", "nav-search", "p-0", "d-none", "d-lg-flex"], [1, "input-group"], [1, "input-group-prepend"], ["type", "submit", 1, "btn", "btn-search", "pe-1"], [1, "fa", "fa-search", "search-icon"], ["type", "text", "placeholder", "Search ...", 1, "form-control"], [1, "navbar-nav", "topbar-nav", "ms-md-auto", "align-items-center"], [1, "nav-item", "topbar-icon", "dropdown", "hidden-caret", "d-flex", "d-lg-none"], ["data-bs-toggle", "dropdown", "href", "#", "role", "button", "aria-expanded", "false", "aria-haspopup", "true", 1, "nav-link", "dropdown-toggle"], [1, "fa", "fa-search"], [1, "dropdown-menu", "dropdown-search", "animated", "fadeIn"], [1, "navbar-left", "navbar-form", "nav-search"], [1, "nav-item", "topbar-icon", "dropdown", "hidden-caret"], ["href", "#", "id", "messageDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fa", "fa-envelope"], ["aria-labelledby", "messageDropdown", 1, "dropdown-menu", "messages-notif-box", "animated", "fadeIn"], [1, "dropdown-title", "d-flex", "justify-content-between", "align-items-center"], ["href", "#", 1, "small"], [1, "message-notif-scroll", "scrollbar-outer"], [1, "notif-center"], ["href", "#"], [1, "notif-img"], ["src", "assets/img/jm_denis.jpg", "alt", "Img Profile"], [1, "notif-content"], [1, "subject"], [1, "block"], [1, "time"], ["src", "assets/img/chadengle.jpg", "alt", "Img Profile"], ["src", "assets/img/mlane.jpg", "alt", "Img Profile"], ["src", "assets/img/talha.jpg", "alt", "Img Profile"], ["href", "javascript:void(0);", 1, "see-all"], [1, "fa", "fa-angle-right"], ["href", "#", "id", "notifDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fa", "fa-bell"], [1, "notification"], ["aria-labelledby", "notifDropdown", 1, "dropdown-menu", "notif-box", "animated", "fadeIn"], [1, "dropdown-title"], [1, "notif-scroll", "scrollbar-outer"], [1, "notif-icon", "notif-primary"], [1, "fa", "fa-user-plus"], [1, "notif-icon", "notif-success"], [1, "fa", "fa-comment"], ["src", "assets/img/profile2.jpg", "alt", "Img Profile"], [1, "notif-icon", "notif-danger"], [1, "fa", "fa-heart"], ["data-bs-toggle", "dropdown", "href", "#", "aria-expanded", "false", 1, "nav-link"], [1, "fas", "fa-layer-group"], [1, "dropdown-menu", "quick-actions", "animated", "fadeIn"], [1, "quick-actions-header"], [1, "title", "mb-1"], [1, "subtitle", "op-7"], [1, "quick-actions-scroll", "scrollbar-outer"], [1, "quick-actions-items"], [1, "row", "m-0"], ["href", "#", 1, "col-6", "col-md-4", "p-0"], [1, "quick-actions-item"], [1, "avatar-item", "bg-danger", "rounded-circle"], [1, "far", "fa-calendar-alt"], [1, "text"], [1, "avatar-item", "bg-warning", "rounded-circle"], [1, "fas", "fa-map"], [1, "avatar-item", "bg-info", "rounded-circle"], [1, "fas", "fa-file-excel"], [1, "avatar-item", "bg-success", "rounded-circle"], [1, "fas", "fa-envelope"], [1, "avatar-item", "bg-primary", "rounded-circle"], [1, "fas", "fa-file-invoice-dollar"], [1, "avatar-item", "bg-secondary", "rounded-circle"], [1, "fas", "fa-credit-card"], [1, "nav-item", "topbar-user", "dropdown", "hidden-caret"], ["data-bs-toggle", "dropdown", "href", "#", "aria-expanded", "false", 1, "dropdown-toggle", "profile-pic"], [1, "avatar-sm"], ["src", "assets/img/profile.jpg", "alt", "...", 1, "avatar-img", "rounded-circle"], [1, "profile-username"], [1, "op-7"], [1, "fw-bold"], [1, "dropdown-menu", "dropdown-user", "animated", "fadeIn"], [1, "dropdown-user-scroll", "scrollbar-outer"], [1, "user-box"], [1, "avatar-lg"], ["src", "assets/img/profile.jpg", "alt", "image profile", 1, "avatar-img", "rounded"], [1, "u-text"], [1, "text-muted"], ["href", "profile.html", 1, "btn", "btn-xs", "btn-secondary", "btn-sm"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item"], ["href", "#", 1, "dropdown-item", 3, "click"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 12)(13, "div", 13)(14, "nav", 14)(15, "div", 15)(16, "div", 16)(17, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 20)(21, "li", 21)(22, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 24)(25, "form", 25)(26, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 26)(29, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 29)(32, "li")(33, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Messages ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Mark all as read");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li")(38, "div", 32)(39, "div", 33)(40, "a", 34)(41, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 37)(44, "span", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Jimmy Denis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " How are you ? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "5 minutes ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 34)(51, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 37)(54, "span", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Chad");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Ok, Thanks ! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "12 minutes ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 34)(61, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 37)(64, "span", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Jhon Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Ready for the meeting today... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "12 minutes ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 34)(71, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 37)(74, "span", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Talha");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Hi, Apa Kabar ? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "17 minutes ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li")(81, "a", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "See all messages");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 26)(85, "a", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul", 49)(90, "li")(91, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "You have 4 new notification");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li")(94, "div", 51)(95, "div", 33)(96, "a", 34)(97, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 37)(100, "span", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " New user registered ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "5 minutes ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 34)(105, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 37)(108, "span", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Rahmad commented on Admin ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "12 minutes ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 34)(113, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 37)(116, "span", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Reza send messages to you ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "12 minutes ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 34)(121, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 37)(124, "span", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Farrah liked Admin ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "17 minutes ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li")(129, "a", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "See all notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li", 26)(133, "a", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 61)(136, "div", 62)(137, "span", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Quick Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Shortcuts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 65)(142, "div", 66)(143, "div", 67)(144, "a", 68)(145, "div", 69)(146, "div", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Calendar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 68)(151, "div", 69)(152, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Maps");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 68)(157, "div", 69)(158, "div", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Reports");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 68)(163, "div", 69)(164, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Emails");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 68)(169, "div", 69)(170, "div", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Invoice");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 68)(175, "div", 69)(176, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Payments");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li", 83)(181, "a", 84)(182, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 87)(185, "span", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Hi,");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Hizrian");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "ul", 90)(190, "div", 91)(191, "li")(192, "div", 92)(193, "div", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 95)(196, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Hizrian");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " fsdfsd@outlook.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "View Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "div", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "My Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "My Balance");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Inbox");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "div", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Account Setting");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "div", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "a", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_214_listener() {
              return ctx.onClicklogOut();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](216, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](215);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](216, 1, "Login.Logout"));
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return NavbarComponent;
})();

/***/ }),

/***/ 6919:
/*!**************************************************************************!*\
  !*** ./projects/mf-host/src/app/components/sidebar/sidebar.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6306);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8648);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 1522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);





function SidebarComponent_li_15_ng_container_1_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 91)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const sub_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sub_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "SideMenu." + sub_r1.namei18n));
  }
}
function SidebarComponent_li_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 89)(8, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SidebarComponent_li_15_ng_container_1_li_9_Template, 5, 4, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#" + item_r2.route, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "SideMenu." + item_r2.namei18n));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r2.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.subMenu);
  }
}
function SidebarComponent_li_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r2.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.namei18n);
  }
}
function SidebarComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_15_ng_container_1_Template, 10, 7, "ng-container", 86)(2, SidebarComponent_li_15_ng_template_2_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const singleItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.subMenu && item_r2.subMenu.length > 0)("ngIfElse", singleItem_r3);
  }
}
let SidebarComponent = /*#__PURE__*/(() => {
  class SidebarComponent {
    constructor(http) {
      this.http = http;
      this.sideMenuUrl = 'assets/data/side-menu.json';
      this.sideMenuData = [];
      this.createMenu();
    }
    createMenu() {
      this.http.get(this.sideMenuUrl).subscribe(data => this.mapMenuItems(data));
    }
    mapMenuItems(menu) {
      const userModules = JSON.parse(localStorage.getItem("ROLES_MODULES"));
      // Filtrar los módulos a los que el usuario tiene acceso (actions.read === true)
      const allowedModules = userModules.filter(module => module.actions.read).map(module => module.moduleName);
      this.sideMenuData = this.filterMenu(menu, allowedModules);
    }
    filterMenu(menu, allowedModules) {
      return menu.map(item => {
        // Si el módulo está en la lista de permitidos, lo mantenemos
        if (item.modules.some(module => allowedModules.includes(module))) {
          let newItem = {
            ...item
          };
          // Si tiene submenús, filtramos recursivamente
          if (newItem?.subMenu) {
            newItem.subMenu = this.filterMenu(newItem.subMenu, allowedModules);
          }
          return newItem;
        }
        return null;
      }).filter(item => item !== null);
    }
    static {
      this.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["sidebar"]],
        decls: 221,
        vars: 1,
        consts: [["singleItem", ""], ["data-background-color", "dark", 1, "sidebar"], [1, "sidebar-logo"], ["data-background-color", "dark", 1, "logo-header"], ["href", "index.html", 1, "logo"], ["src", "assets/img/kaiadmin/logo_light.svg", "alt", "navbar brand", "height", "20", 1, "navbar-brand"], [1, "nav-toggle"], [1, "btn", "btn-toggle", "toggle-sidebar"], [1, "gg-menu-right"], [1, "btn", "btn-toggle", "sidenav-toggler"], [1, "gg-menu-left"], [1, "topbar-toggler", "more"], [1, "gg-more-vertical-alt"], [1, "sidebar-wrapper", "scrollbar", "scrollbar-inner"], [1, "sidebar-content"], [1, "nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav", "nav-secondary"], [1, "nav-item", "active"], ["data-bs-toggle", "collapse", "href", "#dashboard", "aria-expanded", "false", 1, "collapsed"], [1, "fas", "fa-home"], [1, "caret"], ["id", "dashboard", 1, "collapse"], [1, "nav", "nav-collapse"], ["href", "../demo1/index.html"], [1, "sub-item"], [1, "nav-item"], ["href", "/user-management/users"], [1, "fas", "fa-users"], ["href", "/user-management/roles"], [1, "fas", "fa-pencil-square"], [1, "nav-section"], [1, "sidebar-mini-icon"], [1, "fa", "fa-ellipsis-h"], [1, "text-section"], ["data-bs-toggle", "collapse", "href", "#base"], [1, "fas", "fa-layer-group"], ["id", "base", 1, "collapse"], ["href", "components/avatars.html"], ["href", "components/buttons.html"], ["href", "components/gridsystem.html"], ["href", "components/panels.html"], ["href", "components/notifications.html"], ["href", "components/sweetalert.html"], ["href", "components/font-awesome-icons.html"], ["href", "components/simple-line-icons.html"], ["href", "components/typography.html"], ["data-bs-toggle", "collapse", "href", "#sidebarLayouts"], [1, "fas", "fa-th-list"], ["id", "sidebarLayouts", 1, "collapse"], ["href", "sidebar-style-2.html"], ["href", "icon-menu.html"], ["data-bs-toggle", "collapse", "href", "#forms"], [1, "fas", "fa-pen-square"], ["id", "forms", 1, "collapse"], ["href", "forms/forms.html"], ["data-bs-toggle", "collapse", "href", "#tables"], [1, "fas", "fa-table"], ["id", "tables", 1, "collapse"], ["href", "tables/tables.html"], ["href", "tables/datatables.html"], ["data-bs-toggle", "collapse", "href", "#maps"], [1, "fas", "fa-map-marker-alt"], ["id", "maps", 1, "collapse"], ["href", "maps/googlemaps.html"], ["href", "maps/jsvectormap.html"], ["data-bs-toggle", "collapse", "href", "#charts"], [1, "far", "fa-chart-bar"], ["id", "charts", 1, "collapse"], ["href", "charts/charts.html"], ["href", "charts/sparkline.html"], ["href", "widgets.html"], [1, "fas", "fa-desktop"], [1, "badge", "badge-success"], ["href", "../../documentation/index.html"], [1, "fas", "fa-file"], [1, "badge", "badge-secondary"], ["data-bs-toggle", "collapse", "href", "#submenu"], [1, "fas", "fa-bars"], ["id", "submenu", 1, "collapse"], ["data-bs-toggle", "collapse", "href", "#subnav1"], ["id", "subnav1", 1, "collapse"], [1, "nav", "nav-collapse", "subnav"], ["href", "#"], ["data-bs-toggle", "collapse", "href", "#subnav2"], ["id", "subnav2", 1, "collapse"], [4, "ngIf", "ngIfElse"], ["data-bs-toggle", "collapse", "aria-expanded", "false", 1, "collapsed", 3, "href"], [1, "fas", 3, "ngClass"], [1, "collapse", 3, "id"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6)(6, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13)(13, "div", 14)(14, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SidebarComponent_li_15_Template, 4, 2, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 17)(17, "li", 18)(18, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 22)(24, "ul", 23)(25, "li")(26, "a", 24)(27, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Dashboard 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 26)(30, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Usuarios");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 26)(35, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Usuarios");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 26)(40, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Roles");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 31)(45, "span", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Components");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 26)(50, "a", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Base");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 37)(56, "ul", 23)(57, "li")(58, "a", 38)(59, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Avatars");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li")(62, "a", 39)(63, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Buttons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li")(66, "a", 40)(67, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Grid System");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li")(70, "a", 41)(71, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Panels");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li")(74, "a", 42)(75, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li")(78, "a", 43)(79, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sweet Alert");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li")(82, "a", 44)(83, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Font Awesome Icons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li")(86, "a", 45)(87, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Simple Line Icons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li")(90, "a", 46)(91, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Typography");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 26)(94, "a", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Sidebar Layouts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 49)(100, "ul", 23)(101, "li")(102, "a", 50)(103, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Sidebar Style 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li")(106, "a", 51)(107, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Icon Menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 26)(110, "a", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Forms");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 54)(116, "ul", 23)(117, "li")(118, "a", 55)(119, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Basic Form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 26)(122, "a", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Tables");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 58)(128, "ul", 23)(129, "li")(130, "a", 59)(131, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Basic Table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li")(134, "a", 60)(135, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Datatables");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 26)(138, "a", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Maps");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 63)(144, "ul", 23)(145, "li")(146, "a", 64)(147, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Google Maps");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li")(150, "a", 65)(151, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Jsvectormap");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li", 26)(154, "a", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Charts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 68)(160, "ul", 23)(161, "li")(162, "a", 69)(163, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Chart Js");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li")(166, "a", 70)(167, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Sparkline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li", 26)(170, "a", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Widgets");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li", 26)(177, "a", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Documentation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li", 26)(184, "a", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Menu Levels");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 79)(190, "ul", 23)(191, "li")(192, "a", 80)(193, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Level 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 81)(197, "ul", 82)(198, "li")(199, "a", 83)(200, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Level 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li")(203, "a", 83)(204, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Level 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li")(207, "a", 84)(208, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Level 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 85)(212, "ul", 82)(213, "li")(214, "a", 83)(215, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Level 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "li")(218, "a", 83)(219, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Level 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sideMenuData);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return SidebarComponent;
})();

/***/ }),

/***/ 8983:
/*!************************************************************!*\
  !*** ./projects/mf-host/src/app/guards/authGuard.guard.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard),
/* harmony export */   authGuardMultilogin: () => (/* binding */ authGuardMultilogin)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 8086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



const authGuard = (route, state) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router);
  if (authService.isAuthenticated()) {
    return true; // Permite el acceso si el usuario está autenticado
  } else {
    router.navigate(['/login']); // Redirige a la página de inicio de sesión si no está autenticado
    return false;
  }
};
const authGuardMultilogin = (route, state) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router);
  if (authService.isAuthenticatedMultilogin()) {
    return true; // Permite el acceso si el usuario está autenticado
  } else if (authService.isAuthenticated()) {
    router.navigate(['/company']); // Redirige a la página de la empresa
    return false;
  } else {
    router.navigate(['/login']); // Redirige a la página de inicio de sesión si no está autenticado
    return false;
  }
};

/***/ }),

/***/ 690:
/*!*********************************************************!*\
  !*** ./projects/mf-host/src/app/home/home.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var Z_Canchapp_canchapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6306);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);



let HomeComponent = /*#__PURE__*/(() => {
  class HomeComponent {
    constructor(http) {
      this.http = http;
    }
    getData() {
      var _this = this;
      return (0,Z_Canchapp_canchapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        let login = {
          Email: 'manuelzambrano@outlook.com',
          Password: '123456'
        };
        _this.http.post('http://localhost:5197/api/Security/Login', login).subscribe(res => {
          console.log(res);
        });
      })();
    }
    getData2() {
      var _this2 = this;
      return (0,Z_Canchapp_canchapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.http.get('http://localhost:5197/api/Security/GetAll').subscribe(res => {
          console.log(res);
        });
      })();
    }
    static {
      this.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 6,
        vars: 0,
        consts: [[3, "click"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "home works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_2_listener() {
              return ctx.getData();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Click");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_4_listener() {
              return ctx.getData2();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Click 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return HomeComponent;
})();

/***/ }),

/***/ 9970:
/*!*******************************************************************************!*\
  !*** ./projects/mf-host/src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthLayoutComponent: () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);


let AuthLayoutComponent = /*#__PURE__*/(() => {
  class AuthLayoutComponent {
    static {
      this.ɵfac = function AuthLayoutComponent_Factory(t) {
        return new (t || AuthLayoutComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthLayoutComponent,
        selectors: [["app-auth-layout"]],
        decls: 2,
        vars: 0,
        consts: [[1, "auth-content"]],
        template: function AuthLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return AuthLayoutComponent;
})();

/***/ }),

/***/ 1074:
/*!*******************************************************************************!*\
  !*** ./projects/mf-host/src/app/layouts/main-layout/main-layout.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainLayoutComponent: () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ 6919);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ 2369);
/* harmony import */ var _components_foot_foot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/foot/foot.component */ 3841);





let MainLayoutComponent = /*#__PURE__*/(() => {
  class MainLayoutComponent {
    static {
      this.ɵfac = function MainLayoutComponent_Factory(t) {
        return new (t || MainLayoutComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainLayoutComponent,
        selectors: [["app-main-layout"]],
        decls: 7,
        vars: 0,
        consts: [[1, "main-panel"], [1, "container"], [1, "page-inner"]],
        template: function MainLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "foot");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _components_foot_foot_component__WEBPACK_IMPORTED_MODULE_4__.FootComponent],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return MainLayoutComponent;
})();

/***/ }),

/***/ 4897:
/*!*****************************************************************!*\
  !*** ./projects/mf-host/src/app/pages/login/login.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 6762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 1522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 8086);





let LoginComponent = /*#__PURE__*/(() => {
  class LoginComponent {
    constructor(translate, fb, authService) {
      this.translate = translate;
      this.fb = fb;
      this.authService = authService;
      this.loginForm = this.fb.group({
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email]],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]
      });
    }
    onClicklogin() {
      if (this.loginForm.valid) {
        const credentials = this.loginForm.value;
        this.authService.Login(credentials).subscribe(() => console.log('Login exitoso'), error => console.error('Error en la autenticación:', error));
      }
    }
    static {
      this.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["login"]],
        decls: 54,
        vars: 28,
        consts: [[3, "formGroup"], [1, "d-flex", "w-100"], [1, "container", "d-flex", "flex-column"], [1, "row", "vh-100"], [1, "col-sm-10", "col-md-8", "col-lg-6", "mx-auto", "d-table", "h-100"], [1, "d-table-cell", "align-middle"], [1, "text-center", "mt-4"], [1, "h2"], [1, "lead"], [1, "card"], [1, "card-body"], [1, "m-sm-4"], [1, "row", "align-items-center"], [1, "col-icon"], [1, "icon-big", "text-center", "icon-info", "bubble-shadow-small"], [1, "fa-solid", "fa-circle-user", "fa-7x"], [1, "mb-3"], [1, "form-label"], ["id", "email", "formControlName", "email", "type", "email", "name", "email", 1, "form-control", "form-control-lg", 3, "placeholder"], ["id", "password", "formControlName", "password", "type", "password", "name", "password", 1, "form-control", "form-control-lg", 3, "placeholder"], ["href", "index.html"], [1, "form-check"], ["type", "checkbox", "value", "remember-me", "name", "remember-me", "checked", "", 1, "form-check-input"], [1, "form-check-label"], [1, "text-center", "mt-3"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "me-1"], [1, "fa-brands", "fa-facebook"], ["type", "submit", 1, "btn", "btn-lg", "btn-danger", "me-1"], [1, "fa-brands", "fa-google"], ["type", "submit", 1, "btn", "btn-lg", "btn-danger", "outlook", "me-1"], [1, "fa-brands", "fa-windows"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0)(1, "main", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "form")(21, "div", 16)(22, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16)(28, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "small")(34, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div")(38, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24)(44, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_44_listener() {
              return ctx.onClicklogin();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 24)(48, "button", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, "Login.WelcomeCanchapp"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 12, "Login.SignInContinue"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 14, "Commons.Email"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 16, "Login.EnterEmail"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 18, "Commons.Password"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 20, "Login.EnterPassword"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 22, "Login.ForgotPassword"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 24, "Login.RememberUser"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 26, "Login.SignIn"));
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
        styles: [".outlook[_ngcontent-%COMP%] {\n  background: #127AD3 !important;\n  border-color: #127AD3 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL21mLWhvc3Qvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLDhCQUFBO0VBQ0EsZ0NBQUE7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRsb29rIHtcclxuICAgYmFja2dyb3VuZDogIzEyN0FEMyAhaW1wb3J0YW50OyBcclxuICAgYm9yZGVyLWNvbG9yOiAjMTI3QUQzICFpbXBvcnRhbnQ7IFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return LoginComponent;
})();

/***/ }),

/***/ 3851:
/*!***************************************************************************!*\
  !*** ./projects/mf-host/src/app/pages/multilogin/multilogin.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiLoginComponent: () => (/* binding */ MultiLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 8086);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 1522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);



function MultiLoginComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td")(9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiLoginComponent_For_30_Template_button_click_9_listener() {
      const company_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.login(company_r2.email, company_r2.tenantId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const company_r2 = ctx.$implicit;
    const index_r4 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r2.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, company_r2.roleName || "Title.AdminRole"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "Login.SignIn"), " ");
  }
}
function MultiLoginComponent_ForEmpty_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Commons.ElementsNotFound"));
  }
}
let MultiLoginComponent = /*#__PURE__*/(() => {
  class MultiLoginComponent {
    constructor(authService) {
      this.authService = authService;
      this.companies = [];
    }
    ngOnInit() {
      this.setCompanies();
    }
    setCompanies() {
      this.companies = this.authService.getCompaniesLogin();
    }
    login(email, tenantId) {
      const credentials = {
        email,
        tenantId
      };
      this.authService.Login(credentials).subscribe(() => console.log('Login exitoso'), error => console.error('Error en la autenticación:', error));
    }
    static {
      this.ɵfac = function MultiLoginComponent_Factory(t) {
        return new (t || MultiLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MultiLoginComponent,
        selectors: [["multilogin"]],
        decls: 32,
        vars: 13,
        consts: [[1, "d-flex", "w-100"], [1, "container", "d-flex", "flex-column"], [1, "row", "vh-100"], [1, "col-sm-10", "col-md-8", "col-lg-12", "mx-auto", "d-table", "h-100"], [1, "d-table-cell", "align-middle"], [1, "text-center", "mt-4"], [1, "h2"], [1, "lead"], [1, "card"], [1, "card-body"], [1, "m-sm-4"], [1, "row", "align-items-center"], [1, "table", "table-hover"], ["scope", "col"], ["colspan", "4"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", 3, "click"]],
        template: function MultiLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "table", 12)(17, "thead")(18, "tr")(19, "th", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "#");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "th", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](29, MultiLoginComponent_For_30_Template, 12, 8, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"], false, MultiLoginComponent_ForEmpty_31_Template, 3, 3, "td", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, "Login.WelcomeCanchapp"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "Login.MultiloginWelcome"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 9, "Title.Company"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 11, "Title.Role"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.companies);
          }
        },
        dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return MultiLoginComponent;
})();

/***/ }),

/***/ 3969:
/*!***********************************************************************!*\
  !*** ./projects/mf-host/src/app/pages/register/register.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

let RegisterComponent = /*#__PURE__*/(() => {
  class RegisterComponent {
    static {
      this.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["register"]],
        decls: 2,
        vars: 0,
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return RegisterComponent;
})();

/***/ }),

/***/ 6679:
/*!*******************************************************************************!*\
  !*** ./projects/mf-host/src/app/pages/unauthorized/unauthorized.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnauthorizedComponent: () => (/* binding */ UnauthorizedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

let UnauthorizedComponent = /*#__PURE__*/(() => {
  class UnauthorizedComponent {
    static {
      this.ɵfac = function UnauthorizedComponent_Factory(t) {
        return new (t || UnauthorizedComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UnauthorizedComponent,
        selectors: [["unauthorized"]],
        decls: 2,
        vars: 0,
        template: function UnauthorizedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unauthorized!!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return UnauthorizedComponent;
})();

/***/ }),

/***/ 8086:
/*!***********************************************************!*\
  !*** ./projects/mf-host/src/app/services/auth.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2778);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! commons-lib */ 8883);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(commons_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6306);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var auth_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! auth-lib */ 6907);
/* harmony import */ var auth_lib__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(auth_lib__WEBPACK_IMPORTED_MODULE_5__);






let AuthService = /*#__PURE__*/(() => {
  class AuthService {
    constructor(http, router, authLibService) {
      this.http = http;
      this.router = router;
      this.authLibService = authLibService;
      this.apiUrl = commons_lib__WEBPACK_IMPORTED_MODULE_1__.ApiEnum.Security;
    }
    Login(auth) {
      return this.http.post(`${this.apiUrl}Login`, auth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)(response => {
        // Almacena el token en localStorage si la autenticación fue exitosa
        this.authLibService.setCompanies(response.companies);
        this.authLibService.setRoleModules(response.roleModules);
        this.authLibService.setToken(response.token, response.isProvisional);
        this.redirectLogin(response.isProvisional);
      }));
    }
    redirectLogin(isProvisionalToken) {
      // Redirige al multilogin si el token es provisional
      isProvisionalToken ? this.router.navigate(['/multilogin']) : this.router.navigate(['/dashboard']);
    }
    logout() {
      // Elimina el token del almacenamiento y redirige al inicio de sesión
      this.authLibService.logOut();
      this.router.navigate(['/login']);
    }
    isAuthenticated() {
      return this.authLibService.isAuthenticated();
    }
    isAuthenticatedMultilogin() {
      return this.authLibService.isAuthenticatedMultilogin();
    }
    getCompaniesLogin() {
      return this.authLibService.getCompanies();
    }
    static {
      this.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](auth_lib__WEBPACK_IMPORTED_MODULE_5__.AuthLibService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return AuthService;
})();

/***/ }),

/***/ 6962:
/*!*******************************************!*\
  !*** ./projects/mf-host/src/bootstrap.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 63);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 8173);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));

/***/ })

}])
//# sourceMappingURL=962.js.map