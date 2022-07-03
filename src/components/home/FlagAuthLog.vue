<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Log /</span> Flag</h4>

    <div class="card">
      <!--      <h5 class="card-header"></h5>-->
      <div class="table-responsive text-nowrap">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>#</th>
            <th>action</th>
            <th>details</th>
            <th>result</th>
            <th>time</th>
          </tr>
          </thead>
          <tbody class="table-border-bottom-0">
          <tr v-for="(line, index) in log" :key="index++">
            <td> {{index}} </td>
            <td><i class="fab fa-angular fa-lg text-danger me-3"></i>
              {{ line['action'] }}
            </td>
            <td >{{ line['detail'] }}</td>

            <td v-if=" JSON.stringify(line['detail']).includes('is_success=true') === true"><span class="badge bg-label-success me-1">Correct</span></td>
            <td v-else><span class="badge bg-label-danger me-1">Wrong</span></td>

            <td>
              {{ line['time'] }}
            </td>

          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>

import Content from "@/components/common/CommonContent";
import {Log} from "@/api/log";

export default {
  name: "DefaultHome",
  components: [
    Content,
  ],
  data: function() {
    return {
      log : Array
    }
  },
  methods : {
    getAllFlagLog() {
      let res = Log.fetchFlagLog("flag", 1, 30);
      console.log(res);
      res.then((q) => {
        if (q.status === 200){
          console.log("loaded");
          this.$data.log = q.data['log'];
          console.log(this.$data.log);
        }
      }).catch((err) => {
        console.error(err);
      })
    }
  },
  beforeMount() {
    this.getAllFlagLog();
  }
}
</script>