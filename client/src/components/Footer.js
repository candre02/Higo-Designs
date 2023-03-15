import React from 'react';
import {
  Box,
  chakra,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';


function SocialButton(props) {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={props.href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{props.label}</VisuallyHidden>
      {props.children}
    </chakra.button>
  );
};


export default function Footer() {
  return (
    <Box
    id='contact1'
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        
        <Heading 
        fontSize={{ base:'med'}}>
          Contact Us:</Heading>
        <Text>higodesigns@gmail.com</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/higodesigns/'} >
            <FaInstagram />
          </SocialButton>
        </Stack>
        <Text>© 2023 HigoDesigns,Inc. All rights reserved.</Text>
      </Container>
    </Box>
  );
}