import { LIE, LIL, LIS, LOS } from "./actionType"


const initialState={
    loading:false,
    error:false,
    token:null
}

export const reducer=(state=initialState,{type,payload})=>{

    switch(type){

        case LIL:
        return{
            ...state,
            loading:true
        }
        
        case LIE:
        return{
            ...state,
            loading:false,
            error:true
        }    
        case LIS:
            return{
            ...state,
            loading:false,
            error:false,
            token:payload
            }
             case LOS:
                return{
                    initialState
                }

                default:
                    return state
    }
}