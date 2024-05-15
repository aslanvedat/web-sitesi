import { Title } from '@mui/icons-material'
import { Box, Button, useMediaQuery } from '@mui/material'
import React from 'react'
import { ProductsLeftBox1 } from './ProductsLeftBox1'
import { ProductsLeftBox2 } from './ProductsLeftBox2'
import { ProductsLeftBox3 } from './ProductsLeftBox3'
import { ProductsRightBox } from './ProductsRightBox'
import { ProductsSmallFilter } from './ProductsSmallFilter'
import theme from '../../Theme'

export const Products = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    if (!isSmallScreen) {
        return (

            <Box >
                <Box sx={{ width: "96vw", height: "102vh", display: "flex", justifyContent: "space-between", mx: "2vw" }} >

                    <Box sx={{ width: "15vw", height: "100vh", bgcolor: theme.palette.primary.main, overflowY: "scroll", borderRadius: "1vh" }}>

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


                    <Box sx={{ width: "70vw", height: "100vh" }}>
                        <ProductsRightBox />
                    </Box>

                </Box>
            </Box >
        );
    }



    return (
        <Box>
            <Box>
                <ProductsSmallFilter />



                <Box sx={{ width: "90vw", height: "100vh" }}>
                    <ProductsRightBox />
                </Box>
            </Box >
        </Box >

    )
}





