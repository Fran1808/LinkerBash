import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/A_HomeScreen";
import Login from "./src/screens/B_Login";
import SingUp from "./src/screens/B_SingUp";
import Events from "./src/screens/C_Events";
import Calendar from "./src/screens/D_Calendar";
import Memories from "./src/screens/D_Memories";
import Organize from "./src/screens/D_Organize";
import Profile from "./src/screens/D_Profile";
import About from "./src/screens/E_About";
import Help from "./src/screens/E_Help";
import Notifications from "./src/screens/E_Notifications";
import Terms from "./src/screens/E_Terms";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Componente para el menú de pestañas
function TabScreens() {
  return (
    <Tab.Navigator
      initialRouteName="Eventos" // Configura "Eventos" como la pantalla inicial
      screenOptions={{
        tabBarStyle: { position: "absolute" }, // Asegura que el menú esté en la parte inferior
        tabBarActiveTintColor: "blue", // Color de la pestaña activa
        tabBarInactiveTintColor: "gray", // Color de las pestañas inactivas
      }}
    >
      <Tab.Screen name="Organizar" component={Organize}  options={{ headerShown: false }} />
      <Tab.Screen name="Agenda" component={Calendar}  options={{ headerShown: false }}/>
      <Tab.Screen name="Eventos" component={Events}  options={{ headerShown: false }}/>
      <Tab.Screen name="Recuerdos" component={Memories}  options={{ headerShown: false }}/>
      <Tab.Screen name="Perfil" component={Profile}  options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Sesión">
        <Drawer.Screen name="Sesión" component={HomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Inicio" component={TabScreens} />
        <Drawer.Screen name="Acerca de..." component={About} />
        <Drawer.Screen name="Ayuda y Soporte técnico" component={Help} />
        <Drawer.Screen name="Notificaciones" component={Notifications} />
        <Drawer.Screen name="Términos y condiciones" component={Terms} />
        <Drawer.Screen name="Invitar amigos" component={Terms} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Registro" component={SingUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
