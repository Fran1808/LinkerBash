import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";


import HomeScreen from "./src/screens/A_HomeScreen";
import Events from "./src/screens/C_Events";
import Calendar from "./src/screens/D_Calendar";
import Memories from "./src/screens/D_Memories";
import Organize from "./src/screens/D_Organize";
import Profile from "./src/screens/D_Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Componente para el menú de pestañas
function TabScreens() {
  return (
    <Tab.Navigator
      initialRouteName="Eventos" // Configura "Eventos" como la pantalla inicial en las pestañas
      screenOptions={{
        tabBarStyle: { position: "absolute" }, // Asegura que el menú esté en la parte inferior
        tabBarActiveTintColor: "blue", // Color de la pestaña activa
        tabBarInactiveTintColor: "gray", // Color de las pestañas inactivas
      }}
    >
      <Tab.Screen name="Organizar" component={Organize} options={{ headerShown: false }} />
      <Tab.Screen name="Agenda" component={Calendar} options={{ headerShown: false }} />
      <Tab.Screen name="Eventos" component={Events} options={{ headerShown: false }} />
      <Tab.Screen name="Recuerdos" component={Memories} options={{ headerShown: false }} />
      <Tab.Screen name="Perfil" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Inicio" component={TabScreens} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
