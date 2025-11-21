const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

async function realizarPeticion(metodo) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = 'Cargando...';

    const id = document.getElementById('inputId').value;
    const title = document.getElementById('inputTitle').value;
    const body = document.getElementById('inputBody').value;

    let url = BASE_URL;
    let options = {
        method: metodo,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    };

    if (metodo === 'GET') {
        url = id ? `${BASE_URL}/${id}` : `${BASE_URL}?_limit=5`;
    }
    else if (metodo === 'POST') {
        options.body = JSON.stringify({ title: title, body: body, userId: 1 });
    }
    else if (metodo === 'PUT') {
        if (!id) { alert("Se requiere un ID para actualizar."); return; }
        url = `${BASE_URL}/${id}`;
        options.body = JSON.stringify({ id: id, title: title, body: body, userId: 1 });
    }
    else if (metodo === 'DELETE') {
        if (!id) { alert("Se requiere un ID para eliminar."); return; }
        url = `${BASE_URL}/${id}`;
    }

    const startTime = performance.now(); 

    try {
        const response = await fetch(url, options);

        const endTime = performance.now();
        const duracion = (endTime - startTime).toFixed(2);

        //registro en consola
        console.group(`petición ${metodo}`);
        console.log(`URL solicitada: ${url}`);
        console.log(`metodo usado: ${metodo}`);
        console.log(`tiempo de respuesta: ${duracion} ms`);
        console.log(`codigo de estado: ${response.status}`);
        console.groupEnd();

        let data;
        if (metodo === 'DELETE') {
            data = { mensaje: "Elemento eliminado correctamente (simulado)" };
        } else {
            data = await response.json();
        }

        mostrarEnPantalla(data, response.status);

    } catch (error) {
        console.error('Error en la petición:', error);
        resultadosDiv.innerHTML = `<span class="status-error">Error: ${error.message}</span>`;
    }
}

function mostrarEnPantalla(data, status) {
    const resultadosDiv = document.getElementById('resultados');
    const colorClase = (status >= 200 && status < 300) ? 'status-ok' : 'status-error';

    resultadosDiv.innerHTML = `
                <strong>Estado:</strong> <span class="${colorClase}">${status}</span><br>
                <strong>Datos Recibidos:</strong><br>
                ${JSON.stringify(data, null, 4)}
            `;
}
