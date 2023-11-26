import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import {Project} from './Project';

export const ProjectsList = ({ projects }) => (
  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="4">
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </SimpleGrid>
);
