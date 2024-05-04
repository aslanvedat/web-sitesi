//alttaki prudactBarData  ile entegrasyon yapilarak   linklerin tek tek  girilmesi onlenmeli!!
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import { Box, Tab, Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Drawer, useMediaQuery, useTheme } from "@mui/material"


export const ProductBar = () => {

    const [value, setValue] = useState("1")
    const handleChange = (event, newValue) => {
        setValue(newValue)

    }
    const theme = useTheme();

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    //sx={{ [theme.breakpoints.up('sm')]: { padding: 10 }, [theme.breakpoints.down("sm")]: { padding: 1 }, }}




    return (
        <Box sx={{ mb: "2vh" }}>
            <Grid container justifyContent="center">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider", width: "99%" }} >
                        <TabList aria-label="Tabs example" onChange={handleChange} textColor="secondary" variant="scrollable" scrollButtons="auto">

                            <Box sx={{ [theme.breakpoints.up('sm')]: { width: "23vw", padding: "1vw", paddingRight: "1vw" }, [theme.breakpoints.down("sm")]: { width: "47vw", padding: "1vw", paddingRight: "1vw" } }} >
                                <Card>

                                    <CardMedia component={"img"} height={"140"} image="http://source.unsplash.com/random" alt="unsplash image" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component={"div"} >React</Typography>
                                        <Typography variant="body2" color={"text.secondary"}>
                                            1  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn more</Button>

                                    </CardActions>
                                </Card>
                            </Box>

                            <Box sx={{ [theme.breakpoints.up("sm")]: { width: "23vw", padding: "1vw", paddingRight: "1vw" }, [theme.breakpoints.down("sm")]: { width: "47vw", padding: "1vw", paddingRight: "1vw" } }} >
                                <Card>

                                    <CardMedia component={"img"} height={"140"} image="http://source.unsplash.com/random" alt="unsplash image" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component={"div"} >React</Typography>
                                        <Typography variant="body2" color={"text.secondary"}>
                                            2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn more</Button>

                                    </CardActions>
                                </Card>
                            </Box>
                            <Box sx={{ [theme.breakpoints.up("sm")]: { width: "23vw", padding: "1vw", paddingRight: "1vw" }, [theme.breakpoints.down("sm")]: { width: "47vw", padding: "1vw", paddingRight: "1vw" } }}>
                                <Card>
                                    <CardMedia component={"img"} height={"140"} image="http://source.unsplash.com/random" alt="unsplash image" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component={"div"} >React</Typography>
                                        <Typography variant="body2" color={"text.secondary"}>
                                            3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn more</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                            <Box sx={{ [theme.breakpoints.up("sm")]: { width: "23vw", padding: "1vw", paddingRight: "1vw" }, [theme.breakpoints.down("sm")]: { width: "47vw", padding: "1vw", paddingRight: "1vw" } }}>
                                <Card>
                                    <CardMedia component={"img"} height={"140"} image="http://source.unsplash.com/random" alt="unsplash image" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component={"div"} >React</Typography>
                                        <Typography variant="body2" color={"text.secondary"}>
                                            4   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn more</Button>

                                    </CardActions>
                                </Card>
                            </Box>
                            <Box sx={{ [theme.breakpoints.up("sm")]: { width: "23vw", padding: "1vw", paddingRight: "1vw" }, [theme.breakpoints.down("sm")]: { width: "47vw", padding: "1vw", paddingRight: "1vw" } }}>
                                <Card>
                                    <CardMedia component={"img"} height={"140"} image="http://source.unsplash.com/random" alt="unsplash image" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component={"div"} >React</Typography>
                                        <Typography variant="body2" color={"text.secondary"}>
                                            5  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn more</Button>

                                    </CardActions>
                                </Card>
                            </Box>
                            <Box sx={{ [theme.breakpoints.up("sm")]: { width: "23vw", padding: "1vw", paddingRight: "1vw" }, [theme.breakpoints.down("sm")]: { width: "47vw", padding: "1vw", paddingRight: "1vw" } }}>
                                <Card>
                                    <CardMedia component={"img"} height={"140"} image="http://source.unsplash.com/random" alt="unsplash image" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component={"div"} >React</Typography>
                                        <Typography variant="body2" color={"text.secondary"}>
                                            6  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn more</Button>

                                    </CardActions>
                                </Card>
                            </Box>
                        </TabList>
                    </Box>
                </TabContext>
            </Grid>
        </Box>
    )





}
















const productBarData = [
    {
        "id": 1,
        "title": 'Slide 1',
        " img": 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'

    }, {
        "id": 2,
        "title": 'Slide 1',
        " img": 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'

    }, {
        "id": 3,
        "title": 'Slide 1',
        " img": 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'
    }, {
        "id": 4,
        "title": 'Slide 1',
        " img": 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'

    }, {
        "id": 5,
        "title": 'Slide 1',
        " img": 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'

    }, {
        "id": 6,
        "title": 'Slide 1',
        " img": 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'

    }



]
