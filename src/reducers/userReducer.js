import { POST_USER, POST_USER_PENDING, POST_USER_REJECTED, POST_USER_SUCCESS } from "../actions/types"

const initialState = {
    token: null,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case POST_USER: 
            return{
                ...state,
                token: action.payload
            }
        case POST_USER_SUCCESS: 
            return{
                ...state,
                loading: true,
                error: false
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
                loading: true,
                error: false
            }
    
        default: return state
    }
}