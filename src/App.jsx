import { useState } from 'react';
import { Event } from '@mui/icons-material';
import { useNavigate } from '@tanstack/react-location'
import { Container, Button, Typography, Toolbar, Box, AppBar, Card, Stack, CardActionArea, CardMedia, Collapse, CardContent, } from '@mui/material';
import salle1 from '../public/saint-laurent1.jpg'
import salle2 from '../public/saint-patrice3.jpg'
import salle3 from '../public/salle_la_comete_ok.jpg'
function App() {
	const navigate = useNavigate()
	const salles = [
		{ id: 0, name: 'Gymnase', img: salle1, adress: '5 route du Parc', surface: '400m²', capacity: 20 },
		{ id: 1, name: 'Mairie', img: salle2, adress: '1 rue du Castel', surface: '200m²', capacity: 50 },
		{ id: 2, name: 'Eglise', img: salle3, adress: '15 rue du Castel', surface: '300m²', capacity: 30 }
	]
	const [expanded, setExpanded] = useState()
	return (
		<Box sx={{ flexGrow: 1 }}>

			<Container maxWidth="sm" style={{ marginTop: '1em' }} >
				<Stack spacing={2}>
					{salles.map(salle => <Card key={salle.id}>
						<CardActionArea
							onClick={() => setExpanded(expanded === salle.id ? null : salle.id)}
						>
							<CardContent>
								<Typography style={{ margin: '1em' }} variant="h6" component="div">
									{salle.name}
								</Typography>
								<CardMedia
									component="img"
									height="140"
									image={salle.img}
									alt={salle.name}
								/>
							</CardContent>
						</CardActionArea>
						<Collapse in={expanded === salle.id}>
							<CardContent>
								<Stack spacing={1}>
									<Typography >Adresse : {salle.adress}</Typography >
									<Typography >Surface : {salle.surface}</Typography >
									<Typography >Capacité : {salle.capacity} personnes</Typography >
									<Button onClick={() => navigate({ to: salle.id })} startIcon={<Event />}>Faire une réservation</Button>
								</Stack >
							</CardContent>
						</Collapse>
					</Card >)}
				</Stack>
			</Container>
		</Box>
	)
}

export default App
