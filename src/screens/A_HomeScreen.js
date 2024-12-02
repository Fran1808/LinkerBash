import React from 'react';
import { NativeBaseProvider, Box, Text, HStack, StatusBar, Center } from 'native-base';
import ModalInicio from './modals/InicioSesion';
import ModalRegistro from './modals/Registro';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} safeArea>
        <HStack flex={1}>
          <Box flex={1} bg="rgba(127, 255, 212, 0.5)" justifyContent="flex-start" alignItems="center" p={4}>
            <Text fontSize="xl" mt={5}>LinkerBash</Text>
            <Center flex={1}><ModalInicio /> <ModalRegistro /></Center>
          </Box>
        </HStack>
        <StatusBar barStyle="auto" />
      </Box>
    </NativeBaseProvider>
  );
}
