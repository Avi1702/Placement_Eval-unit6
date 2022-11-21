import { DE, DL, DS, SS } from "./actionType"
import axios from "axios"



export const Data_loading=()=>{
    return{
        type:DL
    }
}

export const Data_error=()=>{
    return{
        type:DE
    }
}

export const Data_success=(payload)=>{
    return{
        type:DS,
        payload
    }
}
    export const Sort_success=(payload)=>{
        return{
            type:SS,
            payload
        }
}


export const Int_Data=(page)=>(dispatch)=>{
    dispatch(Data_loading())
    axios({
        method:"get",
        url:`http://localhost:3000/products?_page=${page}&_limit=6`
      })
      .then((res)=>dispatch(Data_success(res.data)))
      .catch((err)=>{dispatch(Data_error())})
}

export const Sort_Data=(type,page)=>(dispatch)=>{
    dispatch(Data_loading())
   
    axios({
        method:"get",
        url:`http://localhost:3000/products?_page=${page}&_limit=6&_sort=price&_order=${type}`
      })
      .then((res)=>dispatch(Sort_success(res.data)))
      .catch((err)=>{dispatch(Data_error())})
     }

