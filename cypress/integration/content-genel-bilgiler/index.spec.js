import ('cypress-xpath')

describe('Home Page "Genel Bilgiler" Content Check', () => {
    beforeEach(() => {
      cy.visit('https://bm.erciyes.edu.tr/?Anasayfa')
    })

    it('I should see home page when I click "Ana Sayfa"', () => {
        cy.xpath('//a[contains(text(),"Ana Sayfa")]').click()
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Anasayfa')
    })

    it('I should see Misyon & Vizyon when I click "Genel Bilgiler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]').click();
        cy.contains('Misyon & Vizyon')
    })

    it('I should see Misyon & Vizyon when I click "Genel Bilgiler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]').click();
        cy.contains('Misyon & Vizyon')
    })

    it('I should see Bölüm Hakkında when I click "Genel Bilgiler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]').click();
        cy.contains('Bölüm Hakkında')
    })

    it('I should see Bölüm Başkanının Mesajı when I click "Genel Bilgiler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]').click();
        cy.contains('Bölüm Başkanının Mesajı')
    })
    
    it('I should see Yönetim when I click "Genel Bilgiler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]').click();
        cy.contains('Yönetim')
    })

    it('I should see Personel when I click "Genel Bilgiler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]').click();
        cy.contains('Personel')
    })
    
    it('I should see Akademik Personel when I click "Genel Bilgiler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]').click();
        cy.contains('Personel')
        cy.xpath('//a[contains(text(),"Akademik Personel")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Akademik_Kadro')
    })

    it('I should see İdari Personel when I click "Genel Bilgiler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]').click();
        cy.contains('Personel')
        cy.xpath('//a[contains(text(),"İdari Personel")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Idari_Kadro')
    })

    it('I should see Galeri when I click "Genel Bilgiler"', () => {
        cy.xpath('//a[contains(text(),"Galeri")]').click({force: true});
        cy.contains('Galeri')
    })

    it('I should see Etkinlikler when I click "Genel Bilgiler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]').click();
        cy.contains('Etkinlikler')
    })
})