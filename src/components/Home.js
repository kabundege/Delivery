import * as React from 'react';
import { useFonts } from 'expo-font';
import ExpoLoading from 'expo-app-loading';
import PopularCard from '../models/popular';
import colors from '../../assets/colors/colors';
import popular from '../../assets/data/popular';
import Feather from '@expo/vector-icons/Feather';
import rendercategoryItem from '../models/category';
import categories from '../../assets/data/categories';
import profile from '../../assets/images/profile.png';
import { FlatList } from 'react-native-gesture-handler';
import { Text,View,StyleSheet,SafeAreaView,Image,TextInput } from 'react-native';

export default ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
    })

    if( !fontsLoaded ){
        return <ExpoLoading/>
    }

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.header}>
                    <Image source={profile} style={styles.profileImage} />
                    <Feather name="menu" color={colors.textDark} size={24}/>
                </View>
            </SafeAreaView>
            <View style={styles.titlesWrapper}>
                <Text style={styles.subTitle}>Food</Text>
                <Text style={styles.bigTitle}>Delivary</Text>
            </View>
            <View style={styles.searchWrapper}>
                <Feather name="search" color={colors.textDark}/>
                <TextInput placeholder="Search" style={styles.searchInput}/>
            </View>
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitles}>Categories</Text>
                <FlatList
                    data={categories}
                    renderItem={rendercategoryItem}
                    keyExtractor={(item,index) => index}
                    horizontal={true}
                    style={styles.FlatList}
                />
            </View>
            <View style={styles.popularWrapper}>
                <Text style={[styles.categoriesTitles,{fontSize:16}]}>Popular</Text>
                {
                    popular.map((item,index)=>
                        <PopularCard index={index} item={item} navigation={navigation}/>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    popularWrapper:{
        marginBottom:10,
    },
    FlatList:{
        paddingVertical:10,
    },
    categoriesTitles:{
        fontFamily:"Montserrat-Bold",
        fontSize:14,
        paddingHorizontal:20,
        marginTop:30
    },
    categoriesWrapper:{
    },
    searchInput:{
        flex:1,
        marginHorizontal:10,
        paddingVertical:5,
        borderBottomColor:colors.textLight,
        borderBottomWidth:1,
        fontFamily:"Montserrat-SemiBold"
        
    },
    searchWrapper:{
        flexDirection:'row',
        alignItems:"center",
        paddingHorizontal:20,
        justifyContent:"space-between"
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginVertical:10,
        alignItems:'center'
    },
    container:{
        flex:1
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:40
    },
    subTitle:{
        fontSize:16,
        fontFamily:'Montserrat-Regular',
        color:colors.textDark
    },
    bigTitle:{
        fontFamily:"Montserrat-Bold",
        fontSize:32,
        marginTop:2,
        color:colors.textDark
    },
    titlesWrapper:{
        paddingHorizontal:20,
        marginVertical:20,
    }
});
