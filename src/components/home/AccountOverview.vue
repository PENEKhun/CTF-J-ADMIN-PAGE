<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Accounts /</span> Overview</h4>


    <!--    overView-->
    <div v-if="$route.query.id == null" class="card">
      <CommonPaging :search="search" :total-elements="totalElements" :total-page="totalPage"/>
      <div class="table-responsive text-nowrap">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th>nickname</th>
            <th>email</th>
            <th>role</th>
            <th>score</th>
          </tr>
          </thead>
          <tbody class="table-border-bottom-0">
          <tr v-for="(line) in accounts" :key="index=line['id']">
            <td> {{ line['id'] }} </td>
            <td><i class="fab fa-angular fa-lg text-danger me-3"></i>
              <a style="color:black" :href='"./AccountOverview?id="+index'>{{ line['username'] }} </a>
            </td>
            <td >{{ line['nickname'] }}</td>
            <td>
              {{ line['email'] }}
            </td>

            <td v-if=" line['role'] === 'ADMIN'"><span class="badge bg-label-primary me-1">ADMIN</span></td>
            <td v-else><span class="badge bg-label-warning me-1">USER</span></td>

            <td>
              {{ line['score'] }}
            </td>

            <td>
              <div class="dropdown">
                <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bx bx-dots-vertical-rounded"></i>
                </button>
                <div class="dropdown-menu" style="">
                  <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                  <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i> Delete</a>
                </div>
              </div>
            </td>

          </tr>
          </tbody>
        </table>

        <CommonPaging :search="search" :total-elements="totalElements" :total-page="totalPage"/>
      </div>
    </div>

    <!--    Preview-->
    <div v-else class="card p-4">

      <div v-if="findAccountFromArr() !== undefined"
          :key="account = findAccountFromArr()">

        <!--           :key="account=accounts.find((acc) => acc.id === $route.query.id)">-->
        <!--        문제가 존재할때-->

        <div v-if="editMode === false">
        <strong>index</strong> : {{account['id']}} <br/>
        <strong>username</strong> : {{account['username']}} <br/>
        <strong>realName</strong> : {{account['realName']}} <br/>
        <strong>nickname</strong> : {{account['nickname']}} <br/>
        <strong>email</strong> : {{account['email']}} <br/>
        <strong>score</strong> : {{account['score']}} <br/>
        <strong>role</strong> : {{account['role']}} <br/>
        <strong>solved</strong> : {{account['solved']}} <br/><br/>

        <button type="button" @click="editMode=true" class="btn btn-outline-secondary">Edit this account</button>
        </div>

        <div v-else>
          <create-account :edit-mode="editMode" :account="account"></create-account>

        </div>


      </div>

    </div>

  </div>

</template>

<script>

import CommonPaging from "@/components/common/log/CommonPaging";
import {Account} from "@/api/account";
import CreateAccount from "@/components/home/CreateAccount";

export default {
  name: "AccountOverview",
  components: {
    'CommonPaging': CommonPaging,
    'CreateAccount' : CreateAccount,
  },
  data() {
    return {
      accounts: [],
      search: {
        sortBy: {
          value: "id",
          list: [
            "id",
            "username",
            "nickname",
            "email",
            "userRole",
            // "score",
          ]
        },
        sortType: "desc",
        pageNum: 0,
        amount: 30,
      },

      totalPage: 0,
      totalElements: 0,

      editMode: false,
    }
  },
  watch: {
    // 페이징 관련 변수가 변경 될 경우
    search: {
      deep: true,
      immediate: true,
      handler: 'getAccount'
    },
  },
  methods: {
    getAccount() {
      let res = Account.fetchAccount(this.search);
      console.log(res);
      res.then((q) => {
        if (q.status === 200) {
          this.accounts = q.data['accounts'];
          this.totalPage = q.data['totalPage'] - 1;
          this.totalElements = q.data['totalElements'];
          console.log(this.accounts);
        }
      }).catch((err) => {
        console.error(err);
      })
    },
    findAccountFromArr() {
      let idx = Number(this.$route.query.id);
      return this.accounts.find(acc => acc.id === idx);
    }
  }
}
</script>