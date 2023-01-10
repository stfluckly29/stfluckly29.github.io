import { Heading, Text, Flex, Box } from '@chakra-ui/react';

import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import Layout from 'componentsV2/Layout';

const url = 'https://stfluckly29.github.io/about';
const title = 'About Me – Stefan Klein';

const CustomText = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      fontSize="18px"
      lineHeight="1.7"
      css={{
        wordSpacing: '1.2px',
        letterSpacing: '0.1px',
      }}
      fontWeight={500}
    >
      {children}
    </Box>
  );
};
const About = () => {
  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      <Layout>
        <Flex
          justifyContent="center"
          alignItems="center"
          margin="5rem 0"
          flexDirection="column"
          color="gray.800"
        >
          <Heading
            as="h1"
            fontSize={['2rem', '2rem', '3rem', '3rem']}
            marginBottom="1rem"
            fontWeight="bold"
            lineHeight="1.4"
          >
            About me
          </Heading>
          <Flex
            padding={['1rem', '2rem', '2rem', '2rem']}
            marginTop="1.3rem"
            d="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            w={['100%', '90%', '75%', '75%']}
            flexWrap="wrap"
            gap="1rem"
          >
            <CustomText>
              Hi! I'm Stefan Klein. I currently work as a Frontend Engineer with full-stack experience.
              I taught myself how to make websites first as a hobby and later as a
              professional programmer. I love technology and exploring different areas of technology.
              I have extensive experienced in frontend and full stack web development using
              React, Next & Node, Python/Django and app development using React Native. Also I am a web3
              developer and fan of smart contracts and would love to work with someone having a passion for cutting-edge
              product development.
              <Heading fontSize="1.3rem" mt="3rem" mb="1rem">
                Get in touch
              </Heading>
              I hope you love the site, and if there's anything you want to talk about with me feel
              free to drop me a line by email. I'm happy to hear your comments, feedback,
              suggestions, or just say hi!
              <em>(Emails regarding ads, sponsored posts, link-sharing, etc. will be ignored.)</em>
            </CustomText>
            <Flex gap="2rem" mt="1rem">
              <Box>
                📧 &nbsp; <strong>Github:</strong> {''}
                <Text
                  as="a"
                  href="https://github.com/stfluckly29"
                  backgroundColor="#000"
                  color="#fff"
                  p="0.2rem"
                >
                  @stfluckly29
                </Text>
              </Box>
              <Box>
                🐙 &nbsp; <strong>Email:</strong> {''}
                <Text
                  as="a"
                  href="mailto:stefanklein1130@gmail.com"
                  backgroundColor="#000"
                  color="#fff"
                  p="0.2rem"
                >
                  @stefanklein1130
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Box mt={['3rem', '3rem', '6rem', '6rem']} />
      </Layout>
    </>
  );
};

export default About;
