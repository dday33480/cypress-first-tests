describe("Inscription", () =>{
    it("Inscription fail", () => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        cy.contains('Tout refuser').click();
        cy.contains('Enchantés !').click();
        cy.contains('est obligatoire');
    });

    it("Inscription success", () => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        cy.contains('Tout refuser').click();
        cy.get('#firstName').type('David');
        cy.get('#lastName').type('Dufau');
        cy.get('#signup-email').type('l_anglaisdumedoc@hotmail.co.uk');
        cy.get('#signup-password').type('Password123');
        cy.contains('Enchantés !').click();
    });
});