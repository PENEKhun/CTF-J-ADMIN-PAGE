<template>
  <!--
    Template by https://bootsnipp.com/snippets/AlkBV
    THX alot !!!!
  -->

  <div>
    <div class="main">
      <div class="container">
        <div class="middle">
          <div id="login">
            <form>
              <fieldset class="clearfix">
                <p class="alert">{{ errorMessage }}</p>
                <p ><span class="fa fa-user"></span>
                  <input type="text" ref="usernameInput" v-model.trim="username" Placeholder="Username" required></p>
                <!-- JS because of IE support; better: placeholder="Username" -->
                <p><span class="fa fa-lock"></span>
                  <input type="password"  ref="passwordInput" v-model.trim="password" Placeholder="Password" required></p>
                <!-- JS because of IE support; better: placeholder="Password" -->
                <div>
                     <span @click.prevent="doFindPW" class="find_pw" ><a class="small-text" href="#">Forgot
                     password?</a></span>
                  <span @Click.prevent="doLogin" style="width:50%; text-align:right;  display: inline-block;"><input type="submit" value="authentication"></span>
                </div>
              </fieldset>
              <div class="clearfix"></div>
            </form>
            <div class="clearfix"></div>
          </div>
          <!-- end login -->
          <div class="logo">
            <img class="admin_image" src="@/assets/kisspng-icon-design-admin-settings-male-icon-free-download-png-and-5d4039eb06b259.9776113015644902190274.png" alt="admin page logo"/>
            <div class="clearfix"></div>
          </div>

        </div>
      </div>
    </div>
    </div>
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
