# QA Challenge - Mercado Libre

¡Hola! Soy Mauricio y este es mi proyecto de automatización para Mercado Libre usando Cypress y Cucumber.

Este repo refleja mi enfoque personal para pruebas automatizadas: simple, robusto y fácil de mantener. Si tienes sugerencias, ¡bienvenidas!

## 💻 Cómo ejecutar

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar pruebas
```bash
npm run test:headed   # interfaz visual
npm run test          # modo headless
```

## 📂 Estructura
- `/features`: Contiene los archivos `.feature` con los escenarios Gherkin.
- `/step_definitions`: Pasos definidos en JavaScript.
- `/pages`: Page Object Models.
- `/support`: Configuración y comandos.

## 🧪 Casos cubiertos
- Búsqueda válida de iPhone 13.
- Búsqueda sin resultados.
- Validación de configuración vía API (monedas y países).

## 🧾 Reporte
Los reportes se generan en `cypress/reports/` como HTML y JSON.

---

### Notas personales
- Si algún selector cambia, revisa el DOM y actualízalo en los Page Objects.
- Los asserts tienen mensajes personalizados para facilitar el debugging.
- ¿Tienes dudas o sugerencias? ¡Abre un issue o contáctame!

---

_Mauricio_