import { Box, Grid, Paper, Card, CardActions, CardContent, CardMedia, Typography, Button, Breadcrumbs, Link } from "@mui/material"
import * as React from 'react';
import { Navbar } from "./Navbar"
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ProductBar } from "./ProductBar";
import { ProductBar2 } from "./ProductBar2";
import { MainContant } from "./MainContant";
import { CurrentSlider } from "./CurrentSlider";
export const Home = () => {






    return (
        <Box >
            <Navbar />


            <CurrentSlider />

            <ProductBar />

            {/*Breadcrumbs ici sonra siteye uygun sekilde duzenlenmeli */}
            <Box m={2}>
                {/* <Breadcrumbs aria-label="breadcrumb" separator="-"> */}
                <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}
                    maxItems={3} itemsAfterCollapse={2} >
                    <Link underline="hover" href="#">Home</Link>
                    <Link underline="hover" href="#">Catalog</Link>
                    <Link underline="hover" href="#">Accessories</Link>
                    <Typography color={"text.primary"}>Shoes</Typography>
                </Breadcrumbs>
            </Box>







            <MainContant />

            <ProductBar2 />

        </Box>
    )
}
