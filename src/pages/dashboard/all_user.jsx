import {React, useState, useEffect} from 'react'
import { CssBaseline } from '@mui/material';
import { Container, Typography, Grid } from '@mui/material';
import useStyles from '../../styles';
import AdminCard from '../../components/admin_card';
import MenuAppBar from '../../components/navbar';
import MiniDrawer from '../../components/drawer';
import Axios from 'axios';

const DashboardHome = () => {
    const classes = useStyles();
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/getAll')
            .then((res) =>{
                return res.json();
            })
            .then((data) =>{
                setUsers(data);
            })
    },[])


    const handleDelete = (id) =>{

        console.log("id:",id);
        Axios.delete("http://localhost:3000/Delete/" +id,
        {withCredentials: true, credentials: 'include'})
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }


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
                <Grid container spacing={2} >
                        {users && <AdminCard  users = {users}  handleDelete = {handleDelete}/>}
                </Grid>
            </Container>
        </main>

        
    </>
  )
}

export default DashboardHome;