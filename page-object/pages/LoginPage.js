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
}
 export default new LoginPage()