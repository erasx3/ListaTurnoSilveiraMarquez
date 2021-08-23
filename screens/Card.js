import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import COLORS from '../constants/colors';
import React from 'react';

const Card = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.p}>Nombre:</Text>
                <Text style={styles.p}> xxxxxx</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.p}>dia:</Text>
                <Text style={styles.p}> xx / xx / xx</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.p}>hora:</Text>
                <Text style={styles.p}> xx : xx</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.p}>estado:</Text>
                <Text style={styles.p}> xxxxxx</Text>
            </View>
            <View style={styles.row2}>
                <Button title="Realizado" color={COLORS.green}/>
                <Button title="Cancelar" color={COLORS.red}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
container:{
    alignItems: 'center',
    backgroundColor: COLORS.yellow,
    borderRadius: 10,
    shadowOpacity: 1.0,
    elevation: 5,
    shadowColor: '#fff',
    shadowOffset:{
        width: 0,
        height: 2,
    },
    padding: 24,
    margin: 24,
},
row:{
    flexDirection:'row',
    width: '100%',
    justifyContent: 'flex-start',
},
row2:{
    flexDirection:'row',
    width: '100%',
    justifyContent: 'space-between'
},
p:{
    fontSize: 16,
    color: COLORS.blue,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    lineHeight: 35,
}
});

export default Card;