describe('Life Event En', () => {
  it('Gets, types and clicks', () => {
    //log into local cms
    Cypress.on('uncaught:exception', () => false)

    cy.logIn()

    //navigate menu to add content to a basic page
    cy.get('ul > li > a').contains('Basic Page').focus().click()

    //fill out cms basic page
    cy.get("#edit-title-0-value").type("Having a child and early childhood test")
    cy.get("#edit-field-page-intro-0-value").type("Find government programs to help during pregnancy and early childhood. test")
    cy.get("#edit-field-meta-description-0-value").type("Find government programs for food, health care, and other expenses to help during pregnancy and early childhood. See how to collect child support. test")
    cy.get("#edit-field-short-description-0-value").type("This is a test page description")

    //Select page type
    cy.pageType()

    //Input for the language toggle page
    cy.get('[data-drupal-selector="edit-field-language-toggle-0-target-id"]').type('Embarazo y primera infancia')

    //add English text to wysiwyg
    cy.textEnglish()

   //Select navigation page image
   cy.imageSelect()

   //add taxonomy link to Spanish page
   cy.taxonomyLinkEnglish()

    //fill out url alias
    cy.get ('[data-drupal-selector="edit-path-0-alias"]').type('/Having-child-early-childhood-test')

    //publish page
    cy.pagePublish()

    //delete test page
    cy.get('ul > li > a').contains('Content').focus().click()
    cy.get('#edit-combine').type('Having a child and early childhood test')
    cy.get('#edit-submit-content').click()
    cy.get('#edit-node-bulk-form-0').check()
    cy.get('#edit-action').select('Delete content')
    cy.get('#edit-submit').click()
    cy.get('#edit-submit').click()
  })
})
