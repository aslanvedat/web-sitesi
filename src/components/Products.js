import { Title } from '@mui/icons-material'
import { Box, ListItem, List, Typography, ListItemButton, ListItemText, Stack } from '@mui/material'
import React from 'react'


export const Products = () => {
    return (

        <Box >
            <Box sx={{ width: "85vw", height: "82vh", display: "flex", justifyContent: "space-between", marginX: "5vh" }} >

                <Box sx={{ width: "15vw", height: "80vh", bgcolor: "#751", overflow: "scroll" }}>

                    <Stack sx={{ height: "20vh", alignItems: "center", p: "1vh", columns: "1", rowHeight: "2vh" }}  >
                        <Box sx={{ height: "20vh", overflowY: "scroll" }}>
                            <List >
                                {itemData.map(item => (
                                    <ListItem >
                                        <ListItemButton>

                                            <ListItemText key={item.Title} >
                                                {item.Title}
                                            </ListItemText>

                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Stack>

                </Box>




                <Box sx={{ width: "60vw", height: "80vh", bgcolor: "#148" }}> </Box>
            </Box>
        </Box >
    )
}

//     <ListItemText primary="List item 1" />
const itemData = [
    { Title: "List item 1" },
    { Title: "List item 2" },
    { Title: "List item 3" },
    { Title: "List item 4" },
    { Title: "List item 5" },
    { Title: "List item 6" },

]