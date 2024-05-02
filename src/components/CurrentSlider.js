import { Box, Typography, Button, Slide, Transition } from "@mui/material"
import React from 'react'
import { useState, useEffect } from 'react';
export const CurrentSlider = () => {


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

        <Box sx={{
            width: "90%", height: "70vh", mb: "10vh", mt: "2vh", textAlign: 'center'/*mb :margin-bottom ,mt:margin-top */
        }}>
            <Typography variant="h5" gutterBottom>
                {slides[currentSlide].title}
            </Typography>


            <Slide key={currentSlide} direction="right" in={true} timeout={1500}>
                <img src={slides[currentSlide].img} alt={slides[currentSlide].title} style={{ width: '80%', maxHeight: "60vh" }} />
            </Slide>
            <Box >
                <Button onClick={goToPrevSlide} disabled={currentSlide === 0}>
                    Önceki
                </Button>
                <Button onClick={goToNextSlide} disabled={currentSlide === slides.length - 1}>
                    Sonraki
                </Button>
            </Box>
        </Box >
    )
}
