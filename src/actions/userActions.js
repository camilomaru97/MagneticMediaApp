import { clientAxios } from "../config/axios";
import { POST_USER_PENDING, POST_USER_REJECTED, POST_USER_SUCCESS } from "./types";


export const postUser = (payload) => {
    return async (dispatch) => {
        dispatch(postUserPending(true))
        try {
            const res = await clientAxios.post('/auth', payload)
            dispatch(postUserSuccess(res.data))
        } catch (error) {
            dispatch(postUserError(true))
        }
    }
}

export const postUserPending = (payload) => ({type: POST_USER_PENDING, payload })
export const postUserSuccess = (payload) => ({type: POST_USER_SUCCESS, payload })
export const postUserError = (payload) => ({type: POST_USER_REJECTED, payload })
