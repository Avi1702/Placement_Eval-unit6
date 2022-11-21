import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Checkout = () => {

    const [checkout,setCheckout]=useState([])
    const [status,setStatus]=useState(false)
    
    let total=0
  

    const initial_fetch=()=>{
        axios({
          method:"get",
       url:"http://localhost:8080/cartItems",

      })
      .then((res)=>setCheckout(res.data));
      
      }

      

      useEffect(()=>{
        initial_fetch()
       },[])
      
     
     const handlePlaceOrder=()=>{
      setStatus(!status)
     }
  
    

  return (
    status?<div style={{display:"flex",flexDirection:"column",width:"50%",margin:"auto",textAlign:"center",alignItems:"center",color:"orange"}}>
        <h1>Order Successfull</h1>
        <CheckCircleIcon style={{width:"400px",height:"400px",color:"green"}}/>
        <Button variant='outlined'>Back</Button>
        </div>
    :<div>
        
        <table>
            <thead>
                <tr>
                    <td>Item</td>
                    <td>Price</td>

                    <td>No of items</td>
                    <td>Total price</td>

                </tr>
            </thead>
            <tbody>
                {
                 checkout.map((item)=>{ 
                      total += item.price*item.count
                    return (<tr>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.count} </td>
                    <td>{item.price*item.count}</td>
                     </tr>)})
                }
                
            </tbody>
            <tr>
                    <td style={{color:"blue",backgroundColor:"yellow"}}>Total</td>
                    <td style={{color:"purple",backgroundColor:"pink"}}>{total}</td>
            </tr>
        </table>
        {status?null:<Button onClick={handlePlaceOrder} style={{marginLeft:"45%",marginTop:"30px"}} variant="contained">Place Order</Button>}
    </div>
  )
}
