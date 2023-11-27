import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import {Project} from './Project';

export const ProjectsList = ({ projects }) => (
  <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing="4">
    {projects.map((project, index) => (
      <Project key={index} {...project} bgcolor={project.bgcolor}/>
    ))}
  </SimpleGrid>
);
