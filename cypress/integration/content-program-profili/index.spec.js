import ('cypress-xpath')

describe('Home Page "Program Profili" Content Check', () => {
    beforeEach(() => {
      cy.visit('https://bm.erciyes.edu.tr/?Anasayfa')
    })

    it('I should see Lisans when I click "Program Profili"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
    })

    it('I should see Kabul ve Kayıt Koşulları when I click "Lisans"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.contains("Kabul ve Kayıt Koşulları")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[1]/ul[1]/li[1]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Lisans_-_Kabul_ve_Kayit_Kosullari')
    })

    it('I should see Önceki Öğrenmelerin Tanınması when I click "Lisans"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.contains("Önceki Öğrenmelerin Tanınması")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[1]/ul[1]/li[2]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Lisans_-_Onceki_Ogrenmelerin_Taninmasi')
    })

    it('I should see Ölçme ve Değerlendirme when I click "Lisans"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.contains("Ölçme ve Değerlendirme")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[1]/ul[1]/li[3]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Lisans_-_Olcme_ve_Degerlendirme')
    })

    it('I should see Mezuniyet Koşulları when I click "Lisans"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.contains("Mezuniyet Koşulları")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[1]/ul[1]/li[4]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Lisans_-_Mezuniyet_Kosullari')
    })

    it('I should see İstihdam Olanakları when I click "Lisans"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.contains("İstihdam Olanakları")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[1]/ul[1]/li[5]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Lisans_-_Istihdam_Olanaklari')
    })

    it('I should see Program Yeterlilikleri when I click "Lisans"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Lisans Programı')
        cy.contains("Program Yeterlilikleri")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[1]/ul[1]/li[6]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Lisans_-_Program_Yeterlilikleri')
    })
   
    it('I should see Yüksek Lisans when I click "Program Profili"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Yüksek Lisans Programı')
    })

    it('I should see Kabul ve Kayıt Koşulları when I click "Yüksek Lisans"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[2]/a[1]').click({force: true});
        cy.contains('Yüksek Lisans')
        cy.contains("Kabul ve Kayıt Koşulları")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[2]/ul[1]/li[1]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Yuksek_Lisans_-_Kabul_ve_Kayit_Kosullari')
    })

    it('I should see Önceki Öğrenmelerin Tanınması when I click "Yüksek Lisans"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Yüksek Lisans')
        cy.contains("Önceki Öğrenmelerin Tanınması")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[2]/ul[1]/li[2]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Onceki_Ogrenmelerin_Taninmasi')
    })

    it('I should see Ölçme ve Değerlendirme when I click "Yüksek Lisans"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Yüksek Lisans')
        cy.contains("Ölçme ve Değerlendirme")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[2]/ul[1]/li[3]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Olcme_ve_Degerlendirme')
    })

    it('I should see Mezuniyet Koşulları when I click "Yüksek Lisans"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Yüksek Lisans')
        cy.contains('Mezuniyet Koşulları')
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[2]/ul[1]/li[4]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Mezuniyet_Kosullari')
    })

    it('I should see İstihdam Olanakları when I click "Yüksek Lisans"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Yüksek Lisans')
        cy.contains("İstihdam Olanakları")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[2]/ul[1]/li[5]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Istihdam_Olanaklari')
    })

    it('I should see Program Yeterlilikleri when I click "Yüksek Lisans"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Yüksek Lisans')
        cy.contains("Program Yeterlilikleri")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[2]/ul[1]/li[6]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Program_Yeterlilikleri')
    })


    it('I should see Doktora when I click "Program Profili"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Doktora Programı')
    })

    it('I should see Kabul ve Kayıt Koşulları when I click "Doktora"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Doktora Programı')
        cy.contains("Kabul ve Kayıt Koşulları")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[3]/ul[1]/li[1]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Doktora_-_Kabul_ve_Kayit_Kosullari')
    })

    it('I should see Önceki Öğrenmelerin Tanınması when I click "Doktora"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Doktora Programı')
        cy.contains("Önceki Öğrenmelerin Tanınması")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[3]/ul[1]/li[2]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Onceki_Ogrenmelerin_Taninmasi')
    })

    it('I should see Ölçme ve Değerlendirme when I click "Doktora"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Doktora Programı')
        cy.contains("Ölçme ve Değerlendirme")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[3]/ul[1]/li[3]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Olcme_ve_Degerlendirme')
    })

    it('I should see Mezuniyet Koşulları when I click "Doktora"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Doktora Programı')
        cy.contains("Mezuniyet Koşulları")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[3]/ul[1]/li[4]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Mezuniyet_Kosullari')
    })

    it('I should see İstihdam Olanakları when I click "Doktora"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Doktora Programı')
        cy.contains("İstihdam Olanakları")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[3]/ul[1]/li[5]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Istihdam_Olanaklari')
    })
    
    it('I should see İstihdam Olanakları when I click "Doktora"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Doktora Programı')
        cy.contains("İstihdam Olanakları")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[3]/ul[1]/li[5]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Istihdam_Olanaklari')
    })

    it('I should see Program Yeterlilikleri when I click "Doktora"', () => {
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]').click();
        cy.contains('Doktora Programı')
        cy.contains("Program Yeterlilikleri")
        cy.xpath('//header/div[2]/div[1]/div[1]/nav[1]/ul[1]/li[7]/ul[1]/li[3]/ul[1]/li[6]/a[1]').click({force: true});
        cy.url().should('eq', 'https://bm.erciyes.edu.tr/?Sayfalar=Program_Yeterlilikleri')
    })
})


