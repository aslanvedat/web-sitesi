import { Box, Card, CardMedia, Typography, CardActions, Button, Link, Checkbox, Tooltip } from '@mui/material'
import React from 'react'
import { ProductBar } from '../ProductBar'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';

export const ProductsInformation = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedShopping, setSelectedShopping] = useState(0);
    const handleCheckboxClick = (color) => {
        setSelectedColor(color);
    };
    const handleButtonClick = (clickedImage) => {
        setSelectedImage(clickedImage);
    }

    const handleShoppingAddClick = (add) => {
        add = selectedShopping + 1;
        setSelectedShopping(add);
    }
    const handleShoppingRemoveClick = (remove) => {
        if (selectedShopping == 0) {
            return setSelectedColor(0);
        }
        remove = selectedShopping - 1;
        setSelectedShopping(remove);
    }
    return (
        <Box>
            <Box sx={{ width: "80vw", height: "90vh", bgcolor: "#177", justifyContent: "center", mx: "5vw", display: "flex", justifyContent: "space-between", px: "5vw" }}>
                <Box sx={{ width: "35vw", height: "90vh", bgcolor: "red" }}>
                    {itemData.map(item => (
                        <Box bgcolor={"#178"} >

                            <Card sx={{ p: "0", maxHeight: "90vh" }} >
                                <CardMedia sx={{ maxHeight: "70vh" }} component={"img"} image={selectedImage || item.img} alt="unsplash image" />
                                <CardActions sx={{ justifyContent: "center", height: "20vh" }}>
                                    <Box display={'flex'}>
                                        {item.images.map((image, index) => (

                                            <Button key={index} onClick={() => handleButtonClick(image)}>
                                                <CardMedia sx={{ maxHeight: "8vh", }} component={"img"} image={image} alt="unsplash img" />
                                            </Button>
                                        ))}
                                    </Box>
                                </CardActions>
                            </Card>

                        </Box>
                    ))}

                </Box>
                <Box sx={{ width: "35vw", height: "90vh", bgcolor: "white" }}>
                    <Box sx={{ height: "60vh" }}>
                        <Typography sx={{ pt: "2vh" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugitLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugitLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit</Typography>
                    </Box>

                    <Box display={'flex'}>
                        {colorData.map(item => (
                            <Tooltip key={item.color} title={item.title}
                                placement="top" //bu ozellik title'in konumunu ayarlar
                                arrow
                                enterDelay={500}//butonun uzerine geldikten 500ms sonra title gozukur
                                leaveDelay={300}//butonun uzerinden gittikten 300ms sonra ya kadar title gozukmeye devam eder 
                            >
                                <Button>
                                    <Checkbox size='large' {...label} checked={selectedColor === item.color}
                                        onChange={() => handleCheckboxClick(item.color)} icon={<RadioButtonUncheckedIcon style={{ color: item.color }} />} checkedIcon={<RadioButtonCheckedIcon style={{ color: item.color }} />} />
                                </Button>
                            </Tooltip>
                        ))}


                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "left" }}>
                        <Button sx={{ bgcolor: "gray", color: "red", ml: "1vw" }} onClick={handleShoppingRemoveClick}><RemoveIcon /></Button>
                        <Button sx={{ fontSize: "4vh" }}>{selectedShopping}</Button>
                        <Button sx={{ bgcolor: "gray", color: "red", mr: "2vw" }} onClick={handleShoppingAddClick}><AddIcon /></Button>
                        <Button sx={{ bgcolor: "gray", color: "red" }} ><ShoppingCartIcon /></Button>

                    </Box>
                </Box>
            </Box >

            <Box>
                <ProductBar />
            </Box>
        </Box>
    )
}
const itemData = [
    { title: "List item 1", img: "/img/4.jpg", images: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpeg", "/img/4.jpg"], text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit" }

]
const colorData = [{ title: "RED", color: "red" }, { title: "YELLOW", color: "yellow" }, { title: "BLUE", color: "blue" }, { title: "GREY", color: "grey" }, { title: "GREY", color: "green" }, { title: "PİNK", color: "pink" }]