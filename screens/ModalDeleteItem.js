import { Button, Modal, StyleSheet, Text, View } from 'react-native';

import COLORS from '../constants/colors';
import React from 'react';

function ModalDeleteItem({
    modalVisibleDeleteItem,
    closeDeleteItemModal,
}){
    return(
        <Modal visible={modalVisibleDeleteItem} animation="slide" transparent>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <Text style={styles.p}>Nombre:</Text>
                        <Text style={styles.p}></Text>
                    </View>
                    <View style={styles.row2}>
                        <Button onPress={closeDeleteItemModal} title="Cancelar" color={COLORS.red} />
                    </View>
                </View>
            </View>
        </Modal>
)}

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
        justifyContent: 'center',
    },
    row2:{
        flexDirection:'row',
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

export default ModalDeleteItem;
