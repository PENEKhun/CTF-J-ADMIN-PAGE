<style src="@/assets/fonts/boxicons.css"/>
<style src="@/assets/css/core.css"/>
<style src="@/assets/css/theme-default.css"/>
<style src="@/assets/css/demo.css"/>
<style src="@/assets/css/pages/page-auth.css"/>
<style src="@/assets/libs/perfect-scrollbar/perfect-scrollbar.css"/>

<template>

<body>
  <div class="container-xxl">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
        <!-- Register -->
        <div class="card">
          <div class="card-body">
            <!-- Logo -->
            <div class="app-brand justify-content-center">
              <a href="index.html" class="app-brand-link gap-2">
                  <span class="app-brand-logo demo">
                    <svg
                        width="25"
                        viewBox="0 0 25 42"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <path
                            d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                            id="path-1"
                        ></path>
                        <path
                            d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                            id="path-3"
                        ></path>
                        <path
                            d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                            id="path-4"
                        ></path>
                        <path
                            d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                            id="path-5"
                        ></path>
                      </defs>
                      <g id="g-app-brand" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Brand-Logo" transform="translate(-27.000000, -15.000000)">
                          <g id="Icon" transform="translate(27.000000, 15.000000)">
                            <g id="Mask" transform="translate(0.000000, 8.000000)">
                              <mask id="mask-2" fill="white">
                                <use xlink:href="#path-1"></use>
                              </mask>
                              <use fill="#696cff" xlink:href="#path-1"></use>
                              <g id="Path-3" mask="url(#mask-2)">
                                <use fill="#696cff" xlink:href="#path-3"></use>
                                <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-3"></use>
                              </g>
                              <g id="Path-4" mask="url(#mask-2)">
                                <use fill="#696cff" xlink:href="#path-4"></use>
                                <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-4"></use>
                              </g>
                            </g>
                            <g
                                id="Triangle"
                                transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
                            >
                              <use fill="#696cff" xlink:href="#path-5"></use>
                              <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-5"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                <span class="app-brand-text demo text-body fw-bolder">Console</span>
              </a>
            </div>
            <!-- /Logo -->
            <h4 class="mb-2">Welcome to Console! 👋</h4>
            <p class="mb-4">Please admin authenticator for manage system</p>

            <form id="formAuthentication" class="mb-3">
              <div class="mb-3">
                <label for="email" class="form-label">Username</label>
                <input
                    ref="usernameInput"
                    v-model.trim="username"
                    type="text"
                    class="form-control"
                    placeholder="Enter your username"
                    autofocus
                />
              </div>
              <div class="mb-3 form-password-toggle">
                <div class=""> <!-- d-flex justify-content-between -->
                  <label for="password" class="form-label">Password</label>
<!--                  <a href="auth-forgot-password-basic.html">-->
<!--                    <small>Forgot Password?</small>-->
<!--                  </a>-->
                </div>
                <div class="input-group input-group-merge">
                  <input
                      type="password"
                      ref="passwordInput"
                      v-model.trim="password"
                      id="password"
                      class="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                  />
                  <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="remember-me" />
                  <label class="form-check-label" for="remember-me"> Remember Me (Not yet)</label>
                </div>
              </div>
              <div class="mb-3">
                <button class="btn btn-primary d-grid w-100" @Click.prevent="doLogin">Login</button>
              </div>
            </form>

            <p class="text-center">
              <span> {{ errorMessage }} </span>
            </p>
          </div>
        </div>
        <!-- /Register -->
      </div>
    </div>
  </div>

  <!-- / Content -->
</body>


</template>

<script>




export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data : function (){
    return {
      username: 'testscore12345',
      password : 'testscore12345',
      errorMessage : ''
    };
  },
  methods : {
    doLogin(){
      if (this.username === "") {
        alert("아이디를 입력하세요.");
        this.$refs.usernameInput.focus();
        return;
      } else if (this.password === "") {
        alert("패스워드를 입력하세요.");
        this.$refs.passwordInput.focus();
        return;
      }
      const loginFrm = new FormData()
      loginFrm.append('username', this.username);
      loginFrm.append('password', this.password);
      this.Auth.dispatch("doLogin", loginFrm).then(() => {
        this.$router.push("/");
      }).catch((err) => {
        this.errorMessage = err.response.data.detail;
      });

    },

    doFindPW(){
      this.errorMessage = "please ask to Master";
    }
  },

  mounted() {
    this.$refs.usernameInput.focus();
  }
}

</script>

<style scoped>


.alert {
  text-align:left;
  color:white!important;
}

.find_pw{
  width:48%;
  text-align:left;
  display: inline-block;
}

div.main{
  background: #0264d6; /* Old browsers */
  background: -moz-radial-gradient(center, ellipse cover,  #0264d6 1%, #1c2b5a 100%); /* FF3.6+ */
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(1%,#0264d6), color-stop(100%,#1c2b5a)); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(center, ellipse cover,  #0264d6 1%,#1c2b5a 100%); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(center, ellipse cover,  #0264d6 1%,#1c2b5a 100%); /* Opera 12+ */
  background: -ms-radial-gradient(center, ellipse cover,  #0264d6 1%,#1c2b5a 100%); /* IE10+ */
  background: radial-gradient(ellipse at center,  #0264d6 1%,#1c2b5a 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0264d6', endColorstr='#1c2b5a',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  height:calc(100vh);
  width:100%;
}

[class*="fontawesome-"]:before {
  font-family: 'FontAwesome', sans-serif;
}

/* ---------- GENERAL ---------- */

* {
  box-sizing: border-box;
  margin:0px auto;

&:before,
&:after {
   box-sizing: border-box;
 }

}


body {

  color: #606468;
  font: 87.5%/1.5em 'Open Sans', sans-serif;
  margin: 0;
}

a {
  color: #eee;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

input {
  border: none;
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5em;
  padding: 0;
  -webkit-appearance: none;
}

p {
  line-height: 1.5em;
}

.clearfix {
  *zoom: 1;

&:before,
&:after {
   content: ' ';
   display: table;
 }

&:after {
   clear: both;
 }

}

.container {
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
}

/* ---------- LOGIN ---------- */

#login form{
  width: 250px;
}
#login, .logo{
  display:inline-block;
  width:40%;
}
#login{
  border-right:1px solid #fff;
  padding: 0px 22px;
  width: 59%;
}
.logo{
  color:#fff;
  font-size:50px;
  line-height: 125px;
}

.admin_image{
  width:100px;
  height:100px;

}

#login form span.fa {
  background-color: #fff;
  border-radius: 3px 0px 0px 3px;
  color: #000;
  display: block;
  float: left;
  height: 50px;
  font-size:24px;
  line-height: 50px;
  text-align: center;
  width: 50px;
}

#login form input {
  height: 50px;
}
fieldset{
  padding:0;
  border:0;
  margin: 0;

}
#login form input[type="text"], input[type="password"] {
  background-color: #fff;
  border-radius: 0px 3px 3px 0px;
  color: #000;
  margin-bottom: 1em;
  padding: 0 16px;
  width: 200px;
}

#login form input[type="submit"] {
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background-color: #000000;
  color: #eee;
  font-weight: bold;
  /* margin-bottom: 2em; */
  text-transform: uppercase;
  padding: 5px 10px;
  height: 30px;
}

#login form input[type="submit"]:hover {
  background-color: #d44179;
}

#login > p {
  text-align: center;
}

#login > p span {
  padding-left: 5px;
}
.middle {
  display: flex;
  width: 600px;
}

</style>
