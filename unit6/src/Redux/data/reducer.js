import { DE, DL, DS, SS } from "./actionType"


const initialState={
    loading:false,
    error:false,
    Data:[]
}

export const reducer=(state=initialState,{type,payload})=>{

    switch(type){

        case DL:
        return{
            ...state,
            loading:true
        }
        
        case DE:
        return{
            ...state,
            loading:false,
            error:true
        }    
        case DS:
            return{
            ...state,
            loading:false,
            error:false,
            Data:payload
            }
            
            case SS:
                return{
                ...state,
                loading:false,
                error:false,
                Data:payload
                }
                default:
                    return state
    }
}