import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTheme } from '@emotion/react';
export const Breadcrumbss = () => {
    const theme = useTheme();
    {/*Breadcrumbs ici sonra siteye uygun sekilde duzenlenmeli */ }
    return (

        < Box m={2} padding={2} sx={{ [theme.breakpoints.up("sm")]: { width: "25vw" }, [theme.breakpoints.down("sm")]: { width: "85vw" } }} >
            {/* <Breadcrumbs aria-label="breadcrumb" separator="-"> */}
            < Breadcrumbs aria-label="breadcrumb" separator={< NavigateNextIcon fontSize="small" />}
                maxItems={3} itemsAfterCollapse={2} >
                <Link underline="hover" href="#">Home</Link>
                <Link underline="hover" href="#">Catalog</Link>
                <Link underline="hover" href="#">Accessories</Link>
                <Typography color={"text.primary"}>Shoes</Typography>
            </Breadcrumbs >
        </Box >

    )
}
