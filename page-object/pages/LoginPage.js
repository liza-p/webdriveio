import Base from '../Base.js'

class LoginPage extends Base {
    get LoginForm() {
      return $('#login_form')
    }
    get usernameInput() {
      return $('#user_login')
    }
    get passwordInput() {
      return $('#user_password')
    }
    get submitButton() {
      return $('input[type="submit"]')
    }
    get error() {
      return $('.alert-error')
    }

    formIsVisible() {
        this.LoginForm.waitForExist()
    }

    fillForm(username, password) {
      this.usernameInput.setValue(username)
      this.passwordInput.setValue(password)
    }
    submitForm() {
      this.submitButton.click()
    }
    login(username, password){
      this.LoginForm.waitForExist()
      this.usernameInput.setValue(username)
      this.passwordInput.setValue(password)
      this.submitButton.click()
    }
}
 export default new LoginPage()