import { Button, View } from "react-native";

function HomeScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Organize2')}
            title="Crear evento"
            />
            <Button
            onPress={()=>navigation.navigate('Events')}
            title="Eventos"
            />
        </View>
    );
}
export default HomeScreen;