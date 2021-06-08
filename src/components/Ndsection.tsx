import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import { ReactComponent as Red } from '../svg/redIcon.svg';
import { ReactComponent as Blue } from '../svg/blueIcon.svg';
import { ReactComponent as Green } from '../svg/greenIcon.svg';
import { ReactComponent as Purple } from '../svg/purpleIcon.svg';
import Box from '@material-ui/core/Box';
import { IconButton } from "@material-ui/core";
import img from '../images/img.png';

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

const Container = styled.div`
    margin: 40px 0px;
    .Padding{
        padding-bottom: 50px;
    }
`;

const StyledLine = styled.div`
    border-radius: 100;
    border-color: #FF6057;
    background-color: #FF6057;
    height: 3px;
    width: 10%;
`;

const FontStyleMiddle = styled.h2`
  font-size : 38px;
  font-weight: bold;
  color: #3B3A3A;
  margin: 0px;
`;

const FontStyleSmall = styled.h3`
  font-size : 14px;
  font-weight: lighter;
  color: #3B3A3A;
  margin: 10px 0px;
`;

const FontStyleSmallRed = styled.h3`
  font-size : 14px;
  font-weight: bolder;
  color: #FF6057;
  margin: 0px;
`;

const FontStyleSmallBlack = styled.h3`
  font-size : 14px;
  font-weight: bolder;
  color: #3B3A3A;
  margin: 10px 0px;
`;

const StyledLineSmall = styled.div`
    border-radius: 100;
    border-color: #FF6057;
    background-color: #FF6057;
    height: 2px;
    width: 25%;
`;

export const NdSection = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6} md={6} className="Padding">
                    <StyledLine />
                    <FontStyleMiddle style={{ paddingTop: 10, paddingRight: 150 }}>The best business solution for you</FontStyleMiddle>
                    <FontStyleSmall style={{ paddingTop: 30, paddingRight: 100, paddingBottom: 20 }}>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus
                        est Lorem ipsum dolor sit amet</FontStyleSmall>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <FontStyleSmallRed style={{ paddingRight: 30 }}>Learn About Our Success</FontStyleSmallRed>
                        <Arrow />
                    </div>

                </Grid>
                <Grid container direction="row" item xs={12} sm={6} md={6}>
                    <Grid xs={6} md={6}>
                        <IconButton
                            style={{ fontSize: "60px", backgroundColor: "#F1291E", padding: "24px" }}
                            disabled
                        >
                            <Red fill={"#fff"} />
                        </IconButton>
                        <FontStyleSmallBlack>Scale Your Activity</FontStyleSmallBlack>
                        <StyledLineSmall />
                        <FontStyleSmall>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</FontStyleSmall>
                        <IconButton
                            style={{ fontSize: "60px", backgroundColor: "#CB4BF8", padding: "24px" }}
                            disabled
                        > <Purple />
                        </IconButton>
                        <FontStyleSmallBlack>Scale Your Activity</FontStyleSmallBlack>
                        <StyledLineSmall />
                        <FontStyleSmall>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</FontStyleSmall>
                    </Grid>

                    <Grid xs={6} md={6}>
                        <IconButton
                            style={{ fontSize: "60px", backgroundColor: "#36C5AD", padding: "24px" }}
                            disabled
                        ><Blue />
                        </IconButton>
                        <FontStyleSmallBlack>Bootcamps</FontStyleSmallBlack>
                        <StyledLineSmall />
                        <FontStyleSmall>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</FontStyleSmall>
                        <IconButton
                            style={{ fontSize: "60px", backgroundColor: "#56E65B", padding: "24px" }}
                            disabled
                        >  <Green />
                        </IconButton>
                        <FontStyleSmallBlack>Bootcamps</FontStyleSmallBlack>
                        <StyledLineSmall />
                        <FontStyleSmall>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</FontStyleSmall>
                    </Grid>
                </Grid>

            </Grid>



            <Grid container alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box>
                        <img width={"100%"} height={"100%"}  src={img} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <StyledLine />
                    <FontStyleMiddle style={{ paddingTop: 20, }}>The best business solution for you</FontStyleMiddle>
                    <FontStyleSmall style={{ paddingTop: 30, paddingBottom: 20 }}>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus
                        est Lorem ipsum dolor sit amet
                    </FontStyleSmall>
                    <Grid container justify="flex-start"alignItems="center">
                        <FontStyleSmallRed style={{ paddingRight: 100 }}>Learn About Our Success</FontStyleSmallRed>
                        <Arrow />
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}