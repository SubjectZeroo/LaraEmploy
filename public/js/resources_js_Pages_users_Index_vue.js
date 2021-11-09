"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/users/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/users/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: false,
      columns: [{
        label: 'ID',
        field: 'id' // filterable: true

      }, {
        label: 'User Name',
        field: 'username' // filterable: true

      }, {
        label: 'Email Address',
        field: 'email' // filterable: true

      }],
      rows: [],
      totalRecords: 0,
      serverParams: {
        columnFilters: {
          field: 'username'
        },
        sort: [{
          field: '',
          type: ''
        }],
        page: 1,
        perPage: 10
      },
      showMessage: false,
      message: ""
    };
  },
  created: function created() {
    this.getUsers();
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      axios.get("/api/users").then(function (res) {
        _this.rows = res.data.data;
        _this.users = res.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteUser: function deleteUser(id) {
      var _this2 = this;

      axios["delete"]("api/users/" + id).then(function (res) {
        _this2.showMessage = true;
        _this2.message = res.data;

        _this2.getUsers();
      });
    },
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(params) {
      this.updateParams({
        page: params.currentPage
      });
      this.loadItems();
    },
    onPerPageChange: function onPerPageChange(params) {
      this.updateParams({
        perPage: params.currentPerPage
      });
      this.loadItems();
    },
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: [{
          type: params.sortType,
          field: this.columns[params.columnIndex].field
        }]
      });
      this.loadItems();
    },
    onColumnFilter: function onColumnFilter(params) {
      this.updateParams(params);
      this.loadItems();
    },
    // load items is what brings back the rows from server
    loadItems: function loadItems() {
      var _this3 = this;

      getFromServer(this.serverParams).then(function (response) {
        _this3.totalRecords = response.totalRecords;
        _this3.rows = response.rows;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/users/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/users/Index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_cf9dcd1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=cf9dcd1c& */ "./resources/js/Pages/users/Index.vue?vue&type=template&id=cf9dcd1c&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/users/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_cf9dcd1c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_cf9dcd1c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/users/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/users/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/users/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/users/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/users/Index.vue?vue&type=template&id=cf9dcd1c&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/users/Index.vue?vue&type=template&id=cf9dcd1c& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_cf9dcd1c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_cf9dcd1c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_cf9dcd1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=cf9dcd1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/users/Index.vue?vue&type=template&id=cf9dcd1c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/users/Index.vue?vue&type=template&id=cf9dcd1c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/users/Index.vue?vue&type=template&id=cf9dcd1c& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div"),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _c(
          "div",
          {
            staticClass:
              "d-flex justify-content-between justify-content-center align-items-center"
          },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary",
                attrs: { to: { name: "UsersCreate" } }
              },
              [_vm._v("Create User")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("vue-good-table", {
            attrs: {
              mode: "remote",
              totalRows: _vm.totalRecords,
              isLoading: _vm.isLoading,
              "pagination-options": {
                enabled: true
              },
              rows: _vm.rows,
              columns: _vm.columns
            },
            on: {
              "on-page-change": _vm.onPageChange,
              "on-sort-change": _vm.onSortChange,
              "on-column-filter": _vm.onColumnFilter,
              "on-per-page-change": _vm.onPerPageChange,
              "update:isLoading": function($event) {
                _vm.isLoading = $event
              },
              "update:is-loading": function($event) {
                _vm.isLoading = $event
              }
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "d-sm-flex align-items-center justify-content-between mb-4"
      },
      [
        _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
          _vm._v("Registered Users")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);