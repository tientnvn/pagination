/**
 * Created by Tien Nguyen on 6/26/16.
 */
import {DEFAULT_CURRENT_PAGE, DEFAULT_ITEM_PER_PAGE} from "./constant";

/**
 *
 */
export default class Paginator {
    /**
     * Default constructor
     * @param query query object information from client
     * @param total_item total item of the data
     */
    constructor(query, total_item) {
        // Default page = 1
        this.currentPage = (query.page === undefined ? DEFAULT_CURRENT_PAGE : parseInt(query.page));
        // Default item_per_page = 10
        this.itemPerPage = (query.itemPerPage === undefined ? DEFAULT_ITEM_PER_PAGE : parseInt(query.itemPerPage));

        this.minIndex = (this.currentPage - 1) * this.itemPerPage;
        this.maxIndex = this.currentPage * this.itemPerPage;
        this.totalItem = total_item;
    }

    /**
     * Return the pagination Object
     * @returns {{totalItem: *, page: *, itemPerPage: *, minIndex: (number|*), maxIndex: (number|*)}}
     */
    getPagination() {
        return {
            totalItem: this.totalItem,
            page: this.currentPage,
            itemPerPage: this.itemPerPage,
            minIndex: this.minIndex,
            maxIndex: this.maxIndex
        };
    }
}