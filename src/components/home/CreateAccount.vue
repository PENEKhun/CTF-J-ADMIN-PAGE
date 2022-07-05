<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <h4 v-if="!isEditMode" class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Accounts /</span> Create Account</h4>

    <div class="row">
      <!-- Basic Layout -->
      <div class="col-xxl">
        <div class="card mb-4">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h5 v-if="isEditMode" class="mb-0">Change the information to edit account</h5>
            <h5 v-else class="mb-0">Fill the blank to create account</h5>

            <small v-if="isEditMode" class="text-muted float-end">정보를 수정해주세요</small>
            <small v-else class="text-muted float-end">회원정보를 입력해주세요</small>
          </div>
          <div class="card-body">
            <form>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Username</label>
                <div class="col-sm-4">
                  <input v-if="isEditMode" v-model.trim="account.username" disabled="true" type="text" class="form-control" id="basic-default-name" placeholder="penekhun">
                  <input v-else type="text" class="form-control" id="basic-default-name" placeholder="penekhun">
                  <div class="form-text">also known as 'ID'</div>
                </div>

                <label class="col-sm-2 col-form-label" for="basic-default-name">Password</label>
                <div class="col-sm-4">
                  <input v-if="isEditMode" v-model.trim="account.password" type="text" class="form-control" id="basic-default-name" placeholder="********">
                  <input v-else type="text" class="form-control" id="basic-default-name" placeholder="********">
                  <div v-if="isEditMode" class="form-text"><strong>empty means no change</strong></div>
                  <div v-else class="form-text">password 규칙</div>
                </div>
              </div>

              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Nickname</label>
                <div class="col-sm-4">
                  <input v-if="isEditMode" v-model.trim="account.nickname" type="text" class="form-control" id="basic-default-name" placeholder="PeNeKKKkkkkk">
                  <input v-else type="text" class="form-control" id="basic-default-name" placeholder="PeNeKKKkkkkk">
                </div>

                <label class="col-sm-2 col-form-label" for="basic-default-name">RealName</label>
                <div class="col-sm-4">
                  <input v-if="isEditMode" v-model.trim="account.realName" type="text" class="form-control" id="basic-default-name" placeholder="MoonSeonghun">
                  <input v-else type="text" class="form-control" id="basic-default-name" placeholder="MoonSeonghun">
                </div>
              </div>


              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-email">Email</label>
                <div class="col-sm-4">
                  <div class="input-group input-group-merge">
                    <input v-if="isEditMode" v-model.trim="account.email" type="text" id="basic-default-email" class="form-control" placeholder="penekhun@gmail.com" aria-label="penekhun@gmail.com" aria-describedby="basic-default-email2">
                    <input v-else type="text" id="basic-default-email" class="form-control" placeholder="penekhun@gmail.com" aria-label="penekhun@gmail.com" aria-describedby="basic-default-email2">
                  </div>
                  <div class="form-text">like user@domain.com</div>
                </div>

                <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label">User Role</label>
                <div class="col-sm-4">
                <select v-if="isEditMode" v-model.trim="account.role" class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                </select>
                <select v-else class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                </select>

                </div>
              </div>

              <div class="row justify-content-end">
                <div class="col-sm-12">
                  <button v-if="isEditMode" type="button" @click="editEvent" class="btn btn-primary">Edit</button>
                  <button v-else type="button" @click="makeEvent" class="btn btn-primary">submit</button>
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
import {Account} from "@/api/account";

export default {
  name: "CreateAccount",
  components: [
    Content,
  ],
  props: {
    editMode : Boolean,
    account : {

    },
  },
  methods:{
    isEditMode(){
      return this.editMode === true;
    },

    editEvent(){
      // 계정 수정 이벤트
      Account.editPartly(this.account).then((res) => {
        console.log("response " ,res);
        if (res.status === 200){
          // alert("성공");
          this.$router.go();
        } else {
          alert(res.data['detail']);
        }
      }).catch(err => {
        alert("Error - " + err.response.data['detail']);
        console.error(err);
      })
    },

    makeEvent(){
      // 계정 생성 이벤트
    }
  },
  mounted() {
    // if (this.isEditMode()){
    //
    // }
  }
}
</script>