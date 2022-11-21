import { LIE, LIL, LIS, LOS } from "./actionType"
import axios from "axios"



export const Login_loading=()=>{
    return{
        type:LIL
    }
}

export const Login_error=()=>{
    return{
        type:LIE
    }
}

export const Login_success=(payload)=>{
    return{
        type:LIS,
        payload
    }
}

export const LogOut_success=()=>{
    return{
        type:LOS
    }
}

export const Loging_in=(payload)=>(dispatch)=>{
    console.log("hello")
 dispatch(Login_loading())
 axios({
    method:"post",
    url:"https://reqres.in/api/login",
    data:payload
})
.then((res)=>{dispatch(Login_success(res.data.token))})
.catch((err)=>{dispatch(Login_error());console.log("err")})
}