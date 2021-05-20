import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { ReactComponent as Bench } from '../svg/bench.svg';
import { ReactComponent as Bumble } from '../svg/bumble.svg';
import { ReactComponent as Forbes } from '../svg/forbes.svg';
import { ReactComponent as Nearpod } from '../svg/nearpod.svg';
import { ReactComponent as Shopify } from '../svg/shopify.svg';
import { Button, Card, CardMedia } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import Popup from './images/nopath.png';

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
    }),
);

const useFont = makeStyles({
    root: {
        background: 'white',
        borderRadius: 10,
        border: 0,
        height: 45,
        padding: '0 40px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
});

const Take = styled.h1`
  font-size : 58px;
  font-weight: bold;
  color: #ffffff;
  margin: 0px;
`;

const Lorem = styled.h2`
  font-size : 18px;
  font-weight: lighter;
  color: #ffffff;
  margin: 0px;
`;

const Advance = styled.h3`
  font-size : 24px;
  font-weight: normal;
  color: #ffffff;
  margin: 0px;
`;

const photoStyle = {
    borderRadius: 10,
    backgroundImage: "url('Popup.png')",
};

const StyledButton = styled.div`
    .MuiButton-root{
        background: #ffffff;
        padding: 5px 40px;
    }
    padding-top: 20px;
`;

export const FirstSection = () => {
    const classes = useStyles();
    const classfont = useFont();

    return (
        <div className={classes.root} >
            <Grid container spacing={0} justify="center" alignItems="center" style={{ margin: "100px 0px"}}> 
                <Grid item xs={12} sm={6} >
                    <Advance > Advanced Platform </Advance>
                    <Take style={{paddingRight:150}}>Take your team to the next level</Take>
                    <Lorem style={{paddingTop:10,paddingRight:150}}>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscingelitr,
                        sed diam nonumy eirmod</Lorem>
                    <StyledButton>
                        <Button variant="contained">About us</Button>
                    </StyledButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box >
                        <img width={1000} height={700} src="/images/1.png" />
                    </Box>

                </Grid>
            </Grid>
            <Grid container spacing={1} justify="center">
                <Grid spacing={1} direction="column" justify="center" alignItems="center" >
                    <Bench /><Bumble /><Forbes /><Nearpod /><Shopify />
                </Grid>
            </Grid>
        </div >
    )
}