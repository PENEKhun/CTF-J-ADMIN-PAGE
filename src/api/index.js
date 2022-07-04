import axios from 'axios';
import { setInterceptors } from './common/interceptors';
import loginStore from "@/store/auth";
import Auth from "@/store/auth";

export const ADMIN_HOST = "http://15.165.86.75:8080/api/v1/admin";
export const DEFAULT_HOST = "http://15.165.86.75:8080/api/v1";

export function createInstance() {
    return axios.create({
        baseURL: ADMIN_HOST
    });
}

export function createInstanceWithAuth(url) { // Token값과 특정 url을 붙여서 셋팅
    let strTokenExpired = loginStore.state.tokenExpired;
    strTokenExpired = strTokenExpired.replace("KST", "");
    let tokenExpired = Date.parse(strTokenExpired);
    let now = new Date().getTime();
    if (now > tokenExpired) {
        // 토큰 만료시
        tokenReissue();
    } else {
        // 토큰 만료가 아니면
        const instance = axios.create({
            baseURL: `${ADMIN_HOST}${url}`,
        })
        return setInterceptors(instance);
    }
}

export function tokenReissue(){
    console.log("토큰을 재발급합니다.");
    Auth.dispatch("doReissue").then(r => console.log("토큰 재발행 완료"));
}

export const instance = createInstance();

// export const posts = createInstanceWithAuth('/posts');
export const problemAxios = createInstanceWithAuth('/problem');
export const fileAxios = createInstanceWithAuth('/file');
export const logAxios = createInstanceWithAuth('/log');