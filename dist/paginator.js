"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Tien Nguyen on 6/26/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _constant = require("./constant");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 */
var Paginator = function () {
    /**
     * Default constructor
     * @param query query object information from client
     * @param total_item total item of the data
     */
    function Paginator(query, total_item) {
        _classCallCheck(this, Paginator);

        // Default page = 1
        this.currentPage = query.page === undefined ? _constant.DEFAULT_CURRENT_PAGE : parseInt(query.page);
        // Default item_per_page = 10
        this.itemPerPage = query.item_per_page === undefined ? _constant.DEFAULT_ITEM_PER_PAGE : parseInt(query.item_per_page);

        this.minIndex = (this.currentPage - 1) * this.itemPerPage;
        this.maxIndex = this.currentPage * this.itemPerPage;
        this.totalItem = total_item;
    }

    /**
     * Return the pagination Object
     * @returns {{total_item: *, page: *, item_per_page: *, min_index: (number|*), max_index: (number|*)}}
     */


    _createClass(Paginator, [{
        key: "getPagination",
        value: function getPagination() {
            return {
                total_item: this.totalItem,
                page: this.currentPage,
                item_per_page: this.itemPerPage,
                min_index: this.minIndex,
                max_index: this.maxIndex
            };
        }
    }]);

    return Paginator;
}();

exports.default = Paginator;