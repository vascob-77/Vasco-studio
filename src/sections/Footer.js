import React from "react";
import styled from "styled-components";
import {motion} from 'framer-motion';
import Logo from "../assets/Svgs/star_white_48dp.svg";
import { useLocomotiveScroll } from "react-locomotive-scroll";


const Section = styled.section`
min-height: 100vh;
width: 100vw;
margin-top: 5rem;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
overflow: hidden;
background-color: ${(props) => props.theme.body};
color: ${(props) => props.theme.text};

position: relative;
`

const LogoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width: 10vw;
    height: auto;
}

h3{
    font-size: ${props => props.theme.fontxxl};
    font-family:'Kaushan Script';

    @media (max-width:48em){
        font-size: ${props => props.theme.fontxl};
    }
}
`

const FooterComponent = styled(motion.footer)`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin:2rem;
    margin-top:4rem;
    padding:0 1rem;
    border-top:1px solid ${props => props.theme.text};
    border-bottom:1px solid ${props => props.theme.text};

    @media (max-width:64em){
        flex-direction: column;
        justify-content: center;
     
    }

    @media (max-width:48em){
        font-size: ${props => props.theme.fontmd};
    }
}

li{
    padding:2rem;
    font-size: ${props => props.theme.fontlg};
    text-transform: uppercase;
    cursor:pointer;
    transition: all .3s ease;

    &:hover{
        transform: scale(1.1);
    }

    @media (max-width:48em){
       padding:1rem;
       font-size: ${props => props.theme.fontmd};
    }
}
`


export const Footer = () => {
 
    const {scroll} = useLocomotiveScroll();

    const handleScroll = (id) => {
        let elem = document.querySelector(id);

        scroll.scrollTo(elem,{
            offset:'-100',
            duration:'2000',
            easing:[0.25,0.0,0.35,1.0],
        })
    }

  return (
    <Section>
      <LogoContainer>
        <img 
        data-Scroll data-scroll-speed="2"
        src={Logo} alt="logo Vasco" />
        <h3
            data-Scroll data-scroll-speed="-2"
        >Vasco Website</h3>
      </LogoContainer>
      <FooterComponent
        initial={{y:"-400px"}}
        whileInView={{y:0}}
        viewport={{once:false}}
        transition={{
            duration:1.5
        }}
      >
          <ul>
              <li onClick={() => handleScroll('#home')}>Home</li>
              <li onClick={() => handleScroll('.about')}>About</li>
              <li onClick={() => handleScroll('#shop')}>Shop</li>
              <li onClick={() => handleScroll('#new-arrival')}>New Arrivals</li>
            
          </ul>
       
      </FooterComponent>
    </Section>
  );
};
