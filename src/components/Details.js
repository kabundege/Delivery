import * as React from 'react';
import { useFonts } from 'expo-font';
import ExpoLoading from 'expo-app-loading';
import colors from '../../assets/colors/colors';
import Feather from '@expo/vector-icons/Feather';
import renderIngridients from '../models/ingridients';
import { FlatList, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Text,View,StyleSheet,SafeAreaView,Image,TextInput } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default ({ route,navigation }) => {
    const { item : { 
        image,
        title,
        price,
        crust,
        weight,
        rating,
        sizeName,
        sizeNumber,
        deliveryTime,
        ingridients 
    } } = route.params;
    return(
        <View style={styles.detailsWrapper}>
            <SafeAreaView style={styles.header}>
                <Feather onPress={()=> navigation.goBack()} name="chevron-left" size={15} color={colors.textLight} style={styles.backIcon}/>
                <MaterialCommunityIcons name="star" style={styles.starIcon} size={15} />
            </SafeAreaView>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.left}>
                    <View style={styles.contetWrapper}>
                        <Text style={styles.contentTitle}>Size</Text>
                        <Text style={styles.contentValue}>{sizeName + " " + sizeNumber}</Text>
                    </View>
                    <View style={styles.contetWrapper}>
                        <Text style={styles.contentTitle}>Crust</Text>
                        <Text style={styles.contentValue}>{crust}</Text>
                    </View>
                    <View style={styles.contetWrapper}>
                        <Text style={styles.contentTitle}>Delivered In</Text>
                        <Text style={styles.contentValue}>{deliveryTime}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Image source={image} style={styles.detailImage}/>
                </View>
            </View>
            <View style={styles.slider}>
                <Text style={styles.SliderTitle}>Ingridients</Text>
                <FlatList
                    data={ingridients}
                    renderItem={renderIngridients}
                    keyExtractor={(item,index)=>index}
                    horizontal={true}
                    style={styles.FlatList}
                />
            </View>
            <TouchableOpacity onPress={()=> alert("order sent successfully")} style={styles.orderBtn}>
                <Text style={styles.orderText}>Place an order</Text>
                <Feather name="chevron-right" size={15} style={styles.orderIcon}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    orderIcon:{
        fontFamily:"Montserrat-Bold",
        fontWeight:"bold"
    },
    orderText:{
        fontFamily:"Montserrat-Bold",
        fontSize:12,
        marginHorizontal:5,
        marginBottom:2
    },
    orderBtn:{
        flex:1,
        marginHorizontal:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.primary,
        borderRadius:20,
        textAlign:"center",
        paddingVertical:15,
    },
    FlatList:{
        paddingVertical:10,
    },
    SliderTitle:{
        fontFamily:"Montserrat-Bold",
        fontSize:17,
        marginLeft:20,
        marginBottom:10,
        color:colors.textDark,
    },
    slider:{
        marginVertical:20,
    },
    detailImage:{
        height:150,
        width:300
    },
    right:{
        justifyContent:"center",
        marginLeft:10,
    },
    contentValue:{
        fontFamily:"Montserrat-Bold",
        fontSize:17,
        marginTop:2,
        color:colors.textDark
    },
    contentTitle:{
        fontSize:13,
        fontFamily:'Montserrat-Regular',
        color:colors.textLight
    },
    contetWrapper:{
        marginVertical:10
    },
    body:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
    },
    price:{
        fontFamily:"Montserrat-Bold",
        fontSize:25,
        color:colors.secondary,
        marginVertical:10,
    },
    title:{
        fontFamily:"Montserrat-Bold",
        fontSize:35,
        marginTop:5,
        width:"80%",
        color:colors.textDark
    },
    titleWrapper:{
        paddingHorizontal:20,
        marginVertical:20,
    },
    starIcon:{
        padding:10,
        borderRadius:10,
        color:colors.background,
        backgroundColor:colors.primary
    },
    backIcon:{
        padding:8.5,
        borderRadius:10,
        borderColor: colors.textLight,
        color:colors.textLight,
        borderWidth:2
    },
    header:{
        marginVertical:10,
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    detailsWrapper:{
        flex:1,
    }
})
