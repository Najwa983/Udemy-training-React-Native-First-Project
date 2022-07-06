import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Hi Najwa</Text>
    <Button onPress={() => navigation.navigate('Components')}
    title='Go to Components Demo'/>
    {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text> Go to List Demo</Text>
    </TouchableOpacity> */}
    <Button
    title="Go to List Demo"
    onPress={() => navigation.navigate('List')}
    />
    <Button
    title="Go to Counter"
    onPress={() => navigation.navigate('Counter')}
    />
    </View>
};
   
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  }, 
});

export default HomeScreen;
