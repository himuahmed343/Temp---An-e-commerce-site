import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography} from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons';
import useStyle from "./style"
import Logo from "../../assets/image/logo.png";
import {Link, useLocation} from "react-router-dom"

const Navbar = ({totalItems}) => {
    const classes = useStyle();
    const location = useLocation();

    console.log(totalItems)

    return (
        <>
        <AppBar position="fixed" className={classes.appbar} color="inherit">
            <Toolbar>
                <Typography variant="h6" className={classes.toolbar} component={Link} to="/">
                    <img src={Logo} alt="Temp" height="50px" className={classes.image} />
                    
                </Typography>
                <div className={classes.grow} />
                
                {
                    location.pathname === "/"&& (
                        <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                        
                    </IconButton>

                </div>
                    )
                }
                
            </Toolbar>

        </AppBar>
            
        </>
    );
};

export default Navbar;