import * as React from 'react';
import colors from '../../assets/colors/colors';
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet,View,Text,Image } from 'react-native';

export default ({ item,index }) => {
    const { image,name } = item;
    return (
        <View key={index} style={[styles.sliderItem,{ marginLeft: !index ? 20 : 5  }]}>
            <Image source={image} style={styles.sliderImage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    sliderImage:{
        width:100,
        height:70,
    },
    sliderItem:{
        backgroundColor:colors.background,
        borderRadius:10,
        padding:5,
        marginHorizontal:5,
        shadowColor:colors.textLight,
        shadowRadius:10,
        shadowOpacity:0.5
    },
})
