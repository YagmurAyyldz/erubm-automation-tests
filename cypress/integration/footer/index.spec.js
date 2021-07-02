import ('cypress-xpath')

describe('Home Page "Footer" Content Check', () => {
    beforeEach(() => {
      cy.visit('https://bm.erciyes.edu.tr/?Anasayfa')
    })

    it('I should see address', () => {
        cy.xpath('//body/div[@id="wrapper"]/footer[@id="footer"]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[3]/a[1]').click();
        cy.contains(' Adres : Erciyes Üniversitesi')
    })

    it('I should see introduction writing', () => {
        cy.xpath('//p[contains(text(),"Erciyes Üniversitesi Bilgisayar Mühendisliği Bölüm")]').click();
        cy.contains('Erciyes Üniversitesi Bilgisayar Mühendisliği Bölümü resmi web sitesidir.')
    })

    it('I should see brand line', () => {
        cy.xpath('//body/div[@id="wrapper"]/footer[@id="footer"]/div[2]/div[1]/div[1]/div[1]/p[1]').click();
        cy.contains('© 2017 ')
    })

    it('I should see OBISIS', () => {
        cy.xpath('//body/div[@id="wrapper"]/footer[@id="footer"]/div[2]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('OBISIS')
        cy.url().should('eq', 'https://obisis.erciyes.edu.tr/')
    })

    it('I should see ERÜ', () => {
        cy.xpath('//body/div[@id="wrapper"]/footer[@id="footer"]/div[2]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[5]/a[1]').click();
        cy.contains('ERÜ')
        cy.url().should('eq', 'https://www.erciyes.edu.tr/')
    })

    it('I should see İletişim', () => {
        cy.xpath('//body/div[@id="wrapper"]/footer[@id="footer"]/div[2]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[7]/a[1]').click();
        cy.contains('İletişim')
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Iletisim')
    })

})