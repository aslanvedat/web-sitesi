import { Box, Grid, Paper, List, ListItem, ListItemButton, useTheme, ListItemIcon, ListItemText, Divider, Typography } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as React from 'react';




export const Footer = () => {

    const theme = useTheme();
    //paperdaki bgcolor calismiyor ona bak !!!!
    return (
        <Box >
            <Paper sx={{ [theme.breakpoints.up('sm')]: { width: "100vw", height: "50vh", bgcolor: "secondary" }, [theme.breakpoints.down("sm")]: { width: "100vw", height: "140vh" }, bgcolor: "#178" }}>


                <Grid container rowSpacing={2} columnSpacing={1} justifyContent="center" >{/*spacingler le satir ve sutun aralarina bosluklar veriyoruz */}
                    <Grid item xs={12} sm={3}>{/*sm sayesinde telefon modunda alt alta siralanir  */}
                        <Box p={2} display="flex" flexDirection="column" alignItems="center">
                            <Typography variant="h6">
                                Contant
                            </Typography>
                            <nav aria-label="main mailbox folders" >
                                <List >

                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <TwitterIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Twitter" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <DraftsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Drafts" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InstagramIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Instagram" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <LinkedInIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Linkedin" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <FacebookIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Facebook" />
                                        </ListItemButton>
                                    </ListItem>

                                </List>
                            </nav>
                            <Divider />

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box p={2} display="flex" flexDirection="column" alignItems="center">
                            <Typography variant="h6">
                                My List
                            </Typography>
                            <List >
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="List item 1" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="List item 2" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="List item 3" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box p={2} display="flex" flexDirection="column" alignItems="center">
                            <Typography variant="h6">
                                My List 2
                            </Typography>
                            <List >
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="List item 1" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="List item 2" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="List item 3" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box p={2} display="flex" flexDirection="column" alignItems="center">
                            <Typography variant="h6">
                                My List 3
                            </Typography>
                            <List >
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="List item 1" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="List item 2" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="List item 3" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}
