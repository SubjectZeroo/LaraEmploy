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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      users: {},
      params: {
        sort_field: 'created_at',
        sort_direction: 'desc',
        // id:'',
        username: '',
        email: '',
        created_at: ''
      },
      search: ''
    };
  },
  mounted: function mounted() {
    this.getResults();
  },
  watch: {
    params: {
      handler: function handler() {
        this.getResults();
      },
      deep: true
    },
    search: function search(val, old) {
      if (val.length >= 4 || old.length >= 4) {
        this.getResults();
      }
    }
  },
  methods: {
    deleteUser: function deleteUser(id) {
      var _this = this;

      axios["delete"]("api/users/" + id).then(function (res) {
        _this.showMessage = true;
        _this.message = res.data;

        _this.getResults();
      });
    },
    change_sort: function change_sort(field) {
      if (this.params.sort_field === field) {
        this.params.sort_direction = this.params.sort_direction === 'asc' ? 'desc' : 'asc';
      } else {
        this.params.sort_field = field;
        this.params.sort_direction = 'asc';
      } // this.getResults();

    },
    // getResults(page = 1) {
    //     axios
    //         .get('/api/users?page=' + page
    //         + '&sort_field=' + this.sort_field
    //         + '&sort_direction=' + this.sort_direction)
    //         .then(response => {
    //             this.users = res.data.data;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }
    getResults: function getResults() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/api/users', {
        params: _objectSpread({
          page: page,
          search: this.search.length >= 4 ? this.search : ''
        }, this.params)
      }).then(function (response) {
        _this2.users = response.data;
      })["catch"](function (error) {
        console.log(error);
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
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search"
                }
              ],
              staticClass: "forms-control col-md-3",
              attrs: { type: "text", placeholder: "Search" },
              domProps: { value: _vm.search },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                }
              }
            }),
            _vm._v(" "),
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
          _c("table", { staticClass: "table" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.change_sort("username")
                        }
                      }
                    },
                    [_vm._v("Username")]
                  ),
                  _vm._v(" "),
                  this.params.sort_field == "username" &&
                  this.params.sort_direction == "asc"
                    ? _c("span")
                    : _vm._e(),
                  _vm._v(" "),
                  this.params.sort_field == "username" &&
                  this.params.sort_direction == "desc"
                    ? _c("span")
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("th", [
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.change_sort("email")
                        }
                      }
                    },
                    [_vm._v("Email")]
                  ),
                  _vm._v(" "),
                  this.params.sort_field == "email" &&
                  this.params.sort_direction == "asc"
                    ? _c("span")
                    : _vm._e(),
                  _vm._v(" "),
                  this.params.sort_field == "email" &&
                  this.params.sort_direction == "desc"
                    ? _c("span")
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("th", [
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.change_sort("created_at")
                        }
                      }
                    },
                    [_vm._v("Created Date")]
                  ),
                  _vm._v(" "),
                  this.params.sort_field == "created_at" &&
                  this.params.sort_direction == "asc"
                    ? _c("span")
                    : _vm._e(),
                  _vm._v(" "),
                  this.params.sort_field == "created_at" &&
                  this.params.sort_direction == "desc"
                    ? _c("span")
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("th", [_vm._v("Actions")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.params.username,
                        expression: "params.username"
                      }
                    ],
                    staticClass: "form-input w-100",
                    attrs: { type: "text" },
                    domProps: { value: _vm.params.username },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.params, "username", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("th", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.params.email,
                        expression: "params.email"
                      }
                    ],
                    staticClass: "form-input w-100",
                    attrs: { type: "text" },
                    domProps: { value: _vm.params.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.params, "email", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("th", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.params.created_at,
                        expression: "params.created_at"
                      }
                    ],
                    staticClass: "form-input w-100",
                    attrs: { type: "text" },
                    domProps: { value: _vm.params.created_at },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.params, "created_at", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.users.data, function(user) {
                return _c("tr", { key: user.id }, [
                  _c("td", [_vm._v(_vm._s(user.username))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(user.email))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(user.created_at))]),
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
                              name: "UsersEdit",
                              params: { id: user.id }
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
                              return _vm.deleteUser(user.id)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                        Delete\n                                    "
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
          ]),
          _vm._v(" "),
          _c("pagination", {
            attrs: { data: _vm.users },
            on: { "pagination-change-page": _vm.getResults }
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