import { Box, Button, Paper, Stack, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Link } from 'react-router-dom';
export const UserUpdate = () => {
    const theme = useTheme();
    const [value, setValue] = useState("");
    return (
        <Box display={"flex"} justifyContent={"center"} >

            <Paper sx={{ [theme.breakpoints.up("sm")]: { width: "25vw", height: "65vh" }, [theme.breakpoints.down("sm")]: { width: "70vw", height: "50vh" }, color: "red", p: "2vh", pt: "5vh" }}>
                <Box sx={{ mb: "5vh" }}>
                    <HowToRegIcon color='primary' />
                    <Typography variant="body1" color="primary"> User Update</Typography>
                </Box>

                <Stack spacing={4}>
                    <TextField label="Email" type='email' required color='primary' ></TextField>
                    <TextField label="Password" type='password' color='primary' required value={value} onChange={(e) => setValue(e.target.value)} helperText={!value ? "requerid" : "do not share your password with anyone"}
                    ></TextField>

                    {/* alttaki textField ta requerid kullanmama ragmen * gelmedi neden? */}
                    <TextField label="confirm your password" reguired type="password" color='primary' />
                </Stack>

                <Box sx={{ mt: "5vh" }}>
                    <Button variant="contained" color="primary" ><Link to="/">Update</Link></Button>
                </Box>
            </Paper>



        </Box >
    )
}
