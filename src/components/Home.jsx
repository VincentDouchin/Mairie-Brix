import { useState } from 'react'
import { Box, Container } from '@mui/material'
import Header from './Header'
import StoreLoader from '../stores/StoreLoader'


import { Outlet } from '@tanstack/react-location'

export default function Home() {
    const [loaded, setLoaded] = useState(false)
    return (
        <>
            <StoreLoader setLoaded={setLoaded} />

            <Header />
            <Box sx={{ flexGrow: 1 }}>

                <Container maxWidth="sm" style={{ marginTop: '1em' }} >
                    {loaded && <Outlet />}
                </Container >
            </Box >
        </>

    )

}