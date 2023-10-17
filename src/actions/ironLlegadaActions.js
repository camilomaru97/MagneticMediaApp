import { 
    deleteIronLlegadaApi, 
    getIronLlegadaByIdApi, 
    getIronLlegadaApi, 
    postIronLlegadaApi,
    updateIronLlegadaApi 
} from "../services/ironLlegadaService"
import { 
    GET_IRONLLEGADA_PENDING, 
    GET_IRONLLEGADA_REJECTED, 
    GET_IRONLLEGADA_SUCCESS, 
    GET_ID_IRONLLEGADA_PENDING, 
    GET_ID_IRONLLEGADA_REJECTED, 
    GET_ID_IRONLLEGADA_SUCCESS,
    DELETE_IRONLLEGADA_SUCCESS,
    DELETE_IRONLLEGADA_REJECTED,
    DELETE_IRONLLEGADA_PENDING,
    CREATE_IRONLLEGADA_SUCCESS,
    CREATE_IRONLLEGADA_REJECTED,
    CREATE_IRONLLEGADA_PENDING,
    UPDATE_GET_IRONLLEGADA,
    UPDATE_IRONLLEGADA_PENDING,
    UPDATE_IRONLLEGADA_REJECTED,
    UPDATE_IRONLLEGADA_SUCCESS,
} from "./typesIronLlegada"

//Obtener todas las remesas iron llegada
export const getIronLlegada = (token) => {
    return async (dispatch) => {
        dispatch(getIronLlegadaPending())
        try {
            const data = await getIronLlegadaApi(token)
            dispatch(getIronLlegadaSuccess(data))
        } catch (error) {
           dispatch(getIronLlegadaError(error)) 
        }
    }
}
export const getIronLlegadaPending = () => ({ type: GET_IRONLLEGADA_PENDING })
export const getIronLlegadaError = ( payload ) => ({ type: GET_IRONLLEGADA_REJECTED, payload })
export const getIronLlegadaSuccess = ( payload ) => ({ type: GET_IRONLLEGADA_SUCCESS, payload })

//Obtener remesas iron llegada por id
export const getIronLlegadaById = (token, id) => {
    return async (dispatch) => {
        dispatch(getIronLlegadaByIdPending())
        try {
            await getIronLlegadaByIdApi(token, id)
            dispatch(getIronLlegadaByIdSuccess(id))
        } catch (error) {
            dispatch(getIronLlegadaByIdError(error))
        }
        
    }
}
export const getIronLlegadaByIdPending = () => ({ type: GET_ID_IRONLLEGADA_PENDING })
export const getIronLlegadaIdError = ( payload ) => ({ type: GET_ID_IRONLLEGADA_REJECTED, payload })
export const getIronLlegadaByIdSuccess = ( payload ) => ({ type: GET_ID_IRONLLEGADA_SUCCESS, payload })

//Post remesas iron llegada
export const postIronLlegada = (token, ironllegada) => {
    return async (dispatch) => {
        dispatch(postIronLlegadaPending())
        try {
            const data = await postIronLlegadaApi(token, ironllegada)
            dispatch(postIronLlegadaSuccess(data.ironllegada))
        } catch (error) {
            dispatch(postIronLlegadaError(error))
        }
    }
}
export const postIronLlegadaPending = () => ({ type: CREATE_IRONLLEGADA_PENDING })
export const postIronLlegadaError = ( payload ) => ({ type: CREATE_IRONLLEGADA_REJECTED, payload })
export const postIronLlegadaSuccess = ( payload ) => ({ type: CREATE_IRONLLEGADA_SUCCESS, payload })


// Actualizar remesas iron llegada
export const putIronLlegada = (token, ironllegada, id) => {
    console.log(id)
    return async (dispatch) => {
        dispatch(updateIronLlegadaPending())
        try {
            const data = await updateIronLlegadaApi(token, ironllegada, id)
            console.log(data)
            dispatch(updateIronLlegadaSuccess(data.ironllegada))
        } catch (error) {
            dispatch(updateIronLlegadaError(error))
        }
    }
}
export const updateGetIronLlegada = (payload) => ({ type: UPDATE_GET_IRONLLEGADA, payload })
export const updateIronLlegadaPending = () => ({ type: UPDATE_IRONLLEGADA_PENDING })
export const updateIronLlegadaError = ( payload ) => ({ type: UPDATE_IRONLLEGADA_REJECTED, payload })
export const updateIronLlegadaSuccess = ( payload ) => ({ type: UPDATE_IRONLLEGADA_SUCCESS, payload })

// Eliminar remesas iron llegada
export const deleteIronLlegada = (token, id) => {
    return async (dispatch) => {
        dispatch(deleteIronLlegadaPending())
        try {
            await deleteIronLlegadaApi(token, id, dispatch)
            dispatch(deleteIronLlegadaSuccess(id))
        } catch (error) {
            throw new Error(error)
        }
    }
}
export const deleteIronLlegadaPending = () => ({ type: DELETE_IRONLLEGADA_PENDING })
export const deleteIronLlegadaError = ( payload ) => ({ type: DELETE_IRONLLEGADA_REJECTED, payload })
export const deleteIronLlegadaSuccess = ( payload ) => ({ type: DELETE_IRONLLEGADA_SUCCESS, payload })


