import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import COLORS from './constants/colors';
import Card from './screens/Card';
import Header from './components/Header';
import ModalAddItem from './screens/ModalAddItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [inputText, setInputText] = useState('');

  const [modalVisibleAddItem,setModalVisibleAddItem] = useState(false);

  const handleAddItemModal = () => {
    setModalVisibleAddItem(true);
  }
  const closeAddItemModal = () => {
    setModalVisibleAddItem(false);
  }
  return (
    <View style={styles.container}>
      <Header title="El negocio">
      </Header>
      <Button title="+" color={COLORS.yellow} style={styles.button} onPress={() => handleAddItemModal()}/>
      <Text style={styles.h1}>PROXIMOS TURNOS</Text>
      <Card/>
      <ModalAddItem modalVisibleAddItem={modalVisibleAddItem} closeAddItemModal={closeAddItemModal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
  },
  h1:{
    color: '#fff',
    fontSize: 24,
    textAlign:'center',
    paddingTop: 24,
  },
  button:{
    color: COLORS.red,
    fontSize: 24,
  }
});
