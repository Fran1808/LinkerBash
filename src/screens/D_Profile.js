import { Button, View } from "react-native";

function HomeScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Profile2')}
            title="Editar perfil"
            />
        </View>
    );
}
export default HomeScreen;