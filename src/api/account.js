import {accountAxios} from "@/api/index";
import {pagingQuery} from "@/api/common/pagingQuery";

export const Account = {
    fetchAccount: async (search) => {
        return accountAxios.get(pagingQuery(search));
    },
    editPartly: async (account) => {
        return accountAxios.patch("" + account.id, account, {headers : { "Content-Type": "multipart/form-data"}});
    }
}
