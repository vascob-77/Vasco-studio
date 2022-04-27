import React from "react";
import styled from "styled-components";

import Logo from "../assets/Svgs/star_white_48dp.svg";
export const Footer = () => {
  const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    margin: 5rem auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};

    position: relative;
  `;

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
        font-size: ${props => props.theme.fontxl};
        font-family:'Kaushan Script';
    }
  `

  const FooterComponent = styled.footer`
    width: 80vw;
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
    }
  `
  return (
    <Section>
      <LogoContainer>
        <img src={Logo} alt="logo Vasco" />
        <h3>Vasco Website</h3>
      </LogoContainer>
      <FooterComponent>
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>New Arrivals</li>
              <li>Reviews</li>
          </ul>
      </FooterComponent>
    </Section>
  );
};
