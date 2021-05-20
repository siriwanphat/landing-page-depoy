import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },
    }),
);

function getSteps() {
    return ['Market Research', 'Market Research', 'Market Research'];
}

function getStepContent() {
    return ['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.']
}



const FontStyleSmall = styled.h3`
  font-size : 14px;
  font-weight: lighter;
  color: #3B3A3A;
  margin: 10px 0px;
`;

const FontStyleSmallBlack = styled.h3`
  font-size : 14px;
  font-weight: bolder;
  color: #3B3A3A;
  margin: 10px 0px;
`;

const FontStyleBigRed = styled.h1`
  font-size : 48px;
  font-weight: bolder;
  color: #FF6057;
  margin: 10px 0px;
  align-items: center;
  display: flex;
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

const HeaderBarContainer = styled.div`
  .MuiButton-root{
      color :#fff;
      font-weight: 600;
  }
  .midButton button{
    padding: 10px 20px;
  }
  .MuiIconButton-root{
    background: linear-gradient(to right, #FF6057, #7C1C80);
    width: 40px;
    height: 40px;
    margin: 20px;
  }
`;

const StyledButton = styled.div`
    .MuiButton-root{
        background: linear-gradient(to right, #FF6057, #7C1C80);
        padding: 5px 40px;
    }
`;

const FourthContainer = styled.div`
    li.dot.selected{
        background-color:#FF6057 !important;
    }
    li.dot{
        box-shadow:none !important;
        background:#8F8F8F !important;
    }
`;
export const Trdsection = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <div className={classes.root} style={{ margin: "100px 0px 100px 0px" }}>
            <Grid container
                spacing={1}
                direction="row"
                justify="space-between"
                alignItems="flex-start"
            //style={{ margin: "100px 0px 100px 0px" }} 
            >
                <Grid item xs={12} sm={6}>
                    <StyledLine />
                    <FontStyleMiddle style={{ paddingTop: 10, paddingRight: 150 }}>The best business solution for you</FontStyleMiddle>
                    <FontStyleSmall style={{ paddingTop: 30, paddingRight: 100, paddingBottom: 20 }}>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus
                        est Lorem ipsum dolor sit amet</FontStyleSmall>
                    <HeaderBarContainer>
                        <StyledButton>
                            <Button variant="contained">About us</Button>
                        </StyledButton>
                    </HeaderBarContainer>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <Typography>{getStepContent()}</Typography>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Grid>
            </Grid>

            <div style={{ margin: "100px 0px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "100px 0px" }}>
                    <FontStyleMiddle>Don't Just Take</FontStyleMiddle>
                    <FontStyleMiddle>our Word for it!</FontStyleMiddle>
                </div>
                <Grid container>
                    <Grid item xs={3}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <FontStyleBigRed>570</FontStyleBigRed>
                            <FontStyleSmallBlack>Dowload</FontStyleSmallBlack>

                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <FontStyleBigRed>570</FontStyleBigRed>
                            <FontStyleSmallBlack>Active User</FontStyleSmallBlack>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <FontStyleBigRed>570</FontStyleBigRed>
                            <FontStyleSmallBlack>Positive Feedback</FontStyleSmallBlack>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <FontStyleBigRed>570</FontStyleBigRed>
                            <FontStyleSmallBlack>+ rating </FontStyleSmallBlack>
                        </div>

                    </Grid>
                </Grid>

            </div>



            <FourthContainer>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12} sm={12} md={6}>
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            showArrows={false}
                        >
                            <div>
                                <img src="/images/1.png" />
                            </div>
                            <div>
                                <img src="/images/1.png" />
                            </div>
                            <div>
                                <img src="/images/1.png" />
                            </div>
                        </Carousel>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div style={{margin:"100px 0px"}}>
                            <StyledLine />
                            <FontStyleMiddle style={{ paddingTop: 10, paddingRight: 150 }}>The best business solution for you</FontStyleMiddle>
                            <FontStyleSmall style={{ paddingTop: 30, paddingRight: 100, paddingBottom: 20 }}>
                                Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus
                        est Lorem ipsum dolor sit amet</FontStyleSmall>
                            <HeaderBarContainer>
                                <StyledButton>
                                    <Button variant="contained">About us</Button>
                                </StyledButton>
                            </HeaderBarContainer>
                        </div>

                    </Grid>
                </Grid>
            </FourthContainer>
        </div>
    )
}