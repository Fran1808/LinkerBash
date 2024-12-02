import { Button, View } from "react-native";

function HomeScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Inicio')}
            title="Iniciar sesión"
            />
            <Button
            onPress={()=>navigation.navigate('Inicio')}
            title="Registrarse"
            />
        </View>
    );
}
export default HomeScreen;