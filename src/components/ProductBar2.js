//alttaki prudactBarData  ile entegrasyon yapilarak   linklerin tek tek  girilmesi onlenmeli!!
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import { Box, Tab, Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Paper } from "@mui/material"


export const ProductBar2 = () => {
    const [value, setValue] = useState("1")

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }


    return (
        <Box >
            <TabContext value={value}>

                <Box sx={{ borderBottom: 1, borderColor: "divider", width: "%90" }}>
                    <TabList aria-label="Tabs example" onChange={handleChange} textColor="secondary" variant="scrollable" scrollButtons="auto">

                        <Grid item xs={12} sm={4}>
                            <Box width={"300px"} sx={{ paddingRight: 2, paddingLeft: 2 }} >
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
                        </Grid>
                        <Box width={"300px"} sx={{ paddingRight: 2, paddingLeft: 2 }} >
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
                        <Box width={"300px"} sx={{ paddingRight: 2, paddingLeft: 2 }}>
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
                        <Box width={"300px"} sx={{ paddingRight: 2, paddingLeft: 2 }}>
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
                        <Box width={"300px"}>
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
                        </Box> <Box width={"300px"} sx={{ paddingRight: 2, paddingLeft: 2 }}>
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
        </Box>
    )
}