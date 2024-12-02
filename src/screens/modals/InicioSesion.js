import React, { useState } from 'react';
import { Center, Button, Modal, FormControl, Input } from 'native-base';
import { useNavigation } from '@react-navigation/native'; // Para navegación

const ModalInicio = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation(); // Hook de navegación

  return (
    <Center>
      <Button onPress={() => setShowModal(true)}>Iniciar Sesion</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Iniciar Sesion</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Usuario</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => setShowModal(false)}>
                Cancelar
              </Button>
              <Button 
                onPress={() => {
                  setShowModal(false); // Cierra el modal
                  navigation.navigate('Inicio'); // Navega a la pantalla "Inicio"
                }}
              >
                Acceder
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default ModalInicio;
