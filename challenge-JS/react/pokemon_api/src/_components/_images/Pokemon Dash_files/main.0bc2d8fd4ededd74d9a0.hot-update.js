webpackHotUpdate("main",{

/***/ "./src/_pages/_main/index.js":
/*!***********************************!*\
  !*** ./src/_pages/_main/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _Users_alypher_github_javascript_Intelie_react_pokemon_api_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_pokemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_api/pokemon */ "./src/_api/pokemon.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/_pages/_main/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/alypher/github/javascript/Intelie/react/pokemon_api/src/_pages/_main/index.js";




class Main extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      pokemons: [],
      pokemons_info: {},
      page: 0,
      next_page: 20
    };

    this.pokemon_load = async () => {
      const response = await _api_pokemon__WEBPACK_IMPORTED_MODULE_3__["default"].get("pokemon?offset=".concat(this.page, "&limit=20"));

      const _response$data = response.data,
            results = _response$data.results,
            pokemons_info = Object(_Users_alypher_github_javascript_Intelie_react_pokemon_api_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_response$data, ["results"]);

      let actualy_page = this.read_page(response.data.next);
      this.setState({
        page: this.read_nextPage(response.data.next)
      });
      console.log(this.page); //caminho proxima pagina API = response.data.next

      this.setState({
        pokemons: results,
        pokemons_info
      });
    };

    this.back_page = () => {};

    this.next_page = () => {};
  }

  read_page(url) {
    // const url_next = response.data.next.substring(41, 43)
    let atual = parseInt(this.read_nextPage(url));
    return atual - 20;
  }

  read_nextPage(url) {
    // const url_next = response.data.next.substring(41, 43)
    return url.substring(41, 43);
  }

  componentDidMount() {
    this.pokemon_load();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
      id: "page-main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, this.state.pokemons.map(pokemon => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      key: pokemon.name,
      onClick: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, " ", pokemon.name, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, " ", pokemon.url, " "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "pagination",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: this.back_page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: this.next_page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Next")));
  }

}

/***/ })

})
//# sourceMappingURL=main.0bc2d8fd4ededd74d9a0.hot-update.js.map