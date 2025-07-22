// Página principal de Mercado Libre
// Autor: Mauricio
export default class HomePage {
  // Realiza una búsqueda usando el campo principal de búsqueda
  // Tip: Si el selector cambia, revisa el input en el DOM. Mauricio
  search(query) {
    cy.get('input[name="as_word"], input[type="search"]').first().type(`${query}{enter}`);
  }
}