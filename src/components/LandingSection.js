import React from "react";
import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "../images/generic-avatar.png";

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
    bgGradient='linear(to-r, #C0C0C0, blue.400, #C0C0C0)'
  >
  <VStack>
    <VStack mb="8">
      <Avatar size='2xl' src={avatar}/>
      <profile size='60'>{greeting}</profile>
    </VStack>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
  </VStack>

  </FullScreenSection>



);

export default LandingSection;
