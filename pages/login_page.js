const { I } = inject();

module.exports = {

  fields:{
    email: '~email',
    password: '~senha'
  },

  buttons:{
    enter: '~entrar'
  },

  messages:{
    loginError: '~lognFail'
  },

  doLogin(email, password) {
    I.waitForElement(this.fields.email, 5)
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.password, secret(password))
    I.tap(this.buttons.enter)
  },

  checkLoginError() {
    I.waitForElement(this.messages.loginError, 5) 
    I.seeElement(this.messages.loginError)
  }

}
