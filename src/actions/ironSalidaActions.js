import { getIronSalidaApi } from "../services/ironSalidaService"
import { GET_SALIDA_PENDING, GET_SALIDA_REJECTED, GET_SALIDA_SUCCESS } from "./types"

//Obtener todos los iron salida
export const getIronSalida = (token) => {
    return async (dispatch) => {
        dispatch(getIronSalidaPending())
        try {
            const data = await getIronSalidaApi(token)
            dispatch(getIronSalidaSuccess(data))
        } catch (error) {
           dispatch(getIronSalidaError(error)) 
        }
    }
}
export const getIronSalidaPending = () => ({ type: GET_SALIDA_PENDING })
export const getIronSalidaError = ( payload ) => ({ type: GET_SALIDA_REJECTED, payload })
export const getIronSalidaSuccess = ( payload ) => ({ type: GET_SALIDA_SUCCESS, payload })