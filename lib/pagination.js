/**
 * Created by Tien Nguyen on 12/21/16.
 */
import {DEFAULT_CURRENT_PAGE, DEFAULT_ITEM_PER_PAGE} from "./constant";

/**
 * Return the pagination Object
 * @param query
 * @param totalItem
 * @returns {{totalItem: *, page: *, itemPerPage: *, minIndex: number, maxIndex: number, hasNextPage: boolean, hasPrePage: boolean}}
 */
export function getPagination(query, totalItem) {
    // Default page = 1
    let currentPage = (query.page === undefined ? DEFAULT_CURRENT_PAGE : parseInt(query.page));
    // Default item_per_page = 10
    let itemPerPage = (query.itemPerPage === undefined ? DEFAULT_ITEM_PER_PAGE : parseInt(query.itemPerPage));

    let minIndex = (currentPage - 1) * itemPerPage;
    let maxIndex = currentPage * itemPerPage;
    let totalPage = totalItem / itemPerPage;
    let hasNextPage = totalPage > currentPage;
    let hasPrePage = currentPage > 1;
    return {
        totalItem: totalItem,
        page: currentPage,
        itemPerPage: itemPerPage,
        minIndex: minIndex,
        maxIndex: maxIndex,
        hasNextPage: hasNextPage,
        hasPrePage: hasPrePage
    };
}