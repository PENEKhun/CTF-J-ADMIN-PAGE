<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Log /</span> Integrated</h4>

    <div class="card">

      <CommonPaging :search="search" :total-elements="totalElements" :total-page="totalPage"/>

      <div class="table-responsive text-nowrap">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>#</th>
            <th>action</th>
            <th>details</th>
            <th>time</th>
          </tr>
          </thead>
          <tbody class="table-border-bottom-0">
          <tr v-for="line in log" :key="line['id']">
            <td> {{ line['id'] }} </td>
            <td><i class="fab fa-angular fa-lg text-danger me-3"></i>
              {{ line['action'] }}
            </td>
            <td >{{ line['detail'] }}</td>
            <td>
              {{ line['time'] }}
            </td>

          </tr>
          </tbody>
        </table>
      </div>


      <CommonPaging :search="search" :total-elements="totalElements" :total-page="totalPage"/>

    </div>
  </div>

</template>

<script>

import {Log} from "@/api/log";
import CommonPaging from "@/components/common/log/CommonPaging";

export default {
  name: "IntegratedLog",
  components: {
    'CommonPaging': CommonPaging
  },
  data: function() {
    return {
      log : Array,
      search : {
        sortBy : {
          value : "id",
          list : [
            "id",
            "user",
            "action",
            "detail",
            "time",
          ]
        },
        logType: "log",
        sortType: "desc",
        pageNum: 0,
        amount: 30,
      },

      totalPage : 0,
      totalElements : 0,

    }
  },
  watch:{
    // 페이징 관련 변수가 변경 될 경우
    search: {
      deep: true,
      immediate: true,
      handler : 'getIntegratedLog'
    },
  },
  methods : {
    getIntegratedLog() {
      let res = Log.fetchIntegratedLog(this.search);
      console.log(res);
      res.then((q) => {
        if (q.status === 200){
          this.log = q.data['log'];
          this.totalPage = q.data['totalPage'] - 1;
          this.totalElements = q.data['totalElements'];
          console.log(this.$data.log);
        }
      }).catch((err) => {
        console.error(err);
      })
    }
  },
}
</script>