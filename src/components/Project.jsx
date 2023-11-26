import React from 'react';
import { Box, Heading, Link } from '@chakra-ui/react';

export const Project = ({ name, url }) => (
  <Box borderWidth="1px" borderRadius="lg" p="4" m="4" textAlign="center">
    <Heading as="h3" size="md" mb="2">
      {name}
    </Heading>
    <Link href={url} target="_blank" rel="noopener noreferrer" color="blue.500">
      View Project
    </Link>
  </Box>
);
