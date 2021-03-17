import * as React from 'react';
import colors from '../../assets/colors/colors';
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet,View,Text,Image } from 'react-native';


export default ({ item }) => {
    const { image,title,selected } = item;
    return(
        <View style={[styles.itemWrapper,{backgroundColor: selected ? colors.primary : colors.background}]}>
            <Image source={image} style={styles.itemImage}/>
            <Text style={styles.itemTitle}>{title}</Text>
            <Feather style={[styles.itemBtn,{
                backgroundColor: !selected ? colors.secondary : colors.background,
                color: selected ? "#111": "#fff"
                }]} name="chevron-right" size="3"/>
        </View>
    )
}

const styles = StyleSheet.create({
    itemBtn:{
        borderRadius:50,
        paddingLeft:4.5,
        paddingRight:3,
        paddingVertical:4,
        fontWeight:"bold"
    },
    itemTitle:{
        fontFamily:"Montserrat-Medium",
        marginVertical:10,
        fontWeight:"bold"
    },
    itemImage:{
        width:60,
        marginTop:10,
        marginHorizontal:10,
        height:60,
    },
    itemWrapper:{
        marginHorizontal:10,
        backgroundColor:"#F5CA48",
        padding:15,
        alignItems:"center",
        marginTop:10,
        borderRadius:20,
        shadowColor:colors.textLight,
        shadowOpacity:1,
        shadowRadius:10
    },
})
