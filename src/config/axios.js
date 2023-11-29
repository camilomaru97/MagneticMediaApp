import axios from 'axios'

export const clientAxios = axios.create({
    baseURL: 'http://localhost:3001/api'
});

clientAxios.defaults.headers.common['X-Frame-Options'] = 'SAMEORIGIN'; 

// Configuración para prevenir ataques de tipo Cross-Site Scripting (XSS)
clientAxios.defaults.headers.common['X-XSS-Protection'] = '1; mode=block';

// Configuración para prevenir ataques de tipo Cross-Site Request Forgery (CSRF)
clientAxios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Configuración para prevenir ataques de tipo Clickjacking
clientAxios.defaults.headers.common['X-Content-Type-Options'] = 'nosniff';

// Configuración para indicar que la aplicación solo debe ser cargada en un marco del mismo origen
clientAxios.defaults.headers.common['X-Frame-Options'] = 'SAMEORIGIN';

// Configuración para controlar la política de seguridad de origen (CORS)
// (Ajusta las opciones según tus necesidades específicas)
clientAxios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
clientAxios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, PATCH, DELETE';
clientAxios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';

// Configuración para prevenir que el navegador mime-sniffe el tipo de contenido
clientAxios.defaults.headers.common['X-Content-Type-Options'] = 'nosniff';

// Configuración para habilitar la política de seguridad de contenido (CSP)
// (Ajusta las opciones según tus necesidades específicas)
clientAxios.defaults.headers.common['Content-Security-Policy'] = "default-src 'self'";

// Configuración para habilitar la política de seguridad de transporte (HSTS)
// (Ajusta las opciones según tus necesidades específicas)
clientAxios.defaults.headers.common['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains';


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