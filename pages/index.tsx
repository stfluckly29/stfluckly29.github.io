import React from 'react';
import { Box } from '@chakra-ui/react';

import HistoryList from 'componentsV2/History/HistoryList';
import Hero from 'componentsV2/Hero';
import Layout from 'componentsV2/Layout';
import Project from 'componentsV2/Projects';
import { employmentHistory } from 'data';

const Home = () => {
  return (
    <Layout>
      <Box mt={['5rem', '5rem', '8rem', '8rem']} />
      <Hero />
      <Box mt={['6rem', '6rem', '12rem', '12rem']} />
      <HistoryList history={employmentHistory} />
      <Box mt={['6rem', '6rem', '12rem', '12rem']} />
      <Project />
      <Box mt={['3rem', '3rem', '6rem', '6rem']} />
    </Layout>
  );
};

export default Home;

