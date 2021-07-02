import ('cypress-xpath')

describe('Home Page "Eğitim & Öğretim" Content Check', () => {
    beforeEach(() => {
      cy.visit('https://bm.erciyes.edu.tr/?Anasayfa')
    })

    it('I should see Lisans Programı when I click "Eğitim & Öğretim"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
    })

    it('I should see Ders İçerikleri when I click "Eğitim & Öğretim"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[1]/ul[1]/li[1]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Ders_Icerikleri')
    })

    it('I should see "2020 Yılı Lisans Eğitim Planı" when I click "Ders Kataloğu"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.xpath('//a[contains(text(),"2020 Yılı Lisans Eğitim Planı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=2020_Egitim_Plani')
    })

    it('I should see "2019 Yılı Lisans Eğitim Planı" when I click "Ders Kataloğu"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.xpath('//a[contains(text(),"2019 Yılı Lisans Eğitimi Planı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=2019_Egitim_Plani')
    })

    it('I should see "2017 Yılı Lisans Eğitim Planı" when I click "Ders Kataloğu"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.xpath('//a[contains(text(),"2017 Yılı Lisans Eğitimi Planı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=2017_Egitim_Plani')
    })

    it('I should see "2016 Yılı Lisans Eğitim Planı" when I click "Ders Kataloğu"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.xpath('//a[contains(text(),"2016 Yılı Lisans Eğitimi Planı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=2016_Egitim_Plani')
    })

    it('I should see "2015 Yılı Lisans Eğitim Planı" when I click "Ders Kataloğu"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.xpath('//a[contains(text(),"2015 Yılı Lisans Eğitimi Planı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=2015_Egitim_Plani')
    })

    it('I should see "2014 Yılı Lisans Eğitim Planı" when I click "Ders Kataloğu"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.xpath('//a[contains(text(),"2014 Yılı Lisans Eğitimi Planı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=2014_Egitim_Plani')
    })

    it('I should see "2013 Yılı Lisans Eğitim Planı" when I click "Ders Kataloğu"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.xpath('//a[contains(text(),"2013 Yılı Lisans Eğitimi Planı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=2013_Egitim_Plani')
    })

    it('I should see "2012 Yılı Lisans Eğitim Planı" when I click "Ders Kataloğu"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.xpath('//a[contains(text(),"2012 Yılı Lisans Eğitimi Planı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=2012_Egitim_Plani')
    })

    it('I should see "2011 Yılı Lisans Eğitim Planı" when I click "Ders Kataloğu"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.xpath('//a[contains(text(),"2011 Yılı Lisans Eğitimi Planı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=2011_Egitim_Plani')
    })

    it('I should see "2010 Yılı Lisans Eğitim Planı" when I click "Ders Kataloğu"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.xpath('//a[contains(text(),"2010 Yılı Lisans Eğitimi Planı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=2010_Egitim_Plani')
    })

    it('I should see "2009 Yılı Lisans Eğitim Planı" when I click "Ders Kataloğu"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.xpath('//a[contains(text(),"2009 Yılı Lisans Eğitimi Planı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=2009_Egitim_Plani')
    })

    it('I should see "Çift Anadal Programı" when I click "Çift Anadal Programı"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.contains("Çift Anadal Programı")
        cy.xpath('//a[contains(text(),"Çift Anadal Yönergesi")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Cift_Anadal_Esaslari')

    })

    it('I should see "Çift Anadal Eğitim Programı" when I click "Çift Anadal Programı"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[1]/ul[1]/li[4]/a[1]').click({force: true});
        cy.contains('Yandal Programı')
        cy.contains("Çift Anadal Eğitim Programı")
        cy.xpath('//a[contains(text(),"Çift Anadal Eğitim Programı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Cift_Anadal_Egitim_Programi')
    })

    it('I should see "Yandal Eğitim Programı" when I click "Yandal Programı"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.contains("Yandal Eğitim Programı")
        cy.xpath('//a[contains(text(),"Yandal Programı Yönergesi")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Yandal_Esaslari')
    })

    it.only('I should see "Yandal Programı Yönergesi" when I click "Yandal Programı"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.contains("Yandal Programı Yönergesi")
        cy.xpath('//a[contains(text(),"Yandal Eğitim Programı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Yandal_Egitim_Programi')
    })

    
    it('I should see Yatay Geçiş when I click "Eğitim & Öğretim"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Yatay Geçiş')
        cy.xpath('//a[contains(text(),"Yatay Geçiş")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?404')
    })

    it('I should see Mühendislik Tamamlama Programı when I click "Eğitim & Öğretim"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Mühendislik Tamamlama Programı')
        cy.xpath('//a[contains(text(),"Mühendislik Tamamlama Programı")]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Muhendislik_Tamamlama_Programi')
    })

    it('I should see Yüksek Lisans Programı when I click "Eğitim & Öğretim"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Yüksek Lisans Programı')
    })

    it('I should see Eğitim Planı when I click "Eğitim & Öğretim"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Yüksek Lisans Programı')
        cy.contains("Eğitim Planı")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[2]/ul[1]/li[1]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Yuksek_Lisans_Egitim_Plani')
    })

    it('I should see Doktora Programı when I click "Eğitim & Öğretim"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Doktora Programı')
    })
    
    it('I should see Staj when I click "Eğitim & Öğretim"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Staj')
    })

    it('I should see Erasmus Anlaşmaları when I click "Eğitim & Öğretim"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Erasmus Anlaşmaları')
    })

})