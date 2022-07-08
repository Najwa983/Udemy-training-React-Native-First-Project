import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const BoxScreen  = () =>{
    return <View style = {styles.viewStyle}>
        <View style = {styles.viewOneStyle}> </View>
        <View style = {styles.viewTwoStyle}> </View>
        <View style = {styles.viewThreeStyle}> </View>
    </View>
};

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between'


    },
    viewOneStyle: {
       height: '100px',
       width: '100px',
       backgroundColor: 'pink',
       
    },
    viewTwoStyle:{
        height: '100px',
        width: '100px',
        backgroundColor: 'green',
        //this
        top: 400,
        left: 500,
        //or this
        // marginTop:
        // marginLeft:
    },
    viewThreeStyle:{
        height: '100px',
        width: '100px',
        backgroundColor: 'purple'


    }
});

export default BoxScreen;