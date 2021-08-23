import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import COLORS from './constants/colors';
import Card from './screens/Card';
import Header from './components/Header';
import List from './screens/Lista'
import ModalAddItem from './screens/ModalAddItem';
import ModalDeleteItem from './screens/ModalDeleteItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [inputError, setInputError] = useState('');
  const [itemList, setItemList] = useState([]);

  const [modalVisibleAddItem,setModalVisibleAddItem] = useState(false);
  const [modalVisibleDeleteItem, setModalVisibleDeleteItem] = useState(false);

  const handleInputChange = (text) => {
    setInputText(text);
    setInputError('');
  }

  const handleAddItem = () => {
    if(inputText){
      setItemList([
        ...itemList,{
          id: Math.random().toString(),
          value: inputText,
          estado: 'pendiente',
        }
      ]);
      setInputText('');
      setInputError('');
      closeAddItemModal();
    }else{
      setInputError('Campo Obligatorio');
    }
  }

  const handleAddItemModal = () => {
    setModalVisibleAddItem(true);
  }
  const handleDeleteItemModal = () => {
    setModalVisibleDeleteItem(true)
  }
  const closeAddItemModal = () => {
    setModalVisibleAddItem(false);
  }
  const closeDeleteItemModal = () => {
    setModalVisibleDeleteItem(false);
  }
  return (
    <View style={styles.container}>
      <Header title="El negocio">
      </Header>
      <View style={styles.buttonContainer}>
        <Button title="Agregar +" color={COLORS.yellow} style={styles.button} onPress={() => handleAddItemModal()}/>
      </View>
      <Text style={styles.h1}>PROXIMOS TURNOS</Text>
      <List itemList={itemList} />
      <ModalAddItem handleAddItem={handleAddItem} modalVisibleAddItem={modalVisibleAddItem} closeAddItemModal={closeAddItemModal} inputText={inputText} handleInputChange={handleInputChange}/>
      <ModalDeleteItem modalVisibleDeleteItem={modalVisibleDeleteItem} closeDeleteItemModal={closeDeleteItemModal} />
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
  },
  buttonContainer:{
    padding: 24,
  },
  button:{
    color: COLORS.red,
    fontSize: 24,
  }
});
