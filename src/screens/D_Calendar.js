import { Button, View } from "react-native";

function HomeScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Calendar2')}
            title="Lista de eventos"
            />
        </View>
    );
}
export default HomeScreen;