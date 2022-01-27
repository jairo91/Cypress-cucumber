import GoogleResultsPage from './google-results-page';

const SEARCH_BUTTON = 'input[value="Google Search"]';
const FEEL_LUCKY_BUTTON = `input[value="I'm Feeling Lucky"]`;
const ACCEPT = `//*[text()="Acepto"]`;

class GoogleSearchPage {
  static visit() {
    cy.visit('/');
  }

  static type(query) {
    cy.TypeSearch(query);
  }

  static accept(){
     cy.xpath(ACCEPT) // 2 seconds
          .click();
  }

}

export default GoogleSearchPage;
