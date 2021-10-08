import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons';
import useStyle from "./style"
import Logo from "../../assets/image/logo.png"

const Navbar = ({totalItems}) => {
    const classes = useStyle();
    return (
        <>
        <AppBar position="fixed" className={classes.appbar} color="inherit">
            <Toolbar>
                <Typography variant="h6" className={classes.toolbar}>
                    <img src={Logo} alt="Temp" height="50px" classname={classes.image} />
                    
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label="show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                </div>
            </Toolbar>

        </AppBar>
            
        </>
    );
};

export default Navbar;