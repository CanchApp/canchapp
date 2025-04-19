(self["webpackChunkmf_company"] = self["webpackChunkmf_company"] || []).push([[902],{

/***/ 1521:
/*!***************************************************!*\
  !*** ./dist/commons-lib/fesm2022/commons-lib.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionEnum: () => (/* binding */ ActionEnum),
/* harmony export */   ApiEnum: () => (/* binding */ ApiEnum),
/* harmony export */   BrowserComponent: () => (/* binding */ BrowserComponent),
/* harmony export */   BrowserIdEnum: () => (/* binding */ BrowserIdEnum),
/* harmony export */   CodeErrorEnum: () => (/* binding */ CodeErrorEnum),
/* harmony export */   CommonLibModule: () => (/* binding */ CommonLibModule),
/* harmony export */   CommonsLibComponent: () => (/* binding */ CommonsLibComponent),
/* harmony export */   CommonsLibService: () => (/* binding */ CommonsLibService),
/* harmony export */   ConfirmModalComponent: () => (/* binding */ ConfirmModalComponent),
/* harmony export */   ConfirmModalModel: () => (/* binding */ ConfirmModalModel),
/* harmony export */   DateComponent: () => (/* binding */ DateComponent),
/* harmony export */   DayEnum: () => (/* binding */ DayEnum),
/* harmony export */   DropdownComponent: () => (/* binding */ DropdownComponent),
/* harmony export */   DropdownItemModel: () => (/* binding */ DropdownItemModel),
/* harmony export */   ModuleActionsEnum: () => (/* binding */ ModuleActionsEnum),
/* harmony export */   ModulesEnum: () => (/* binding */ ModulesEnum),
/* harmony export */   NotificationService: () => (/* binding */ NotificationService),
/* harmony export */   NotificationTypeEnum: () => (/* binding */ NotificationTypeEnum),
/* harmony export */   Notifications: () => (/* binding */ Notifications),
/* harmony export */   PaymentStatusEnum: () => (/* binding */ PaymentStatusEnum),
/* harmony export */   PaymentTypeEnum: () => (/* binding */ PaymentTypeEnum),
/* harmony export */   PermissionActions: () => (/* binding */ PermissionActions),
/* harmony export */   PermissionLibService: () => (/* binding */ PermissionLibService),
/* harmony export */   PermissionModule: () => (/* binding */ PermissionModule),
/* harmony export */   PlacementAlignEnum: () => (/* binding */ PlacementAlignEnum),
/* harmony export */   PlacementFromEnum: () => (/* binding */ PlacementFromEnum),
/* harmony export */   SelectComponent: () => (/* binding */ SelectComponent),
/* harmony export */   SelectIdEnum: () => (/* binding */ SelectIdEnum),
/* harmony export */   permissionGuard: () => (/* binding */ permissionGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8648);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 6762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 1522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2778);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6306);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3636);












const _c0 = ["confirmModal"];
function ConfirmModalComponent_strong_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.boldBody);
  }
}
function DropdownComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_For_5_Template_a_click_0_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onClickActionButton(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
  }
}
function DropdownComponent_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.emptyItemsLabel, " ");
  }
}
function BrowserComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrowserComponent_span_6_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.clearSelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BrowserComponent_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrowserComponent_ul_7_li_1_Template_li_click_0_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onSelectItem(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r4.id == "-1" ? item_r4.args : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.text, " ");
  }
}
function BrowserComponent_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BrowserComponent_ul_7_li_1_Template, 2, 2, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
  }
}
function SelectComponent_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.placeHolder));
  }
}
function SelectComponent_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.text);
  }
}
var ApiEnum = /*#__PURE__*/function (ApiEnum) {
  ApiEnum["Customer"] = "http://localhost:5194/api/Customer/";
  ApiEnum["Report"] = "http://localhost:5195/api/Report/";
  ApiEnum["DashBoard"] = "http://localhost:5195/api/DashBoard/";
  ApiEnum["Booking"] = "http://localhost:5196/api/Booking/";
  ApiEnum["Security"] = "http://localhost:5197/api/Security/";
  ApiEnum["User"] = "http://localhost:5197/api/User/";
  ApiEnum["Role"] = "http://localhost:5197/api/Role/";
  ApiEnum["Module"] = "http://localhost:5197/api/Module/";
  ApiEnum["Company"] = "http://localhost:5198/api/Company/";
  ApiEnum["Browser"] = "http://localhost:5199/api/Browser/";
  ApiEnum["Select"] = "http://localhost:5199/api/Select/";
  ApiEnum["HoliDay"] = "http://localhost:5199/api/HoliDay/";
  ApiEnum["Court"] = "http://localhost:5199/api/Court/";
  return ApiEnum;
}(ApiEnum || {});
var NotificationTypeEnum = /*#__PURE__*/function (NotificationTypeEnum) {
  NotificationTypeEnum["Succes"] = "success";
  NotificationTypeEnum["Default"] = "default";
  NotificationTypeEnum["Primary"] = "primary";
  NotificationTypeEnum["Secondary"] = "secondary";
  NotificationTypeEnum["Warning"] = "warning";
  NotificationTypeEnum["Danger"] = "danger";
  NotificationTypeEnum["Info"] = "info";
  return NotificationTypeEnum;
}(NotificationTypeEnum || {});
var PlacementFromEnum = /*#__PURE__*/function (PlacementFromEnum) {
  PlacementFromEnum["Top"] = "top";
  PlacementFromEnum["Bottom"] = "bottom";
  return PlacementFromEnum;
}(PlacementFromEnum || {});
var PlacementAlignEnum = /*#__PURE__*/function (PlacementAlignEnum) {
  PlacementAlignEnum["Left"] = "left";
  PlacementAlignEnum["Right"] = "right";
  PlacementAlignEnum["Center"] = "center";
  return PlacementAlignEnum;
}(PlacementAlignEnum || {});
var PaymentTypeEnum = /*#__PURE__*/function (PaymentTypeEnum) {
  PaymentTypeEnum[PaymentTypeEnum["None"] = 0] = "None";
  PaymentTypeEnum[PaymentTypeEnum["Cash"] = 1] = "Cash";
  PaymentTypeEnum[PaymentTypeEnum["Debit"] = 2] = "Debit";
  PaymentTypeEnum[PaymentTypeEnum["Credit"] = 3] = "Credit";
  return PaymentTypeEnum;
}(PaymentTypeEnum || {});
var PaymentStatusEnum = /*#__PURE__*/function (PaymentStatusEnum) {
  PaymentStatusEnum[PaymentStatusEnum["None"] = 0] = "None";
  PaymentStatusEnum[PaymentStatusEnum["Pending"] = 1] = "Pending";
  PaymentStatusEnum[PaymentStatusEnum["Paid"] = 2] = "Paid";
  return PaymentStatusEnum;
}(PaymentStatusEnum || {});
var BrowserIdEnum = /*#__PURE__*/function (BrowserIdEnum) {
  BrowserIdEnum["BrowserCustomer"] = "BrowserCustomer";
  return BrowserIdEnum;
}(BrowserIdEnum || {});
var SelectIdEnum = /*#__PURE__*/function (SelectIdEnum) {
  SelectIdEnum["ListCourt"] = "ListCourt";
  SelectIdEnum["ListRole"] = "ListRole";
  return SelectIdEnum;
}(SelectIdEnum || {});
var ActionEnum = /*#__PURE__*/function (ActionEnum) {
  ActionEnum[ActionEnum["None"] = 0] = "None";
  ActionEnum[ActionEnum["Create"] = 1] = "Create";
  ActionEnum[ActionEnum["Edit"] = 2] = "Edit";
  ActionEnum[ActionEnum["Detail"] = 3] = "Detail";
  ActionEnum[ActionEnum["Delete"] = 4] = "Delete";
  return ActionEnum;
}(ActionEnum || {});
var CodeErrorEnum = /*#__PURE__*/function (CodeErrorEnum) {
  /* Error general  */
  CodeErrorEnum[CodeErrorEnum["InternalServerError"] = 100] = "InternalServerError";
  /* Error Reservas  */
  CodeErrorEnum[CodeErrorEnum["BookingNotAvailable"] = 101] = "BookingNotAvailable";
  CodeErrorEnum[CodeErrorEnum["BookingNotFound"] = 102] = "BookingNotFound";
  CodeErrorEnum[CodeErrorEnum["BookingPaid"] = 103] = "BookingPaid";
  CodeErrorEnum[CodeErrorEnum["BookingDateStartMustBeGreater"] = 104] = "BookingDateStartMustBeGreater";
  /* Error Canchas  */
  CodeErrorEnum[CodeErrorEnum["CourtWithRecords"] = 201] = "CourtWithRecords";
  CodeErrorEnum[CodeErrorEnum["CourtNotFound"] = 202] = "CourtNotFound";
  return CodeErrorEnum;
}(CodeErrorEnum || {});
var DayEnum = /*#__PURE__*/function (DayEnum) {
  DayEnum[DayEnum["Monday"] = 1] = "Monday";
  DayEnum[DayEnum["Tuesday"] = 2] = "Tuesday";
  DayEnum[DayEnum["Wednesday"] = 3] = "Wednesday";
  DayEnum[DayEnum["Thursday"] = 4] = "Thursday";
  DayEnum[DayEnum["Friday"] = 5] = "Friday";
  DayEnum[DayEnum["Saturday"] = 6] = "Saturday";
  DayEnum[DayEnum["Sunday"] = 7] = "Sunday";
  return DayEnum;
}(DayEnum || {});
var ModulesEnum = /*#__PURE__*/function (ModulesEnum) {
  ModulesEnum["Dasboard"] = "Dashboard";
  ModulesEnum["Users"] = "Users";
  ModulesEnum["Roles"] = "Roles";
  ModulesEnum["Courts"] = "Courts";
  return ModulesEnum;
}(ModulesEnum || {});
var ModuleActionsEnum = /*#__PURE__*/function (ModuleActionsEnum) {
  ModuleActionsEnum["Create"] = "create";
  ModuleActionsEnum["Read"] = "read";
  ModuleActionsEnum["Update"] = "update";
  ModuleActionsEnum["Delete"] = "delete";
  return ModuleActionsEnum;
}(ModuleActionsEnum || {});
class ConfirmModalModel {}

/**
 * @property {number} delay - Tiempo que demora en estar visible la notificación.
 * @property {string} title - Titulo a mostrar en la notificación.
 * @property {string} message Texto a mostrar en la notificación.
 * @property {string} icon Icono a mostrar en la notificación.
 * @property {NotificationType} type Tipo de notificación.
 * @property {PlacementFrom} placementFrom Colocación de la notificación.
 * @property {placementAlign} placementAlign Alineacion de la notificación.
 */
class Notifications {
  constructor() {
    this.delay = 3000;
    this.title = '';
    this.message = '';
    this.icon = 'none';
    this.type = NotificationTypeEnum.Default;
    this.placementFrom = PlacementFromEnum.Top;
    this.placementAlign = PlacementAlignEnum.Right;
  }
}
class DropdownItemModel {}
class PermissionModule {}
class PermissionActions {}
let ConfirmModalComponent = /*#__PURE__*/(() => {
  class ConfirmModalComponent {
    constructor() {
      this.confirmButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.cancelButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.recordId = 0; // Id para identificar la fila cliqueada
    }
    ngAfterViewInit() {
      this.confirmModal = new bootstrap.Modal(this.modalDelete.nativeElement);
    }
    onClickConfirmButton() {
      this.confirmButtonClick.emit(this.recordId);
    }
    onClickCancelButton() {
      this.cancelButtonClick.emit(this.recordId);
    }
    openModal(recordId) {
      this.recordId = recordId;
      this.confirmModal.show();
    }
    closeModal() {
      this.recordId = 0;
      this.confirmModal.hide();
    }
    static {
      this.ɵfac = function ConfirmModalComponent_Factory(t) {
        return new (t || ConfirmModalComponent)();
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfirmModalComponent,
        selectors: [["lib-confirm-modal"]],
        viewQuery: function ConfirmModalComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalDelete = _t.first);
          }
        },
        inputs: {
          data: "data"
        },
        outputs: {
          confirmButtonClick: "confirmButtonClick",
          cancelButtonClick: "cancelButtonClick"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 18,
        vars: 5,
        consts: [["confirmModal", ""], ["tabindex", "-1", 1, "modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-secondary", 3, "click"]],
        template: function ConfirmModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onClickCancelButton());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConfirmModalComponent_strong_11_Template, 2, 1, "strong", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_14_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onClickConfirmButton());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_16_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onClickCancelButton());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.body, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.boldBody != "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.confirmLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.cancelLabel);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf]
      });
    }
  }
  return ConfirmModalComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DropdownComponent = /*#__PURE__*/(() => {
  class DropdownComponent {
    constructor() {
      this.items = [];
      this.disabled = false;
      this.mainButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.actionButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onClickMainButton() {
      this.mainButtonClick.emit();
    }
    onClickActionButton(item) {
      this.actionButtonClick.emit(item);
    }
    static {
      this.ɵfac = function DropdownComponent_Factory(t) {
        return new (t || DropdownComponent)();
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DropdownComponent,
        selectors: [["lib-dropdown"]],
        inputs: {
          placeholder: "placeholder",
          emptyItemsLabel: "emptyItemsLabel",
          items: "items",
          disabled: "disabled"
        },
        outputs: {
          mainButtonClick: "mainButtonClick",
          actionButtonClick: "actionButtonClick"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 7,
        vars: 2,
        consts: [[1, "dropdown", "show"], ["role", "button", "id", "dropdownMenuLink", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", 3, "click"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "dropdown-item", 3, "click"]],
        template: function DropdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_Template_button_click_1_listener() {
              return ctx.onClickMainButton();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](4, DropdownComponent_For_5_Template, 2, 1, "a", 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"], false, DropdownComponent_ForEmpty_6_Template, 2, 1, "a");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.placeholder, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.items);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
      });
    }
  }
  return DropdownComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const VALUE_ACCESSOR$1 = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => BrowserComponent),
  multi: true
};
let BrowserComponent = /*#__PURE__*/(() => {
  class BrowserComponent {
    constructor(translate, http) {
      this.translate = translate;
      this.http = http;
      this.placeHolder = 'Browser.LookFor';
      this.addItem = false;
      this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Evento para emitir el ítem seleccionado
      this.items = [];
      this.selectedItem = null;
      this.error = null;
      this.value = null;
      this.isDisabled = false;
      this.onChangeFn = () => {};
      this.onTouchedFn = () => {};
      this.inputSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      // Configurar el manejo de las entradas del usuario
      this.inputSubscription = this.inputSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300),
      // Espera 300 ms después de la última entrada
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)(),
      // Evita llamadas si el valor no cambia
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(filter => this.callApi(filter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
        this.error = error.message || 'Error desconocido';
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]); // Devuelve un array vacío para continuar el flujo
      })))).subscribe(response => {
        this.error = null; // Limpia el error en caso de éxito
        if (response.length == 0 && this.addItem) response.push({
          text: 'Agregar item',
          id: '-1',
          args: 'addItem'
        });
        this.items = response;
      });
    }
    writeValue(value) {
      this.value = value || null;
    }
    registerOnChange(fn) {
      this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
      this.onTouchedFn = fn;
    }
    setDisabledState(isDisabled) {
      this.isDisabled = isDisabled;
    }
    onInput(event) {
      const inputValue = event.target.value;
      this.value = {
        text: inputValue,
        id: ''
      }; // Solo el texto al principio
      // Notifica el cambio al formulario
      this.onChangeFn(this.value);
      // Emite el valor ingresado para manejarlo con debounceTime
      this.inputSubject.next(inputValue);
    }
    callApi(filter) {
      const apiUrl = `${ApiEnum.Browser}GetBrowserNotTenant/${this.browserId}/${filter}`;
      return this.http.get(apiUrl);
    }
    ngOnDestroy() {
      // Limpia la suscripción al destruir el componente
      this.inputSubscription.unsubscribe();
    }
    // Función para manejar la selección de un item
    onSelectItem(item) {
      if (item.id == '-1' && this.addItem) {
        this.items = []; // Limpia las sugerencias
        this.onItemSelected.emit(item); // Emitir el ítem seleccionado
        return;
      }
      this.selectedItem = item;
      this.value = item; // Establece el valor seleccionado
      this.onChangeFn(item); // Notifica al formulario
      this.items = []; // Limpia las sugerencias
    }
    clearSelected() {
      this.selectedItem = null;
      this.value = null; // Limpia el valor del campo
      this.items = []; // Limpia las sugerencias
      this.onChangeFn(null); // Notifica al formulario el cambio a vacío
    }
    selectItem() {
      return this.selectedItem;
    }
    static {
      this.ɵfac = function BrowserComponent_Factory(t) {
        return new (t || BrowserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BrowserComponent,
        selectors: [["lib-browser"]],
        inputs: {
          browserId: "browserId",
          placeHolder: "placeHolder",
          addItem: "addItem"
        },
        outputs: {
          onItemSelected: "onItemSelected"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([VALUE_ACCESSOR$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 8,
        vars: 7,
        consts: [[1, "position-relative"], [1, "input-group"], [1, "input-group-text"], [1, "fa", "fa-search"], ["type", "text", 1, "form-control", 3, "input", "blur", "placeholder", "value", "disabled"], ["class", "input-group-text", 3, "click", 4, "ngIf"], ["class", "list-group position-absolute mt-1 items-dropdown", 4, "ngIf"], [1, "input-group-text", 3, "click"], [1, "list-group", "position-absolute", "mt-1", "items-dropdown"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 3, "click", "ngClass"]],
        template: function BrowserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function BrowserComponent_Template_input_input_4_listener($event) {
              return ctx.onInput($event);
            })("blur", function BrowserComponent_Template_input_blur_4_listener() {
              return ctx.onTouchedFn();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BrowserComponent_span_6_Template, 2, 0, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BrowserComponent_ul_7_Template, 2, 1, "ul", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx.placeHolder));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value == null ? null : ctx.value.text)("disabled", ctx.isDisabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedItem);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length > 0);
          }
        },
        dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: [".position-relative[_ngcontent-%COMP%]{position:relative}.items-dropdown[_ngcontent-%COMP%]{width:100%;z-index:1000;max-height:200px;overflow-y:auto;box-shadow:0 4px 8px #0000001a;cursor:pointer}.addItem[_ngcontent-%COMP%]{color:#48abf7;text-decoration:underline}"]
      });
    }
  }
  return BrowserComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SelectComponent),
  multi: true
};
let SelectComponent = /*#__PURE__*/(() => {
  class SelectComponent {
    constructor(translate, http) {
      this.translate = translate;
      this.http = http;
      this.placeHolder = 'Select.SelectOption';
      this.empty = true;
      this.useCustomItems = false;
      this.items = [];
      this.error = null;
      this.defaultValue = {
        text: '',
        id: '-1'
      };
      this.value = {
        text: '',
        id: '-1'
      };
      this.isDisabled = false;
      this.onChangeFn = () => {};
      this.onTouchedFn = () => {};
    }
    ngOnInit() {
      if (!this.useCustomItems) {
        const apiUrl = `${ApiEnum.Select}GetSelect/${this.selectId}`;
        this.selectSubscription = this.http.get(apiUrl).subscribe(response => {
          this.items = response;
          if (!this.empty && this.items.length > 0) {
            this.writeValue(this.items[0]);
            this.onChangeFn(this.items[0]);
          }
        });
      }
    }
    writeValue(value) {
      this.value = value || this.defaultValue;
    }
    registerOnChange(fn) {
      this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
      this.onTouchedFn = fn;
    }
    setDisabledState(isDisabled) {
      this.isDisabled = isDisabled;
    }
    onChange($event) {
      const item = this.items.find(item => item.id == $event.target.value);
      if (item) {
        this.onChangeFn(item);
      } else {
        this.onChangeFn(this.defaultValue);
      }
      this.onTouchedFn();
    }
    onTouched() {
      this.onTouchedFn();
    }
    ngOnDestroy() {
      // Limpia la suscripción al destruir el componente
      this.selectSubscription?.unsubscribe();
    }
    static {
      this.ɵfac = function SelectComponent_Factory(t) {
        return new (t || SelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectComponent,
        selectors: [["lib-select"]],
        inputs: {
          selectId: "selectId",
          placeHolder: "placeHolder",
          empty: "empty",
          useCustomItems: "useCustomItems"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 3,
        vars: 4,
        consts: [["aria-label", "Default select", 1, "form-select", 3, "ngModelChange", "change", "disabled", "ngModel"], ["value", "-1", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "-1"], [3, "value"]],
        template: function SelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function SelectComponent_Template_select_ngModelChange_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.value.id, $event) || (ctx.value.id = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectComponent_Template_select_change_0_listener($event) {
              return ctx.onChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectComponent_option_1_Template, 3, 3, "option", 1)(2, SelectComponent_option_2_Template, 2, 2, "option", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.value.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.empty);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel]
      });
    }
  }
  return SelectComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let JqueryService = /*#__PURE__*/(() => {
  class JqueryService {
    constructor() {
      if (!window.$) {
        window.$ = window.jQuery; // Asegúrate de que jQuery esté asignado
      }
    }
    useJQuery() {
      // Aquí puedes exponer métodos que usen jQuery
      return window.$;
    }
    static {
      this.ɵfac = function JqueryService_Factory(t) {
        return new (t || JqueryService)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JqueryService,
        factory: JqueryService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return JqueryService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DateComponent = /*#__PURE__*/(() => {
  class DateComponent {
    constructor(jqueryService) {
      this.jqueryService = jqueryService;
      this.$ = this.jqueryService.useJQuery();
    }
    ngAfterViewInit() {
      this.$("#datepicker").datepicker();
    }
    static {
      this.ɵfac = function DateComponent_Factory(t) {
        return new (t || DateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](JqueryService));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DateComponent,
        selectors: [["lib-date"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 1,
        vars: 0,
        consts: [["type", "text", "id", "datepicker"]],
        template: function DateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
          }
        }
      });
    }
  }
  return DateComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CommonsLibComponent = /*#__PURE__*/(() => {
  class CommonsLibComponent {
    static {
      this.ɵfac = function CommonsLibComponent_Factory(t) {
        return new (t || CommonsLibComponent)();
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CommonsLibComponent,
        selectors: [["lib-commons-lib"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 2,
        vars: 0,
        template: function CommonsLibComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " commons-lib works! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
      });
    }
  }
  return CommonsLibComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NotificationService = /*#__PURE__*/(() => {
  class NotificationService {
    constructor(jqueryService) {
      this.jqueryService = jqueryService;
      this.$ = this.jqueryService.useJQuery();
    }
    /**
    * Genera una notificacion.
    * @param {Notifications}  notificacion - Objeto configuración de la notificación.
    */
    showCustomNotification(notification) {
      this.$.notify(notification, {
        type: notification.type,
        placement: {
          from: notification.placementFrom,
          align: notification.placementAlign
        },
        time: 1000,
        delay: notification.delay
      });
    }
    /**
     * Genera una notificacion con plantilla exitosa.
     * @param _message - Mensaje a mostrar en la notificación.
     */
    SuccesNotification(_message) {
      const notiSucces = new Notifications();
      notiSucces.message = _message;
      notiSucces.icon = 'fa-solid fa-check';
      notiSucces.type = NotificationTypeEnum.Succes;
      this.showCustomNotification(notiSucces);
    }
    /**
     * Genera una notificacion con plantilla informativa.
     * @param _title - Titulo de la notificación.
     * @param _message - Mensaje a mostrar en la notificación.
     */
    InfoNotification(_message) {
      const notiSucces = new Notifications();
      notiSucces.message = _message;
      notiSucces.icon = 'fa-solid fa-info';
      notiSucces.type = NotificationTypeEnum.Info;
      this.showCustomNotification(notiSucces);
    }
    /**
    * Genera una notificacion con plantilla de error.
    * @param _title - Titulo de la notificación.
    * @param _message - Mensaje a mostrar en la notificación.
    */
    ErrorNotification(_message) {
      const notiSucces = new Notifications();
      notiSucces.message = _message;
      notiSucces.icon = 'fa-solid fa-bell';
      notiSucces.type = NotificationTypeEnum.Danger;
      this.showCustomNotification(notiSucces);
    }
    /**
    * Genera una notificacion con plantilla de advertencia.
    * @param _title - Titulo de la notificación.
    * @param _message - Mensaje a mostrar en la notificación.
    */
    WarningNotification(_message) {
      const notiSucces = new Notifications();
      notiSucces.message = _message;
      notiSucces.icon = 'fa-solid fa-exclamation';
      notiSucces.type = NotificationTypeEnum.Warning;
      this.showCustomNotification(notiSucces);
    }
    static {
      this.ɵfac = function NotificationService_Factory(t) {
        return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JqueryService));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotificationService,
        factory: NotificationService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return NotificationService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CommonsLibService = /*#__PURE__*/(() => {
  class CommonsLibService {
    constructor() {}
    getFormatIsoDate(date, time) {
      let _date = new Date(date);
      const year = _date.getFullYear();
      const month = String(_date.getMonth() + 1).padStart(2, '0');
      const day = String(_date.getDate()).padStart(2, '0');
      const hours = time.split(':')[0];
      const minutes = time.split(':')[1];
      const localISOString = `${year}-${month}-${day}T${hours}:${minutes}:00`;
      return localISOString;
    }
    getTime(date) {
      let _date = new Date(date);
      const hours = _date.getHours().toString().padStart(2, '0');
      const minutes = _date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}:00`;
    }
    getMonthText(numberMonth) {
      const monthText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return monthText[numberMonth];
    }
    static {
      this.ɵfac = function CommonsLibService_Factory(t) {
        return new (t || CommonsLibService)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CommonsLibService,
        factory: CommonsLibService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return CommonsLibService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PermissionLibService = /*#__PURE__*/(() => {
  class PermissionLibService {
    constructor() {}
    hasPermissionToComponent(parentModule, componentActions) {
      const actions = this.getActionsByRoleModule(parentModule);
      if (actions === null) {
        return false;
      }
      return actions[componentActions];
    }
    hasMultiplePermissionToComponent(parentModule, componentActions) {
      const actions = this.getActionsByRoleModule(parentModule);
      if (actions === null) {
        return [false];
      }
      const returnArray = componentActions.map(e => actions[e]);
      return returnArray;
    }
    getActionsByRoleModule(parentModule) {
      const permissions = JSON.parse(localStorage.getItem("ROLES_MODULES"));
      if (!permissions) {
        return null;
      }
      return permissions.find(e => e.moduleName == parentModule)?.actions || null;
    }
    static {
      this.ɵfac = function PermissionLibService_Factory(t) {
        return new (t || PermissionLibService)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PermissionLibService,
        factory: PermissionLibService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return PermissionLibService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const permissionGuard = (route, state) => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
  const service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(PermissionLibService);
  try {
    const parentModule = route.data['parentModule'];
    const componentAction = route.data['parentModuleAction'];
    if (!parentModule || !componentAction) {
      return false;
    }
    console.log('parentModule', parentModule);
    console.log('componentAction', componentAction);
    if (service.hasPermissionToComponent(parentModule, componentAction)) {
      return true;
    } else {
      router.navigate(['/unauthorized']);
      return false;
    }
  } catch (error) {
    console.error(error);
    router.navigate(['/unauthorized']);
    return false;
  }
};
let CommonLibModule = /*#__PURE__*/(() => {
  class CommonLibModule {
    static {
      this.ɵfac = function CommonLibModule_Factory(t) {
        return new (t || CommonLibModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CommonLibModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
      });
    }
  }
  return CommonLibModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of commons-lib
 */
// Enums

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=902.js.map