import App from '../page-object/App'

describe('E2E Feedback form', () => {
 it('Should Load Feedback Form', () => {
   //browser.url('http://zero.webappsecurity.com/index.html')
   App.openHomepage()
   $('#feedback').waitForDisplayed()
   $('#feedback').click()
   $('form').waitForExist()
 }) 
 it('Should Submit the Form', () =>{
   $('#name').setValue('Name')
   $('#email').setValue('test@test.com')
   $('#comment').setValue('test')
   $('input[type="submit"]').click()
   expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
 })
})