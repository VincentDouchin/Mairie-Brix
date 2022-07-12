
import { Button, Typography, Toolbar, AppBar, } from '@mui/material';
function Header() {
    return (
        <AppBar position="static">
            <Toolbar>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mairie de Brix - Location de salle
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}
export default Header