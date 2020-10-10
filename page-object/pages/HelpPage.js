import Base  from'../Base'

class HelpPage extends Base {
  get title(){
    return $('/html/body/div[1]/div[2]/div/div/div/div[1]/div/h3');
  }
  get account(){
    return $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[1]/ol/li[1]/a');
  }
  get transferFunds(){
    return $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[1]/ol/li[2]/a');
  }
  get payBills(){
    return $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[1]/ol/li[3]/a');
  }
  clickAccount(){
    this.account.waitForExist()
    this.account.click()
  }
  clickTransferFunds(){
    this.transferFunds.waitForExist()
    this.transferFunds.click()
  }
  clickPayBills(){
    this.payBills.waitForExist()
    this.payBills.click()
  }
}
export default new HelpPage()