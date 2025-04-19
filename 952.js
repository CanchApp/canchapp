(self["webpackChunkmf_host"] = self["webpackChunkmf_host"] || []).push([[952],{

/***/ 8952:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@ngx-translate/http-loader/dist/fesm2022/ngx-translate-http-loader.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateHttpLoader: () => (/* binding */ TranslateHttpLoader)
/* harmony export */ });
class TranslateHttpLoader {
  http;
  prefix;
  suffix;
  constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=952.js.map