import { deleteCatalogoApi, getCatalogoByIdApi, getCatalogosApi, postCatalogoApi, updateCatalogoApi } from "../services/catalogoService"
import { 
    GET_CATALOGO_PENDING, 
    GET_CATALOGO_REJECTED, 
    GET_CATALOGO_SUCCESS 
} from "./types"

//Obtener todos lso catalogos
export const getCatalogos = (token) => {
    return async (dispatch) => {
        dispatch(getCatalogosPending())
        try {
            const data = await getCatalogosApi(token)
            dispatch(getCatalogosSuccess(data))
        } catch (error) {
           dispatch(getCatalogosError(error)) 
        }
    }
}

export const getCatalogosPending = () => ({ type: GET_CATALOGO_PENDING })
export const getCatalogosError = ( payload ) => ({ type: GET_CATALOGO_REJECTED, payload })
export const getCatalogosSuccess = ( payload ) => ({ type: GET_CATALOGO_SUCCESS, payload })

//Obtener catalogo por id
export const getCatalogoById = (token, id) => {
    return async (dispatch) => {
        try {
            const data = await getCatalogoByIdApi(token, id)
        } catch (error) {
            throw new Error(error)
        }
        
    }
}


//Post nuevo catalogo
export const postCatalogo = (token, catalogo) => {
    return async (dispatch) => {
        try {
            const data = await postCatalogoApi(token, catalogo)
        } catch (error) {
            throw new Error(error)
        }
    }
}


// Actualizar Catalogo
export const putCatalogo = (token, catalogo, id) => {
    return async (dispatch) => {
        try {
            const data = await updateCatalogoApi(token, catalogo, id)
        } catch (error) {
            throw new Error(error)
        }
    }
}

// Eliminar Catalogo
export const deleteCatalogo = (token, id) => {
    return async (dispatch) => {
        try {
            const data = await deleteCatalogoApi(token, id)
        } catch (error) {
            throw new Error(error)
        }
    }
}


