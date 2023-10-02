import { getCatalogosApi } from "../services/catalogoService"
import { 
    GET_CATALOGO_PENDING, 
    GET_CATALOGO_REJECTED, 
    GET_CATALOGO_SUCCESS 
} from "./types"

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

