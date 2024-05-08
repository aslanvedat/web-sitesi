import { Box, Card, CardMedia, Typography, CardContent, CardActions, Button, Link } from '@mui/material'
import React from 'react'
import { ProductBar } from '../ProductBar'

export const ProductsInformation = () => {
    return (
        <Box>
            <Box sx={{ width: "80vw", height: "90vh", bgcolor: "#177", justifyContent: "center", mx: "5vw", display: "flex", justifyContent: "space-between", px: "5vw" }}>
                <Box sx={{ width: "35vw", height: "90vh", bgcolor: "red" }}>
                    {itemData.map(item => (
                        <Box bgcolor={"#178"} >

                            <Card sx={{ p: "0", maxHeight: "90vh" }} >
                                <CardMedia sx={{ maxHeight: "70vh" }} component={"img"} image={item.img} alt="unsplash image" />
                                <CardActions sx={{ justifyContent: "center", height: "20vh" }}>
                                    <Button size="large" ><Link to="/productsInformation">View</Link></Button>
                                </CardActions>
                            </Card>

                        </Box>
                    ))}

                </Box>
                <Box sx={{ width: "35vw", height: "90vh", bgcolor: "red" }}></Box>
            </Box >

            <Box>
                <ProductBar />
            </Box>
        </Box>
    )
}
const itemData = [
    { title: "List item 1", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" }

]