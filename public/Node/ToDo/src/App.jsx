import React, { useState, useEffect } from 'react';
import {  
  Box, Spacer, Heading, Text, Center, useToast, MenuButton, Menu, MenuList, MenuOptionGroup, MenuDivider, IconButton, Flex, 
  useColorMode, Divider, Accordion, AccordionButton, AccordionIcon, List, AccordionItem , 
  AccordionPanel, ListItem } from '@chakra-ui/react';
import {FaSun, FaMoon } from 'react-icons/fa'
import { HamburgerIcon } from '@chakra-ui/icons';
import { TaskList } from './Components/TaskList/TaskList';
import { TaskForm } from './Components/TaskForm/TaskForm';

export const App = () => {
  const [tasks, setTasks] = useState(() => {
    // Intenta obtener las tareas desde localStorage al cargar la aplicación
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [taskIdCounter, setTaskIdCounter] = useState(() => {
    const storedIdCounter = localStorage.getItem('taskIdCounter');
    return storedIdCounter ? parseInt(storedIdCounter, 10) : 1;
  });

  const [actionPerformed, setActionPerformed] = useState(false);
  const toast = useToast();

  // Guarda las tareas en localStorage cuando se actualiza el estado
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('taskIdCounter', taskIdCounter.toString());
    if (actionPerformed) {
      toast({
        title: 'Lista de tareas actualizada',
        description: 'Se ha actualizado la lista de tareas.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setActionPerformed(false);
    }
  }, [tasks, taskIdCounter, actionPerformed, toast]);

  const handleTaskCompleted = (taskId, isCompleted) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleAddTask = (taskName) => {
    const newTask = {
      id: taskIdCounter,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskIdCounter(taskIdCounter + 1);
    setActionPerformed(true);
  };

  //funcion para cambiar el estado de oscuro a claro
  const [oscuro, setOscuro] = useState(true)
  const cambiarModo =()=>{
    setOscuro(!oscuro);
  }

  return (
    <Center height="100vh">
      <Box p={4} mt={4} bg={oscuro ?"#31315b":"#ffffff"} borderRadius="md" color="white" minWidth="250px"  w={{ base: "80%", sm:"60%", md: "50%", lg: "30%" }} minH="500px">
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box>
            <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Menu'
                icon={<HamburgerIcon color={oscuro ?"#8e8fb5":"#31315b" } 
                fontSize="1.5rem" 
                />}
                _focus={{ bg: oscuro?"#31315b":"#ffffff"}}
                variant='outline'
                border='none'
                _hover={{ bg: oscuro?"#31315b":"#ffffff"}}
              />
              <MenuList width={{ base: "100%", sm:"70%", md: "14vw" }} bg={oscuro?'#4F5481': '#8e8fb5'} minW="250px">
                <MenuOptionGroup>
                  <Text onClick={cambiarModo}> <IconButton  isRound='true' icon={oscuro ? <FaSun /> : <FaMoon />}  color="#ffffff" bg={oscuro ?"#4f5481":"#8e8fb5"} _hover={{ bg:oscuro ?"#4f5481":"#8e8fb5" }}></IconButton>{oscuro?'Modo Oscuro':'Modo Claro'}</Text>
                </MenuOptionGroup>
                <MenuDivider bg={oscuro ?"#ffffff":"#31315b"}color={oscuro ?"#31315b":"#8e8fb5"}/>
                <MenuOptionGroup title='To Do List' w="100%">
                  <Accordion allowToggle w="250px">
                    <AccordionItem color="#31315b" bg="#ffffff" w={{ base: "248px", md: "14vw" }} minW="248px">  
                      <h2>
                        <AccordionButton color="#ffffff" bg={oscuro ?"#4f5481":"#8e8fb5"} _hover={oscuro?"#31315b":"#8e8fb5"}>
                          <Box as="span" flex='1' textAlign='left'>
                            El Proyecto
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}  minW="250px">
                      Crear una aplicación web utilizando React que permita gestionar una lista de tareas. La
                      aplicación deberá hacer uso de componentes funcionales, el hook useState para el manejo del
                      estado, el hook useEffect para realizar efectos secundarios, y eventos para interactuar con el
                      usuario.
                      </AccordionPanel>
                    </AccordionItem>                    
                  </Accordion>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Heading size="xs" color={oscuro?'#4F5481': '#cccede'} >MIS TAREAS</Heading>
        </Flex>
        <TaskForm onAddTask={handleAddTask} oscuro={oscuro} />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          onTaskCompleted={handleTaskCompleted}
          onDeleteTask={handleDeleteTask}
          oscuro={oscuro}
        />
      </Box>
    </Center>
  );
};
