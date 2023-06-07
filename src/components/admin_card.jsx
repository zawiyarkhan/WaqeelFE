import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStyles from '../styles';
import { Grid } from '@mui/material';

export default function AdminCard({users, handleDelete}) {
    console.log(users[0]._id);
  return (
    <>

        {users.map((user, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }} >
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://source.unsplash.com/random"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {/* {user.profile.name} */}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" >Update</Button>
                <Button size="small" onClick={()=> handleDelete(user._id)}>Delete</Button>
            </CardActions>
            </Card>
            </ Grid>
        ))}
        
    </>

  );
}