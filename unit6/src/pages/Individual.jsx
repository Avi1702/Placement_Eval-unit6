import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


export const Individual = () => {
    const {productId}=useParams()
    const [cartItem,setcartItem]=useState({})
    const [cartData,setCartData]=useState([])
    const [added,setAdded]=useState(false)
    const navigate=useNavigate()
    

    useEffect(()=>{
        axios({
            method:"get",
            url:`http://localhost:8080/products/${productId}`
        })
        .then((res)=>setcartItem(res.data))
        .then((err)=>{console.log(err)})
    },[])

   const handleADC=(item)=>{

   setAdded(!added)
    axios({
        method:"post",
        url:"http://localhost:8080/cartItems",
        data:{...item,count:1}
    })
    .then((res)=>setCartData(res.data))
    .catch((err)=>{console.log(err)});

     alert("Added to Cart");
    return navigate("/cart")

   }

  return (
   <Box style={{width:"30%",height:"300px",margin:"auto",marginTop:"60px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
  
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`${cartItem.imageBase}/${cartItem.hex}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {cartItem.color} - {cartItem.title}
        </Typography>
        <Typography id="price_rating" variant="body2" color="text.secondary">
         <div>₹{cartItem.price}</div> <div>{cartItem.rating}⭐</div>
        </Typography>
      </CardContent>
      <CardActions>

     {added?<Button variant='outlined'>Added</Button>:<Button id="ADC" size="small" onClick={()=>handleADC(cartItem)}>Add To Cart</Button>}
  
      </CardActions>
   </Box>
  )
}
