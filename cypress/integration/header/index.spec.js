import ('cypress-xpath')

describe('Home Page View', () => {
    beforeEach(() => {
      cy.visit('https://bm.erciyes.edu.tr/?Anasayfa')
    })
  
    it('Displaying Home Page', () => {
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Anasayfa')
    })

    it('Displaying "Erciyes Üniversitesi Mühendislik Fakültesi" text', () => {
        cy.contains(' Erciyes Üniversitesi Mühendislik Fakültesi ')
    })

    it('I should be able to go to "Duyurular" page', () => {
        cy.xpath('//header/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[1]/a[1]').click();
    })

    it('I should be able to go to "Webmail" page', () => {
        cy.xpath('//a[contains(text(),"Webmail")]').click();
    })

    it('I should be able to go to "Obisis" page', () => {
        cy.xpath('//header/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[5]/a[1]').click();
    })

    it('I should be able to go to "İletişim" page', () => {
        cy.xpath('//header/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[9]/a[1]').click();
    })
})  

