import { short, medium, long } from '../lib/timeouts';
import { mobile, tablet, desktop } from '../lib/devices';

describe('First Steps with WebdIo', () =>{
  it('Load test website', () => {
    browser.url('https://devexpress.github.io/testcafe/example/')
  })
  it('Assert attribute', () =>{
    browser.url('https://devexpress.github.io/testcafe/example/')
    const button = $('#submit-button')
    button.waitForExist()
    expect(button).toHaveAttrContaining('type','submit')

  })
  it('Assert Value', () => {
    const button = $('#populate')
    button.waitForExist()
    expect(button).toHaveValue('Populate')
  })
  it('Save AScreenshot', () => {
    browser.saveScreenshot('screenshot.png')
  })
  it('Change browser Viewport', () =>{
    browser.setWindowSize(800, 600)
    browser.pause(long)
  })
  it('Set mobile view', () =>{
    browser.setWindowSize(mobile[0], mobile[1])
    browser.pause(short)
  })
  it('Set tablet view', () =>{
    browser.setWindowSize(tablet[0], tablet[1])
    browser.pause(short)
  })
  it('Set desktop view', () =>{
    browser.setWindowSize(desktop[0],desktop[1])
    browser.pause(short)
  })

})