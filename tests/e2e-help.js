import App from '../page-object/App'
import LoginPage from '../page-object/pages/LoginPage'
import Navbar from '../page-object/components/Navbar'

describe('E2E Test- Help Section', () => {
  it('Should log into application', () => {
    App.openLoginPage()
    LoginPage.login('username', 'password')
    Navbar.insideNavbarIsVisible()
  })
  it('Should Load Help Content', () =>{
    $('.icon-cog').click()
    $('#help_link').waitForExist()
    $('#help_link').click()
    const title = $('/html/body/div[1]/div[2]/div/div/div/div[1]/div/h3')
    expect(title).toHaveText('Help Topics')
    const account = $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[1]/ol/li[1]/a')
    expect(account).toHaveText('How do I log into my account?')
    account.click()
    $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[2]/ol/li[1]').waitForExist()
    const transferFunds = $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[1]/ol/li[2]/a')
    expect(transferFunds).toHaveText('How do I transfer funds?')
    transferFunds.click()
    $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[2]/h3').waitForExist()
    const payBills = $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[1]/ol/li[3]/a')
    expect(payBills).toHaveText('How do I pay bills?')
    payBills.click()
    $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[2]/h3').waitForExist()
    account.click()
    $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[2]/ol/li[1]').waitForExist()
  }) 
  
})