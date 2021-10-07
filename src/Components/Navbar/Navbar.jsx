import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons';
import useStyle from "./style"
import Logo from "../../assets/image/store.png"

const Navbar = () => {
    const classes = useStyle();
    return (
        <>
        <AppBar position="fixed" className={classes.appbar} color="inherit">
            <Toolbar>
                <Typography variant="h6" className={classes.toolbar}>
                    <img src={Logo} alt="Temp" height="25px" classname={classes.image} />
                    Temp.
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label="show cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
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