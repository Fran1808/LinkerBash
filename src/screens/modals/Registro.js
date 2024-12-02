import React, { useState } from 'react';
import { Center, Button, Modal, FormControl, Input } from 'native-base';
import { useNavigation } from '@react-navigation/native'; // Para navegación

const ModalRegistro= () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation(); // Hook de navegación

  return (
    <Center>
      <Button
  onPress={() => setShowModal(true)}
  style={{
    backgroundColor: '#F20F7C', // Color de fondo rosa
    borderRadius: 0, // Sin bordes redondeados
    borderWidth: 5, // Borde ancho
    borderColor: 'black', // Borde negro
  }}
  _text={{
    color: 'black', // Color de texto negro
    fontSize: 24, // Tamaño de letra más grande
    fontFamily: 'Roboto', // Fuente similar a Roboto
    fontWeight: '800', // Estilo Extra Bold
  }}
>
  REGISTRARSE
</Button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" style={{ backgroundColor: '#FAFF00' }}>
          <Modal.CloseButton />
          <Modal.Header style={{ backgroundColor: '#FAFF00' }}>Registrarse</Modal.Header>
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
          <Modal.Footer style={{ backgroundColor: '#FAFF00' }}>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => setShowModal(false)}>
                Cancelar
              </Button>
              <Button 
                onPress={() => {
                  setShowModal(false); // Cierra el modal
                  navigation.navigate('Inicio'); // Navega a la pantalla "Inicio"
                }}
                style={{ backgroundColor: '#F20F7C' }}
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
