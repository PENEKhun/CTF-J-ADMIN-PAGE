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
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" ref="dismiss-modal" data-bs-dismiss="modal">
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
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Title</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="basic-default-name" placeholder="Problem's title">
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-6">
                  <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label">isPublic</label>
                  <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                    <option value="1">Public</option>
                    <option value="2">Private</option>
                  </select>
                </div>

                <div class="col-6">
                  <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label">type</label>
                  <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                    <option value="1">Crypto</option>
                    <option value="2">Forensic</option>
                    <option value="3">Misc</option>
                    <option value="4">Pwnable</option>
                    <option value="5">Reversing</option>
                    <option value="6">Web</option>
                  </select>
                </div>
              </div>


              <div class="row mb-3">

                <div class="col-6">
                <label class="col-sm-2 col-form-label" for="basic-default-email">FLAG</label>
                <div class="col-sm">
                  <div class="input-group input-group-merge">
                    <input type="text" id="basic-default-email" class="form-control" placeholder="FLAG{}"  aria-describedby="basic-default-email2">
                  </div>
                  <div class="form-text">You should include format of FLAG (eg. FLAG{})</div>
                </div>
                </div>


                <div class="col-6">
                <label class="col-form-label" for="basic-default-email">FLAG-recheck</label>
                <div class="col-sm">
                  <div class="input-group input-group-merge">
                    <input type="text" id="basic-default-email" class="form-control" placeholder="recheck FLAG{}" aria-describedby="basic-default-email2">
                  </div>
                </div>
              </div>
              </div>

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

              <br/>
              <div class="row justify-content-end">
                <div class="col">
                  <button type="submit" class="btn btn-primary">upload Problem</button>
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
    }
  },
  components: [
    Content,
  ],
  methods: {
    onInputFile() {
      this.fileToUpload = this.$refs.fileInput.files[0];
      console.log(this.fileToUpload);
    },
    uploadFile() {
      if (this.fileName === ''){
        console.log(this.fileToUpload.name);
        this.fileName = this.fileToUpload.name;
      }
      Problem.uploadFile(this.fileToUpload).then(response => {
        // this.quill.insertText(this.quill.getLength(), `Download : ${this.fileName}`, 'link', `${DEFAULT_HOST}/file/${response.data.url}`);
        this.quill.insertText(this.quill.getLength(), `Download : ${this.fileName}`, 'link', `${DEFAULT_HOST}file/${response.data.url}`);
        this.$refs["dismiss-modal"].click();
        this.fileName = '';
        this.$refs.fileInput.value = null;
      })
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