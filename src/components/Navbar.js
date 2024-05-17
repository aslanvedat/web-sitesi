import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button, Drawer, useMediaQuery } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import theme from '../Theme';
//22-25 arasındaki videolara bakarak  menu cesitlendirilebilir


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const Navbar = ({ selectedShopping }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const ResponsiveToolbar = () => {
        const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
        const [anchorEl, setAnchorEl] = React.useState(null);
        const [isDrawerOpen, setisDrawerOpen] = React.useState(false);

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
            setisDrawerOpen(true);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        if (!isSmallScreen) {
            return (
                <Typography variant="h6" noWrap component="div">
                    <Button sx={{ color: 'inherit' }}>Ürünler</Button>
                    <Button sx={{ color: 'inherit' }}>Hakkımızda</Button>
                    <Button sx={{ color: 'inherit' }}><Link to="/">Home</Link></Button>
                    <Button sx={{ color: 'inherit' }}><Link to="/products">product</Link></Button>
                    <Button sx={{ color: 'inherit' }}>Container</Button>
                    <Button sx={{ color: 'inherit' }}>Container</Button>
                    <Button sx={{ color: 'inherit' }}>Blog</Button>
                </Typography>
            );
        }

        return (

            <Typography variant="h6" noWrap component="div">
                <Button sx={{ color: 'inherit' }} onClick={handleClick}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}

                    >
                        <MenuIcon />
                    </IconButton>
                </Button>
                <Drawer anchor="left" open={isDrawerOpen} onClick={() => setisDrawerOpen(false)}>
                    <Box p={2} width="250px" textAlign="center" role="presentation">

                        <MenuItem onClick={handleClose}>Ürünler</MenuItem>
                        <MenuItem onClick={handleClose}>Hakkımızda</MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Button sx={{ color: "white" }} ><Link to="/">Home</Link></Button>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Button sx={{ color: 'inherit' }}><Link to="/products">product</Link></Button>

                        </MenuItem>
                        <MenuItem onClick={handleClose}>Container</MenuItem>
                        <MenuItem onClick={handleClose}>Blog</MenuItem>

                    </Box>

                </Drawer>
            </Typography>

        );
    };



    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}><Link to="signIn"> Profile</Link> </MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 2 new mails" color="inherit">
                    <Badge badgeContent={selectedShopping} color="error">
                        <Link to="/shoppingCart">    <ShoppingCartIcon style={{ color: "black" }} /></Link>
                    </Badge>
                </IconButton>

            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>

            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );





    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ height: 125 }}  >
                {/*yumusak renkler icin https://mui.com/material-ui/customization/color/#picking-colors 'e bak */}
                <Toolbar sx={{ justifyContent: 'space-between' }} > <ResponsiveToolbar />

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 2 new mails" color="inherit">
                            <Badge badgeContent={selectedShopping} color="error">
                                <Link to="/shoppingCart">    <ShoppingCartIcon style={{ color: "white" }} /></Link>
                            </Badge>
                        </IconButton>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                {/* <Box sx={{ fontSize: "18px" }}>mail</Box> */}
                                <MailIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                {/* <Box sx={{ fontSize: "18px" }}>notification</Box> */}
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Box sx={{ fontSize: "18px" }}>Profile</Box>
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>

                <Toolbar>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        NAVBAR
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>


                    <Box sx={{ display: { xs: 'flex', md: 'none' } }} /*bu box ne ise yarıyor?? */>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}