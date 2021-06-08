import React, { useState } from "react";
import { ReactComponent as Logo } from '../svg/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from "styled-components";
import img from '../images/img1.png';
import {
    Button, Grid, Hidden, IconButton, Drawer,
    List, ListItem, ListItemText, Card, CardMedia
} from '@material-ui/core';

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

const DrawerContainer = styled.div`
    display: flex;
    ul{
        padding: 10px 20px;
    }
    span{
        padding: 5px 0px;
        text-align: center;
    }
`;


export const HeaderBar = () => {
    const [state, setstate] = useState(false);

    const onClick = () => {
        setstate(!state)
    }

    const RenderDrawer = () => {
        return (
            <Drawer
                variant="persistent"
                anchor="right"
                open={state}
            >
                <DrawerContainer>
                    <IconButton onClick={onClick}>
                        <ChevronRightIcon style={{ color: "#fff", width: 20, height: 20 }} />
                    </IconButton>
                    <List>
                        <ListItem button={true}>
                            <ListItemText primary={"About me"} />
                        </ListItem>
                        <ListItem button={true}>
                            <ListItemText primary={"Skill"} />
                        </ListItem>
                        <ListItem button={true}>
                            <ListItemText primary={"Portfolio"} />
                        </ListItem>
                        <ListItem button={true}>
                            <ListItemText primary={"Experience"} />
                        </ListItem>
                        <StyledButton>
                            <Button variant="contained">contact me</Button>
                        </StyledButton>
                    </List>
                </DrawerContainer>
            </Drawer>
        )
    }
    return (
        <HeaderBarContainer>
            <Grid container={true} justify="space-between" alignItems="center">
                <Grid item md={3}>
                    <Logo />
                </Grid>
                <Hidden smDown={true}>
                    <Grid item md={7}>
                        <div className="midButton">
                            <Button>About me</Button>
                            <Button>Skill</Button>
                            <Button>Portfolio</Button>
                            <Button>Experience</Button>
                        </div>
                    </Grid>
                    <Grid item md={2}>
                        <StyledButton>
                            <Button variant="contained">contact me</Button>
                        </StyledButton>
                    </Grid>
                </Hidden>

                <Hidden mdUp={true}>
                    <IconButton
                        edge="end"
                        onClick={onClick}

                    >
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>
                </Hidden>
            </Grid>
            <Hidden mdUp={true}>
                <RenderDrawer />
            </Hidden>
        </HeaderBarContainer>
    )
}