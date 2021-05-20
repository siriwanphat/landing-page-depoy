import React, { useState } from "react";
import { ReactComponent as Logo } from '../svg/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from "styled-components";
import img from '../images/img1.png';
import {
    Button, Grid, Hidden, IconButton, Drawer,
    List, ListItem, ListItemText, Card, CardMedia, Container
} from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FourthContainer = styled.div`
    text-align: center;

    h3{
        font-size: 28px;
        color: #8F8F8F;
        margin: 10px 0px;
    }
    h1{
        font-size: 60px;
        color:#3B3A3A;
        margin: 0px 0px 15px 0px;
    }
    p{
        font-size: 14px;
        color:#8F8F8F;
        margin: 0px;
    }
    li.dot.selected{
        background-color:#FF6057 !important;
    }
    li.dot{
        box-shadow:none !important;
        background:#8F8F8F !important;
    }
`;


export const FourthSection = () => {
    return (
        <FourthContainer>
            <Container>
                <Grid container direction="column" justify="center" alignItems="center">
                    <h3>Advanced Customer Service Platform</h3>
                    <h1>Platform Overview</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt  </p>
                    <p>ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo </p>
                    <p>dolores et ea rebum.</p>
                    <p> Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>

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
            </Container>
        </FourthContainer >
    )
}