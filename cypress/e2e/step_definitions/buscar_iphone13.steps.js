// Steps para búsqueda y validaciones en Mercado Libre
// Autor: Mauricio
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/home.page";
import SearchResultsPage from "../pages/search_results.page";

const home = new HomePage();
const results = new SearchResultsPage();

// Acceso a la home
Given('el usuario accede al sitio de Mercado Libre', () => {
  cy.visit('/'); // Tip: Cambia la URL base en cypress.config.js si usas otro entorno. Mauricio
});

// Búsqueda con producto y capacidad
When('busca un {string} con almacenamiento {string}', (producto, capacidad) => {
  home.search(`${producto} ${capacidad}`);
});

// Búsqueda solo por producto
When('busca un {string}', (producto) => {
  home.search(producto);
});

// Validación de resultados
Then('se muestran resultados relacionados con {string}', (producto) => {
  // Mensaje personalizado para debugging
  results.getResults().should('contain.text', producto, `No se encontraron resultados para ${producto} (verificado por Mauricio)`);
});

// Validación de mensaje de no resultados
Then('se muestra un mensaje indicando que no hay resultados', () => {
  results.getNoResultsMessage().should('be.visible');
});

// Consulta a la API de configuración
When('el usuario consulta la API de monedas y países', () => {
  cy.request('https://api.mercadolibre.com/currencies').as('currencies');
  cy.request('https://api.mercadolibre.com/countries').as('countries');
});

// Validación de respuesta de la API
Then('la respuesta contiene los datos correctos de configuración', () => {
  cy.get('@currencies').its('status').should('eq', 200);
  cy.get('@countries').its('status').should('eq', 200);
});