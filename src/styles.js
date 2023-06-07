import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    container: {
        padding: '70px 0 6px 8px'
    },
    card:{
        //height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardGrid:{
        padding: '20px 0 10px 10px'
    }
}));

export default useStyles;