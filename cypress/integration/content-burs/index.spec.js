import ('cypress-xpath')

describe('Home Page "Burs" Content Check', () => {
    beforeEach(() => {
      cy.visit('https://bm.erciyes.edu.tr/?Anasayfa')
    })

    it('I should go to Burs page when I click the Burs', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[6]/a[1]').click();
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Burs')
    })

})
