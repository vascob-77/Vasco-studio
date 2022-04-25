import React from 'react';
import styled from "styled-components";
import MainVideo from '../assets/Walking Girl.mp4';

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

`

const DarkOverlay = styled.div`

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background:${props => `rgba(${props.theme.bodyRgba},0.6)`}
`

const Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color:${props => props.theme.text};
  
  div{
    display: flex;
    flex-direction: row;
  }
  
  h1{
    font-family: 'Kaushan Script';
    font-size: ${props => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
  }
  h2{
    font-family: 'Sirin Stencil'; 
    font-size: ${props => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`

const CoverVideo = () => {
    return (
        <VideoContainer>
            <DarkOverlay/>
            <Title>
                <div>
                    <h1 data-scroll data-scroll-delay='0.13' date-scroll-speed="4">V</h1>
                    <h1 data-scroll data-scroll-delay='0.09' date-scroll-speed="4">A</h1>
                    <h1 data-scroll data-scroll-delay='0.06' date-scroll-speed="4">S</h1>
                    <h1 data-scroll data-scroll-delay='0.04' date-scroll-speed="4">C</h1>
                    <h1 data-scroll data-scroll-delay='0.02' date-scroll-speed="4">O</h1>
                </div>
                <h2  data-scroll data-scroll-delay='0.04' date-scroll-speed="4">Inspire. Create. Belive</h2>
            </Title>
            <video src={MainVideo} type="video/mp4" autoPlay muted loop/>
        </VideoContainer>
    );
};

export default CoverVideo;