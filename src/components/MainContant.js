import React from 'react'
import { Box, Grid, Paper, Card, CardActions, CardContent, CardMedia, Typography, Button, useTheme } from "@mui/material"
export const MainContant = () => {

    const theme = useTheme();

    return (
        <Box sx={{ [theme.breakpoints.up('sm')]: { padding: 10 }, [theme.breakpoints.down("sm")]: { padding: 1 }, }}>
            <Paper sx={{ padding: "12px" }} elevation={10}>{/*Paper:kart ozelligi ayrıca golgelendirme icin elevation kullanılır  */}


                <Grid container my={4} rowSpacing={2} columnSpacing={1} justifyContent="center">{/*spacingler le satir ve sutun aralarina bosluklar veriyoruz */}
                    <Grid item xs={12} sm={3}>{/*sm sayesinde telefon modunda alt alta siralanir  */}
                        <Box bgcolor={"#178"} p={2}>
                            <Card >
                                <CardMedia sx={{ maxHeight: "25vh" }} component={"img"} image="http://source.unsplash.com/random" alt="unsplash image" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component={"div"} >React</Typography>
                                    <Typography variant="body2" color={"text.secondary"}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn more</Button>

                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box bgcolor={"#178"} p={2}>
                            <Card>
                                <CardMedia sx={{ maxHeight: "25vh" }} component={"img"} image="http://source.unsplash.com/random" alt="unsplash image" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component={"div"} >React</Typography>
                                    <Typography variant="body2" color={"text.secondary"}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn more</Button>

                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box bgcolor={"#178"} p={2}>  <Card>
                            <CardMedia sx={{ maxHeight: "25vh" }} component={"img"} image="http://source.unsplash.com/random" alt="unsplash image" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component={"div"} >React</Typography>
                                <Typography variant="body2" color={"text.secondary"}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn more</Button>

                            </CardActions>
                        </Card></Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box bgcolor={"#178"} p={2}>  <Card>
                            <CardMedia sx={{ maxHeight: "25vh" }} component={"img"} image="http://source.unsplash.com/random" alt="unsplash image" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component={"div"} >React</Typography>
                                <Typography variant="body2" color={"text.secondary"}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn more</Button>

                            </CardActions>
                        </Card></Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box bgcolor={"#178"} p={2}>  <Card>
                            <CardMedia sx={{ maxHeight: "25vh" }} component={"img"} image="http://source.unsplash.com/random" alt="unsplash image" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component={"div"} >React</Typography>
                                <Typography variant="body2" color={"text.secondary"}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn more</Button>

                            </CardActions>
                        </Card></Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box bgcolor={"#178"} p={2}>  <Card>
                            <CardMedia sx={{ maxHeight: "25vh" }} component={"img"} image="http://source.unsplash.com/random" alt="unsplash image" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component={"div"} >React</Typography>
                                <Typography variant="body2" color={"text.secondary"}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn more</Button>

                            </CardActions>
                        </Card></Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}
