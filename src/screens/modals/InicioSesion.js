import React, { useState } from 'react';
import { Center, Button, Modal, FormControl, Input } from 'native-base';
import { useNavigation } from '@react-navigation/native'; // Para navegación

const ModalInicio = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation(); // Hook de navegación

  return (
    <Center>
      <Button
  onPress={() => setShowModal(true)}
  style={{
    backgroundColor: '#FAFF00', // Color de fondo amarillo
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
  INICIAR SESION
</Button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} >
        <Modal.Content maxWidth="400px" style={{ backgroundColor: '#F20F7C' }} >
          <Modal.CloseButton />
          <Modal.Header style={{ backgroundColor: '#F20F7C' }}>Iniciar Sesion</Modal.Header>
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
          <Modal.Footer style={{ backgroundColor: '#F20F7C' }}>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="FAFF00" onPress={() => setShowModal(false)}>
                Cancelar
              </Button>
              <Button 
                onPress={() => {
                  setShowModal(false); // Cierra el modal
                  navigation.navigate('Inicio'); // Navega a la pantalla "Inicio"
                }}
                style={{ backgroundColor: '#FAFF00' }}
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
