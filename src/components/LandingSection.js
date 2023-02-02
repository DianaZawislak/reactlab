import React from "react";
import { Avatar, Box, Heading, VStack, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "../images/generic-avatar.png";
import logo from "../images/react.svg";

const greeting = "Hello, I am Diana!";
const bio1 = "A frontend developer";
const bio2 = "Specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    bgGradient='linear(to-r, #B0B0B0, #B0B0B0, #989898 20%, #808080, #989898 80%, #B0B0B0, #B0B0B0)'
  >

    <VStack mb="20" id="home-section">
      <Avatar size='2xl' src={avatar}/>
      <Text fontSize='3xl' as='b' color='#000078'>{greeting}</Text>
      <Heading as='h1' size='3xl' color='#D0D0D0' noOfLines={1}>{bio1}</Heading>
      <Heading as='h2' size='3xl' color='#D0D0D0' noOfLines={1}>{bio2}</Heading>
     
       
  </VStack>
  <Image boxSize='300px' src={logo} alt='React' />   


  </FullScreenSection>



);

export default LandingSection;
