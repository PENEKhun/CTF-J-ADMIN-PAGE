import axios from 'axios';
import Vuex from 'vuex';

const HOST = "http://15.165.86.75:8080/api/v1";

export const loginStore = new Vuex.Store({
    state: {
        username: '',
        accessToken: '',
        refreshToken: '',
        tokenExpired: '',
    },
    getters: {
        isLogin(state) {
            return state.accessToken !== '';
        }
    },
    mutations: {
        // memberId를 설정합니다.
        setUsername(state, username) {
            state.username = username;
        },
        // accessToken를 설정합니다.
        setAccessToken(state, accessToken) {
            state.accessToken = accessToken;
        },
        setRefreshToken(state, refreshToken) {
            state.refrehToken = refreshToken;
        },
        setTokenExpired(state, tokenExpired){
            state.tokenExpired = tokenExpired;
        },
        // 초기화시킵니다.
        reset(state) {
            state.username = '';
            state.accessToken = '';
            state.refreshToken = '';
            state.tokenExpired = '';
        }
    },
    actions: {
        // 로그인합니다.
        async doLogin({ commit }, memberInfo) {
            console.log("doLogin() called");
            console.log(memberInfo);
            let result = false;
            let resultErr = null;
            try {
                let res = await axios.post(HOST + "/login", memberInfo);
                if (res.status === 200) {
                    console.log("로그인되었습니다.");
                    commit('setUsername', memberInfo.username);
                    commit('setAccessToken', res.data.accessToken);
                    commit('setRefreshToken', res.data.refrehToken);
                    commit('setTokenExpired', res.data.tokenExpired);
                    result = true;
                } else {
                    console.log("로그인되지 않았습니다.");
                    let err = new Error("Request failed");
                    err.response = {data:{"success":false, "errormessage": err.response.details}};
                    resultErr = err;
                }
            } catch(err) {
                console.log(err);
                if (!err.response) {
                    err.response = {data:{"success":false, "errormessage":err.response.details}};
                }
                resultErr = err;
            }
            return new Promise((resolve, reject) => {
                if (result) {
                    resolve();
                } else {
                    reject(resultErr);
                }
            });
        },
        // 로그아웃합니다.
        doLogout({commit}) {
            commit('reset');
        }
    }
});

export default loginStore;