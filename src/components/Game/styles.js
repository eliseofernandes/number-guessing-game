import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 0, 1),
      },
    container: {
        marginTop: theme.spacing(4),
    },
    successText: {
        '& input  + fieldset':{
        borderColor: 'green',
        borderWidth: 2,
    }
    },
    successButton: {
        background: 'green',                   
    },
}));

export default useStyles;
