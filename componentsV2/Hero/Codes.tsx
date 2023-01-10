import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { BlinkContainer } from './BlinkContainer';

const Codes = () => {
  return (
    <>
      <Flex>
        <Text color="yellow.400" mr="8px">
          const
        </Text>
        <Text mr="8px"> profile = </Text> <Text> {' {'} </Text>
      </Flex>
      <Flex ml={['2rem', '2rem', '4rem', '4rem']}>
        <Text mr="5px">firstname: </Text> &#39;
        <Text color="codeColor">Stefan</Text>
        &#39; ,
      </Flex>
      <Flex ml={['2rem', '2rem', '4rem', '4rem']}>
        <Text mr="5px">lastname: </Text> &#39;
        <Text color="codeColor">Klein</Text>
        &#39; ,
      </Flex>
      <Flex ml={['2rem', '2rem', '4rem', '4rem']}>
        <Text mr="5px">location: </Text> &#39;
        <Text color="codeColor">Belgrade/Serbia</Text>
        &#39;,
      </Flex>
      <Flex ml={['2rem', '2rem', '4rem', '4rem']}>
        <Text mr="5px">majors: </Text> <Text>{'['} </Text>
      </Flex>
      <Flex ml={['4rem', '4rem', '6rem', '6rem']}>
        &#39;<Text color="codeColor">React.js</Text>&#39;
      </Flex>
      <Flex ml={['4rem', '4rem', '6rem', '6rem']}>
        &#39;<Text color="codeColor">Node.js</Text>&#39;
      </Flex>
      <Flex ml={['4rem', '4rem', '6rem', '6rem']}>
        &#39;<Text color="codeColor">Web3</Text>&#39;
      </Flex>
      <Flex>
        <Text ml={['2rem', '2rem', '4rem', '4rem']}>{']'}</Text>
      </Flex>
      <Flex>
        <Text>{'};'}</Text>
        <BlinkContainer />
      </Flex>
    </>
  );
};

export default Codes;
