import * as React from 'react';
import colors from '../../assets/colors/colors';
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet,View,Text,Image,TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default ({ item,index,navigation }) => {
    const { title,weight,rating,image } = item;
    return(
        <TouchableOpacity key={index} onPress={()=>navigation.navigate("Details",{
            item
        })}>
            <View style={styles.popularCard}>
                <View style={styles.leftCard}>
                    <View style={styles.cardTitle}>
                        <MaterialCommunityIcons name="crown" size={15} color={colors.primary}/>
                        <Text style={styles.cardText}>top of the week</Text>
                    </View>
                    <View style={{paddingLeft:20}}>
                        <Text style={styles.CardPizza}>{title}</Text>
                        <Text style={styles.cardWeight}>Weight {weight}</Text>
                    </View>
                    <View style={styles.cardActions}>
                        <Feather name="plus" size={15} style={styles.orderBtn} />
                        <View style={styles.rating}>
                            <MaterialCommunityIcons name="star" size={15} />
                            <Text style={{marginHorizontal:5}}>{rating}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rightCard}>
                    <Image source={image} style={styles.cardImage}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardImage:{
        height:100,
        width:200,
    },
    rightCard:{
        justifyContent:"center",
    },
    rating:{
        marginLeft:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",

    },
    orderBtn:{
        backgroundColor:colors.primary,
        textAlign:"center",
        paddingVertical:10,
        fontWeight:"bold",
        fontFamily:"Montserrat-Bold",
        borderTopRightRadius:20,
        flex:0.7,
    },
    cardActions:{
        flexDirection:"row",
        marginTop:10,
    },
    cardWeight:{
        fontFamily:"Montserrat-Regular",
        color:colors.textLight,
    },
    CardPizza:{
        fontFamily:"Montserrat-Medium",
        marginVertical:3,
        fontWeight:"bold"
    },
    cardText:{
        fontSize:15,
        fontFamily:"Montserrat-Bold",
        marginLeft:10,
    },
    cardTitle:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:20,
        paddingTop:20,
        paddingBottom:10
    },
    leftCard:{},
    popularCard:{
        marginHorizontal:20,
        marginVertical:10,
        flexDirection:'row',
        backgroundColor:colors.background,
        borderRadius:20,
        overflow:"hidden"
    },
})
