import {problemAxios} from "@/api/index";

export const Problem = {
    fetchProblem: async () => {
        return await problemAxios.get();
    }
}