import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import ProjectContainer from './ProjectContainer';

const Projects = () => {
  return (
    <>
      <Flex alignItems="center">
        <Heading fontSize={['20px', '20px', '24px', '30px']} fontWeight="bold" mr="45px">
          Projects
        </Heading>
      </Flex>
      <Flex
        mt="35px"
        alignItems="flex-start"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'column', 'row']}
        gap="1rem 1.5rem"
      >
        <ProjectContainer
          bgGradient="linear-gradient(45deg, yellow.300 0%, pink.100 100%);"
          title="Coinvise App - Frontend"
          link="https://github.com/stfluckly29/coinvise-frontend"
        >
          Decentralized Application built with
          <Text as="span" color="#fff" background="#000" p="3px" ml="4px">
            Next.js
          </Text>
          <Text as="span">, </Text>
          <Box>
            <Text as="span" color="#fff" background="#000" p="3px">
              Typescript
            </Text>
            <Text as="span">, </Text>
            and
            <Text as="span" color="#fff" background="#000" p="3px" ml="4px ">
              Ethers.js
            </Text>
            <Text as="span"> enables web3 creators to create and operate tokenized communities.</Text>
          </Box>
        </ProjectContainer>

        <ProjectContainer
          title="Patient Monitoring App - Frontend (Web & Mobile)"
          link="https://github.com/stfluckly29/ge-patient-monitor"
          bgGradient="linear-gradient(160deg, yellow.300 0%, pink.100 100%);"
        >
          Healthcare Applications built with
          <Text as="span" color="#fff" background="#000" p="3px" ml="4px">
            React.js
          </Text>
          <Text as="span">, </Text>
          and
          <Text as="span" color="#fff" background="#000" p="3px" ml="4px">
            React Native
          </Text>
          <Text as="span"> provide users with the insights they need to better identify, predict, and treat patients' needs across the continuum of care.</Text>
        </ProjectContainer>

        <ProjectContainer
          bgGradient="linear-gradient(45deg, pink.100 0%, yellow.300 100%);"
          title="Rover App - Frontend"
          link="https://github.com/stfluckly29/rover"
        >
          Online marketplace built with
          <Text as="span" color="#fff" background="#000" p="3px" ml="4px">
            React.js
          </Text>
          <Text as="span">, </Text>
          and
          <Text as="span" color="#fff" background="#000" p="3px" ml="4px">
            React Native
          </Text>
          <Text as="span"> enables people to buy and sell pet care services including pet sitting, dog boarding, and dog walking.</Text>
        </ProjectContainer>
      </Flex>
    </>
  );
};

export default Projects;
