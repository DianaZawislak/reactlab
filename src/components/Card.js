import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.


 return (
    <VStack align="left" bg="grey" color="white" p="3" borderRadius="12px">
      <Image src={imageSrc} alt={title} />
      <Heading size='lg'>{title}</Heading>
      <Text fontSize={20}>{description}</Text>
      <HStack align="center" justify="left">
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
    )
};


export default Card;
