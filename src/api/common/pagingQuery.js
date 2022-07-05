export function pagingQuery(search){
    let res = `?page=${search.pageNum}&size=${search.amount}&sort=${search.sortBy.value},${search.sortType}`;
    if (search.logType !== undefined)
        res += `&logType=${search.logType}`;

    return res;
}