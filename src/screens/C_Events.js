import { Button, View } from "react-native";

function HomeScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Calendar')}
            title="Agenda"
            />
            <Button
            onPress={()=>navigation.navigate('Memories')}
            title="Recuerdos"
            />
            <Button
            onPress={()=>navigation.navigate('Organize')}
            title="Organizar"
            />
            <Button
            onPress={()=>navigation.navigate('Profile')}
            title="Perfil"
            />
        </View>
    );
}
export default HomeScreen;