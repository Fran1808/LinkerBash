import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importar íconos

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Encabezado principal */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Linker Bash</Text>
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        {/* Botón */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("D_Organize2")}
        >
          <Text style={styles.buttonText}>Crear evento</Text>
        </TouchableOpacity>

        {/* Encabezado secundario */}
        <View style={styles.secondaryHeader}>
          <Text style={styles.secondaryHeaderText}>Tus eventos</Text>
        </View>

        {/* Evento */}
        <TouchableOpacity style={styles.eventCard}>
          <Ionicons
            name="musical-notes"
            size={40}
            color="black"
            style={styles.icon}
          />
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>Cena navideña</Text>
            <Text style={styles.eventSubtitle}>Vigente</Text>
          </View>
        </TouchableOpacity>

        {/* Otro Evento */}
        <TouchableOpacity style={styles.eventCard}>
          <Ionicons
            name="musical-notes"
            size={40}
            color="black"
            style={styles.icon}
          />
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>Concierto anual</Text>
            <Text style={styles.eventSubtitle}>Próximamente</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0075FF", // Fondo azul
  },
  header: {
    backgroundColor: "#0FF2BC",
    padding: 15,
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  content: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  secondaryHeader: {
    backgroundColor: "#A388EE",
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
  },
  secondaryHeaderText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  eventCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    width: "90%",
    marginBottom: 15,
  },
  icon: {
    marginRight: 15,
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  eventSubtitle: {
    fontSize: 14,
    color: "gray",
  },
});

export default HomeScreen;
