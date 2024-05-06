import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export const Breadcrumbss = () => {
    {/*Breadcrumbs ici sonra siteye uygun sekilde duzenlenmeli */ }
    return (

        < Box m={2} padding={2} sx={{ width: "25vw" }} >
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
