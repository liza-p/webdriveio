import LoginPage from '../page-object/pages/LoginPage'
import App from '../page-object/App'
import Navbar from '../page-object/components/Navbar'

describe('E2E Tests Login /Logout Flow', () => {
  it('Should NOT Log in with Invalid credentials', () => {
    App.openHomepage()
    Navbar.clickSignIn()
    LoginPage.pauseLong()
    LoginPage.formIsVisible()
    LoginPage.fillForm('invalid', 'invalid')
    LoginPage.submitForm()
    const error = LoginPage.error
    error.waitForExist
  })
  it('Should Log in with Valid credentials', () => {
    App.openHomepage()
    Navbar.clickSignIn()
    LoginPage.pauseShort()
    LoginPage.formIsVisible()
    LoginPage.fillForm('username', 'password')
    LoginPage.submitForm()
    Navbar.insideNavbarIsVisible()
  })
  it('Logout', () => {
    // const user = $('.icon-user')
    // user.waitForExist()
    // user.click()
    // const logoutLink = $('#logout_link')
    // logoutLink.waitForExist()
    // logoutLink.click()
    App.logout()
    Navbar.signInButtonIsVisible()
    // const signInBtn  = $('#signin_button')

    // signInBtn.waitForExist()
  })
})