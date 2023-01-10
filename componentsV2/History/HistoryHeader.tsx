import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const HistoryHeader = () => {
  return (
    <Flex alignItems="center">
      <Heading fontSize={['20px', '20px', '24px', '30px']} fontWeight="bold" mr="45px">
        Employment History
      </Heading>
    </Flex>
  );
};

export default HistoryHeader;
