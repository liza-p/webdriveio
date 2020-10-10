import Base from '../Base'
class Navbar extends Base {
  get signInButton(){
    return $('#signin_button')
  }
  get insidenavbar() {
    return $('.nav-tabs')
  }
  signInButtonIsVisible(){
    this.signInButton.waitForExist()
  }
  clickSignIn(){
    this.signInButton.waitForExist()
    this.signInButton.click()
  }
  insideNavbarIsVisible(){
    this.insidenavbar.waitForExist()
  }
   
}

export default new Navbar()