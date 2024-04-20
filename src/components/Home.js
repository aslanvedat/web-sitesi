import { Box, Grid, Paper, Card, CardActions, CardContent, CardMedia, Typography, Button, Breadcrumbs, Link } from "@mui/material"
import * as React from 'react';
import { Navbar } from "./Navbar"
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState, useEffect } from 'react';
export const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { title: 'Slide 1', img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' },
        { title: 'Slide 2', img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d' },
        { title: 'Slide 3', img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45' },
    ];

    useEffect(() => {
        const timer = setInterval(goToNextSlide, 3000); // Her 3 saniyede bir slaytı değiştir

        return () => {
            clearInterval(timer); // Komponentin temizlenmesi durumunda zamanlayıcıyı temizle
        };
    }, [currentSlide]);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };
    return (
        <Box >
            <Navbar />
            <Box component="div" /*sx={{ background: "red", width: "10% !important", height: "100% !important" }}*/>
            </Box>

            <Box sx={{ width: 400, margin: 'auto', textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                    {slides[currentSlide].title}
                </Typography>
                <img src={slides[currentSlide].img} alt={slides[currentSlide].title} style={{ width: '100%', maxHeight: '300px' }} />
                <Button onClick={goToPrevSlide} disabled={currentSlide === 0}>
                    Önceki
                </Button>
                <Button onClick={goToNextSlide} disabled={currentSlide === slides.length - 1}>
                    Sonraki
                </Button>
            </Box>


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


            {/*42. videoda slader ozelligine bakilabilir !!!!*/}
            <Box padding={10}>
                <Paper sx={{ padding: "32px" }} elevation={10}>{/*Paper:kart ozelligi ayrıca golgelendirme icin elecation kullanılır  */}


                    <Grid container my={4} rowSpacing={2} columnSpacing={1}>{/*spacingler le satir ve sutun aralarina bosluklar veriyoruz */}
                        <Grid item xs={12} sm={4}>{/*sm sayesinde telefon modunda alt alta siralanir  */}
                            <Box bgcolor={"primary.light"} p={2}>
                                <Card>
                                    <CardMedia component={"img"} height={"140"} image="http://source.unsplash.com/random" alt="unsplash image" />
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
                        <Grid item xs={12} sm={4}>
                            <Box bgcolor={"primary.light"} p={2}>
                                <Card>
                                    <CardMedia component={"img"} height={"140"} image="http://source.unsplash.com/random" alt="unsplash image" />
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
                        <Grid item xs={12} sm={4}>
                            <Box bgcolor={"primary.light"} p={2}>  <Card>
                                <CardMedia component={"img"} height={"140"} image="http://source.unsplash.com/random" alt="unsplash image" />
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
                        <Grid item xs={12} sm={4}>
                            <Box bgcolor={"primary.light"} p={2}>  <Card>
                                <CardMedia component={"img"} height={"140"} image="http://source.unsplash.com/random" alt="unsplash image" />
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
                        <Grid item xs={12} sm={4}>
                            <Box bgcolor={"primary.light"} p={2}>  <Card>
                                <CardMedia component={"img"} height={"140"} image="http://source.unsplash.com/random" alt="unsplash image" />
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
                        </Grid><Grid item xs={12} sm={4}>
                            <Box bgcolor={"primary.light"} p={2}>  <Card>
                                <CardMedia component={"img"} height={"140"} image="http://source.unsplash.com/random" alt="unsplash image" />
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
        </Box>
    )
}
