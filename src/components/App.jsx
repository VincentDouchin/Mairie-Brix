import { useState } from 'react';
import { Event } from '@mui/icons-material';
import { useNavigate } from '@tanstack/react-location'
import { Container, Button, Typography, Toolbar, Box, AppBar, Card, Stack, CardActionArea, CardMedia, Collapse, CardContent, Divider } from '@mui/material';

import sallesStore from '../stores/salles';
function App() {
	const navigate = useNavigate()
	const salles = sallesStore(s => s.salles)
	const [expanded, setExpanded] = useState()
	return (

		<Stack spacing={2}>

			{salles.map(salle => <Card key={salle.id}>
				<CardActionArea
					onClick={() => setExpanded(expanded === salle.id ? null : salle.id)}
				>
					<CardContent>
						<Typography style={{ margin: '1em' }} variant="h6" component="div">
							{salle.Nom}
						</Typography>

					</CardContent>
				</CardActionArea>
				<Collapse in={expanded === salle.id}>
					<CardContent>
						<Stack spacing={1}>
							<Typography ><div style={{ fontWeight: 'bold' }}>Adresse :</div> {salle.Adresse}</Typography >
							<Typography >Capacité : {salle.Capacité} personnes</Typography >
							<Button onClick={() => navigate({ to: salle.id })} startIcon={<Event />}>Faire une réservation</Button>
						</Stack >
					</CardContent>
				</Collapse>
			</Card >)}
		</Stack>

	)
}

export default App
