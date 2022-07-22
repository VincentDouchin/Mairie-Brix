import { useState, } from 'react';
import { TextField, FormControl, Box, FormLabel, RadioGroup, Radio, FormControlLabel, Card, CardContent, Typography, Stack, Button, Dialog, DialogTitle, DialogContent, DialogContentText, Divider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { ReactLocation, useMatch } from "@tanstack/react-location";
import { styled } from '@mui/material/styles';

import { Event } from '@mui/icons-material';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import dayjs from 'dayjs'
import objectSupport from 'dayjs/plugin/objectSupport'
import sallesStore from '../stores/salles'
import bookingsStore from '../stores/bookings'
dayjs.extend(objectSupport)

export default function Salle() {
    const match = useMatch()
    const salle = sallesStore(s => s.salles.find(salle => salle.id == match.params.Salle))

    const [selectedDay, setSelectedDay] = useState(null)
    const selectedDate = (time) => ({ date: new Date(selectedDay.year(), selectedDay.month(), selectedDay.date(), time).toISOString() })

    const bookings = bookingsStore(s => s.bookings)
    window.b = bookings
    const bookingsToValidate = bookingsStore(s => s.bookingsToValidate)
    // const createBooking = bookingsStore().createBooking
    const createBooking = bookingsStore().createBooking
    const [durée, setDurée] = useState(null)
    const [description, setDescription] = useState('')
    const start = () => ['Matin', 'Toute la journée'].includes(durée) ? 9 : 14
    const end = () => ['Après-Midi', 'Toute la journée'].includes(durée) ? 22 : 14

    const Booking = styled(PickersDay)(({ theme }) => {
        return { backgroundColor: theme.palette.warning.main, }
    })
    const isBooked = (b, date) => b.some(booking => dayjs(booking.start?.dateTime || booking.start?.date).isSame(date, 'day'))
    const renderBookings = (date, selectedDates, pickersDayProps) => {

        if (isBooked(bookings, date)) {
            return <PickersDay {...pickersDayProps} disabled={true} style={{ background: 'orange' }} />
        } else if (isBooked(bookingsToValidate, date)) {
            return <PickersDay {...pickersDayProps} disabled={true} style={{ background: 'yellow' }} />
        } else {
            return <PickersDay {...pickersDayProps} />
        }
    }
    const [open, setOpen] = useState(false)

    function ConfirmBooking() {
        return (
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
                <DialogTitle >
                    Confirmez votre réservation
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={1}>
                        <DialogContentText>
                            Réserver la salle {salle.Nom} le {selectedDay?.format('D/M/YYYY')}?
                        </DialogContentText>

                        <Button onClick={() => {

                            createBooking({ salle: salle.id, description: description, start: selectedDate(start()), end: selectedDate(end()) })

                            setOpen(false)

                        }}>Confirmer</Button>
                    </Stack>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Card>
            <CardContent>
                <Stack spacing={1}>
                    <Typography style={{ margin: '1em' }} variant="h6" component="div">
                        {salle.Nom}
                    </Typography>
                    <Typography >Adresse : {salle.Adresse}</Typography >
                    <Typography >Capacité : {salle.Capacité} personnes</Typography >
                </Stack >
            </CardContent>
            <Divider />
            <Card >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker

                        displayStaticWrapperAs="desktop"
                        value={selectedDay}
                        onChange={setSelectedDay}
                        renderDay={renderBookings}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Card>
            <Divider />
            <Card >
                <CardContent>
                    <Stack spacing={1}>
                        <TextField
                            id="outlined-basic"
                            label="Evenement"
                            variant="outlined"
                            value={description}
                            onChange={e => setDescription(e.target.value)} />
                        <FormControl >
                            <FormLabel id="demo-radio-buttons-group-label">Durée</FormLabel>
                            <RadioGroup
                                row
                                value={durée}
                                onChange={e => setDurée(e.target.value)}
                                style={{ margin: 'auto' }}
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                {
                                    ['Matin', 'Après-Midi', 'Toute la journée'].map(option => <FormControlLabel key={option} value={option} control={<Radio />} label={option} />)
                                }
                            </RadioGroup>
                        </FormControl>
                        <Button disabled={!(durée && description)} variant="outlined" onClick={() => setOpen(true)} startIcon={<Event />}>Réserver</Button>
                        <ConfirmBooking />
                    </Stack>
                </CardContent>
            </Card>
        </Card >
    )
}