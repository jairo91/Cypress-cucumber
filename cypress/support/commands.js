const SEARCH_FIELD = 'input[type=text]';

Cypress.Commands.add("TypeSearch", (query) => {
   cy.get(SEARCH_FIELD) // 2 seconds
         .type(query);
})