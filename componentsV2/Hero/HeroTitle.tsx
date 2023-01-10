import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

const HeroSectionTitle = () => {
  return (
    <Flex flexDirection="column" lineHeight="1.1" color="#000" mt={['0', '0', '2rem', '2rem']}
      width={['300px', '400px', '500px', '720px']}>
      <Text fontWeight="bold" fontSize={['16px', '16px', '18px', '21px']}>
        - Hey, there! I'm
      </Text>

      <Text
        mt="1.3rem"
        fontSize={['21px', '21px', '28px', '52px']}
        lineHeight="1.5"
        fontWeight="bold"
      >
        Stefan Klein
      </Text>
      <Text
        mt="1.3rem"
        fontSize={['14px', '14px', '18px', '21px']}
        lineHeight="1.5"
        fontWeight="medium"
      >
        Frontend Engineer | full-stack developer | web3 developer | github addict | blockchain enthusiast, based in Serbia
      </Text>
      <Button
        width={['300px', '400px', '400px', '233px']}
        mt={['50px', '50px', '110px', '110px']}
        mb={['50px', '50px', '50px', '0']}
        bgColor="black"
        color="#fff"
        px="55px"
        py="30px"
        fontWeight="bold"
        fontSize="16px"
        boxShadow="6px 6px #8080805e"
        _hover={{
          backgroundColor: 'black',
        }}
        _active={{
          backgroundColor: 'black',
        }}
      >
        Resume
      </Button>
    </Flex>
  );
};

export default HeroSectionTitle;
