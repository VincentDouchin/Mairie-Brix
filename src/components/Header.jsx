
import { Button, Typography, Toolbar, Modal, AppBar, IconButton, Box, Dialog, Popover } from '@mui/material';
import { useState, useEffect } from 'react';
import { Home, Settings } from '@mui/icons-material';
import { useNavigate } from '@tanstack/react-location'
import { styled } from '@mui/material/styles';
import { auth } from '../firebase/auth'
import { checkIfAdmin } from '../firebase/firestore'
import Login from './Login';

export default function Header() {

    const navigate = useNavigate()
    const HomeStyled = styled(Home)(({ theme }) => {
        return {
            color: theme.palette.primary.contrastText,
        }
    })
    const [loginModal, setloginModal] = useState(false)
    const [currentUser, setCurrentUser] = useState(undefined)
    auth.onAuthStateChanged(async (user) => {
        if (user && !currentUser) {
            setCurrentUser(user)

            setIsAdmin(await checkIfAdmin(user.uid))
        }
    })
    const [isAdmin, setIsAdmin] = useState(false)
    const [logout, setLogout] = useState(null)
    const open = Boolean(logout)
    const id = open ? 'simple-popover' : undefined;

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton aria-label="home" onClick={() => navigate({ to: '/Mairie-Brix/' })} >
                    <HomeStyled />

                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mairie de Brix - Location de salle
                </Typography>
                {
                    isAdmin && <IconButton aria-label="settings" color="inherit" onClick={() => navigate({ to: '/Mairie-Brix/Parametres' })}>
                        <Settings />
                    </IconButton>
                }
                {
                    currentUser
                        ? <Button color="inherit" onClick={(e) => setLogout(e.target)}>{currentUser?.displayName ?? currentUser.email}</Button>
                        : <Button color="inherit" onClick={() => setloginModal(true)}>Connexion</Button>
                }

            </Toolbar>
            <Popover
                open={open}
                id={id}
                anchorEl={logout}
                onClose={() => setLogout(null)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 0,
                }}
            >
                <Button onClick={() => { auth.signOut(); setCurrentUser(null); setLogout(null) }}>Deconnexion</Button>
            </Popover>
            <Dialog
                open={loginModal}
                onClose={() => setloginModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>{loginModal && <Login></Login>}</Box>
            </Dialog>
        </AppBar >
    )
}
