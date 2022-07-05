<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Accounts /</span> Overview</h4>

    <div class="row">
      <div class="col-md-12">
        <div class="card mb-4">
          <h5 class="card-header">title</h5>
          <!-- Account -->
          <div class="card-body">
            content
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import Content from "@/components/common/CommonContent";

export default {
  name: "AccountOverview",
  components: {
    'CommonPaging': CommonPaging
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