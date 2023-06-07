import {React, useState, useEffect} from 'react'
import UserCard from '../components/user_card';
import { CssBaseline } from '@mui/material';
import MenuAppBar from '../components/navbar';
import { Container, Typography, Grid } from '@mui/material';
import useStyles from '../styles';


const ClientsHome = () => {
    const classes = useStyles();
    const [clients, setClients] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/allLawyers')
            .then((res) =>{
                return res.json();
            })
            .then((data) =>{
                setClients(data);
            })
    },[])


  return (
    <>
        <CssBaseline />
        <MenuAppBar />
        <main>
            <div className={classes.container}>
                <Container maxWidth = 'sm'>
                    <Typography variant='h2' align='center' gutterBottom>
                        Waqeel
                    </Typography>
                    <Typography variant='h4' align='center' paragraph>
                        Connecting you to the best Lawyers in town
                    </Typography>
                </Container>
            </div>
            <Container maxWidth ='md'>
                <Grid container spacing={4} >
                    <Grid item xs={12} sm={6} md={4}>
                        {clients && <UserCard  clients = {clients} className={classes.card}/>}
                    </Grid>
                </Grid>
            </Container>
        </main>

        
    </>
  )
}

export default ClientsHome;