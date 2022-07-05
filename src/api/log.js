import {logAxios} from "@/api/index";
import {pagingQuery} from "@/api/common/pagingQuery";

export const Log = {
    fetchFlagLog: async (search) => {
        return logAxios.get(pagingQuery(search));
    },
    fetchIntegratedLog: async (search) => {
        return logAxios.get(pagingQuery(search));
    }
}
