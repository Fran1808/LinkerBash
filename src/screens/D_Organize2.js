import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function D_Organize2({ navigation }) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventRules, setEventRules] = useState("");

  const handleSave = () => {
    console.log("Evento guardado:", {
      eventName,
      eventDate,
      eventAddress,
      eventDescription,
      eventRules,
    });
  };

  const handleCancel = () => {
    setEventName("");
    setEventDate("");
    setEventAddress("");
    setEventDescription("");
    setEventRules("");
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      {/* Encabezado principal */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* Icono de la flecha */}
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Linker Bash</Text>
      </View>

      {/* Formulario de evento */}
      <View style={styles.formContainer}>
        {/* Contenedor blanco con borde negro */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre del evento"
            value={eventName}
            onChangeText={setEventName}
          />
          <Ionicons name="md-create-outline" size={20} color="black" style={styles.icon} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Fecha del evento"
            value={eventDate}
            onChangeText={setEventDate}
          />
          <Ionicons name="calendar-outline" size={20} color="black" style={styles.icon} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Dirección del evento"
            value={eventAddress}
            onChangeText={setEventAddress}
          />
          <Ionicons name="location-outline" size={20} color="black" style={styles.icon} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { height: 80 }]} 
            placeholder="Descripción"
            value={eventDescription}
            onChangeText={setEventDescription}
            multiline
          />
          <Ionicons name="document-text-outline" size={20} color="black" style={styles.icon} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Reglas"
            value={eventRules}
            onChangeText={setEventRules}
          />
          <Ionicons name="shield-checkmark-outline" size={20} color="black" style={styles.icon} />
        </View>

        {/* Botones */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Mensaje legal */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Le recordamos que la aplicación no se hace responsable de los accidentes o daños que puedan ocurrir durante los eventos. 
          En caso de ser reportado algún incidente, los datos del usuario organizador serán dados a las autoridades de ser necesario.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0075FF", 
  },
  header: {
    flexDirection: "row", 
    alignItems: "center",
    backgroundColor: "#0FF2BC",
    padding: 15,
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 10, 
  },
  formContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: "white", 
    borderColor: "black", 
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: "row", 
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "black",
  },
  icon: {
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#F4D738", 
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "48%", 
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    padding: 15,
    backgroundColor: "#fff", 
    borderTopWidth: 1,
    borderColor: "black",
    marginTop: 20,
  },
  footerText: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
  },
});

export default D_Organize2;
