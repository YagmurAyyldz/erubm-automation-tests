import ('cypress-xpath')

describe('Home Page "Araştırmalar" Content Check', () => {
    beforeEach(() => {
      cy.visit('https://bm.erciyes.edu.tr/?Anasayfa')
    })

    it('I should see Laboratuarlar when I click "Araştırmalar"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]').click();
        cy.contains('Laboratuarlar')
    })

    it('I should see Projeler when I click "Araştırmalar"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]').click();
        cy.contains('Projeler')
    })

    it('I should see TÜBİTAK Projeleri when I click "Projeler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]').click();
        cy.contains('Projeler')
        cy.contains("TÜBİTAK Projeleri")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[4]/ul[1]/li[2]/ul[1]/li[1]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?ProjeDestek=TUBITAK')
    })

    it('I should see BAP Projeleri when I click "Projeler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]').click();
        cy.contains('Projeler')
        cy.contains("BAP Projeleri")
        cy.xpath('//a[contains(text(),"BAP Projeleri")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?ProjeDestek=BAP')
    })

    it('I should see KOSGEB Projeleri when I click "Projeler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]').click();
        cy.contains('Projeler')
        cy.contains("BAP Projeleri")
        cy.xpath('//a[contains(text(),"KOSGEB Projeleri")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?ProjeDestek=KOSGEB')
    })

    it('I should see DPT Projeleri when I click "Projeler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]').click();
        cy.contains('Projeler')
        cy.contains("DPT Projeleri")
        cy.xpath('//a[contains(text(),"DPT Projeleri")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?ProjeDestek=DPT')
    })

    it('I should see Diğer Projeler when I click "Projeler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]').click();
        cy.contains('Projeler')
        cy.contains("Diğer Projeler")
        cy.xpath('//a[contains(text(),"Diğer Projeler")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?ProjeDestek=Diger')
    })

    it('I should see Patentler ve Ödüller when I click "Araştırmalar"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]').click();
        cy.contains('Patentler ve Ödüller')
    })

    
    it('I should see Araştırma Konuları when I click "Araştırmalar"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]').click();
        cy.contains('Araştırma Konuları')
    })

    
    it('I should see Derslikler when I click "Araştırmalar"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]').click();
        cy.contains('Derslikler')
    })

    it('I should see Yüksek Lisans ve Doktora when I click "Derslikler"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]').click();
        cy.contains('Derslikler')
        cy.contains("Yüksek Lisans ve Doktora")
        cy.xpath('//a[contains(text(),"Yüksek Lisans ve Doktora")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/index.asp?404')
    })
})

