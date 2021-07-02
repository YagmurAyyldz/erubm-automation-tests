import ('cypress-xpath')

describe('Home Page "Araştırmalar" Content Check', () => {
    beforeEach(() => {
      cy.visit('https://bm.erciyes.edu.tr/?Anasayfa')
    })

    it('I should navigate to Erasmus Anlaşmaları page when I click the "7 Erasmus Anlaşması" text', () => {
        cy.xpath('//h4[contains(text(),"7 Erasmus Anlaşması")]').click();
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?ErasmusAnlasmalari')
        cy.contains("Niederrhein University")
    })

    it('I should navigate to Başarılı Projeler page when I click the "25 Başarılı Proje" text', () => {
        cy.xpath('//h4[contains(text(),"25 Başarılı Proje")]').click();
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Projeler')
        cy.contains("Proje Destekçisi")
    })

    it('I should navigate to Labaratuvar page when I click the "4 Laboratuvar" text', () => {
        cy.xpath('//h4[contains(text(),"4 Laboratuvar")]').click();
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Laboratuvarlar')
        cy.contains("AKIPTE Laboratuvarı")
    })

    it('I should navigate to Akademik Kadro page when I click the "26 Akademik Kadro" text', () => {
        cy.xpath('//h4[contains(text(),"26 Akademik Kadro")]').click();
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Akademik_Kadro')
        cy.contains("Beyza Görkemli")
    })

})