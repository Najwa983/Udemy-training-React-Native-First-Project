import React,{useReducer} from 'react';
import { View, Text, StyleSheet, Button, ActionSheetIOS } from 'react-native';


const reducer = (state, action) =>{
    switch (action.type) {
        case 'increase':
            return {...state, counter: state.counter + action.payload};
        case 'decrease':
            return {...state, counter: state.counter - action.payload};
        default:
            return state;

    }
} 
const CounterSreen = () => {

    const [state, dispatch] = useReducer(reducer, {counter: 0});
 
    return (
        <View>
            <Button title='Increase' onPress={() => {dispatch({type:'increase', payload: 1})}}/> 
         {/* instead of adding 1 to counter we can come here an give the action.payload and give it the value of 1 */}
            <Button title='Decrease' onPress={() => {dispatch({type:'decrease', payload: 1})}} />
            <Text> Current Count: {state.counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({})

export default CounterSreen;