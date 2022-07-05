import {fileAxios, problemAxios} from "@/api/index";

export const Problem = {
    fetchProblem: async () => {
        return await problemAxios.get();
    },
    uploadFile: async (file) => {
        return await fileAxios.post("", {file}, {headers : {'Content-Type' : 'multipart/form-data'}});
    },
    editPartly: async (problemDto) => {
        return await problemAxios.patch("" + problemDto.id, problemDto, {headers : { "Content-Type": "multipart/form-data"}});

    },
    uploadProblem: async (problemDto) => {
        return await problemAxios.post("", problemDto, {headers : { "Content-Type": "multipart/form-data"}});

    }
}