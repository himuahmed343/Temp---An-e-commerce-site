import React from 'react'
import Product from '../Product/Product'
import {Container, Grid} from "@material-ui/core";
import {useParams} from 'react-router-dom'


const ProductDetails = ({products}) => {
    const {productKey} = useParams();

    return (
        <>


        <Container>

        {
            products.map((product) => (
                <Grid container justify="space-between"  spacing={2}>
                        <Grid item alignItems="center">
                            <img src={product.image.url} alt={product.name} width="250px"/>
                        </Grid>
                        
                        <Grid item alignItems="center">
                            <h1 key={product.id}>Product Name: {product.name}</h1>
                        </Grid>

                </Grid>
            ))
        }

        </Container>
        </>
    )
}

export default ProductDetails
