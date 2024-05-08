import React from 'react'
import { Box, Grid, Paper, Card, CardActions, CardContent, CardMedia, Typography, Button, useTheme } from "@mui/material"
export const MainContant = () => {

    const theme = useTheme();

    return (
        <Box sx={{ [theme.breakpoints.up('sm')]: { padding: 10 }, [theme.breakpoints.down("sm")]: { padding: 1 }, }}>
            <Paper sx={{ padding: "12px" }} elevation={10}>{/*Paper:kart ozelligi ayrıca golgelendirme icin elevation kullanılır  */}


                <Grid container my={4} rowSpacing={2} columnSpacing={3} justifyContent="center">{/*spacingler le satir ve sutun aralarina bosluklar veriyoruz */}
                    {itemData.map(item => (
                        <Grid item xs={12} sm={3}>{/*sm sayesinde telefon modunda alt alta siralanir  */}
                            <Box bgcolor={"#178"} >
                                <Card >
                                    <CardMedia sx={{ maxHeight: "25vh" }} component={"img"} image={item.img} alt="unsplash image" />
                                    <CardContent sx={{ maxHeight: "15vh", overflowY: "scroll" }}>
                                        <Typography gutterBottom variant="h5" component={"div"} >{item.title}</Typography>
                                        <Typography variant="body2" color={"text.secondary"}>
                                            {item.text}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn more</Button>

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
    { title: "List item 1", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas." },
    { title: "List item 2", img: "http://source.unsplash.com/random", text: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas." },
    { title: "List item 3", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas." },
    { title: "List item 4", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas." },
    { title: "List item 5", img: "http://source.unsplash.com/random", text: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas." },
    { title: "List item 6", img: "http://source.unsplash.com/random", text: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas." },
    { title: "List item 6", img: "http://source.unsplash.com/random", text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas." },
    { title: "List item 6", img: "http://source.unsplash.com/random", text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas." },

]