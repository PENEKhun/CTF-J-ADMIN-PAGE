<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Problems /</span> Overview</h4>

<!--    overView-->
    <div v-if="$route.query.id == null" class="card">
      <div class="table-responsive text-nowrap">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>type</th>
            <th>solve</th>
            <th>isPublic</th>
            <th>score</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody class="table-border-bottom-0">
          <tr v-for="(line, index) in problems" :key="index++">
            <td> {{index}} </td>
            <td><i class="fab fa-angular fa-lg text-danger me-3"></i>
<!--              <strong>Angular Project</strong>-->
              <a style="color:black" :href='"./ProblemOverview?id=" + index'>{{ line['title'] }} </a>
            </td>
            <td >{{ line['type'] }}</td>
            <td>
              {{ line['solve'] }}
            </td>

            <td v-if=" line['isPublic'] === true"><span class="badge bg-label-primary me-1">Public</span></td>
            <td v-else><span class="badge bg-label-warning me-1">Private</span></td>

            <td v-if=" line['isPublic'] === true"> {{ line['calculatedScore'] }}</td>
            <td v-else> ?? </td>
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
      </div>
    </div>

<!--    Preview-->
    <div v-else class="card p-4">
      <div v-if="problems[$route.query.id-1] != null && !editMode" :key="problem=problems[$route.query.id-1]">
<!--        문제가 존재할때-->
        #{{ problem['id'] }} <br/>
        <strong>title</strong> : {{problem['title']}} <br/>
        <strong>description</strong> :
        <QuillEditor readOnly='true' theme="bubble" ref="preview" :content="problem['description']" content-type="html">
        </QuillEditor>
<!--          {{problem['description']}} <br/>-->
        <strong>type</strong> : {{problem['type']}} <br/>
        <strong>flag</strong> : {{problem['flag']}} <br/>
        <strong>minScore</strong> : {{problem['minScore']}} <br/>
        <strong>maxScore</strong> : {{problem['maxScore']}} <br/>
        <strong>solveThreshold</strong> : {{problem['solveThreshold']}} <br/>
        <strong>solve</strong> : {{problem['solve']}} <br/>
        <strong>solveList</strong> : {{problem['solveList']}} <br/>
        <strong>calculatedScore</strong> : {{problem['calculatedScore']}} <br/>
        <strong>isPublic</strong> : {{problem['isPublic']}} <br/><br/>

        <button type="button" @click="editMode=true" class="btn btn-outline-secondary">Edit this account</button>
      </div>

      <make-problem v-if="editMode" :edit-mode="editMode" v-bind="problem">

      </make-problem>
    </div>

  </div>






</template>

<script>

import {Problem} from "@/api/problem.js";
import MakeProblem from "@/components/home/MakeProblem";
import {QuillEditor} from "@vueup/vue-quill";

// export default {
export default {
  name: "ProblemOverview",
  components: {
    'MakeProblem' : MakeProblem,
    'QuillEditor' : QuillEditor
  },
  data: function() {
    return {
      problems : Array,
      editMode : false,
    }
  },
  methods : {
    getAllProblems() {
      let res = Problem.fetchProblem();
      res.then((q) => {
        if (q.status === 200){
          console.log("loaded");
          this.$data.problems = q.data;
          console.log(this.$data.problems);
          // problemList = q.data;
        }
      }).catch((err) => {
        console.error(err);
      })
    }
  },
  beforeMount() {
    this.getAllProblems();
  }
}

</script>