import { StyleSheet, Text, View } from 'react-native';

import COLORS from '../constants/colors.js';
import React from 'react';

const Header = ({title}, style, children) => {
    return(
        <View style={{...styles.container, ...style}}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 35,
        height: 90,
        backgroundColor: COLORS.red,
    },
    title:{
        fontSize: 24,
        color: '#fff',
        textTransform: 'uppercase',
    }
})

export default Header;