import {logAxios} from "@/api/index";

export const Log = {
    fetchFlagLog: async (_logType, _pageNum, _amount) => {
        return logAxios.get(`?logType=${_logType}&pageNum=${_pageNum}&amount=${_amount}`);
    }
}
