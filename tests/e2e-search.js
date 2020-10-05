describe('E2E test- Search', () =>{
  it('Search Should be present on the page', () =>{
    browser.url('http://zero.webappsecurity.com/index.html')
    $('#searchTerm').waitForExist()
  })
  it('Sould submit searchbox', () => {
    $('#searchTerm').setValue('bank')
    browser.keys('Enter')
    const resutTitle = $('h2')
    resultTitle.waitForExist()
    expect(resultTitle).toHaveText('Search Results')
  })
})