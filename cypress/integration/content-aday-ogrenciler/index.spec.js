import ('cypress-xpath')

describe('Home Page "Aday Öğrenciler" Content Check', () => {
    beforeEach(() => {
      cy.visit('https://bm.erciyes.edu.tr/?Anasayfa')
    })

    it('I should go to Burs page when I click the Burs', () => {
        cy.xpath('//a[contains(text(),"Aday Öğrenciler")]').click();
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Aday_Ogrenciler')
    })

})
