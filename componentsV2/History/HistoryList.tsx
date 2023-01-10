import React from 'react';
import { Flex } from '@chakra-ui/react';

import HistoryHeader from './HistoryHeader';
import HistoryItem from './HistoryItem';
import type { StaticHistory } from 'global';

type Props = {
  history: StaticHistory[];
};

const HistoryList = ({ history }: Props) => {
  return (
    <Flex flexDirection="column" as="section" color='gray.800'>
      <HistoryHeader />
      {history.map((item, index) => (
        <HistoryItem key={`employment-history-${index}`} {...item} />
      ))}
    </Flex>
  );
};

export default HistoryList;
