import { POST_USER_PENDING, POST_USER_REJECTED, POST_USER_SUCCESS } from "../actions/types"

const initialState = {
    token: null,
    loading: false,
    error: null,
    user: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case POST_USER_SUCCESS: 
            return{
                ...state,
                loading: false,
                token: action.payload.token,
                user: action.payload.name
            }
        case POST_USER_REJECTED: 
            return{
                ...state,
                loading: false,
                error: true
            }
        case POST_USER_PENDING: 
            return{
                ...state,
                loading: action.payload,
                error: null
            }
        default: return state
    }
}