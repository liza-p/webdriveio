import App from '../page-object/App'
import LoginPage from '../page-object/pages/LoginPage'
import Navbar from '../page-object/components/Navbar'
import HelpPage from '../page-object/pages/HelpPage'

describe('E2E Test- Help Section', () => {
  it('Should log into application', () => {
    App.openLoginPage()
    LoginPage.login('username', 'password')
    Navbar.insideNavbarIsVisible()
  })
  it('Should Load Help Content', () =>{
    Navbar.clickSettings()
    Navbar.clickHelp()
    expect(HelpPage.title).toHaveText('Help Topics')
    expect(HelpPage.account).toHaveText('How do I log into my account?');
    HelpPage.clickAccount()
    $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[2]/ol/li[1]').waitForExist()
    expect(HelpPage.transferFunds).toHaveText('How do I transfer funds?')
    HelpPage.clickTransferFunds()
    $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[2]/h3').waitForExist()
    expect(HelpPage.payBills).toHaveText('How do I pay bills?')
    HelpPage.clickPayBills()
    $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[2]/h3').waitForExist()
    HelpPage.clickAccount()
    $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[2]/ol/li[1]').waitForExist()
  }) 

   it('Should redirect to Download WebInspect', () => {
    $('#download_webinspect_link').waitForExist()
    $('#download_webinspect_link').click()
    expect(browser).toHaveUrl('https://www.microfocus.com/en-us/products/webinspect-dynamic-analysis-dast/overview')
    $('//*[@id="section0"]/div/div[2]/div/div[1]/div/a/img').waitForExist()
   })
   it('Should redirect to the Terms of Use', () => {
    App.openHomepage()
    $('.icon-cog').click()
    $('#help_link').waitForExist()
    $('#help_link').click()
     $('#terms_of_use_link').waitForExist()
     $('#terms_of_use_link').click()
     expect(browser).toHaveUrl('https://www.microfocus.com/about/legal/')
     $('//*[@id="header"]/div/div/h1').waitForExist()
   })


})