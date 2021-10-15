import React from 'react';
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from "@material-ui/core";
import useStyle from "./style"


const CartItem = ({item, onUpdateCartQty, onRemoveCartQty}) => {
    const classes = useStyle();
    console.log(item)

    return (
        <Card>
            <CardMedia image ={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" className={classes.encapBtn} onClick={() => onRemoveCartQty(item.id, item.quantity - 1)}> − </Button>
                        <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" className={classes.encapBtn} onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}> + </Button>
                </div>
                <Button type="button" variant="contained" color="secondary" onClick={() => onRemoveCartQty(item.id)}> Remove </Button>

            </CardActions>
        </Card>
    )
}

export default CartItem