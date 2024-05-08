import { Title } from '@mui/icons-material'
import { Box, ListItem, List, Typography, ListItemButton, ListItemText, Stack } from '@mui/material'
import React from 'react'
import { ProductsLeftBox1 } from './ProductsLeftBox1'
import { ProductsLeftBox2 } from './ProductsLeftBox2'
import { ProductsLeftBox3 } from './ProductsLeftBox3'
import { ProductsRightBox } from './ProductsRightBox'

export const Products = () => {


    return (

        <Box >
            <Box sx={{ width: "96vw", height: "102vh", display: "flex", justifyContent: "space-between", mx: "2vw" }} >

                <Box sx={{ width: "15vw", height: "100vh", bgcolor: "#157", overflowY: "scroll" }}>

                    {/* <Stack sx={{ height: "20vh", alignItems: "center", p: "1vh", columns: "1", rowHeight: "2vh" }}  >

                    </Stack> */}
                    <ProductsLeftBox1 />
                    <ProductsLeftBox2 />
                    <ProductsLeftBox3 />
                    <ProductsLeftBox1 />
                    <ProductsLeftBox1 />
                    <ProductsLeftBox1 />
                    <ProductsLeftBox1 />


                </Box>


                <Box sx={{ width: "70vw", height: "100vh", bgcolor: "#148" }}>
                    <ProductsRightBox />
                </Box>
            </Box>
        </Box >
    )
}





