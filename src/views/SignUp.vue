<template>
  <div class="sign-up">
    <p style="text-align: center;font-size: 30px;">Let's register to Firebase!</p>
      <div class="funnel__content">
          <div class="form form--funnel"><div class="form__row">
              <label class="form__group">
              <div class="form__label">Email</div>
              <input class="form__field funnel__first-name-input" type="text" v-model="email" placeholder="Email">
          </label>
          </div>
              <div class="form__row">
                  <label class="form__group">
                  <div class="form__label">Password</div>
              <input class="form__field funnel__last-name-input" type="password" v-model="password" placeholder="Password">
              </label>
          </div>
          <b-alert variant="danger" :show="$store.state.resume.signUpStatus!=''">{{$store.state.resume.signUpStatus}}</b-alert>
              <div class="form__row"><div class="form__buttons form__buttons--left">
                  <button class="button ghost full-width button--back">
                      <router-link style=" text-decoration: none;" to="/login">Back</router-link>
                  </button>
              </div>

              <div class="form__buttons form__buttons--right">
                  <button class="button full-width button--next button--with-spinner funnel__save-name-button" @click="signUp">
                    Sign Up
                    </button>
              </div>
          </div>
          </div>
      </div>
  </div>
</template>

 <script>

  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('SignUpAction', user)
      }
    }
  }
</script>

 <style scoped>
  .sign-up {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }

  .button.full-width {
      width: 100%;
      padding-left: 12px;
      padding-right: 12px;
  }
    .button.ghost {
         background: transparent;
         border: 2px solid #2196f3;
         color: #2196f3;
     }
  .form.form--funnel {
      width: 480px;
      margin: 0 auto;
      margin-top: 68px;
  }
  .form__row {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
      flex: 1 0 auto;
  }
  .form__group {
      -webkit-box-flex: 1;
      -ms-flex: 1 1;
      flex: 1 1;
      margin-bottom: 24px;
      margin-right: 16px;
  }
  .form__label {
      text-align: left;
      margin-bottom: 2px;
      line-height: 1.8;
      min-height: 1.8em;
      text-transform: uppercase;
      color: #616161;
      font-weight: 500;
      font-size: 12px;
  }
  .form__field, .autosuggest__input {
      border: 1px solid #e0e0e0;
      width: 100%;
      padding: 15px 12px;
      border-radius: 3px;
      display: block;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fefefe;
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
  .button.full-width {
      width: 100%;
      padding-left: 12px;
      padding-right: 12px;
  }
  .button.ghost {
      background: transparent;
      border: 2px solid #2196f3;
      color: #2196f3;
  }
  .button {
      -webkit-transition: background-color 0.1s ease-out, color 0.1s ease-out;
      transition: background-color 0.1s ease-out, color 0.1s ease-out;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font-weight: 500;
      text-align: center;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: none;
      border: 1px solid transparent;
      border-radius: 3px;
      font-size: 14px;
      position: relative;
      padding: 14px 32px;
      border-width: 2px;
      line-height: 1;
      cursor: pointer;
      background-color: #2196f3;
      color: #fefefe;
  }
  .form__buttons.form__buttons--right {
      text-align: right;
      margin-left: 12px;
  }
  .form__buttons {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      margin-top: 12px;
  }

</style>
