import {React, useState, useEffect} from 'react'
import { CssBaseline } from '@mui/material';
import { Container, Typography, Grid } from '@mui/material';
import useStyles from '../../styles';
import AdminCard from '../../components/admin_card';
import MenuAppBar from '../../components/navbar';
import MiniDrawer from '../../components/drawer';

const DashboardHome = () => {
    const classes = useStyles();
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/getLawyers')
            .then((res) =>{
                return res.json();
            })
            .then((data) =>{
                setUsers(data);
            })
    },[])


  return (
    <>
        <CssBaseline />
        <MiniDrawer />
        <main>
            <div className={classes.container}>
                <Container maxWidth = 'sm'>
                    <Typography variant='h2' align='center' gutterBottom>
                        All Users
                    </Typography>
                </Container>
            </div>
            <Container maxWidth ='md'>
                <Grid container spacing={4} >
                    <Grid item xs={12} sm={6} md={4}>
                        {users && <AdminCard  users = {users} />}
                    </Grid>
                </Grid>
            </Container>
        </main>

        
    </>
  )
}

export default DashboardHome;