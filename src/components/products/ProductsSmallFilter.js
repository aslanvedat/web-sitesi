import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Checkbox } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export const ProductsSmallFilter = () => {
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [anchorEl3, setAnchorEl3] = React.useState(null);
    const [anchorEl4, setAnchorEl4] = React.useState(null);

    const handleMenuClick = (event, anchorEl) => {
        if (anchorEl === 'anchorEl1') {
            setAnchorEl1(event.currentTarget);
        } else if (anchorEl === 'anchorEl2') {
            setAnchorEl2(event.currentTarget);
        } else if (anchorEl === 'anchorEl4') {
            setAnchorEl3(event.currentTarget);
        } else if (anchorEl === 'anchorEl3') {
            setAnchorEl4(event.currentTarget);
        }
    };

    const handleMenuClose = (anchorEl) => {
        if (anchorEl === 'anchorEl1') {
            setAnchorEl1(null);
        } else if (anchorEl === 'anchorEl2') {
            setAnchorEl2(null);
        } else if (anchorEl === 'anchorEl3') {
            setAnchorEl3(null);
        } else if (anchorEl === 'anchorEl4') {
            setAnchorEl4(null);
        }
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Button
                    variant="contained"
                    color="primary"
                    aria-controls="menu1"
                    aria-haspopup="true"
                    onClick={(event) => handleMenuClick(event, 'anchorEl1')}
                >
                    Options
                </Button>
                <Menu
                    id="menu1"
                    anchorEl={anchorEl1}
                    open={Boolean(anchorEl1)}
                    onClose={() => handleMenuClose('anchorEl1')}
                >
                    <MenuItem> <Checkbox /> Option 1</MenuItem>
                    <MenuItem><Checkbox />Option 2</MenuItem>
                    <MenuItem><Checkbox />Option 3</MenuItem>
                </Menu>

                <Button
                    variant="contained"
                    color="primary"
                    aria-controls="menu2"
                    aria-haspopup="true"
                    onClick={(event) => handleMenuClick(event, 'anchorEl2')}
                >
                    Options
                </Button>
                <Menu
                    id="menu2"
                    anchorEl={anchorEl2}
                    open={Boolean(anchorEl2)}
                    onClose={() => handleMenuClose('anchorEl2')}
                >
                    <MenuItem onClick={() => handleMenuClose('anchorEl2')}>Option 1</MenuItem>
                    <MenuItem onClick={() => handleMenuClose('anchorEl2')}>Option 2</MenuItem>
                    <MenuItem onClick={() => handleMenuClose('anchorEl2')}>Option 3</MenuItem>
                </Menu>

                <Button
                    variant="contained"
                    color="primary"
                    aria-controls="menu3"
                    aria-haspopup="true"
                    onClick={(event) => handleMenuClick(event, 'anchorEl3')}
                >
                    Options
                </Button>
                <Menu
                    id="menu3"
                    anchorEl={anchorEl3}
                    open={Boolean(anchorEl3)}
                    onClose={() => handleMenuClose('anchorEl3')}
                >
                    <MenuItem onClick={() => handleMenuClose('anchorEl3')}>Option 1</MenuItem>
                    <MenuItem onClick={() => handleMenuClose('anchorEl3')}>Option 2</MenuItem>
                    <MenuItem onClick={() => handleMenuClose('anchorEl3')}>Option 3</MenuItem>
                </Menu>
                <Button
                    variant="contained"
                    color="primary"
                    aria-controls="menu4"
                    aria-haspopup="true"
                    onClick={(event) => handleMenuClick(event, 'anchorEl4')}
                >
                    Options
                </Button>
                <Menu
                    id="menu4"
                    anchorEl={anchorEl4}
                    open={Boolean(anchorEl4)}
                    onClose={() => handleMenuClose('anchorEl4')}
                >
                    <MenuItem onClick={() => handleMenuClose('anchorEl4')}>Option 1</MenuItem>
                    <MenuItem onClick={() => handleMenuClose('anchorEl4')}>Option 2</MenuItem>
                    <MenuItem onClick={() => handleMenuClose('anchorEl4')}>Option 3</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}
