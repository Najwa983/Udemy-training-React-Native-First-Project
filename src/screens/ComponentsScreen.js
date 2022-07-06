import React from "react";
import { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-web";


//reducers
const reducer =(state, action) => {
    // state === {red:number, green:number, blue: number};
    // action === {colorToChange: 'red' || 'green' || 'blue', amount:15 || -15}

    switch(action.colorToChange){
        case 'red':
            return{...state, red: state.red + action.amount};
        case 'green':
            return{...state, green: state.green + action.amount};

        case 'blue':
            return{...state, blue: state.blue + action.amount};
        default:
            return state;
    }
}

const ComponentsScreen = () => {
    
    
    const [state,dispatch] = useReducer(reducer, {red:0, green:0, blue:0});


    const name = "Najwa";
    // const someJsx = <Text>Hello</Text>
    return (
        <View>
            <Button title ='run this' onPress = {() => dispatch({colorToChange:'red', amount:15})} />
            <Text style={styles.textStyle}> Getting started with React Native!</Text>
            <Text style={styles.nameStyle}>My name is {name}</Text>
            
            {/* <Text>{greeting}</Text> //if greeting variable was an object, it would not appear and we will have an error */}
            {/* {someJsx} */}

        </View>
    )

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen;