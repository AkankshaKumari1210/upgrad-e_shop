import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
    return (
        <React.Fragment>
            <AppBar sx={{background: " #3f51b5"}}>
                <Toolbar>
                    <ShoppingCartIcon/>
                    <Typography>upGrad E-Shop</Typography>
                    <Button sx={{marginLeft: "auto"}} variant='conatined'>
                    LogIn{" "}
                    </Button>
                    <Button sx={{marginLeft: "10px"}}variant='contained'>
                    Sign Up{" "}
                    </Button>
                    
                </Toolbar>

            </AppBar>
        </React.Fragment>
    );
}

export default Header;
