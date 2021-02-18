import React from 'react';
import { Typography , Link } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

  return <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                 Coding Challenge 
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                <Link  href="https://github.com/eliseofernandes">
                    <GitHub color="inherit" />
                </Link>
            </Typography>            
         </footer>
}

export default Footer;