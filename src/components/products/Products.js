import { Title } from '@mui/icons-material'
import { Box, ListItem, List, Typography, ListItemButton, ListItemText, Stack } from '@mui/material'
import React from 'react'
import { ProductsLeftBox1 } from './ProductsLeftBox1'
import { ProductsLeftBox2 } from './ProductsLeftBox2'
import { ProductsLeftBox3 } from './ProductsLeftBox3'

export const Products = () => {


    return (

        <Box >
            <Box sx={{ width: "85vw", height: "102vh", display: "flex", justifyContent: "space-between", marginX: "5vh" }} >

                <Box sx={{ width: "20vw", height: "100vh", bgcolor: "#157" }}>

                    {/* <Stack sx={{ height: "20vh", alignItems: "center", p: "1vh", columns: "1", rowHeight: "2vh" }}  >

                    </Stack> */}
                    <ProductsLeftBox1 />
                    <ProductsLeftBox2 />
                    <ProductsLeftBox3 />

                </Box>


                <Box sx={{ width: "60vw", height: "100vh", bgcolor: "#148" }}> </Box>
            </Box>
        </Box >
    )
}





