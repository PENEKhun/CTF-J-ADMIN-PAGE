import {accountAxios} from "@/api/index";
import {pagingQuery} from "@/api/common/pagingQuery";

export const Account = {
    fetchAccount: async (search) => {
        return accountAxios.get(pagingQuery(search));
    },
}
