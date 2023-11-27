import { Center, Heading } from '@chakra-ui/react';
import {ProjectsList} from './ProjectsList';
import {Projects} from '../../public/Projects.js'


export const Home = () => (
    <Center flexDir="column">
      <Heading as="h1" mb="4">
        Mis desarrollos
      </Heading>
      <ProjectsList projects={Projects} />
    </Center>
  );