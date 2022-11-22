import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import styled from "styled-components"
import { FaWhatsapp } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import Input from './components/Input'
import Button from './components/Button'
import Icon from './components/Icon'

function MyApp() {
  const WhatsappBackground = "linear-gradient(to right, #25D366 0%, 	#075E54 100%)"
  const GmailBackground = "linear-gradient(to right, #5e5e5e 0%, 	#5e5e5e 100%)"
  return (
    <MainContainer>
      <Bienvenido>Bienvenido</Bienvenido>
      <InputContainer>
      <Input type="text" placeholder="Rut"/>
      </InputContainer>
      <ButtonContainer>
        <Button content="Iniciar sesión"/>
      </ButtonContainer>
      <LoginWidth>Contactenos</LoginWidth>
      <HorizontalRule/>
      <IconsContainer>
        <Icon color={WhatsappBackground}>
          <FaWhatsapp />
        </Icon>
        <Icon color={GmailBackground}>
          <FiMail />
        </Icon>
      </IconsContainer>
      <ForgotPassword>¿Alguna duda?</ForgotPassword>
    </MainContainer>
  )
}
const MainContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 80vh;
width: 30vw;
background: rgba(255,255,255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31,38,135,0.037);
backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #ffffff;
text-transform: uppercase;
letter-spacing: 0.4rem;

`;

const Bienvenido = styled.h2`
margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20%;
width: 100%;
`;

const ButtonContainer = styled.div`
margin: 1rem 0 2rem 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center
`;


const LoginWidth = styled.h5`
cursor: pointer;
`;

const HorizontalRule = styled.hr`
width: 90%;
height: 0.3rem;
border-radius: 0.8rem;
border: none;
margin: 1.5em 0 1rem 0;
background: linear-gradient(to right, #14163c 0%, #03217b 79%);
backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
display: flex;
justify-content: space-evenly;
margin: 2rem 0 3rem 0;
width: 80%;
`;

const ForgotPassword = styled.h4`
cursor: pointer;
`;

export default MyApp
