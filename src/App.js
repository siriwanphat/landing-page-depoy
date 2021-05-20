import './App.css';
import { HeaderBar } from './components/HeaderBar.tsx';
import React from 'react';
import styled from 'styled-components';
import Background from './images/background_image2.png';
import { Container, Button, Grid } from '@material-ui/core';
import { FirstSection } from './components/Firstsection.tsx'
import { NdSection } from './components/Ndsection'
import { Trdsection } from './components/Trdsection'
import { FourthSection } from './components/FourthSection'
import { Lastsection } from './components/Lastsection.tsx'

const HeaderScreen = styled.div`
  background-image:url(${Background});
  background-repeat: no-repeat;
  background-size:  cover;
  background-position: 50% 50%;
  width: 100%;
  height: 1080px;
`;

const BodyScreen = styled.div`
  background-color: #fff;
`;

const ScreenContainer = styled.div`
  background-color: #fff;
`;

const ScreenLast = styled.div`
  background-color: #000; 
`;

const App = () => {
  return (
    <ScreenContainer>
      <HeaderScreen>
        <Container>
          <HeaderBar />
          <FirstSection />
        </Container>
      </HeaderScreen>
      <BodyScreen>
        <Container>
          <NdSection />
          <FourthSection />
          <Trdsection />
        </Container>
      </BodyScreen>
      <ScreenLast>
        <Lastsection/>
      </ScreenLast>
    </ScreenContainer>
  );
}


export default App;
