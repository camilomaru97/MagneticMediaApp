import axios from 'axios'

export const clientAxios = axios.create({
    baseURL: 'http://localhost:3001/api'
});

clientAxios.defaults.headers.common['X-Frame-Options'] = 'SAMEORIGIN'; 

//cabecera X-Frame-Options para la ruta /ironllegada
clientAxios.interceptors.request.use(config => {
    if (config.url === '/ironllegada') {
        config.headers['X-Frame-Options'] = 'SAMEORIGIN';
    }
    return config;
});

//manejo de respuesta con encabezados adicionales
clientAxios.get('/ironllegada')
    .then(response => {
        // Manejar la respuesta, puedes acceder a los encabezados en response.headers
        console.log(response.headers);
    })
    .catch(error => {
        // Manejar el error
        if (error.response) {
            // La solicitud fue realizada y el servidor respondió con un código de estado diferente de 2xx
            console.log('Código de estado:', error.response.status);
            console.log('Datos de la respuesta:', error.response.data);
            console.log('Encabezados de la respuesta:', error.response.headers);
        } else if (error.request) {
            // La solicitud fue realizada, pero no se recibió ninguna respuesta
            console.log('No se recibió respuesta del servidor');
        } else {
            // Ocurrió un error al configurar la solicitud
            console.log('Error de configuración de la solicitud:', error.message);
        }
    });