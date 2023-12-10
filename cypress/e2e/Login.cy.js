/// reference types = "cypress" >/

it ('Customer Login', () => {

    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

    //Manager login
    cy.contains('Bank Manager Login').click()

    //Add customer
    cy.get('[ng-class="btnClass1"]').click()
    cy.get(':nth-child(1) > .form-control').type('Muhammed')
    cy.get(':nth-child(2) > .form-control').type('Oyewumi')
    cy.get(':nth-child(3) > .form-control').type(200005)
    cy.wait(2000)
    cy.get('form.ng-dirty > .btn').click()
    cy.wait(2000)

    // Open account
    cy.get('[ng-class="btnClass2"]').click()
    cy.wait(2000)
    cy.get('#userSelect').select('Muhammed Oyewumi')
    cy.get('#currency').select('Dollar')
    cy.get('form.ng-dirty > button').click

    //Check customer name
   cy.get('[ng-class="btnClass3"]').click()
   cy.wait(2000)
   cy.get('.form-control').type('Muhammed')
   cy.wait(2000)

   //Going back to homepage
     cy.get('.home').click()

   //login new user created
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.wait(2000)
    cy.get('#userSelect').select('Muhammed Oyewumi')
    cy.get('form.ng-valid > .btn').click()
    cy.wait(4000)
    cy.get('.logout').click()





})