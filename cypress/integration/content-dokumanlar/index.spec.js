import ('cypress-xpath')

describe('Home Page "Dokümanlar" Content Check', () => {
    beforeEach(() => {
      cy.visit('https://bm.erciyes.edu.tr/?Anasayfa')
    })

    it('I should see Bitirme Ödevi Usul ve Esasları when I click "Dokümanlar"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[5]/a[1]').click();
        cy.contains('Bitirme Ödevi Usul ve Esasları')
    })

    it('I should see Laboratuvar Esasları when I click "Dokümanlar"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[5]/a[1]').click();
        cy.contains('Laboratuvar Esasları')
    })

    it('I should see Bitirme Ödevi Usul ve Esasları when I click "Dokümanlar"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[5]/a[1]').click();
        cy.contains('Bitirme Ödevi Usul ve Esasları')
    })

    
    it('I should see TÜBİTAK Projelerinde Bölüm Olanakları Formu when I click "Dokümanlar"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[5]/a[1]').click();
        cy.contains('TÜBİTAK Projelerinde Bölüm Olanakları Formu')
    })

    
    it('I should see Laboratuvar Deney Föyleri when I click "Dokümanlar"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[5]/a[1]').click();
        cy.contains('Laboratuvar Deney Föyleri')
    })

    it('I should see Doktora Yeterlilik Sınav Kılavuzu when I click "Dokümanlar"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[5]/a[1]').click();
        cy.contains('Doktora Yeterlilik Sınav Kılavuzu')
    })
})