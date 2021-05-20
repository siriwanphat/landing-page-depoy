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
import { media } from '../utils/mixins'

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

const TopContainer = styled.div`
    .top{
        padding: 100px 0px 150px 0px;
        ${media.sm`
        padding: 100px 0px 50px 0px;
	`}
    }
    h1{
        font-size : 58px;
        font-weight: bold;
        color: #ffffff;
        margin: 0px 20px 0px 0px;
    }
`;


export const FirstSection = () => {
    const classes = useStyles();
    const classfont = useFont();

    return (
        <TopContainer>
            <Grid container justify="center" alignItems="center" className={"top"}>
                <Grid item xs={12} md={6} >
                    <Advance > Advanced Platform </Advance>
                    <h1>Take your team to <br /> the next level</h1>
                    <Lorem style={{ paddingTop: 10, paddingRight: 150 }}>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscingelitr,
                        sed diam nonumy eirmod</Lorem>
                    <StyledButton>
                        <Button variant="contained">About us</Button>
                    </StyledButton>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <img width={"100%"} height={"100%"} src="/images/1.png" />
                    </Box>
                </Grid>
            </Grid>

            <Grid container justify="center" alignItems="center">
                <Grid container justify="center" item xs={12} sm={4} md >
                    <Bench />
                </Grid>
                <Grid container justify="center" item xs={12} sm={4} md >
                    <Bumble />
                </Grid>
                <Grid container justify="center" item xs={12} sm={4} md >
                    <Forbes />
                </Grid>
                <Grid container justify="center" item xs={12} sm={6} md >
                    <Nearpod />
                </Grid>
                <Grid container justify="center" item xs={12} sm={6} md >
                    <Shopify />
                </Grid>

            </Grid>
        </TopContainer >
    )
}