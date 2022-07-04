<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Accounts /</span> Create Account</h4>

    <div class="row">
      <!-- Basic Layout -->
      <div class="col-xxl">
        <div class="card mb-4">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h5 class="mb-0">Fill the blank to create account</h5>
            <small class="text-muted float-end">회원정보를 입력해주세요</small>
          </div>
          <div class="card-body">
            <form>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Username</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="basic-default-name" placeholder="penekhun">
                  <div class="form-text">also known as 'ID'</div>
                </div>

                <label class="col-sm-2 col-form-label" for="basic-default-name">Password</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="basic-default-name" placeholder="********">
                  <div class="form-text">password 규칙</div>
                </div>
              </div>

              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Nickname</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="basic-default-name" placeholder="PeNeKKKkkkkk">
                </div>

                <label class="col-sm-2 col-form-label" for="basic-default-name">RealName</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="basic-default-name" placeholder="MoonSeonghun">
                </div>
              </div>


              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-email">Email</label>
                <div class="col-sm-4">
                  <div class="input-group input-group-merge">
                    <input type="text" id="basic-default-email" class="form-control" placeholder="penekhun@gmail.com" aria-label="penekhun@gmail.com" aria-describedby="basic-default-email2">
<!--                    <span class="input-group-text" id="basic-default-email2">@example.com</span>-->
                  </div>
                  <div class="form-text">You can use letters, numbers &amp; periods</div>
                </div>

                <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label">User Role</label>
                <div class="col-sm-4">
                <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                  <option value="1">User</option>
                  <option value="2">Admin</option>
                </select>
                </div>
              </div>

              <div class="row justify-content-end">
                <div class="col-sm-12">
                  <button type="submit" class="btn btn-primary">submit</button>
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

export default {
  name: "DefaultHome",
  components: [
    Content,
  ]
}
</script>