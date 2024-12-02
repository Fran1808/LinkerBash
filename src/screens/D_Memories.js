import { Button, View } from "react-native";

function HomeScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Memories2')}
            title="Añadir recuerdos"
            />
        </View>
    );
}
export default HomeScreen;