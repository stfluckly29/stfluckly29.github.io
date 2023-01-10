import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import SkillTag from 'componentsV2/History/SkillTag';
import { StaticHistory } from 'global';

const HistoryItem = ({
  period,
  role,
  company,
  location,
  summary,
  link,
  achievements,
  skills,
}: StaticHistory) => {
  return (
    <Flex
      mt="35px"
      alignItems="flex-start"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
      gap="0 1.5rem"
    >
      <Flex flexDirection="column">
        <Text fontSize="12px" fontWeight="bold" letterSpacing="0.05px">
          {period}
        </Text>
        <Flex flexDirection="row">
          <Heading
            as="h3"
            fontSize={['17px', '17px', '18px', '21px']}
            fontWeight="bold"
            letterSpacing="0.05px"
            _hover={{
              textDecorationThickness: '3px',
              textUnderlineOffset: '2px',
              textDecoration: 'underline',
            }}
            my="0.3rem"
          >
            <Link href={link} passHref>
              <a target="_blank" rel="noopener noreferrer">{`${company}, ${location}`}</a>
            </Link>
          </Heading>
          <Heading
            as="h3"
            fontSize={['17px', '17px', '18px', '21px']}
            fontWeight="bold"
            letterSpacing="0.05px"
            my="0.3rem"
          >
            {`, ${role}`}
          </Heading>
        </Flex>
        <Flex>
          <Text fontSize={['13px', '13px', '15px', '15px']} fontStyle="italic">
            {summary}
          </Text>
        </Flex>
      </Flex>

      <Flex gap="1rem" mt="13px" flexWrap={['wrap', 'wrap', 'nowrap', 'nowrap']}>
        {skills.map((skill) => (
          <SkillTag
            key={skill}
            text={skill}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default HistoryItem;
