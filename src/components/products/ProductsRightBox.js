import React from 'react'
import { Box, Grid, Paper, Card, CardActions, CardContent, CardMedia, Typography, Button, useTheme } from "@mui/material"
import { Link } from "react-router-dom";

export const ProductsRightBox = () => {
    const theme = useTheme();
    return (
        <Box >
            <Paper sx={{
                [theme.breakpoints.up("sm")]: { width: "70vw", height: "100vh", overflowY: "scroll" }, [theme.breakpoints.down("sm")]: { width: "100vw", height: "100vh", overflowY: "scroll" }
            }} elevation={10}  >{/*Paper:kart ozelligi ayrıca golgelendirme icin elevation kullanılır  */}


                <Grid container my={4} rowSpacing={2} columnSpacing={4} justifyContent="center" sx={{ [theme.breakpoints.up("sm")]: { width: "65vw", my: "1vh", mx: "2vw", p: "2" }, [theme.breakpoints.down("sm")]: { width: "95vw", my: "1vh", mx: "1vw", p: "2" } }}>{/*spacingler le satir ve sutun aralarina bosluklar veriyoruz */}
                    {itemData.map(item => (

                        <Grid item xs={6} sm={3} >{/*sm sayesinde telefon modunda alt alta siralanir  */}
                            <Box bgcolor={"#178"} >

                                <Card sx={{ p: "0", maxHeight: "65vh" }} >
                                    <CardMedia sx={{ maxHeight: "35vh" }} component={"img"} image={item.img} alt="unsplash image" />
                                    <CardContent sx={{ maxHeight: "16vh", overflowY: "scroll", p: "0" }}>
                                        <Typography variant="body1" component={"div"} >{item.title}</Typography>
                                        <Typography variant="body2" color={"text.secondary"}>

                                            {item.text}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ justifyContent: "center" }}>
                                        <Button size="large" ><Link to="/productsInformation">View</Link></Button>

                                    </CardActions>
                                </Card>

                            </Box>
                        </Grid>

                    ))}


                </Grid>
            </Paper>
        </Box>
    )
}


const itemData = [
    { title: "List item 1", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 2", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 3", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 4", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 5", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 6", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 6", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 6", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 6", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 6", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" }, { title: "List item 1", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 2", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 3", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 4", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 5", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 6", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 6", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 6", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 6", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
    { title: "List item 6", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" },
]