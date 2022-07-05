<template>
  <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">

  <div class="container-xxl flex-grow-1 container-p-y">
    <h4 v-if="!isEditMode" class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Problem /</span> Create New</h4>

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
          <div class="row-cols" style="margin-inline: auto">
          <div class="spinner-border text-primary" v-show="uploadingProgress" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" @click="initUploadModal()" ref="dismiss-modal" data-bs-dismiss="modal">
              cancel
              </button>
              <button type="button" class="btn btn-primary" @click="uploadFile();">upload file</button>
          </div>
          </div>

            </div>
          </div>
        </div>

    <div class="row">
      <!-- Basic Layout -->
      <div class="col-xxl">
        <div class="card mb-4">
          <div class="card-header d-flex align-items-center justify-content-between">

            <h5 v-if="isEditMode" class="mb-0">Change to edit problem</h5>
            <h5 v-else class="mb-0">Fill the blank to create new problem</h5>

            <small v-if="isEditMode" class="text-muted float-end">문제를 수정해주세요</small>
            <small v-else class="text-muted float-end">문제정보를 입력해주세요</small>

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
                  <select class="form-select" v-model.trim="public" id="exampleFormControlSelect1" aria-label="Default select example">
                    <option value="true">Public</option>
                    <option value="false">Private</option>
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

                <label class="col-form-label" for="basic-default-email">Description</label>
              <QuillEditor toolbar="#toolbar" ref="myQuillEditor" :content="this.description" content-type="html">
                <template #toolbar>
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
                </template>
<!--                <h1 class="ql-align-center"><span class="ql-font-serif" style="color: rgb(255, 255, 255); background-color: rgba(180, 180, 80, 80%);"> I am description Example! </span></h1><p><br></p>-->
              </QuillEditor>


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
import {QuillEditor} from "@vueup/vue-quill";

export default {
  name: "DefaultHome",
  data () {
    return {
      quill : '',
      modalShow: false,
      fileName : '',
      fileToUpload : undefined,
      isFileUnderfined : false,
      uploadingProgress : false,

      flag_re : '',
    }
  },
  props: {
    editMode : {
      type : Boolean,
      default : false
    },
    
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: `<h1 class="ql-align-center"><span class="ql-font-serif" style="color: rgb(255, 255, 255); background-color: rgba(180, 180, 80, 80%);"> I am description Example! </span></h1><p><br></p>`
    },
    type: {
      type: String,
      default: 'Crypto'
    },
    flag: {
      type: String,
      default: ''
    },
    minScore: {
      type: Number,
      default: 500
    },
    maxScore: {
      type: Number,
      default: 1000,
    },
    solveThreshold: {
      type: Number,
      default: 10,
    },
    public: {
      type: [String, Boolean],
      default: "true"
    }
  },
  components: {
    'QuillEditor' : QuillEditor
  },

  computed : {
    problemDto(){
      return {
          'id': (this.id !== 0) ? this.id : null,
          'title': this.title,
          'description': this.editor().root.innerHTML,
          'type' : this.type,
          'flag' : (this.sameCheckFlag === false) ? null : this.flag,
          'minScore': this.minScore,
          'maxScore': this.maxScore,
          'solveThreshold': this.solveThreshold,
          'isPublic': this.isPublic,
        }
    },

    sameCheckFlag() {
      return this.flag === this.flag_re;
    },
    editor() {
      return this.$refs.myQuillEditor.getQuill
    }
  },

  methods: {
    isEditMode(){
      return this.editMode;
    },

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
      this.uploadingProgress = true;
      Problem.uploadFile(this.fileToUpload).then(response => {
        this.editor().insertText(this.editor().getLength(), `Download : ${this.fileName}`, 'link', `${DEFAULT_HOST}/file/${response.data.url}`);
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
      frm.append("isPublic", this.public);
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
      this.uploadingProgress = false;
    }
  },

}
</script>