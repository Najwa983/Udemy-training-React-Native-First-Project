import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {

    const friends = [
        {name: 'Friend 1',age: 20},
        {name: 'Friend 2',age: 45},// this not a good approach because we change the data object
        {name: 'Friend 3',age: 32},
        {name: 'Friend 4',age: 27},
        {name: 'Friend 5',age: 53},
        // {name: 'Friend 6',age:'6'},
        {name: 'Friend 7',age: 30},
        // {name: 'Friend 8',age:'8'},
        // {name: 'Friend 9',age:'9'},

    ]
    return <FlatList //keyExtarctor ={friend => friend.name} this is another method to define the keys
    data={friends} renderItem= {
        ({ item }) => {
            //element === {item: {name: 'Friend#1'}, inedx: 0}
            return <Text>{item.name} -Age {item.age}</Text>;
        }} />
};
//if we don't mention the key prop, when we change smtg, RN needs to delete all the list in the screen and then render the list by taking into cosideration the change
// but if we add the key, RN select (track) where exactly the change exist and then apply it without delete all the list ( rebuild the app from sractch) :: performance optimisation around updating the list
const styles = StyleSheet.create({

});

export default ListScreen;