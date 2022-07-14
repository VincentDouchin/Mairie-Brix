
import { Button, Typography, Toolbar, AppBar, IconButton } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useNavigate } from '@tanstack/react-location'
import { styled } from '@mui/material/styles';
function Header() {
    const navigate = useNavigate()
    const HomeStyled = styled(Home)(({ theme }) => {
        return {
            color: theme.palette.primary.contrastText,
        }
    })
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton aria-label="home" onClick={() => navigate({ to: '/' })} >
                    <HomeStyled />

                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mairie de Brix - Location de salle
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}
export default Header