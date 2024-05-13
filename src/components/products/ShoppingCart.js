
import { Box, TableRow, Table, TableHead, TableCell, TableContainer, Paper, TableBody, Typography, Checkbox, Button, Card, CardContent, CardActions } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
    return (
        <Box display={'flex'}>
            <Box>
                <Box>
                    <Typography>
                        odeme turu
                        {/* buraya daha sonra slader panel benzeri bir ozellik eklenecek  */}
                    </Typography>
                    <TableContainer component={Paper} sx={{ maxHeight: "60vh", width: "60vw", overflowY: "scroll" }} >
                        <Table aria-label='simpleelement' stickyHeader>
                            <TableHead  >
                                <TableRow sx={{ backgroundColor: "primary" }} /*burdaki background  sx,style calismiyor unutma !! */ >
                                    <TableCell>Image</TableCell>
                                    <TableCell>Product Code</TableCell>
                                    <TableCell >pieces</TableCell>
                                    <TableCell>Unit Price</TableCell>
                                    <TableCell>Amount</TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    tableData.map(row => (
                                        <TableRow key={row.id} sx={{ "&:last-child td,&:last-child th": { border: 0 } }}>
                                            <TableCell  >
                                                <img src={row.img} alt="Resim" style={{ height: "15vh", width: "10vw" }} />
                                            </TableCell>
                                            <TableCell>{row.urunKodu}</TableCell>
                                            <TableCell>{row.adet}</TableCell>
                                            <TableCell>{row.birimFiyat}</TableCell>
                                            <TableCell>{row.tutari}</TableCell>

                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box>
                    <TableContainer component={Paper} sx={{ maxHeight: "50vh", width: "60vw", overflowY: "scroll", my: "2vh" }}>
                        <Table aria-label='simpleelement' stickyHeader>
                            <TableHead >
                                <TableRow style={{ backgroundColor: "grey" }}/*bu style calismiyor unutma !! */ >
                                    <TableCell>installment</TableCell>
                                    <TableCell>payment</TableCell>
                                    <TableCell >remaining</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    tableData2.map(row => (
                                        <TableRow key={row.id} sx={{ "&:last-child td,&:last-child th": { border: 0 } }}>
                                            <TableCell>{row.taksit}</TableCell>
                                            <TableCell>{row.odeme}</TableCell>
                                            <TableCell>{row.kalan}</TableCell>


                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
            <Box sx={{ width: "30vw", height: "70vh" }} style={{ backgroundColor: "grey" }}>


                <Typography><Button style={{ color: "white" }} > <Checkbox sx={{ color: "#178" }} />Ön Bilgilendirme Koşulları'nı ve Mesafeli Satış Sözleşmesi'ni okudum, onaylıyorum. </Button></Typography>

                <Card sx={{ p: "0", height: "50vh", width: "30vw" }} >
                    {/* siparis ozeti kismi daha sonra yapilacak */}
                    <Typography variant='h5'>
                        Sipariş Özeti
                    </Typography>


                </Card>
                <Button size="large" sx={{ backgroundColor: "#178" }} ><Link to="/payment" style={{ color: "white" }}>Make Payment</Link></Button>
            </Box>
        </Box>
    )
}
const tableData = [{
    "id": 1,
    "img": "http://source.unsplash.com/random",
    "urunKodu": "101",
    "adet": "2",
    "birimFiyat": "85",
    "tutari": "170"
}, {
    "id": 2,
    "img": "http://source.unsplash.com/random",
    "urunKodu": "102",
    "adet": "1",
    "birimFiyat": "185",
    "tutari": "185"
}, {
    "id": 1,
    "img": "http://source.unsplash.com/random",
    "urunKodu": "101",
    "adet": "2",
    "birimFiyat": "85",
    "tutari": "170"
}, {
    "id": 2,
    "img": "http://source.unsplash.com/random",
    "urunKodu": "102",
    "adet": "1",
    "birimFiyat": "185",
    "tutari": "185"
}, {
    "id": 1,
    "img": "http://source.unsplash.com/random",
    "urunKodu": "101",
    "adet": "2",
    "birimFiyat": "85",
    "tutari": "170"
}, {
    "id": 2,
    "img": "http://source.unsplash.com/random",
    "urunKodu": "102",
    "adet": "1",
    "birimFiyat": "185",
    "tutari": "185"
}
]

const tableData2 = [{
    "id": 1,
    "taksit": "1",
    "odeme": "1000",
    "kalan": "9000",

}, {
    "id": 2,
    "taksit": "2",
    "odeme": "1000",
    "kalan": "8000",
}, {
    "id": 3,
    "taksit": "3",
    "odeme": "1000",
    "kalan": "7000",

}, {
    "id": 4,
    "taksit": "4",
    "odeme": "1000",
    "kalan": "6000",
}, {
    "id": 5,
    "taksit": "5",
    "odeme": "1000",
    "kalan": "5000",

}, {
    "id": 6,
    "taksit": "6",
    "odeme": "1000",
    "kalan": "4000",
}, {
    "id": 7,
    "taksit": "7",
    "odeme": "1000",
    "kalan": "3000",

}, {
    "id": 8,
    "taksit": "8",
    "odeme": "1000",
    "kalan": "2000",
}, {
    "id": 9,
    "taksit": "9",
    "odeme": "1000",
    "kalan": "1000",

}, {
    "id": 10,
    "taksit": "10",
    "odeme": "1000",
    "kalan": "0"
}]
