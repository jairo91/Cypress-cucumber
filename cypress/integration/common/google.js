import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import GoogleSearchPage from '../../pages/google/google-search-page';
import GoogleResultsPage from '../../pages/google/google-results-page';

Given("Accedo a Google y acepto los terminos", () => {
  GoogleSearchPage.visit();
  GoogleSearchPage.accept();
});

When("Busco la palabra {string}", (search) => {
  GoogleSearchPage.type(search);
});

When("Compruebo que aparece las siguientes búsquedas", (dataTable) => {
    GoogleResultsPage.verifyResults(dataTable);
});

When("Este paso no se ejecutará.", () => {
  GoogleSearchPage.type(search);
});


