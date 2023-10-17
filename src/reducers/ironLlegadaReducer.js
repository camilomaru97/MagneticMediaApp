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
  
  const initialState = {
    ironLlegadas: [],
    loading: false,
    error: null,
    ironLlegadaById: null,
    ironLlegadaToUpdate: null
  };
  
  export const ironLlegadaReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_IRONLLEGADA_PENDING:
      case GET_ID_IRONLLEGADA_PENDING:
      case DELETE_IRONLLEGADA_PENDING:
      case UPDATE_IRONLLEGADA_PENDING:
      case GET_IRONLLEGADA_PENDING:
        return {
          ...state,
          loading: true,
          error: false,
        };
  
      case CREATE_IRONLLEGADA_REJECTED:
      case GET_ID_IRONLLEGADA_REJECTED:
      case DELETE_IRONLLEGADA_REJECTED:
      case UPDATE_IRONLLEGADA_REJECTED:
      case GET_IRONLLEGADA_REJECTED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case GET_IRONLLEGADA_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          ironLlegadas: action.payload,
        };
  
      case GET_ID_IRONLLEGADA_SUCCESS:
        return {
          ...state,
          loading: true,
          error: null,
          ironLlegadaById: state.ironLlegadas.find(
            (ironLlegada) => ironLlegada.id === action.payload
          ),
        };
      
      case DELETE_IRONLLEGADA_SUCCESS: 
        return {
          ...state,
          ironLlegadas: state.ironLlegadas.filter(ironLlegada => ironLlegada.id !== action.payload)
        }
      
      case CREATE_IRONLLEGADA_SUCCESS:
        return {
            ironLlegadas: [
            ...state.ironLlegadas,
            action.payload
          ]
        };
      
      case UPDATE_GET_IRONLLEGADA:
        return {
          ...state,
          ironLlegadaToUpdate: state.ironLlegadas.filter( ironLlegada => ironLlegada.id === action.payload)
        }
      
      case UPDATE_IRONLLEGADA_SUCCESS:
        return {
          ...state,
          ironLlegadas: state.ironLlegadas.map( ironLlegada =>  
            ironLlegada.id === action.payload.id
              ? ironLlegada = action.payload
              : ironLlegada
            ) 
        }
  
      default:
        return state;
    }
  };
  