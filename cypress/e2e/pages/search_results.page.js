// Página de resultados de búsqueda
// Autor: Mauricio
export default class SearchResultsPage {
  // Devuelve los elementos de los resultados de búsqueda
  getResults() {
    // Nota: Si hay cambios en el layout, este selector puede necesitar actualización. Mauricio
    return cy.get('.ui-search-item__title, .ui-search-result__content');
  }

  // Busca el mensaje de "sin resultados"
  getNoResultsMessage() {
    return cy.contains('No encontramos resultados');
  }
}