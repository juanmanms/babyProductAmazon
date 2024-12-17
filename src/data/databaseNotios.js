import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function searchDatabases() {
    try {
        const response = await notion.search({
            filter: {
                property: 'object',
                value: 'database',
            },
        });
        return response.results;
    } catch (error) {
        console.error('Error al buscar bases de datos en Notion:', error);
        console.error('Error message:', error.message);
        console.error('Error code:', error.code);
        // Maneja el error, por ejemplo, mostrando un mensaje de error al usuario o registrando el error en un log.
    }
}

// Llama a la función para buscar bases de datos
searchDatabases()
    .then(results => {
        if (results.length > 0) {
            results.forEach(database => {
                console.log("Database ID:", database.id);
                console.log("Database Title:", database.title[0]?.plain_text || 'No title');
            });
        } else {
            console.log("No databases found.");
        }
    })
    .catch(error => {
        // Maneja errores globales
        console.error('Error:', error);
    });