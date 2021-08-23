import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

import COLORS from '../constants/colors';
import React from 'react';

function ModalAddItem({
    modalVisibleAddItem,
    closeAddItemModal,
}){
    return(
        <Modal visible={modalVisibleAddItem} animation="slide" transparent>
            <View style={styles.container}>
                <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.p}>Nombre:</Text>
                    <TextInput placeholder="nombre" style={styles.inputText}/>
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
                    <Button onPress={closeAddItemModal} title="Cancelar" color={COLORS.red} />
                </View>
                </View>
            </View>
        </Modal>
    )
}




//function ModalAddItem(modalVisibleAddItem,inputText,handleInputText){
    
//}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 450,
        maxWidth:450
    },
    content:{
        backgroundColor: COLORS.green,
        borderRadius: 10,
        padding: 50,
        elevation: 5,
        shadowColor: 'white',
        shadowOpacity: 1,
        shadowOffset:{
            width: 1,
            height: 2,
        }
    },
    row:{
        flexDirection:'row',
        //width: '100%',
        justifyContent: 'center',
    },
    row2:{
        flexDirection:'row',
        //width: '100%',
        justifyContent: 'space-between'
    },
    p:{
        fontSize: 16,
        color: COLORS.blue,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        lineHeight: 35,
    },
    inputText:{
        fontSize: 16,
        color: COLORS.blue,
        backgroundColor: '#fff',
        borderRadius: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        lineHeight: 40,
    }
})

export default ModalAddItem;