import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


export default function SideDrawer() {
    


  return (
    <div>
    
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>Left</Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}
