"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_employees_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/employees/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/employees/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      employees: [],
      showMessage: false,
      message: "",
      search: null,
      selectedDepartment: null,
      departments: []
    };
  },
  watch: {
    search: function search() {
      this.getEmployees();
    },
    selectedDepartment: function selectedDepartment() {
      this.getEmployees();
    }
  },
  created: function created() {
    this.getEmployees();
    this.getDepartments();
  },
  methods: {
    getEmployees: function getEmployees() {
      var _this = this;

      axios.get("/api/employees", {
        params: {
          search: this.search,
          department_id: this.selectedDepartment
        }
      }).then(function (res) {
        _this.employees = res.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getDepartments: function getDepartments() {
      var _this2 = this;

      axios.get("/api/employees/departments").then(function (res) {
        _this2.departments = res.data;
      })["catch"](function (error) {
        console.log(console.error);
      });
    },
    deleteEmployee: function deleteEmployee(id) {
      var _this3 = this;

      axios["delete"]("api/employees/" + id).then(function (res) {
        _this3.showMessage = true;
        _this3.message = res.data;

        _this3.getEmployees();
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/employees/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/employees/Index.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_091fb32f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=091fb32f& */ "./resources/js/Pages/employees/Index.vue?vue&type=template&id=091fb32f&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/employees/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_091fb32f___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_091fb32f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/employees/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/employees/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/employees/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/employees/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/employees/Index.vue?vue&type=template&id=091fb32f&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/employees/Index.vue?vue&type=template&id=091fb32f& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_091fb32f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_091fb32f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_091fb32f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=091fb32f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/employees/Index.vue?vue&type=template&id=091fb32f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/employees/Index.vue?vue&type=template&id=091fb32f&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/employees/Index.vue?vue&type=template&id=091fb32f& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    _vm.showMessage
      ? _c("div", [
          _c("div", { staticClass: "alert alert-success" }, [
            _vm._v("\n            " + _vm._s(_vm.message) + "\n        ")
          ])
        ])
      : _vm._e(),
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
            _c("form", [
              _c("div", { staticClass: "form-row align-items-center" }, [
                _c("div", { staticClass: "col-auto" }, [
                  _c(
                    "label",
                    {
                      staticClass: "sr-only",
                      attrs: { for: "inlineFormInput" }
                    },
                    [_vm._v("Name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.lazy",
                        value: _vm.search,
                        expression: "search",
                        modifiers: { lazy: true }
                      }
                    ],
                    staticClass: "form-control mb-2",
                    attrs: {
                      type: "search",
                      name: "search",
                      placeholder: "Search by Name or Country Code"
                    },
                    domProps: { value: _vm.search },
                    on: {
                      change: function($event) {
                        _vm.search = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectedDepartment,
                          expression: "selectedDepartment"
                        }
                      ],
                      staticClass: "custom-select",
                      attrs: { name: "department_id" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.selectedDepartment = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    _vm._l(_vm.departments, function(department) {
                      return _c(
                        "option",
                        {
                          key: department.id,
                          domProps: { value: department.id }
                        },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(department.name) +
                              "\n                                "
                          )
                        ]
                      )
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary",
                attrs: { to: { name: "EmployeesCreate" } }
              },
              [_vm._v("Create Employee")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "table-responsive" }, [
          _c("table", { staticClass: "table" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.employees, function(employee) {
                return _c("tr", { key: employee.id }, [
                  _c("th", [_vm._v("#" + _vm._s(employee.id))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(employee.firts_name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(employee.last_name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(employee.middle_name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(employee.address))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(employee.department.name))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-primary",
                          attrs: {
                            to: {
                              name: "EmployeesEdit",
                              params: { id: employee.id }
                            }
                          }
                        },
                        [_vm._v("Edit")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          on: {
                            click: function($event) {
                              return _vm.deleteEmployee(employee.id)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                    Delete\n                                "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              }),
              0
            )
          ])
        ])
      ])
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
          _vm._v("Employees")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary mb-2", attrs: { type: "submit" } },
        [
          _vm._v(
            "\n                                Search\n                            "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Firts Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Last Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Adress")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Department")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);