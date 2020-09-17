import { short, medium, long } from '../lib/timeouts';
describe('Browser Actions', () =>{
  it('Inputs', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
		const input = $('#developer-name')
		input.waitForExist()
		input.setValue('Liza')
    browser.pause(short)
    input.clearValue()
    browser.pause(short)
    input.addValue('Mike')
    browser.pause(short)
    })

    it('Click', () =>{
      const button = $('#populate')
      button.waitForExist()
      button.click()
      browser.pause(long)
      // button.doubleClick()
    })
    it('Chackbox, Radiobutton', () =>{
      const radioBtnLinux= $('#linux')
      radioBtnLinux.waitForExist()
      radioBtnLinux.click()
      browser.pause(short)
      const checkbox = $('#remote-testing')
      checkbox.waitForExist()
      checkbox.click()
      browser.pause(short)
    })
    it('Selectbox', () =>{
      const select = $('#preferred-interface')
      select.waitForExist()
      select.selectByVisibleText('Command Line')


    })
})

