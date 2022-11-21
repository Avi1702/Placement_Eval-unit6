import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import * as React from 'react';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { LogOut_success } from '../Redux/auth/action';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';


export default function Navbar() {

 
    const dispatch=useDispatch()
    const {token}=useSelector(state=>state)
    const [state, setState] = React.useState({
  
        left: false
        
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        console.log(anchor)
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({[anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width:250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <Link to="/" style={{color:"black"}}>
            <ListItem  disablePadding>
                <ListItemButton >
                  <ListItemIcon>
                   
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>  
            </Link>
          </List>

          <List>
            <Link to="/grocery" style={{color:"black"}}>
            <ListItem  disablePadding>
                <ListItemButton >
                  <ListItemIcon>
                   
                  </ListItemIcon>
                  <ListItemText primary={"Mens"} />
                </ListItemButton>
              </ListItem>  
              {/* Grocery */}
            </Link>
          </List>

          <List>
            <Link to="/pharmacy" style={{color:"black"}}>
            <ListItem  disablePadding>
                <ListItemButton >
                  <ListItemIcon>
                   
                  </ListItemIcon>
                  <ListItemText primary={"Womens"} />
                </ListItemButton>
              </ListItem>  
            
            </Link>
          </List>
          <Divider />
          <List>
           {token?
             
              <ListItem disablePadding>
                <ListItemButton onClick={handleLogOut}>
                  <ListItemIcon>
                   
                  </ListItemIcon>
                  <ListItemText primary={"LogOut"} />
                </ListItemButton>
              </ListItem>:
               <ListItem disablePadding>
               <ListItemButton>
                 <ListItemIcon>
                   {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                 </ListItemIcon>
                 <ListItemText primary={"Log In"} />
               </ListItemButton>
             </ListItem>
              
            }
            
          </List>
        </Box>
      );

      const handleLogOut=()=>{
        dispatch(LogOut_success())
      }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer("left", true)}/>
            <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">Home</Link>
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Link to="/cart" style={{marginRight:"10%"}} ><ShoppingCartSharpIcon  /></Link>
    
          {token?<button style={{borderRadius:"8px",border:"none", padding:"5px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} onClick={handleLogOut}>LOG OUT</button>:  <Link to="/login">LOGIN</Link>}
        
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
