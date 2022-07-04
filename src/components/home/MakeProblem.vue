<template>
  <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">

  <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Problem /</span> Create New</h4>

    <div class="modal fade" id="basicModal" tabindex="-1" style="display: none;" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel1">Upload file</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col mb-3">
                <label for="nameBasic" class="form-label">FileName</label>
                <input type="text" v-model.trim="fileName"  class="form-control" placeholder="Enter name to display user (default set 'fileName' )">
              </div>
            </div>


            <div class="input-group">
              <div class="col mb-3">
              <label for="nameBasic" class="form-label">choose file</label>
              <input type="file" @change="onInputFile()" ref="fileInput" class="form-control" aria-label="Upload">
              </div>
            </div>

          <div v-show="isFileUnderfined" class="alert alert-warning" role="alert">Please select file</div>
          </div>


          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" @click="initUploadModal()" ref="dismiss-modal" data-bs-dismiss="modal">
              cancel
            </button>
            <button type="button" class="btn btn-primary" @click="uploadFile()">upload file</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Basic Layout -->
      <div class="col-xxl">
        <div class="card mb-4">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h5 class="mb-0">Fill the blank to create new problem</h5>
            <small class="text-muted float-end">문제정보를 입력해주세요</small>
          </div>
          <div class="card-body">
            <form>

              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label">Title</label>
              <div class="row mb-3">
                <div class="col">
                  <input type="text" v-model.trim="title" class="form-control" id="basic-default-name" placeholder="Problem's title">
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-6">
                  <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label">isPublic</label>
                  <select class="form-select" v-model.trim="isPublic" id="exampleFormControlSelect1" aria-label="Default select example">
                    <option value="True">Public</option>
                    <option value="False">Private</option>
                  </select>
                </div>

                <div class="col-6">
                  <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label">type</label>
                  <select class="form-select" v-model.trim="type" id="exampleFormControlSelect1" aria-label="Default select example">
                    <option value="Crypto">Crypto</option>
                    <option value="Forensic">Forensic</option>
                    <option value="Misc">Misc</option>
                    <option value="Pwnable">Pwnable</option>
                    <option value="Reversing">Reversing</option>
                    <option value="Web">Web</option>
                  </select>
                </div>
              </div>


              <div class="row mb-3">

                <div class="col-6">
                <label class="col-sm-2 col-form-label" for="basic-default-email">FLAG</label>
                <div class="col-sm">
                  <div class="input-group input-group-merge">
                    <input type="text" v-model.trim="flag" id="basic-default-email" class="form-control" placeholder="FLAG{}"  aria-describedby="basic-default-email2">
                  </div>
                  <div class="form-text">You should include format of FLAG (eg. FLAG{})</div>
                </div>
                </div>


                <div class="col-6">
                <label class="col-form-label" for="basic-default-email">FLAG-recheck</label>
                <div class="col-sm">
                  <div class="input-group input-group-merge">
                    <input type="text" v-model.trim="flag_re" id="basic-default-email" class="form-control" placeholder="recheck FLAG{}" aria-describedby="basic-default-email2">
                  </div>
                </div>
              </div>
              </div>

              <div class="col">
                <label class="col-form-label" for="basic-default-email">Description</label>
              <div id="toolbar">
                <select class="ql-size">
                  <option value="small"></option>
                  <option selected></option>
                  <option value="large"></option>
                  <option value="huge"></option>
                </select>
                <button class="ql-bold"></button>
                <button class="ql-italic"></button>
                <button class="ql-underline"></button>
                <button class="ql-color"></button>
                <button class="ql-background"></button>
                <button class="ql-align"></button>
                <button class="ql-image"></button>
                <button type="button" id="file-upload" class="bx bx-file" data-bs-toggle="modal" data-bs-target="#basicModal"></button>
              </div>
              <div id="editor">
                <h1 class="ql-align-center"><span class="ql-font-serif" style="color: rgb(255, 255, 255); background-color: rgba(180, 180, 80, 80%);"> I am description Example! </span></h1><p><br></p>
              </div>
              </div>

              <br/>

              <div class="row mb-3">

                <div class="col-6">
                  <label class="col-sm col-form-label" for="basic-default-email">MAX score = {{ this.maxScore }}</label>
              <input type="range" class="form-range" min="100" max="1500" step="50" v-model.trim="maxScore" ref="maxScoreBar" id="maxScore">
                  <div class="form-text">The original point valuation</div>
                </div>

                <div class="col-6">
                  <label class="col-sm col-form-label" for="basic-default-email">MIN score = {{ this.minScore }}</label>
                  <input type="range" class="form-range" min="100" max="1000" step="50" v-model.trim="minScore" ref="minScoreBar" id="minScore">
                  <div class="form-text">The lowest possible point valuation</div>
                </div>

                <br/>

                <div class="col-6">
                  <label class="col-sm col-form-label" for="basic-default-email">solveThreshold = {{ this.solveThreshold }}</label>
                  <input type="range" class="form-range" min="0" max="20" step="1" v-model.trim="solveThreshold" id="solveThreshold">
                  <div class="form-text">The amount of solves before the challenge will be at the minimum</div>
                </div>

                <div class="col-6">
                  <br/>
                  <label class="col-sm col-form-label" for="basic-default-email">
                    If you don't understand the scoring system,<br/>
                    please <a href="https://github.com/CTFd/DynamicValueChallenge" target='_blank'>visit it</a>
                  </label>
                </div>

              </div>

              <br/>
              <div class="row justify-content-end">
                <div class="col">
                  <button type="button" @click="uploadProblem()" class="btn btn-primary">Upload</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Content from "@/components/common/CommonContent";
import {loadScript} from "vue-plugin-load-script";
import {Problem} from "@/api/problem";
import {DEFAULT_HOST} from "@/api";

export default {
  name: "DefaultHome",
  data () {
    return {
      quill : '',
      modalShow: false,
      fileName : '',
      fileToUpload : undefined,
      isFileUnderfined : false,

      title : '',
      type : 'Crypto',
      isPublic : 'True',
      flag : '',
      flag_re : '',
      minScore : 500,
      maxScore : 1000,
      solveThreshold : 10,
    }
  },
  components: [
    Content,
  ],

  computed : {
    sameCheckFlag() {
      return this.flag === this.flag_re;
    },
    //
    // getPublic() {
    //   return this.isPublic === true;
    // }
  },

  methods: {
    onInputFile() {
      this.fileToUpload = this.$refs.fileInput.files[0];
      this.isFileUnderfined = false;
    },

    uploadFile() {
      if (this.fileToUpload === undefined){
        this.isFileUnderfined = true;
       return -1;
      }
      if (this.fileName === ''){
        console.log(this.fileToUpload.name);
        this.fileName = this.fileToUpload.name;
      }
      Problem.uploadFile(this.fileToUpload).then(response => {
        this.quill.insertText(this.quill.getLength(), `Download : ${this.fileName}`, 'link', `${DEFAULT_HOST}/file/${response.data.url}`);
        this.$refs["dismiss-modal"].click();
      })
    },

    uploadProblem() {
      if (this.sameCheckFlag === false) {
        alert('Check Flag is same');
        return -1;
      }

      const frm = new FormData();
      frm.append("flag", this.flag);
      frm.append("title", this.title);
      frm.append("description", this.quill.root.innerHTML);
      frm.append("minScore", this.minScore);
      frm.append("maxScore", this.maxScore);
      frm.append("solveThreshold", this.solveThreshold);
      frm.append("isPublic", this.isPublic);
      frm.append("type", this.type);

      Problem.uploadProblem(frm).then(response => {
        alert("업로드 완료");
        this.$router.push({name : "ProblemOverview"});
      }).catch(error =>{
        alert("업로드 실패");
      });
    },

    initUploadModal(){
      this.fileName = '';
      this.$refs.fileInput.value = null;
      this.isFileUnderfined = false;
    }
  },

  beforeMount() {
    loadScript("https://cdn.quilljs.com/1.3.6/quill.js").then(() => {
        // eslint-disable-next-line no-undef
      this.quill = new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar : '#toolbar'
      }
    })});
  }
}
</script>