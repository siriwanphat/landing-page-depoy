import './App.css';
import { HeaderBar } from './components/HeaderBar.tsx';
import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Background from './images/background_image2.png';

const Screen = styled.div`
  background-color: #ffffff;
  background-image:url(${Background});
  width: "100%";

`;

const App = () => {
  return (
    <Screen>
     <HeaderBar/>
    </Screen>
  );
}


export default App;
