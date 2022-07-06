import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
const PasswordInputScreen = () =>{
    const [password, setPassword] = useState('');
    return <View>
       <TextInput
       style = {styles.input}
       autoCapitalize = "none"
       autoCorrect = {false}
       value= {password}
       onChangeText = {(pass) => setPassword(pass)}
       />
       {password.length <= 5 ? <Text> Password must be longer than 5 characters</Text> : null}
    </View>
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor: 'black',
        borderWidth: 1,
        
    }
});

export default PasswordInputScreen;