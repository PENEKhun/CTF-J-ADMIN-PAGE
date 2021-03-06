import { createWebHistory, createRouter } from 'vue-router';
import NotFound from "@/views/NotFound";
import DefaultHome from "@/components/home/DefaultHome";
import Auth from "@/store/auth";
import CreateAccount from "@/components/home/CreateAccount";
import ProblemOverview from "@/components/home/ProblemOverview";
import AccountOverview from "@/components/home/AccountOverview";
import FlagAuthLog from "@/components/home/FlagAuthLog";
import IntegratedLog from "@/components/home/IntegratedLog";
import MakeProblem from "@/components/home/MakeProblem";

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {authRequired: true},
        component: () => import("@/views/Main"),
        children:[
            {
                path: "/",
                component: DefaultHome,
                name: "default home",
            },

            /* Account Menu */
            {
                path: "/AccountOverview",
                component: AccountOverview,
                name: "AccountOverview",
            },
            {
                path: "/CreateAccount",
                component: CreateAccount,
                name: "CreateAccount",
            },


            /* Problem Menu */
            {
                path: "/ProblemOverview",
                component: ProblemOverview,
                name: "ProblemOverview",
            },
            {
                path: "/MakeProblem",
                component: MakeProblem,
                name: "MakeProblem",
            },


            /* Log Menu */
            {
                path: "/FlagAuthLog",
                component: FlagAuthLog,
                name: "FlagAuthLog",
            },
            {
                path: "/IntegratedLog",
                component: IntegratedLog,
                name: "IntegratedLog",
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {authRequired: false},

        component: () => import("@/views/Login")
    },

    {
        path: "/404",
        name: "notFound",
        meta: {authRequired: false},
        component: NotFound,
    },
    {
        meta: {authRequired: false},
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});



//네비게이션 가드((뷰 라우터로 URL 접근에 대해서 처리할 수 있음)
router.beforeEach( async(to, from, next) => { //여기서 모든 라우팅이 대기 상태가 됨
    /**
     * to: 이동할 url 정보가 담긴 라우터 객체
     * from: 현재 url 정보가 담긴 라우터 객체
     * next: to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
     * next() 가 호출되기 전까지 화면 전환되지 않음
     */

    if (to.matched.some(function(routeInfo) {
        // noinspection JSUnresolvedVariable
        return routeInfo.meta.authRequired;
    })) {
        if (Auth.getters.isLogin === false) {
            //2개 토큰이 모두 없을 경우 로그인페이지로
            console.log("로그인 페이지로 이동합니다.");
            return next({name: 'login'});
        }
    }

    if (to.name.match("login") && Auth.getters.isLogin){
        console.log("이미 로그인 되어 있습니다.");
        return next({name : 'Home'})
    }

    return next();
})
