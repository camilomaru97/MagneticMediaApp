import { 
    deleteCatalogoApi, 
    getCatalogoByIdApi, 
    getCatalogosApi, 
    postCatalogoApi,
    updateCatalogoApi 
} from "../services/catalogoService"
import { 
    GET_CATALOGO_PENDING, 
    GET_CATALOGO_REJECTED, 
    GET_CATALOGO_SUCCESS, 
    GET_ID_CATALOGO_PENDING, 
    GET_ID_CATALOGO_REJECTED, 
    GET_ID_CATALOGO_SUCCESS,
    DELETE_CATALOGO_SUCCESS,
    DELETE_CATALOGO_REJECTED,
    DELETE_CATALOGO_PENDING,
    CREATE_CATALOGO_SUCCESS,
    CREATE_CATALOGO_REJECTED,
    CREATE_CATALOGO_PENDING,
    UPDATE_GET_CATALOGO,
    UPDATE_CATALOGO_PENDING,
    UPDATE_CATALOGO_REJECTED,
    UPDATE_CATALOGO_SUCCESS,
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
        dispatch(getCatalogoByIdPending())
        try {
            await getCatalogoByIdApi(token, id)
            dispatch(getCatalogoByIdSuccess(id))
        } catch (error) {
            dispatch(getCatalogoByIdError(error))
        }
        
    }
}
export const getCatalogoByIdPending = () => ({ type: GET_ID_CATALOGO_PENDING })
export const getCatalogoByIdError = ( payload ) => ({ type: GET_ID_CATALOGO_REJECTED, payload })
export const getCatalogoByIdSuccess = ( payload ) => ({ type: GET_ID_CATALOGO_SUCCESS, payload })

//Post nuevo catalogo
export const postCatalogo = (token, catalogo) => {
    return async (dispatch) => {
        dispatch(postCataloPending())
        try {
            const data = await postCatalogoApi(token, catalogo)
            dispatch(postCataloSuccess(data.catalogo))
        } catch (error) {
            dispatch(postCataloError(error))
        }
    }
}
export const postCataloPending = () => ({ type: CREATE_CATALOGO_PENDING })
export const postCataloError = ( payload ) => ({ type: CREATE_CATALOGO_REJECTED, payload })
export const postCataloSuccess = ( payload ) => ({ type: CREATE_CATALOGO_SUCCESS, payload })


// Actualizar Catalogo
export const putCatalogo = (token, catalogo, id) => {
    console.log(id)
    return async (dispatch) => {
        dispatch(updateCataloPending())
        try {
            const data = await updateCatalogoApi(token, catalogo, id)
            console.log(data)
            dispatch(updateCataloSuccess(data.catalogo))
        } catch (error) {
            dispatch(updateCataloError(error))
        }
    }
}
export const updateGetCatalogo = (payload) => ({ type: UPDATE_GET_CATALOGO, payload })
export const updateCataloPending = () => ({ type: UPDATE_CATALOGO_PENDING })
export const updateCataloError = ( payload ) => ({ type: UPDATE_CATALOGO_REJECTED, payload })
export const updateCataloSuccess = ( payload ) => ({ type: UPDATE_CATALOGO_SUCCESS, payload })

// Eliminar Catalogo
export const deleteCatalogo = (token, id) => {
    return async (dispatch) => {
        dispatch(deleteCatalogoPending())
        try {
            await deleteCatalogoApi(token, id, dispatch)
            dispatch(deleteCatalogoSuccess(id))
        } catch (error) {
            throw new Error(error)
        }
    }
}
export const deleteCatalogoPending = () => ({ type: DELETE_CATALOGO_PENDING })
export const deleteCatalogoError = ( payload ) => ({ type: DELETE_CATALOGO_REJECTED, payload })
export const deleteCatalogoSuccess = ( payload ) => ({ type: DELETE_CATALOGO_SUCCESS, payload })


