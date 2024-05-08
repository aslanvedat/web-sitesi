import React from 'react'
import { Box, ListItem, List, Typography, ListItemButton, ListItemText, Stack } from '@mui/material'

export const ProductsLeftBox1 = () => {
    return (
        <Box sx={{ width: "15vw", height: "23vh", overflowY: "scroll", mt: "2vh" }}>
            <Typography>Category</Typography>
            <List  >
                {itemData.map(item => (
                    <ListItem sx={{ p: "0" }}>
                        <ListItemButton>

                            <ListItemText key={item.title} >
                                {item.title}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

const itemData = [
    { title: "List item 1" },
    { title: "List item 2" },
    { title: "List item 3" },
    { title: "List item 4" },
    { title: "List item 5" },
    { title: "List item 6" },
]