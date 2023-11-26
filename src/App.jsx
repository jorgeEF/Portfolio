import React from 'react';
import { ChakraProvider, Box, Heading, Link as ChakraLink } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {ProjectsList} from './components/ProjectsList';

const projects = [
  { name: 'ToDO react', url: 'https://jorgeef.github.io/DEPLOY_AP-React_TP-Integrador_Grupo-N/' },
  { name: 'Project 2', url: 'https://example.com/project2' },
  // Agrega más proyectos según sea necesario
];

const Home = () => (
  <Box textAlign="center">
    <Heading as="h1" mb="4">
      My Portfolio
    </Heading>
    <ProjectsList projects={projects} />
  </Box>
);

const About = () => (
  <Box textAlign="center">
    <Heading as="h1" mb="4">
      Sobre mi
    </Heading>
    <p>Hola Soy Jorge y programo desde 2018</p>
  </Box>
);

export const App = () => (
  <ChakraProvider>
    <Router>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ display: 'inline', marginRight: '20px' }}>
            <ChakraLink as={Link} to="/" color="blue.500">
              Inicio
            </ChakraLink>
          </li>
          <li style={{ display: 'inline' }}>
            <ChakraLink as={Link} to="/about" color="blue.500">
              Acerca de...
            </ChakraLink>
          </li>
        </ul>
      </nav>

      {/* Use Routes to wrap the Route components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </ChakraProvider>
);