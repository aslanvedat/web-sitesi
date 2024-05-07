import { Box, Link } from "@mui/material"
import * as React from 'react';
import { ProductBar } from "./ProductBar";
import { MainContant } from "./MainContant";
import { CurrentSlider } from "./CurrentSlider";
export const Home = () => {

    return (
        <Box >
            <CurrentSlider />
            <ProductBar />
            <MainContant />
            <ProductBar />
        </Box>
    )
}
