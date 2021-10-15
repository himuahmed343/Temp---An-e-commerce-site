import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyle from "./style"
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({cart, handleUpdateCartQty, handleRemoveCartQty, handleEmptyCartQty}) => {
    const classes = useStyle();
    const Emptycart = () =>{
        <Typography variant="subtitle1">You have no items in shooping cart!!,
        <Link to="/" >start adding products</Link>
        </Typography>
    };
    const FilledCart = () =>{
        return(
<>
<div className={classes.toolbar}/>

        <Grid container spacing={3}>
            {
                cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty ={handleUpdateCartQty} onRemoveCartQty={handleRemoveCartQty}  />
                    </Grid>
                ))
            }

        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCartQty}> Empty Cart</Button>
                <Button className={classes.checkoutButton} size="large" type="button" variant="contained"color="primary"> Checkout Cart</Button>
            </div>
        </div>
        </>
        )
        
    };
    if(!cart.line_items) return "Loading...";
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" >
                Your Shopping Cart
            </Typography>
            { !cart.line_items.length ? <Emptycart /> : <FilledCart />}
        </Container>
        // <div>
        //  <h1>Hello</h1>
           
        // </div>
    );
};

export default Cart;