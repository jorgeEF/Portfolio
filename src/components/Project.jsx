import React from 'react';
import { Box, Heading, Link } from '@chakra-ui/react';

export const Project = ({ name, url, bgcolor }) => (
  <Box borderWidth="1px" borderColor="gray" borderRadius="lg" p="4" m="4" textAlign="center" bgColor={bgcolor} minW="25vw">
    <Heading as="h3" size="md" mb="2">
      {name}
    </Heading>
    <Link href={url} target="_blank" rel="noopener noreferrer" color="blue.500">
      Ver Proyecto
    </Link>
  </Box>
);
