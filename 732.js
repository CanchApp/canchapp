(self["webpackChunkmf_host"] = self["webpackChunkmf_host"] || []).push([[732],{

/***/ 4351:
/*!*********************************************!*\
  !*** ./dist/auth-lib/fesm2022/auth-lib.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthLibComponent: () => (/* binding */ AuthLibComponent),
/* harmony export */   AuthLibModule: () => (/* binding */ AuthLibModule),
/* harmony export */   AuthLibService: () => (/* binding */ AuthLibService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6306);



const AUTH_TOKEN_KEY = 'TKCANCHAPP';
const PRV_AUTH_TOKEN_KEY = 'PRV_TKCANCHAPP';
const COMPANIES_KEY = 'COMPANIES';
const ROLES_MODULES_KEY = 'ROLES_MODULES';
let AuthLibService = /*#__PURE__*/(() => {
  class AuthLibService {
    constructor() {}
    getToken() {
      return localStorage.getItem(AUTH_TOKEN_KEY) ?? localStorage.getItem(PRV_AUTH_TOKEN_KEY);
    }
    setToken(token, isProvisional) {
      if (isProvisional) {
        this.removeToken();
        localStorage.setItem(PRV_AUTH_TOKEN_KEY, token);
      } else {
        this.removePrvToken();
        localStorage.setItem(AUTH_TOKEN_KEY, token);
      }
    }
    removeToken() {
      localStorage.removeItem(AUTH_TOKEN_KEY);
    }
    removePrvToken() {
      localStorage.removeItem(PRV_AUTH_TOKEN_KEY);
    }
    logOut() {
      this.removeToken();
      this.removePrvToken();
    }
    isAuthenticated() {
      // Verifica si el token existe en localStorage
      return !!localStorage.getItem(AUTH_TOKEN_KEY) && !localStorage.getItem(PRV_AUTH_TOKEN_KEY);
    }
    isAuthenticatedMultilogin() {
      // Verifica si el token provisional existe en localStorage
      return !localStorage.getItem(AUTH_TOKEN_KEY) && !!localStorage.getItem(PRV_AUTH_TOKEN_KEY);
    }
    getCompanies() {
      return JSON.parse(localStorage.getItem(COMPANIES_KEY));
    }
    setCompanies(companies) {
      localStorage.setItem(COMPANIES_KEY, JSON.stringify(companies));
    }
    getRoleModules() {
      return JSON.parse(localStorage.getItem(ROLES_MODULES_KEY));
    }
    setRoleModules(rolesModules) {
      localStorage.setItem(ROLES_MODULES_KEY, JSON.stringify(rolesModules));
    }
    static {
      this.ɵfac = function AuthLibService_Factory(t) {
        return new (t || AuthLibService)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthLibService,
        factory: AuthLibService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return AuthLibService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let AuthLibComponent = /*#__PURE__*/(() => {
  class AuthLibComponent {
    static {
      this.ɵfac = function AuthLibComponent_Factory(t) {
        return new (t || AuthLibComponent)();
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthLibComponent,
        selectors: [["lib-auth-lib"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 2,
        vars: 0,
        template: function AuthLibComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " auth-lib works! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
      });
    }
  }
  return AuthLibComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let AuthInterceptor = /*#__PURE__*/(() => {
  class AuthInterceptor {
    constructor(authLibService) {
      this.authLibService = authLibService;
    }
    intercept(req, next) {
      const token = this.authLibService.getToken();
      let authReq = req;
      if (token) {
        authReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
      return next.handle(authReq);
    }
    static {
      this.ɵfac = function AuthInterceptor_Factory(t) {
        return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](AuthLibService));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthInterceptor,
        factory: AuthInterceptor.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return AuthInterceptor;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let AuthLibModule = /*#__PURE__*/(() => {
  class AuthLibModule {
    static {
      this.ɵfac = function AuthLibModule_Factory(t) {
        return new (t || AuthLibModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthLibModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }]
      });
    }
  }
  return AuthLibModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of auth-lib
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=732.js.map