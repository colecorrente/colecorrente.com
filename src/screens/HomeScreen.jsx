import React, { useState, useEffect } from 'react';
import { keyframes, css } from '@emotion/core';
import styled from '@emotion/styled';
import { fadeIn, slideInDown } from 'react-animations';
import {
  FaGithub, FaLinkedin, FaInstagram, FaFileAlt, FaTimes,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import COLEpng from '../img/COLE.png';
import resume from '../files/resume.pdf';
import ScrollArrows from '../components/ScrollArrows';
import ColorPicker from '../components/ColorPicker';

const colors = ['#f87d84', '#bf212d', '#E5692C', '#037d84', '#77949c', '#7DB9F8', '#B57DF8', '#7DF886', '#47E594', '#2cc457'];

const fadeInAnim = keyframes`${fadeIn}`;
const slideInDownAnim = keyframes`${slideInDown}`;
const bgShrink = keyframes`
  0% {
    background-size: 150%;
  }
  100% {
    background-size: 50%;
  }
`;

const ColoredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;

  z-index: -1;

  /* background-attachment: fixed; // SHOULD BACKGROUND SCROLL OR NOT
  background-position: center;
  background-repeat: repeat-y;
  background-size: 100%; */

  animation: 1.5s ${fadeInAnim} ease-in-out;
`;

const COLEBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: -1;

  background-image: url(${COLEpng});
  background-attachment: fixed; // SHOULD BACKGROUND SCROLL OR NOT
  background-position: center;
  background-repeat: repeat-y;
  background-size: 50%;

  animation: 1.1s ${bgShrink} cubic-bezier(0.15, .6, 0.28, 0.99);
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #00000000;
  z-index: 1;
  scroll-behavior: smooth;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto; //100vh;

  padding: 36px 18vw;
  @media (max-width: 800px){
    padding: 12px 6vw;
  } 

  h1 {
    padding-bottom: 20px;
  }
`;

// const SectionDivider = styled.div`
//   width: 100vw;
//   height: 2vh;
// `;

const Footer = styled(Section)`
  background-color: ${(props) => props.backgroundColor};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top:0;
  left:0;
  padding: 8px;

  /* background: linear-gradient(to bottom, #00000030 0%, #00000030 100%); */
  background-attachment: fixed; // SHOULD BACKGROUND SCROLL OR NOT
  background-position: center;
  background-size: 200%; 

  animation: 1s ${slideInDownAnim} ease-out;
`;

const VerticalLinks = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const HorizonalLinks = styled.div`
  display: flex;
  align-items: flex-start;

  flex-direction: row;
  @media (max-width: 800px){
    flex-direction: column;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin: 4px 0px;
  background-color: #00000030;
`;

const IconWithText = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  flex-direction: row;
  p {
    font-weight: bold;
    color: white;
  }

  :hover {
    * {
      color: black;
    }
  }

  :active {
    * {
      color: #00000040;
    }
  } 

  @media (max-width: 800px){
    flex-direction: column;
    p {
      font-size: 9px;
    }
  }
`;

const iconLinkStyle = css`
  width: 28px;
  height: auto;
  margin: 8px;
  color: white;
  cursor: pointer;
  :hover {
    color: black;
  }
  :active {
    color: #00000040;
  }
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px){
    flex-direction: column;
  } 
`;

const FormColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: ${(props) => props.borderColor};
  border-radius: 12px; */

  @media (min-width: 800px){
    :not(:first-child){
      padding-left: 6px;
    }
    :not(:last-child){
      padding-right: 6px;
    }
  }

  @media (max-width: 800px){
    padding-bottom: 12px;
  }

  input, textarea, button {
    width: 100%;
    padding: 14px;
    border: 1px solid #00000080;
    border-radius: 4px;
    outline: 0;
    background-color: white;
    :focus {
      border: 1px solid ${(props) => props.borderColor};
      box-shadow: 0px 0px 2px ${(props) => props.borderColor};
    }
  }

  label {
    flex: 1;
    display: flex; 
    flex-direction: column;

    :not(:last-child){
      padding-bottom: 14px;
    }
  }

  textarea {
    flex: 1;
    resize: none;
  }

  p {
    font-size: 0.8em;
    font-style: italic;
  }

`;

const Home = (props) => {
  const [backgroundColor, setBackgroundColor] = useState(colors[Math.floor(Math.random() * colors.length)]);
  const [scrollAmount, setScrollAmount] = useState(window.pageYOffset);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [verticalLinks] = useState(React.createRef());

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);

    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  }, []);

  const listenToScroll = () => {
    setScrollAmount(window.pageYOffset);
  };

  const scrollToId = (id) => {
    if (!isResumeOpen) {
      window.scrollTo({
        top: document.getElementById(id).offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const togglePDF = () => {
    if (window.innerWidth < 500) {
      window.open(resume);
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (isResumeOpen) {
      // enable scrolling
      document.body.style.overflow = 'auto';
    } else {
      // disable scrolling
      document.body.style.overflow = 'hidden';
    }
    setIsResumeOpen(!isResumeOpen);
  };

  return (
    <Container>
      <ColoredContainer css={{ background: `linear-gradient(to bottom, ${backgroundColor} 0%, white 100%);` }}>
        <TopBar>
          <VerticalLinks ref={verticalLinks}>
            <HorizonalLinks>
              <a href="http://www.github.com/colecorrente" target="_blank" rel="noopener noreferrer">
                <FaGithub css={iconLinkStyle} />
              </a>
              <a href="http://www.linkedin.com/in/nicholascorrente" target="_blank" rel="noopener noreferrer">
                <FaLinkedin css={iconLinkStyle} />
              </a>
              <a href="http://www.instagram.com/colecorrente" target="_blank" rel="noopener noreferrer">
                <FaInstagram css={iconLinkStyle} />
              </a>
            </HorizonalLinks>
            <Divider />
            <IconWithText onClick={() => { togglePDF(); }}>
              {isResumeOpen ? (
                <FaTimes css={[iconLinkStyle, { color: 'black' }]} />
              ) : (
                <FaFileAlt css={iconLinkStyle} />
              )}
              <p>{isResumeOpen ? 'Close' : 'Resume'}</p>
            </IconWithText>
            <Divider />
            {/* <a href="#about">
              <IconWithText>
                <MdPerson css={iconLinkStyle} />
                <p>About</p>
              </IconWithText>
            </a> */}
            <a href="#contact">
              <IconWithText>
                <MdEmail css={iconLinkStyle} />
                <p>Contact</p>
              </IconWithText>
            </a>
          </VerticalLinks>
          <ColorPicker
            iconCss={iconLinkStyle}
            value={backgroundColor}
            onChange={(e) => { setBackgroundColor(e.nativeEvent.target.value); }}
          />
        </TopBar>
        {!isResumeOpen && (<ScrollArrows onClick={() => { scrollToId('contact'); }} color={backgroundColor} />)}
        <COLEBackground css={{ backgroundSize: `${(scrollAmount + 2500) / 50}%` }} />
      </ColoredContainer>
      {/* <Section id="about">
        <h1>About Me</h1>
      </Section>
      <SectionDivider css={{ backgroundColor }} /> */}
      <Section id="contact">
        <h1>Contact Me</h1>
        <Form action="https://formspree.io/colecorrente@gmail.com" method="POST">
          <FormColumn borderColor={backgroundColor}>
            <input type="hidden" name="_next" value="https://colecorrente.com" />
            <label htmlFor="name">Name
              <input id="name" type="text" name="name" required />
            </label>
            <label htmlFor="email">E-Mail:
              <input id="email" type="text" name="_replyto" required />
            </label>
            <label htmlFor="subject">Subject:
              <input id="subject" type="text" name="_subject" required />
            </label>
          </FormColumn>
          <FormColumn borderColor={backgroundColor}>
            <label htmlFor="subject">Message:
              <textarea type="text" name="_subject" required />
            </label>
            <div css={{ width: '100%', marginTop: 'auto' }}>
              <p>all fields required</p>
              <button type="submit" value="Send">Submit</button>
            </div>
          </FormColumn>
        </Form>
      </Section>
      <Footer backgroundColor={backgroundColor}>
        <HorizonalLinks>
          <a href="http://www.github.com/colecorrente" target="_blank" rel="noopener noreferrer">
            <FaGithub css={iconLinkStyle} />
          </a>
          <a href="http://www.linkedin.com/in/nicholascorrente" target="_blank" rel="noopener noreferrer">
            <FaLinkedin css={iconLinkStyle} />
          </a>
          <a href="http://www.instagram.com/colecorrente" target="_blank" rel="noopener noreferrer">
            <FaInstagram css={iconLinkStyle} />
          </a>
        </HorizonalLinks>
        <div css={{ color: 'white', textAlign: 'right' }}>
          <p>designed and coded by cole corrente</p>
          <p>© copyright 2020</p>
        </div>
      </Footer>
      <object
        css={css`
          position: fixed;
          left: ${isResumeOpen ? `${verticalLinks.current.offsetWidth + 20}px` : '100vw'};
          right: 0;
          top: 0;
          bottom: 0;
          width: ${verticalLinks.current ? `${window.innerWidth - verticalLinks.current.offsetWidth}px` : '90vw'};
          height: 100%;
          transition: left 0.5s ease-in-out;
        `}
        aria-label="resume"
        id="resume-pdf"
        data={`${resume}#view=FitH&scrollbar=0&toolbar=0&statusbar=0&messages=0&navpanes=0`}
        type="application/pdf"
      />
    </Container>
  );
};


export default Home;
