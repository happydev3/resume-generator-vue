<template>
  <div class="login">
    <div id="builder-application"><div class="sc-kIPQKe kXwVdK"><div class="sc-iQNlJl cAyUDS"><div class="sc-bsbRJL gDNQCc"><a href="/">
      <span class="sc-bdVaJa kuESoW" style="background-image: url('logo.png');"></span></a></div>
      <div class="sc-hZSUBg jjipMU"><div class="sc-cMhqgX bcLPGD">
        <div class="sc-iuJeZd dkYaRR"><div class="sc-esOvli fbxFju">
        <div class="sc-cmthru dLSXie">Log In</div>
        <div class="sc-hMFtBS KUvRB">Enter your email</div></div>
        <div class="sc-GMQeP hnfwnh">
        <div class="sc-gojNiO fRrMbN">

        <div class="sc-dUjcNx jfRJjJ">
        <label class="sc-cpmLhU wwZze">
        <div class="sc-dymIpo UITDv">Email</div>
        </label>
        <div class="sc-gHboQg edikZj">
          <input type="text" v-model="email" placeholder="Email" class="sc-eerKOB gubEkD" value="">
        <div in="exited" class="sc-eilVRo jaDkYB"></div>
      </div>

        <div in="exited" class="sc-gFaPwZ dDsJMF"></div>
        </div>

        </div>

          <div class="sc-gojNiO fRrMbN">

            <div class="sc-dUjcNx jfRJjJ">
              <label class="sc-cpmLhU wwZze">
                <div class="sc-dymIpo UITDv">Password</div>
              </label>
              <div class="sc-gHboQg edikZj">
                <input type="password" v-model="password" placeholder="Password" class="sc-eerKOB gubEkD" value="">
                <div in="exited" class="sc-eilVRo jaDkYB"></div>
              </div>

              <div in="exited" class="sc-gFaPwZ dDsJMF"></div>
            </div>

          </div>
        <b-alert variant="danger" :show="$store.state.resume.loginStatus!=''">{{$store.state.resume.loginStatus}}</b-alert>
        <div class="sc-exAgwC feojOv">
          <div class="sc-iujRgT dSjsxT">I am not registered — <router-link to="/sign-up">Sign Up</router-link></div>
          <button class="sc-jhAzac hKlAWO" @click="login">Log in</button>
        </div>
        <br>
        
        <button class="button ghost full-width button--back">
          <router-link style=" text-decoration: none;color:red; font-size:15px;" to="/login">Apply for membership</router-link>
        </button>
              
      </div></div></div></div></div></div></div>

  </div>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  import firebase from 'firebase';

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },

    methods: {
      login: function() {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('SignInAction', user)
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  button.ghost {
         background: transparent;
         border: 2px solid red;
         color: #2196f3;
     }
     .button.full-width {
      width: 50%;
      padding-left: 12px;
      padding-right: 12px;
      margin-left:50px;
  }

  .form__buttons.form__buttons--left {
      text-align: left;
      margin-right: 12px;
  }
  .form__buttons {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      margin-top: 12px;
  }
</style>
