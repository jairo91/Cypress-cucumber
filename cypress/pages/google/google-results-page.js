
class GoogleResultsPage {
  static verifyResults(dataTable){
      dataTable.hashes().forEach(elem => {
              cy.log("Comprobando "+ elem.busqueda);
              cy.xpath("//*[text()='"+elem.busqueda+"']").should('exist');
      });
  }
}

export default GoogleResultsPage;
