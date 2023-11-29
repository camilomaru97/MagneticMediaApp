
import { render, screen } from "@testing-library/react";
import { clientAxios } from "../../../src/config/axios"

const logUser = {
    "email": "marumaru@gmail.com",
    "password": "Juan$970818"
}

const logUserFailed = {
    "email": "marumaru@gmail.com",
    "password": "Juan$9718"
}

describe('Pruebas en el modulo de catalogo', () => {

    test('debe de tener la configuracion axios para peticiones por defecto', () => {
        expect( clientAxios.defaults.baseURL).toBe('http://localhost:3001/api')
    })

    test('debe de logear correctamente al usuario', async () => {
        const resAuth = await clientAxios.post('/auth', logUser);
        expect(resAuth.data.token).toBeDefined();
    })

    test('Debe de traer los catalogos, solicitando el token', async () => {
        const resAuth = await clientAxios.post('/auth', logUser);
        const token = resAuth.data.token

        const headers = { 'x-token': token };
        const { data } = await clientAxios.get('/catalogo', { headers });
        expect(data).toBeDefined();
       
    })

    test('debe de crear un nuevo catalogo', async() => {
        const  randomString = (length)  => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
              const randomIndex = Math.floor(Math.random() * characters.length);
              result += characters.charAt(randomIndex);
            }
            return result;
          }
          
          const catalogo = {
            numero_ip: "138.112.120.118",
            nombre_servidor: randomString(10),
            nombre_catalogo: randomString(10),
            consola: "Calle 59",
            ciclo: "Mensual",
            programa: "Dataprotector",
            tecnologia: "LT04"
          };

          const resAuth = await clientAxios.post('/auth', logUser);
          const token = resAuth.data.token
          const headers = { 'x-token': token };
          const { data } = await clientAxios.post('/catalogo', catalogo, { headers });
          expect(data).toBeInstanceOf(Object);
    })

})