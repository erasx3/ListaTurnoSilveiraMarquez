import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';
import React from 'react';

const List = ({itemList},handleDeleteItemModal) => {
    return(
        <FlatList 
        data={itemList} 
        handleDeleteItemModal={handleDeleteItemModal}
        renderItem={(data) => <ListItem data={data} />}
        keyExtractor={item => item.id}
         />
    )
}

export default List;


