import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyle from "./style"

const Cart = () => {
    const classes = useStyle();
    const isEmpty = true;
    const Emptycart = () =>{
        <Typography variant="subtitle1">You have no items in shooping cart!!</Typography>
    };
    const FilledCart = () =>{
        <>
        <Grid container spacing={3}>

        </Grid>
        </>
    };

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">
                Your Shopping Cart
            </Typography>
            {isEmpty ? <Emptycart /> : <FilledCart />}
        </Container>
    );
};

export default Cart;