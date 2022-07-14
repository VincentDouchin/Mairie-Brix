import { useState, useMemo } from 'react';
import { TextField, Card, CardMedia, CardContent, Typography, Stack, Button, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { ReactLocation, useMatch } from "@tanstack/react-location";
import { styled } from '@mui/material/styles';

import { Event } from '@mui/icons-material';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import dayjs from 'dayjs'
import objectSupport from 'dayjs/plugin/objectSupport'
dayjs.extend(objectSupport)
import salles from './salles'

export default function Room() {
    // const location = new ReactLocation()
    const match = useMatch()
    const salle = useMemo(() => salles.find(salle => salle.id == match.params.Room))

    const [selectedDay, setSelectedDay] = useState(dayjs())
    const Booking = styled(PickersDay)(({ theme }) => {
        return {
            backgroundColor: theme.palette.warning.main,
        }
    })

    const renderBookings = (date, selectedDates, pickersDayProps) => {

        if (salle.bookings.some(booking => dayjs(booking.date).isSame(date))) {
            return <Booking {...pickersDayProps} disabled={true} />
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
                            Réserver la salle {salle.name} le {selectedDay.format('D/M/YYYY')}?
                        </DialogContentText>

                        <Button onClick={() => {
                            salle.bookings.push({ date: { y: selectedDay.year(), M: selectedDay.month(), d: selectedDay.date() } })

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
                        {salle.name}
                    </Typography>
                    <CardMedia
                        component="img"
                        height="140"
                        image={salle.img}
                        alt={salle.name}
                    />

                    <Typography >Adresse : {salle.adress}</Typography >
                    <Typography >Surface : {salle.surface}</Typography >
                    <Typography >Capacité : {salle.capacity} personnes</Typography >
                </Stack >
            </CardContent>
            <Card variant="outlined">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker

                        displayStaticWrapperAs="desktop"
                        value={selectedDay}
                        onChange={(newValue) => {
                            setSelectedDay(newValue);
                        }}
                        renderDay={renderBookings}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Card>
            <Stack spacing={1}>
                <Button onClick={() => setOpen(true)} startIcon={<Event />}>Réserver cette journée</Button>
                <ConfirmBooking />
            </Stack>
        </Card>
    )
}