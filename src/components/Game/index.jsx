import React, { useState , useEffect, useRef } from 'react';
import { Container , Typography, Grid, TextField, Button   } from '@material-ui/core';

import useStyles from './styles';

const Game = () => {
    const classes = useStyles();
    const numberRef = useRef();

    const [rambomNumber, setRambomNumber] = useState(null);
    const [numberAttempts, setNumberAttempts] = useState(0);
    const [answer, setAnswer] = useState(false);
    const [message, setMessage] = useState('Insira um número de 0 à 100');

    useEffect(() => {
        if(!rambomNumber){
           setRambomNumber(Math.round(Math.random() * 100));
        }
    },[rambomNumber])

    const handleAttempts = () => {        
        setNumberAttempts(item => item + 1);  
        const attempts = numberRef.current.value;
        if(parseInt(attempts) === rambomNumber){
            setMessage("Parabéns, você acertou! O número é " + attempts);
            setAnswer(true);
        }
        else if(parseInt(attempts) > rambomNumber){
            setMessage("Hmmm, o número que pensei é menor que " + attempts);
        }
        else {
            setMessage("Hmmm, o número que pensei é maior que " + attempts);
        }
        numberRef.current.value = null;        
    }

    const handleNewGame = () => {
        setMessage('Insira um número de 0 à 100');
        setAnswer(false);
        setNumberAttempts(0);
        setRambomNumber(null);
    }

    return (
        <div className={classes.content}>          
            <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Number Guessing Game
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Adivinhe o número que pensei.
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                 {message}
            </Typography>            
            <div className={classes.container}>
                <Grid container spacing={2} justify="center">                
                <Grid item sm={6}>                    
                    <TextField 
                        fullWidth 
                        className={answer ? classes.successText : ''}
                        type="number" 
                        inputRef={numberRef}
                        label={`Tentativa(s): ${numberAttempts}`}
                        margin="dense"
                        variant="outlined" 
                        disabled={answer}
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />
                </Grid>                
                </Grid>
                <Grid container spacing={2} justify="center">   
                <Grid item sm={6}>   
                    <Button 
                        fullWidth 
                        className={answer ? classes.successButton : ''}
                        variant="contained" 
                        color="primary"
                        onClick={() => answer ? handleNewGame() : handleAttempts()}
                    >
                      {answer ? "Jogar novamente" : "Verificar"}
                    </Button>
                </Grid>
                </Grid>
            </div>
            </Container>
        </div> 
    );  
}

export default Game;