import React from "react";

import {
  Box,
  Heading,
  Container,
  Text,
  Stack
} from '@chakra-ui/react';

export default function About() {
  return (
    <>
     <Container maxW={'7xl'} id={'ab1'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
           Our Story
          </Heading>
          <Text color={'gray.500'}>
         Higo-Designs.....
          </Text>
        </Stack>
      </Container>
    </>
  );
}