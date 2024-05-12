import React from 'react';
//import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Checkbox, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemText, Box, Checkbox, Paper } from '@mui/material';

export const ProductsSmallFilter = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <Box display={'flex'} justifyContent={"center"}>
            <Box>
                <AppBar position="static" style={{ backgroundColor: 'white' }}>
                    <Toolbar sx={{ px: "1vw" }}>{/*default padding kaynagi toolbar */}
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#178' }}
                            onClick={handleDrawerOpen}

                        >
                            Options
                        </Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    anchor="top"
                    open={drawerOpen}
                    onClose={handleDrawerClose}

                >

                    <List >
                        <ListItem>
                            <Checkbox />
                            <ListItemText primary="Option 4" />
                        </ListItem>
                        <ListItem>
                            <Checkbox />
                            <ListItemText primary="Option 5" />
                        </ListItem>
                        <ListItem>
                            <Checkbox />
                            <ListItemText primary="Option 6" />
                        </ListItem>
                    </List>

                </Drawer>
            </Box>
            <Box>
                <AppBar position="static" style={{ backgroundColor: 'white' }}>
                    <Toolbar sx={{ px: "1vw" }}>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#178' }}
                            onClick={handleDrawerOpen}
                        >
                            Options2
                        </Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    anchor="top"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                >
                    <List>
                        <ListItem>
                            <Checkbox />
                            <ListItemText primary="Option 1" />
                        </ListItem>
                        <ListItem>
                            <Checkbox />
                            <ListItemText primary="Option 2" />
                        </ListItem>
                        <ListItem>
                            <Checkbox />
                            <ListItemText primary="Option 3" />
                        </ListItem>
                    </List>
                </Drawer>

            </Box>
            <Box>
                <AppBar position="static" style={{ backgroundColor: 'white' }}>
                    <Toolbar sx={{ px: "1vw" }}>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#178' }}
                            onClick={handleDrawerOpen}
                        >
                            Options3
                        </Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    anchor="top"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                >
                    <List>
                        <ListItem>
                            <Checkbox />
                            <ListItemText primary="Option 1" />
                        </ListItem>
                        <ListItem>
                            <Checkbox />
                            <ListItemText primary="Option 2" />
                        </ListItem>
                        <ListItem>
                            <Checkbox />
                            <ListItemText primary="Option 3" />
                        </ListItem>
                    </List>
                </Drawer>

            </Box>

        </Box>
    );

}
