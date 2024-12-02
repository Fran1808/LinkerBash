import React, { useState } from 'react';
import { Center, Button, Modal, FormControl, Input } from 'native-base';
import { useNavigation } from '@react-navigation/native'; // Para navegación

const ModalRegistro= () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation(); // Hook de navegación

  return (
    <Center>
      <Button onPress={() => setShowModal(true)}>Registrarse</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Registrarse</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Nombre(s)</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Apellidos</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Correo electronico</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Nombre de usuario</FormControl.Label>
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
                Registrarme
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default ModalRegistro;
