import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { ReactComponent as Slogo } from '../svg/smallogo.svg';
import {
    Button, Card, CardMedia, Container, TextField
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import {
    fade,
    ThemeProvider,
    withStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        margin: {
            margin: theme.spacing(0),
        },
    }),
);

const LastContainer = styled.div`

    h2{
        font-size: 14px;
        color: #fff;
        font-weight: bolder;
        margin: 0px 50px 0px 0px;
    }
    h1{
        font-size: 16px;
        color:#fff;
        font-weight: bolder;
        margin: 0px 50px 0px 0px;
    }
    .MuiButton-root{
      color :#fff;
      font-weight: 600;
    }
    .midButton button{
        padding: 10px 20px;
    }
    .MuiIconButton-root{
        border-radius: 100;
        background-color: "#FF6057";
        padding: "0px 36px";
        font-size: "16px";
    }
    .input{
    color: "white"
    }

`;

const StyledButton = styled.div`
    .MuiButton-root{
        background: linear-gradient(to right, #FF6057,#FF6057);
        padding: 5px 40px;
        border-radius: 100;
    }
`;

const TextStyled = styled.div`
    border-radius: 10;
    width: 50%;
`;


export const Lastsection = () => {
    const classes = useStyles();

    return (
        <LastContainer >
            <Container>
                <Grid container spacing={3}  >
                    <Grid item xs={3}>
                        <Slogo style={{ margin: "20px 0px 10px 0px" }} />
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam at mi sollicitudin</h1>
                    </Grid>
                    <Grid item xs={3}>
                        <h1 style={{ margin: "30px 0px 30px 0px" }}>Nos services</h1>
                        <h2>Avis clients
                        Mentions légales
                        Plan du site
                        Blog d’Idéematic
                        Le dictionnaire du digital
                        ‹ Notre boutique /›</h2>
                    </Grid>
                    <Grid item xs={6}  >
                        <h1 style={{ margin: "30px 0px 30px 0px" }}>Sign up for Special Offers!</h1>
                        <Grid container>
                            <Grid item>
                                <FormControl className={classes.margin}>
                                    <InputLabel shrink htmlFor="Mail">
                                     </InputLabel>
                                </FormControl>

                            </Grid>


                            <Grid item alignItems="stretch" style={{ display: "flex" }}>
                                <StyledButton>
                                    <Button style={{ borderRadius: 100 }}
                                        variant="contained">
                                        Subscribe
                                </Button>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </LastContainer >

    )
}