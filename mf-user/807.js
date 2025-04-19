(self["webpackChunkmf_user"] = self["webpackChunkmf_user"] || []).push([[807],{

/***/ 1567:
/*!********************************************************!*\
  !*** ./projects/mf-user/src/app/app-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_users_list_page_users_list_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/users-list.page/users-list.page.component */ 7792);
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/user.page/user.page.component */ 9144);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! commons-lib */ 8883);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(commons_lib__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_roles_list_page_roles_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/roles-list.page/roles-list.page.component */ 2100);
/* harmony import */ var _pages_role_page_role_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/role.page/role.page.component */ 900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);








const routes = [{
  path: 'users',
  component: _pages_users_list_page_users_list_page_component__WEBPACK_IMPORTED_MODULE_1__.UsersListComponent,
  data: {
    parentModule: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ModulesEnum.Users,
    parentModuleAction: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ModuleActionsEnum.Read
  },
  canActivate: [commons_lib__WEBPACK_IMPORTED_MODULE_3__.permissionGuard]
}, {
  path: 'user-create',
  component: _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_2__.UserPageComponent,
  data: {
    actionState: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ActionEnum.Create,
    parentModule: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ModulesEnum.Users,
    parentModuleAction: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ModuleActionsEnum.Create
  },
  canActivate: [commons_lib__WEBPACK_IMPORTED_MODULE_3__.permissionGuard]
}, {
  path: 'user-edit/:id',
  component: _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_2__.UserPageComponent,
  data: {
    actionState: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ActionEnum.Edit,
    parentModule: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ModulesEnum.Users,
    parentModuleAction: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ModuleActionsEnum.Update
  },
  canActivate: [commons_lib__WEBPACK_IMPORTED_MODULE_3__.permissionGuard]
}, {
  path: 'roles',
  component: _pages_roles_list_page_roles_list_page_component__WEBPACK_IMPORTED_MODULE_4__.RolesListComponent,
  data: {
    parentModule: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ModulesEnum.Roles,
    parentModuleAction: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ModuleActionsEnum.Read
  },
  canActivate: [commons_lib__WEBPACK_IMPORTED_MODULE_3__.permissionGuard]
}, {
  path: 'role-create',
  component: _pages_role_page_role_page_component__WEBPACK_IMPORTED_MODULE_5__.RolePageComponent,
  data: {
    actionState: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ActionEnum.Create,
    parentModule: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ModulesEnum.Roles,
    parentModuleAction: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ModuleActionsEnum.Create
  },
  canActivate: [commons_lib__WEBPACK_IMPORTED_MODULE_3__.permissionGuard]
}, {
  path: 'role-edit/:id',
  component: _pages_role_page_role_page_component__WEBPACK_IMPORTED_MODULE_5__.RolePageComponent,
  data: {
    actionState: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ActionEnum.Edit,
    parentModule: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ModulesEnum.Roles,
    parentModuleAction: commons_lib__WEBPACK_IMPORTED_MODULE_3__.ModuleActionsEnum.Update
  },
  canActivate: [commons_lib__WEBPACK_IMPORTED_MODULE_3__.permissionGuard]
}, {
  path: '',
  redirectTo: 'users',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'users',
  pathMatch: 'full'
}];
/*const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
    data: { parentModule: ModulesEnum.Users, parentModuleAction: ModuleActionsEnum.Read }
  },
  {
    path: 'user-create',
    component: UserPageComponent,
    data: { actionState: ActionEnum.Create, parentModule: ModulesEnum.Users, parentModuleAction: ModuleActionsEnum.Create }
  },
  {
    path: 'user-edit/:id',
    component: UserPageComponent,
    data: { actionState: ActionEnum.Edit, parentModule: ModulesEnum.Users, parentModuleAction: ModuleActionsEnum.Update }
  },
  {
    path: 'roles',
    component: RolesListComponent,
    data: { parentModule: ModulesEnum.Roles, parentModuleAction: ModuleActionsEnum.Read }
  },
  {
    path: 'role-create',
    component: RolePageComponent,
    data: { actionState: ActionEnum.Create, parentModule: ModulesEnum.Roles, parentModuleAction: ModuleActionsEnum.Create }
  },
  {
    path: 'role-edit/:id',
    component: RolePageComponent,
    data: { actionState: ActionEnum.Edit, parentModule: ModulesEnum.Roles, parentModuleAction: ModuleActionsEnum.Update }
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
];*/
let AppRoutingModule = /*#__PURE__*/(() => {
  class AppRoutingModule {
    static {
      this.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
      });
    }
  }
  return AppRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ }),

/***/ 3999:
/*!***************************************************!*\
  !*** ./projects/mf-user/src/app/app.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);


let AppComponent = /*#__PURE__*/(() => {
  class AppComponent {
    constructor() {
      this.title = 'mf-user';
    }
    static {
      this.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User!!!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return AppComponent;
})();

/***/ }),

/***/ 638:
/*!************************************************!*\
  !*** ./projects/mf-user/src/app/app.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 3999);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8648);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 63);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 1567);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6306);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.module */ 8158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);







let AppModule = /*#__PURE__*/(() => {
  class AppModule {
    static {
      this.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.provideClientHydration)()],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _user_module__WEBPACK_IMPORTED_MODULE_5__.UserModule]
      });
    }
  }
  return AppModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _user_module__WEBPACK_IMPORTED_MODULE_5__.UserModule]
  });
})();

/***/ }),

/***/ 3314:
/*!********************************************************************!*\
  !*** ./projects/mf-user/src/app/components/role/role.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleComponent: () => (/* binding */ RoleComponent)
/* harmony export */ });
/* harmony import */ var Z_Canchapp_canchapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! commons-lib */ 8883);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(commons_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user.model */ 3382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 6762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8648);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_module_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/module.service */ 2941);
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/role.service */ 3585);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_10__);














function RoleComponent_div_14_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Validations.FieldRequired"));
  }
}
function RoleComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RoleComponent_div_14_small_1_Template, 3, 3, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.formRole.controls["name"] == null ? null : ctx_r0.formRole.controls["name"].errors == null ? null : ctx_r0.formRole.controls["name"].errors["required"]);
  }
}
function RoleComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 6, "Modules." + ((tmp_4_0 = item_r2.get("moduleName")) == null ? null : tmp_4_0.value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 8, "Crud.Create"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 10, "Crud.Read"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 12, "Crud.Update"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 14, "Crud.Delete"), " ");
  }
}
let RoleComponent = /*#__PURE__*/(() => {
  class RoleComponent {
    constructor(translate, moduleService, roleService, formBuilder, route) {
      this.translate = translate;
      this.moduleService = moduleService;
      this.roleService = roleService;
      this.formBuilder = formBuilder;
      this.route = route;
      this.roleId = 0;
      this.roleData = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__.UserDTO();
      this.editAction = commons_lib__WEBPACK_IMPORTED_MODULE_2__.ActionEnum.Edit;
      this.formRole = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
    }
    ngOnInit() {
      this.setFormGroup();
    }
    ngAfterViewInit() {
      this.setRoleModulesFormArray();
      Promise.resolve().then(() => this.loadData());
    }
    get roleModules() {
      return this.formRole.get('roleModules');
    }
    createItem(module) {
      return this.formBuilder.group({
        idModule: [module.idModule],
        moduleName: [module.name],
        actions: this.formBuilder.group({
          create: [false],
          read: [false],
          update: [false],
          delete: [false] // Checkbox para "Eliminar"
        })
      });
    }
    setFormGroup() {
      this.formRole = this.formBuilder.group({
        idRole: [0],
        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        roleModules: this.formBuilder.array([])
      });
    }
    setRoleModulesFormArray() {
      var _this = this;
      return (0,Z_Canchapp_canchapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const modules = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this.moduleService.getAll());
        for (let module of modules) {
          _this.roleModules.push(_this.createItem(module));
        }
      })();
    }
    loadData() {
      var _this2 = this;
      return (0,Z_Canchapp_canchapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this2.roleId > 0) {
          yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this2.roleService.getById(_this2.roleId)).then(role => {
            _this2.formRole.patchValue({
              ...role
            });
          });
        }
      })();
    }
    save() {
      this.formRole.markAllAsTouched();
      if (!this.formRole.valid) {
        return;
      }
      try {
        if (this.action == commons_lib__WEBPACK_IMPORTED_MODULE_2__.ActionEnum.Create) {
          this.roleService.create(this.formRole.value).subscribe(e => {
            this.redirectToList();
          });
        } else {
          this.roleService.update(this.roleId, this.formRole.value).subscribe(e => {
            this.redirectToList();
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
    cancel() {
      this.redirectToList();
    }
    redirectToList() {
      this.route.navigate(['/user-management/roles']);
    }
    static {
      this.ɵfac = function RoleComponent_Factory(t) {
        return new (t || RoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_module_service__WEBPACK_IMPORTED_MODULE_8__.ModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_9__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: RoleComponent,
        selectors: [["app-role"]],
        inputs: {
          roleId: "roleId",
          action: "action"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
        decls: 20,
        vars: 18,
        consts: [[1, "row", "g-3", 3, "formGroup"], [1, "text-end"], [1, "btn", "btn-success", "me-2", 3, "click"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "col-md-12"], ["for", "name", 1, "form-label"], ["type", "text", "formControlName", "name", "id", "name", 1, "form-control", 3, "placeholder"], ["class", "text-danger", 4, "ngIf"], ["formArrayName", "roleModules", 1, "text-center"], ["class", "col-md-12", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "text-danger"], [4, "ngIf"], [1, "col-md-12", 3, "formGroupName"], ["formGroupName", "actions"], [1, "col-md-2", "moduleName"], [1, "col-md-2"], ["type", "checkbox", "formControlName", "create", 1, "form-check-input"], ["type", "checkbox", "formControlName", "read", 1, "form-check-input"], ["type", "checkbox", "formControlName", "update", 1, "form-check-input"], ["type", "checkbox", "formControlName", "delete", 1, "form-check-input"]],
        template: function RoleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoleComponent_Template_button_click_2_listener() {
              return ctx.save();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoleComponent_Template_button_click_5_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 4)(9, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, RoleComponent_div_14_Template, 2, 1, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RoleComponent_div_19_Template, 21, 16, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formRole);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 8, "Button.Save"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 10, "Button.Cancel"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 12, "Commons.Name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 14, "Commons.Name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.formRole.controls["name"] == null ? null : ctx.formRole.controls["name"].invalid) && (ctx.formRole.controls["name"] == null ? null : ctx.formRole.controls["name"].touched));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 16, "Role.RoleModulePermissions"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.roleModules.controls);
          }
        },
        dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
        styles: [".moduleName[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL21mLXVzZXIvc3JjL2FwcC9jb21wb25lbnRzL3JvbGUvcm9sZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZU5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return RoleComponent;
})();

/***/ }),

/***/ 2860:
/*!********************************************************************!*\
  !*** ./projects/mf-user/src/app/components/user/user.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserComponent: () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var Z_Canchapp_canchapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! commons-lib */ 8883);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(commons_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user.model */ 3382);
/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/role.model */ 7185);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 6762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8648);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/user.service */ 6610);
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/role.service */ 3585);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_11__);















const _c0 = ["roleSelect"];
const _c1 = (a0, a1) => ({
  "col-md-7": a0,
  "col-md-3": a1
});
const _c2 = (a0, a1) => ({
  "col-md-3": a0,
  "col-md-2": a1
});
function UserComponent_div_14_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Validations.FieldRequired"));
  }
}
function UserComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserComponent_div_14_small_1_Template, 3, 3, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.formUser.controls["name"] == null ? null : ctx_r1.formUser.controls["name"].errors == null ? null : ctx_r1.formUser.controls["name"].errors["required"]);
  }
}
function UserComponent_div_15_div_6_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Validations.FieldRequired"));
  }
}
function UserComponent_div_15_div_6_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Validations.FieldInvalidName"));
  }
}
function UserComponent_div_15_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserComponent_div_15_div_6_small_1_Template, 3, 3, "small", 14)(2, UserComponent_div_15_div_6_small_2_Template, 3, 3, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.formUser.controls["email"] == null ? null : ctx_r1.formUser.controls["email"].errors == null ? null : ctx_r1.formUser.controls["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.formUser.controls["email"] == null ? null : ctx_r1.formUser.controls["email"].errors == null ? null : ctx_r1.formUser.controls["email"].errors["email"]);
  }
}
function UserComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15)(1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, UserComponent_div_15_div_6_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, "Commons.Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, "Commons.Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r1.formUser.controls["email"] == null ? null : ctx_r1.formUser.controls["email"].invalid) && (ctx_r1.formUser.controls["email"] == null ? null : ctx_r1.formUser.controls["email"].touched));
  }
}
function UserComponent_div_16_div_6_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Validations.FieldRequired"));
  }
}
function UserComponent_div_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserComponent_div_16_div_6_small_1_Template, 3, 3, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.formUser.controls["password"] == null ? null : ctx_r1.formUser.controls["password"].errors == null ? null : ctx_r1.formUser.controls["password"].errors["required"]);
  }
}
function UserComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18)(1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, UserComponent_div_16_div_6_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, "Commons.Password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, "Commons.Password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r1.formUser.controls["password"] == null ? null : ctx_r1.formUser.controls["password"].invalid) && (ctx_r1.formUser.controls["password"] == null ? null : ctx_r1.formUser.controls["password"].touched));
  }
}
function UserComponent_div_17_div_6_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Validations.FieldRequired"));
  }
}
function UserComponent_div_17_div_6_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Validations.FieldOnlyNumberMinLength6"));
  }
}
function UserComponent_div_17_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserComponent_div_17_div_6_small_1_Template, 3, 3, "small", 14)(2, UserComponent_div_17_div_6_small_2_Template, 3, 3, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.formUser.controls["phone"] == null ? null : ctx_r1.formUser.controls["phone"].errors == null ? null : ctx_r1.formUser.controls["phone"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.formUser.controls["phone"] == null ? null : ctx_r1.formUser.controls["phone"].errors == null ? null : ctx_r1.formUser.controls["phone"].errors["pattern"]);
  }
}
function UserComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18)(1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, UserComponent_div_17_div_6_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, "Commons.Phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, "Commons.Phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r1.formUser.controls["phone"] == null ? null : ctx_r1.formUser.controls["phone"].invalid) && (ctx_r1.formUser.controls["phone"] == null ? null : ctx_r1.formUser.controls["phone"].touched));
  }
}
function UserComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "Validations.FieldRequired"));
  }
}
function UserComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18)(1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Commons.State"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.formUser.controls["isActive"].value ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 4, "Commons.Active") : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 6, "Commons.Inactive"), " ");
  }
}
let UserComponent = /*#__PURE__*/(() => {
  class UserComponent {
    constructor(translate, userService, roleService, formBuilder, route) {
      this.translate = translate;
      this.userService = userService;
      this.roleService = roleService;
      this.formBuilder = formBuilder;
      this.route = route;
      this.userId = 0;
      this.userData = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__.UserDTO();
      this.roleList = [];
      this.selectId = commons_lib__WEBPACK_IMPORTED_MODULE_2__.SelectIdEnum.ListCourt;
      this.editAction = commons_lib__WEBPACK_IMPORTED_MODULE_2__.ActionEnum.Edit;
      this.formUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
    }
    ngOnInit() {
      this.setFormGroup();
    }
    ngAfterViewInit() {
      this.loadData();
    }
    setFormGroup() {
      if (this.action == commons_lib__WEBPACK_IMPORTED_MODULE_2__.ActionEnum.Create) {
        this.formUser = this.formBuilder.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^\d{6,10}$/)]],
          role: [{
            id: '-1'
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.invalidRoleValidator()]]
        });
      } else {
        this.formUser = this.formBuilder.group({
          idUser: [this.userId],
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
          role: [{
            id: '-1'
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.invalidRoleValidator()]],
          isActive: [true]
        });
      }
    }
    loadData() {
      var _this = this;
      return (0,Z_Canchapp_canchapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this.userId > 0) {
          yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this.userService.getById(_this.userId)).then(user => {
            _this.userData = user;
            _this.formUser.patchValue({
              ...user,
              role: {
                id: user.roleId.toString()
              }
            });
          });
        }
        _this.roleService.getAll().subscribe(roles => {
          _this.roleList = roles;
          if (_this.roleSelect) {
            const items = _models_role_model__WEBPACK_IMPORTED_MODULE_4__.RoleDTO.transformToSelectDto(_this.roleList);
            _this.roleSelect.items = items;
            if (_this.action == commons_lib__WEBPACK_IMPORTED_MODULE_2__.ActionEnum.Edit) {
              _this.roleSelect.empty = false;
            }
          }
        });
      })();
    }
    save() {
      this.formUser.markAllAsTouched();
      console.log(this.formUser);
      if (!this.formUser.valid) {
        return;
      }
      // Llamar servicio de creación!
      try {
        if (this.action == commons_lib__WEBPACK_IMPORTED_MODULE_2__.ActionEnum.Create) {
          const payload = {
            name: this.formUser.value.name,
            email: this.formUser.value.email,
            password: this.formUser.value.password,
            phone: this.formUser.value.phone,
            RoleId: Number(this.formUser.value.role.id)
          };
          console.log('payload:', payload);
          this.userService.create(payload).subscribe(e => {
            this.redirectToList();
          });
        } else {
          const payload = {
            idUser: this.userId,
            name: this.formUser.value.name,
            isActive: this.formUser.value.isActive,
            newUserRoleId: Number(this.formUser.value.role.id)
          };
          this.userService.update(payload).subscribe(e => {
            this.redirectToList();
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
    cancel() {
      this.redirectToList();
    }
    // Validador personalizado para verificar si el id es "-1"
    invalidRoleValidator() {
      return control => {
        if (control.value && control.value.id === '-1') {
          return {
            invalidRole: true
          }; // Retorna un error si el id es '-1'
        }
        return null; // Retorna null si el valor es válido
      };
    }
    redirectToList() {
      this.route.navigate(['/user-management/users']);
    }
    static {
      this.ɵfac = function UserComponent_Factory(t) {
        return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_10__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: UserComponent,
        selectors: [["app-user"]],
        viewQuery: function UserComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.roleSelect = _t.first);
          }
        },
        inputs: {
          userId: "userId",
          action: "action"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
        decls: 26,
        vars: 32,
        consts: [["roleSelect", ""], [1, "row", "g-3", 3, "formGroup"], [1, "text-end"], [1, "btn", "btn-success", "me-2", 3, "click"], [1, "btn", "btn-outline-secondary", 3, "click"], [3, "ngClass"], ["for", "name", 1, "form-label"], ["type", "text", "formControlName", "name", "id", "name", 1, "form-control", 3, "placeholder"], ["class", "text-danger", 4, "ngIf"], ["class", "col-md-3", 4, "ngIf"], ["class", "col-md-2", 4, "ngIf"], ["for", "exampleColorInput", 1, "form-label"], ["formControlName", "role", 3, "selectId", "useCustomItems"], [1, "text-danger"], [4, "ngIf"], [1, "col-md-3"], ["for", "userEmail", 1, "form-label"], ["type", "email", "formControlName", "email", "id", "userEmail", 1, "form-control", 3, "placeholder"], [1, "col-md-2"], ["for", "password", 1, "form-label"], ["type", "password", "formControlName", "password", "id", "password", 1, "form-control", 3, "placeholder"], ["for", "phone", 1, "form-label"], ["type", "text", "formControlName", "phone", "id", "phone", "minlength", "6", "maxlength", "10", 1, "form-control", 3, "placeholder"], [1, "form-check"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "form-check-input"], ["for", "isActive", 1, "form-check-label"]],
        template: function UserComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 1)(1, "div", 2)(2, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserComponent_Template_button_click_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.save());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserComponent_Template_button_click_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.cancel());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 5)(9, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, UserComponent_div_14_Template, 2, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, UserComponent_div_15_Template, 7, 7, "div", 9)(16, UserComponent_div_16_Template, 7, 7, "div", 10)(17, UserComponent_div_17_Template, 7, 7, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 5)(19, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "lib-select", 12, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, UserComponent_div_24_Template, 4, 3, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, UserComponent_div_25_Template, 10, 8, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            let tmp_15_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.formUser);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 16, "Button.Save"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 18, "Button.Cancel"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](26, _c1, ctx.action == ctx.editAction, ctx.action != ctx.editAction));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 20, "Commons.Name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 22, "Commons.Name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.formUser.controls["name"] == null ? null : ctx.formUser.controls["name"].invalid) && (ctx.formUser.controls["name"] == null ? null : ctx.formUser.controls["name"].touched));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.action != ctx.editAction);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.action != ctx.editAction);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.action != ctx.editAction);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](29, _c2, ctx.action == ctx.editAction, ctx.action != ctx.editAction));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 24, "Commons.Role"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectId", ctx.selectId)("useCustomItems", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.formUser.controls["role"] == null ? null : ctx.formUser.controls["role"].touched) && ((tmp_15_0 = ctx.formUser.get("role")) == null ? null : tmp_15_0.hasError("invalidRole")));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.action == ctx.editAction);
          }
        },
        dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, commons_lib__WEBPACK_IMPORTED_MODULE_2__.SelectComponent],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return UserComponent;
})();

/***/ }),

/***/ 7185:
/*!*******************************************************!*\
  !*** ./projects/mf-user/src/app/models/role.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleDTO: () => (/* binding */ RoleDTO),
/* harmony export */   RoleItemDTO: () => (/* binding */ RoleItemDTO),
/* harmony export */   RoleModulesDTO: () => (/* binding */ RoleModulesDTO)
/* harmony export */ });
class RoleDTO {
  static transformToSelectDto(data) {
    return data.map(e => ({
      id: e.idRole.toString(),
      text: e.name
    }));
  }
}
class RoleItemDTO {}
class RoleModulesDTO {}

/***/ }),

/***/ 3382:
/*!*******************************************************!*\
  !*** ./projects/mf-user/src/app/models/user.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateUserDTO: () => (/* binding */ CreateUserDTO),
/* harmony export */   UpdateUserDTO: () => (/* binding */ UpdateUserDTO),
/* harmony export */   UserDTO: () => (/* binding */ UserDTO)
/* harmony export */ });
class UserDTO {}
class CreateUserDTO {}
class UpdateUserDTO {}

/***/ }),

/***/ 900:
/*!*************************************************************************!*\
  !*** ./projects/mf-user/src/app/pages/role.page/role.page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolePageComponent: () => (/* binding */ RolePageComponent)
/* harmony export */ });
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! commons-lib */ 8883);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(commons_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_role_role_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/role/role.component */ 3314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);






const _c0 = ["class", "page"];
let RolePageComponent = /*#__PURE__*/(() => {
  class RolePageComponent {
    constructor(translate, route) {
      this.translate = translate;
      this.route = route;
      this.title = '';
    }
    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.roleId = Number(params.get('id'));
      });
      this.action = this.route.snapshot.data['actionState'];
      this.setTitle();
    }
    setTitle() {
      switch (this.action) {
        case commons_lib__WEBPACK_IMPORTED_MODULE_0__.ActionEnum.Create:
          this.title = 'Role.Create';
          break;
        case commons_lib__WEBPACK_IMPORTED_MODULE_0__.ActionEnum.Edit:
          this.title = "Role.Edit";
          break;
      }
    }
    static {
      this.ɵfac = function RolePageComponent_Factory(t) {
        return new (t || RolePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: RolePageComponent,
        selectors: [["app-user", 8, "page"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
        attrs: _c0,
        decls: 7,
        vars: 5,
        consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "roleId", "action"]],
        template: function RolePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-role", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("roleId", ctx.roleId)("action", ctx.action);
          }
        },
        dependencies: [_components_role_role_component__WEBPACK_IMPORTED_MODULE_2__.RoleComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return RolePageComponent;
})();

/***/ }),

/***/ 2100:
/*!*************************************************************************************!*\
  !*** ./projects/mf-user/src/app/pages/roles-list.page/roles-list.page.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesListComponent: () => (/* binding */ RolesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 8648);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! commons-lib */ 8883);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(commons_lib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/role.service */ 3585);











const _c0 = ["confirmDeleteModal"];
const _c1 = ["class", "page"];
function RolesListComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 14, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Role.Create"));
  }
}
function RolesListComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Commons.Action"), " ");
  }
}
function RolesListComponent_For_19_td_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td")(1, "lib-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("actionButtonClick", function RolesListComponent_For_19_td_5_Template_lib_dropdown_actionButtonClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.handleAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rol_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, "Commons.Action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("emptyItemsLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, "Commons.ElementsNotFound"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r2.loadActionItems(rol_r4.idRole));
  }
}
function RolesListComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, RolesListComponent_For_19_td_5_Template, 4, 7, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rol_r4 = ctx.$implicit;
    const i_r5 = ctx.$index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](rol_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.allowUpdate || ctx_r2.allowDelete);
  }
}
function RolesListComponent_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 12)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Commons.ElementsNotFound"));
  }
}
let RolesListComponent = /*#__PURE__*/(() => {
  class RolesListComponent {
    constructor(translate, roleService, notificationService, permissionLibService, router) {
      this.translate = translate;
      this.roleService = roleService;
      this.notificationService = notificationService;
      this.permissionLibService = permissionLibService;
      this.router = router;
      this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
      this.reloadRoles$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      this.confirmModalData = new commons_lib__WEBPACK_IMPORTED_MODULE_4__.ConfirmModalModel();
      this.actionsCallbacks = new Map();
      /* actions permission */
      this.allowCreate = false;
      this.allowUpdate = false;
      this.allowDelete = false;
      [this.allowCreate, this.allowUpdate, this.allowDelete] = this.permissionLibService.hasMultiplePermissionToComponent(commons_lib__WEBPACK_IMPORTED_MODULE_4__.ModulesEnum.Roles, [commons_lib__WEBPACK_IMPORTED_MODULE_4__.ModuleActionsEnum.Create, commons_lib__WEBPACK_IMPORTED_MODULE_4__.ModuleActionsEnum.Update, commons_lib__WEBPACK_IMPORTED_MODULE_4__.ModuleActionsEnum.Delete]);
    }
    ngOnInit() {
      this.loadRoles();
      this.loadActions();
      this.loadConfirmModalData();
    }
    loadConfirmModalData() {
      this.confirmModalData = {
        title: this.translate.instant('Role.DeleteRole'),
        body: this.translate.instant('Role.ConfirmDeleteRole'),
        confirmLabel: this.translate.instant('Button.Yes'),
        cancelLabel: this.translate.instant('Button.No')
      };
    }
    loadRoles() {
      this.subscription.add(this.reloadRoles$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => this.roleService.getAll())).subscribe(roles => {
        this.roles = roles;
      }));
      this.reloadRoles$.next();
    }
    loadActions() {
      this.actionsCallbacks.set(commons_lib__WEBPACK_IMPORTED_MODULE_4__.ActionEnum.Edit, roleId => this.editRole(roleId));
      this.actionsCallbacks.set(commons_lib__WEBPACK_IMPORTED_MODULE_4__.ActionEnum.Delete, roleId => this.deleteRole(roleId));
    }
    loadActionItems(roleId) {
      const actions = [{
        id: roleId,
        name: this.translate.instant('Button.Edit'),
        disabled: false,
        action: commons_lib__WEBPACK_IMPORTED_MODULE_4__.ActionEnum.Edit
      }, {
        id: roleId,
        name: this.translate.instant('Button.Delete'),
        disabled: false,
        action: commons_lib__WEBPACK_IMPORTED_MODULE_4__.ActionEnum.Delete
      }];
      return actions;
    }
    handleAction(actionItem) {
      const action = this.actionsCallbacks.get(actionItem.action);
      if (action) {
        action(actionItem.id);
      }
    }
    editRole(roleId) {
      this.router.navigate([`/user-management/role-edit/${roleId}`]);
    }
    deleteRole(roleId) {
      const role = this.roles?.find(e => e.idRole == roleId);
      if (role) {
        this.confirmModalData.boldBody = role.name;
        this.confirmDeleteModal.openModal(roleId);
      }
    }
    onConfirmDelete(roleId) {
      this.roleService.delete(roleId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
        const errorMsg = this.translate.instant("Role.RoleDeletedError");
        this.notificationService.ErrorNotification(errorMsg);
        console.error('Error en la petición:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error(errorMsg));
      })).subscribe(data => {
        this.notificationService.SuccesNotification(this.translate.instant("Role.RoleDeleted"));
        this.reloadRoles$.next();
      });
    }
    static {
      this.ɵfac = function RolesListComponent_Factory(t) {
        return new (t || RolesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_6__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](commons_lib__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](commons_lib__WEBPACK_IMPORTED_MODULE_4__.PermissionLibService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: RolesListComponent,
        selectors: [["roles-list", 8, "page"]],
        viewQuery: function RolesListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.confirmDeleteModal = _t.first);
          }
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
        attrs: _c1,
        decls: 23,
        vars: 10,
        consts: [["confirmDeleteModal", ""], ["btnFoco", ""], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "mb-2"], ["routerLink", "/user-management/role-create", "class", "btn btn-success", 4, "ngIf"], [1, "table", "table-head-bg-primary"], ["scope", "col"], ["scope", "col", 2, "width", "80%"], ["scope", "col", 4, "ngIf"], ["colspan", "7"], [3, "confirmButtonClick", "data"], ["routerLink", "/user-management/role-create", 1, "btn", "btn-success"], [4, "ngIf"], [3, "actionButtonClick", "placeholder", "emptyItemsLabel", "items"]],
        template: function RolesListComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, RolesListComponent_a_7_Template, 4, 3, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "table", 8)(9, "thead")(10, "tr")(11, "th", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "#");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, RolesListComponent_th_16_Template, 3, 3, "th", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](18, RolesListComponent_For_19_Template, 6, 3, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"], false, RolesListComponent_ForEmpty_20_Template, 4, 3, "td", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "lib-confirm-modal", 13, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("confirmButtonClick", function RolesListComponent_Template_lib_confirm_modal_confirmButtonClick_21_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onConfirmDelete($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 6, "Title.Roles"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.allowCreate);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 8, "Commons.Name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.allowUpdate || ctx.allowDelete);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.roles);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.confirmModalData);
          }
        },
        dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, commons_lib__WEBPACK_IMPORTED_MODULE_4__.DropdownComponent, commons_lib__WEBPACK_IMPORTED_MODULE_4__.ConfirmModalComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return RolesListComponent;
})();

/***/ }),

/***/ 9144:
/*!*************************************************************************!*\
  !*** ./projects/mf-user/src/app/pages/user.page/user.page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserPageComponent: () => (/* binding */ UserPageComponent)
/* harmony export */ });
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/user/user.component */ 2860);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! commons-lib */ 8883);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(commons_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 1522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);






const _c0 = ["class", "page"];
let UserPageComponent = /*#__PURE__*/(() => {
  class UserPageComponent {
    constructor(translate, route) {
      this.translate = translate;
      this.route = route;
      this.title = '';
    }
    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.userId = Number(params.get('id'));
      });
      this.action = this.route.snapshot.data['actionState'];
      this.setTitle();
    }
    setTitle() {
      switch (this.action) {
        case commons_lib__WEBPACK_IMPORTED_MODULE_1__.ActionEnum.Create:
          this.title = 'User.Create';
          break;
        case commons_lib__WEBPACK_IMPORTED_MODULE_1__.ActionEnum.Edit:
          this.title = "User.Edit";
          break;
      }
    }
    static {
      this.ɵfac = function UserPageComponent_Factory(t) {
        return new (t || UserPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: UserPageComponent,
        selectors: [["app-user", 8, "page"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
        attrs: _c0,
        decls: 7,
        vars: 5,
        consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "userId", "action"]],
        template: function UserPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-user", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("userId", ctx.userId)("action", ctx.action);
          }
        },
        dependencies: [_components_user_user_component__WEBPACK_IMPORTED_MODULE_0__.UserComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return UserPageComponent;
})();

/***/ }),

/***/ 7792:
/*!*************************************************************************************!*\
  !*** ./projects/mf-user/src/app/pages/users-list.page/users-list.page.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersListComponent: () => (/* binding */ UsersListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 8648);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! commons-lib */ 8883);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(commons_lib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ 6610);











const _c0 = ["confirmDeleteModal"];
const _c1 = ["class", "page"];
const _c2 = (a0, a1) => ({
  "badge-success": a0,
  "badge-danger": a1
});
function UsersListComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 13, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "User.Create"));
  }
}
function UsersListComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Commons.Action"), " ");
  }
}
function UsersListComponent_For_28_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td")(1, "lib-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("actionButtonClick", function UsersListComponent_For_28_td_13_Template_lib_dropdown_actionButtonClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.handleAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, "Commons.Action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("emptyItemsLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, "Commons.ElementsNotFound"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r2.loadActionItems(user_r4.idUser));
  }
}
function UsersListComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, UsersListComponent_For_28_td_13_Template, 4, 7, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_13_0;
    const user_r4 = ctx.$implicit;
    const i_r5 = ctx.$index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_13_0 = user_r4.roleName) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](9, _c2, user_r4.isActive, !user_r4.isActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 7, "Commons." + user_r4.isActive), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.allowUpdate || ctx_r2.allowDelete);
  }
}
function UsersListComponent_ForEmpty_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 11)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Commons.ElementsNotFound"));
  }
}
let UsersListComponent = /*#__PURE__*/(() => {
  class UsersListComponent {
    constructor(translate, userService, notificationService, permissionLibService, router) {
      /*this.allowCreate = this.permissionLibService.hasPermissionToComponent(
        ModulesEnum.Users,
        ModuleActionsEnum.Create
      );
      this.allowUpdate = this.permissionLibService.hasPermissionToComponent(
        ModulesEnum.Users,
        ModuleActionsEnum.Update
      );
      this.allowDelete = this.permissionLibService.hasPermissionToComponent(
        ModulesEnum.Users,
        ModuleActionsEnum.Delete
      );*/
      this.translate = translate;
      this.userService = userService;
      this.notificationService = notificationService;
      this.permissionLibService = permissionLibService;
      this.router = router;
      this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
      this.reloadUsers$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      this.confirmModalData = new commons_lib__WEBPACK_IMPORTED_MODULE_4__.ConfirmModalModel();
      this.actionsCallbacks = new Map();
      /* actions permission */
      this.allowCreate = false;
      this.allowUpdate = false;
      this.allowDelete = false;
      [this.allowCreate, this.allowUpdate, this.allowDelete] = this.permissionLibService.hasMultiplePermissionToComponent(commons_lib__WEBPACK_IMPORTED_MODULE_4__.ModulesEnum.Users, [commons_lib__WEBPACK_IMPORTED_MODULE_4__.ModuleActionsEnum.Create, commons_lib__WEBPACK_IMPORTED_MODULE_4__.ModuleActionsEnum.Update, commons_lib__WEBPACK_IMPORTED_MODULE_4__.ModuleActionsEnum.Delete]);
    }
    ngOnInit() {
      this.loadUsers();
      this.loadActions();
      this.loadConfirmModalData();
    }
    loadConfirmModalData() {
      this.confirmModalData = {
        title: this.translate.instant('User.DeleteUser'),
        body: this.translate.instant('User.ConfirmDeleteUser'),
        confirmLabel: this.translate.instant('Button.Yes'),
        cancelLabel: this.translate.instant('Button.No')
      };
    }
    loadUsers() {
      this.subscription.add(this.reloadUsers$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => this.userService.getAll())).subscribe(users => {
        this.users = users;
      }));
      this.reloadUsers$.next();
    }
    loadActions() {
      this.actionsCallbacks.set(commons_lib__WEBPACK_IMPORTED_MODULE_4__.ActionEnum.Edit, userId => this.editUser(userId));
      this.actionsCallbacks.set(commons_lib__WEBPACK_IMPORTED_MODULE_4__.ActionEnum.Delete, userId => this.deleteUser(userId));
    }
    loadActionItems(userId) {
      let actions = [];
      if (this.allowUpdate) {
        actions.push({
          id: userId,
          name: this.translate.instant('Button.Edit'),
          disabled: false,
          action: commons_lib__WEBPACK_IMPORTED_MODULE_4__.ActionEnum.Edit
        });
      }
      if (this.allowDelete) {
        actions.push({
          id: userId,
          name: this.translate.instant('Button.Delete'),
          disabled: false,
          action: commons_lib__WEBPACK_IMPORTED_MODULE_4__.ActionEnum.Delete
        });
      }
      return actions;
    }
    handleAction(actionItem) {
      const action = this.actionsCallbacks.get(actionItem.action);
      if (action) {
        action(actionItem.id);
      }
    }
    editUser(userId) {
      this.router.navigate([`/user-management/user-edit/${userId}`]);
    }
    deleteUser(userId) {
      const user = this.users?.find(e => e.idUser == userId);
      if (user) {
        this.confirmModalData.boldBody = user.name;
        this.confirmDeleteModal.openModal(userId);
      }
    }
    onConfirmDelete(userId) {
      this.userService.delete(userId).subscribe(() => {
        this.notificationService.SuccesNotification(this.translate.instant("User.UserDeleted"));
        this.reloadUsers$.next();
      });
    }
    static {
      this.ɵfac = function UsersListComponent_Factory(t) {
        return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](commons_lib__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](commons_lib__WEBPACK_IMPORTED_MODULE_4__.PermissionLibService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: UsersListComponent,
        selectors: [["users-list", 8, "page"]],
        viewQuery: function UsersListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.confirmDeleteModal = _t.first);
          }
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
        attrs: _c1,
        decls: 32,
        vars: 19,
        consts: [["confirmDeleteModal", ""], ["btnFoco", ""], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "mb-2"], ["routerLink", "/user-management/user-create", "class", "btn btn-success", 4, "ngIf"], [1, "table", "table-head-bg-primary"], ["scope", "col"], ["scope", "col", 4, "ngIf"], ["colspan", "7"], [3, "confirmButtonClick", "data"], ["routerLink", "/user-management/user-create", 1, "btn", "btn-success"], [1, "badge", "btn-sm", 3, "ngClass"], [4, "ngIf"], [3, "actionButtonClick", "placeholder", "emptyItemsLabel", "items"]],
        template: function UsersListComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, UsersListComponent_a_7_Template, 4, 3, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "table", 8)(9, "thead")(10, "tr")(11, "th", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "#");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, UsersListComponent_th_25_Template, 3, 3, "th", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](27, UsersListComponent_For_28_Template, 14, 12, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"], false, UsersListComponent_ForEmpty_29_Template, 4, 3, "td", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "lib-confirm-modal", 12, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("confirmButtonClick", function UsersListComponent_Template_lib_confirm_modal_confirmButtonClick_30_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onConfirmDelete($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 9, "Title.Users"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.allowCreate);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 11, "Commons.Name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 13, "Commons.Role"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 15, "Commons.Email"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 17, "Commons.State"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.allowUpdate || ctx.allowDelete);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.users);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.confirmModalData);
          }
        },
        dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, commons_lib__WEBPACK_IMPORTED_MODULE_4__.DropdownComponent, commons_lib__WEBPACK_IMPORTED_MODULE_4__.ConfirmModalComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return UsersListComponent;
})();

/***/ }),

/***/ 2941:
/*!*************************************************************!*\
  !*** ./projects/mf-user/src/app/services/module.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleService: () => (/* binding */ ModuleService)
/* harmony export */ });
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! commons-lib */ 8883);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(commons_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6306);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);



let ModuleService = /*#__PURE__*/(() => {
  class ModuleService {
    constructor(http) {
      this.http = http;
      this.apiUrl = commons_lib__WEBPACK_IMPORTED_MODULE_0__.ApiEnum.Module;
    }
    getAll() {
      return this.http.get(`${this.apiUrl}`);
    }
    static {
      this.ɵfac = function ModuleService_Factory(t) {
        return new (t || ModuleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ModuleService,
        factory: ModuleService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ModuleService;
})();

/***/ }),

/***/ 3585:
/*!***********************************************************!*\
  !*** ./projects/mf-user/src/app/services/role.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleService: () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! commons-lib */ 8883);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(commons_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6306);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);



let RoleService = /*#__PURE__*/(() => {
  class RoleService {
    constructor(http) {
      this.http = http;
      this.apiUrl = commons_lib__WEBPACK_IMPORTED_MODULE_0__.ApiEnum.Role;
    }
    getAll() {
      return this.http.get(`${this.apiUrl}`);
    }
    getById(roleId) {
      return this.http.get(`${this.apiUrl}${roleId}`);
    }
    delete(roleId) {
      return this.http.delete(`${this.apiUrl}${roleId}`);
    }
    create(data) {
      return this.http.post(`${this.apiUrl}`, data);
    }
    update(roleId, data) {
      return this.http.put(`${this.apiUrl}${roleId}`, data);
    }
    static {
      this.ɵfac = function RoleService_Factory(t) {
        return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RoleService,
        factory: RoleService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return RoleService;
})();

/***/ }),

/***/ 6610:
/*!***********************************************************!*\
  !*** ./projects/mf-user/src/app/services/user.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! commons-lib */ 8883);
/* harmony import */ var commons_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(commons_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6306);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);



let UserService = /*#__PURE__*/(() => {
  class UserService {
    constructor(http) {
      this.http = http;
      this.apiUrl = commons_lib__WEBPACK_IMPORTED_MODULE_0__.ApiEnum.User;
    }
    getAll() {
      return this.http.get(`${this.apiUrl}GetAll`);
    }
    getById(userId) {
      return this.http.get(`${this.apiUrl}${userId}`);
    }
    create(data) {
      return this.http.post(`${this.apiUrl}`, data);
    }
    update(data) {
      return this.http.put(`${this.apiUrl}`, data);
    }
    delete(userId) {
      return this.http.delete(`${this.apiUrl}${userId}`);
    }
    static {
      this.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return UserService;
})();

/***/ }),

/***/ 8158:
/*!*************************************************!*\
  !*** ./projects/mf-user/src/app/user.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserModule: () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 8648);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



let UserModule = /*#__PURE__*/(() => {
  class UserModule {
    static {
      this.ɵfac = function UserModule_Factory(t) {
        return new (t || UserModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: UserModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]
      });
    }
  }
  return UserModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 807:
/*!*******************************************!*\
  !*** ./projects/mf-user/src/bootstrap.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 63);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 638);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 9204:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ })

}])
//# sourceMappingURL=807.js.map