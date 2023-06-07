import {React, useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStyles from '../styles';
import { Grid } from '@mui/material';

const UserCard = ({clients}) => {
    const classes = useStyles();
    console.log("clients1", clients[0].profile.name)
  return (
    <div className={classes.cardGrid}>
      
        {clients.map((client) => (
          
            <Card >
            <CardMedia
              component="img"
              alt="Lawyer"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {client.profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {client.profile.city}
                <br />
                {client.profile.contact}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Consult Now</Button>
            </CardActions>
          </Card>   
        ))}
        
    </div >
  )
}
 
export default UserCard