// search.js

const { Client } = require('@elastic/elasticsearch');

// Configuración del cliente de Elasticsearch
const client = new Client({
  node: 'http://localhost:9200' // Cambia la URL si tu instancia está en otro lugar
});

// Función para realizar una búsqueda exacta
async function searchExact(index, field, value) {
  try {
    const result = await client.search({
      index: index,
      body: {
        query: {
          term: {
            [field]: value
          }
        }
      }
    });
    console.log('Exact Search Results:', result.body.hits.hits);
  } catch (error) {
    console.error('Error during exact search:', error);
  }
}

// Función para realizar una búsqueda fuzzy
async function searchFuzzy(index, field, value) {
  try {
    const result = await client.search({
      index: index,
      body: {
        query: {
          fuzzy: {
            [field]: {
              value: value,
              fuzziness: 'AUTO' // Puedes ajustar la "fuzziness" según tus necesidades
            }
          }
        }
      }
    });
    console.log('Fuzzy Search Results:', result.body.hits.hits);
  } catch (error) {
    console.error('Error during fuzzy search:', error);
  }
}

// Ejemplo de uso
(async () => {
  // Realiza una búsqueda exacta
  await searchExact('my_index', 'my_field', 'exact_value');

  // Realiza una búsqueda fuzzy
  await searchFuzzy('my_index', 'my_field', 'fuzzy_value');
})();
