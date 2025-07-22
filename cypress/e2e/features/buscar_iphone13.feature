Feature: Búsqueda de iPhone 13 en Mercado Libre
  # Este feature automatiza búsquedas y validaciones en Mercado Libre
  # Autor: Mauricio

  Scenario: Búsqueda válida de un iPhone 13
    # Verifica que la búsqueda de un producto real arroja resultados
    Given el usuario accede al sitio de Mercado Libre
    When busca un "iPhone 13" con almacenamiento "128 GB"
    Then se muestran resultados relacionados con "iPhone 13"

  Scenario: Búsqueda sin resultados intencional
    # Caso negativo: el producto no existe
    Given el usuario accede al sitio de Mercado Libre
    When busca un "iPhone 13 inexistente 9999"
    Then se muestra un mensaje indicando que no hay resultados

  Scenario: Consulta de configuración vía API
    # Tip: Útil para validar la configuración del entorno. Mauricio
    When el usuario consulta la API de monedas y países
    Then la respuesta contiene los datos correctos de configuración