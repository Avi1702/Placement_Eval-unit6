// import React from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {

  const [fetchData,setFetchData]=React.useState([])
  const [page,setPage]=useState(1)
  const [sort,setSort]=useState(null)
  const [ratingNum,setRatingNum]=useState(null)



  const fetching_func=(page)=>{
    axios({
      method:"get",
      url:`http://localhost:8080/products?_page=${page}&_limit=6`
    })
    .then((res)=>setFetchData(res.data))
    .catch((err)=>{console.log(err)})
  }

  useEffect(()=>{
    fetching_func(page)
  },[page])


const pagination=(value)=>{
   setSort(null)
  setPage(page+(value))
}


return (
    <React.Fragment>


    <div id='data_grid'>
 
{

  fetchData.map((item)=>{return <Card sx={{ maxWidth: 345 }}>
  
      <CardMedia
        component="img"
        height="140"
        src={`${item.imageBase}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.color} - {item.title}
        </Typography>
        <Typography id="price_rating" variant="body2" color="text.secondary">
         <div>₹{item.price}</div>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/individual/${item.id}`}><Button size="small">View</Button></Link>
      </CardActions>
    </Card>
    })
  }
  </div>
  
  <div id="pagination">
  <Button disabled={page===1} variant='contained' onClick={()=>pagination(-1)}>Prev</Button>
  <Button variant='outlined' >{page}</Button>
  <Button disabled={page===8}variant='contained' onClick={()=>pagination(1)}>Next</Button>
  </div>


    
</React.Fragment>
  )
}

