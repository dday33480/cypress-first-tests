describe("Authentification", () =>{
    it("Authentification fail", () => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        cy.contains('Tout refuser').click();
        cy.contains('Welcome Back!').click();
        cy.contains('est obligatoire');
    });

    it("Authentification success", () => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        cy.contains('Tout refuser').click();
        cy.get('#signin-email').type('l_anglaisdumedoc@hotmail.co.uk');
        cy.get('#signin-password').type('Password123');
        cy.contains('Welcome Back!').click();
    });
});