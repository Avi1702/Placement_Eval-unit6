import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useNavigate } from 'react-router-dom';
export const Cart = () => {

const [cartData,setCartData]=useState([])
const navigate=useNavigate()
// const [count,setCount]=useState(1)

const initial_fetch=()=>{
  axios({
    method:"get",
    url:"http://localhost:8080/cartItems"

})
.then((res)=>setCartData(res.data))
}

useEffect(()=>{
  initial_fetch()
 },[])

const delete_func=(Id)=>{
  axios({
    method:"delete",
    url:`http://localhost:8080/cartItems/${Id}`

  })
  .then((res)=>initial_fetch())
}


const handleInc=(Id)=>{
  
    const find=cartData.find((item)=>item.id===Id)
    console.log(find)
    let sum=find.count+1

axios({
    method:"patch",
    url:`http://localhost:8080/cartItems/${Id}`,
    data:{
        count:sum
    }
})
.then((res)=>initial_fetch())
}

const handleDec=(Id)=>{

  const find=cartData.find((item)=>item.id===Id)
  console.log(find)
  let sum=find.count-1

  if(sum===0){
  delete_func(Id)
  }
  
else{
axios({
  method:"patch",
  url:`http://localhost:8080/cartItems/${Id}`,
  data:{
      count:sum
  }
})
.then((res)=>initial_fetch())
}
}

const handleCheckout=()=>{
navigate("/checkout")
}

  return (
   cartData.length===0?<div style={{alignItem:"center",width:"35%",margin:"auto"}}><RemoveShoppingCartIcon style={{height:"400px",width:"400px"}}/></div>: <div style={{width:"28%",margin:"auto",textAlign:"center",display:"flex",flexDirection:"column",gap:"15px"}}>
        <h2>Cart Items</h2>

{cartData.map((item)=>{return <Card sx={{ maxWidth: 345 }}>

<CardMedia
  component="img"
  height="140"
  image={`${item.imageBase}`}
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
   {item.title}
  </Typography>
  <Typography id="price_rating" variant="body2" color="text.secondary">
   <div>₹{item.price*item.count}</div>
  </Typography>
 </CardContent>
 <CardActions>
  <Box style={{width:"70%",margin:"auto"}}>
  <Button size="small" variant='contained' onClick={()=>handleInc(item.id)}>+</Button>
  <Button size="small" variant='outlined'>{item.count}</Button>
  <Button size="small" variant='contained' onClick={()=>handleDec(item.id)}>-</Button>
  </Box>
  </CardActions>
  <Box>
  <Button variant='contained' color='success' onClick={()=>delete_func(item.id)}>Remove</Button>
  </Box>
  </Card>
  
})
  }
    <button onClick={handleCheckout} style={{padding:"10px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>Check Out</button> 
  </div>
  )
}
