import { Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { FiShare } from 'react-icons/fi';

const LikeCommentShare = ({...props}) => {
  return (
    <Flex justify='space-between'>
      <HStack>
        <AiOutlineLike size={20} />
        <Text as='small'>{props?.likes?.length}</Text>
      </HStack>
      <HStack>
        <BiComment size={20} />
        <Text as='small'>{ props?.comments?.length}</Text>
      </HStack>
      <HStack>
        <FiShare size={20} />
        <Text as='small'>share</Text>
      </HStack>
    </Flex>
  );
};

export default LikeCommentShare;
