Feature: Feature de prueba Cucumber

  @test1
  Scenario: Búsqueda en google con error en el caso
    Given Accedo a Google y acepto los terminos
    When Busco la palabra "gitHub"
    And Compruebo que aparece las siguientes búsquedas
      | busqueda    |
      | GitHub Inc. |
      | Facebook    |
    Then Este paso no se ejecutará.