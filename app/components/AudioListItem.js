import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { Entypo } from '@expo/vector-icons';
import color from '../misc/color';
import { yellow100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export class AudioListItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <View style={styles.thumbnail}>
                        <Text style={styles.thumbnailText}>A</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>A</Text>
                    </View>

                </View>
                <View style={styles.RightContainer}>
                    <Entypo name="dots-three-vertical" size={24} color={color.FONT_MEDIUM} />
                </View>
            </View>
        )
    }
}

export default AudioListItem;
const {width} = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignSelf: 'center',
        width:width - 80,
        backgroundColor:"red"
    },
    leftContainer:{
        flexDirection:'row',
        alignItems:"center",
        flex:1,
    },
    RightContainer:{
        flexBasis:50,
        backgroundColor:yellow100,
    },
    thumbnail:{
        height:50,
        flexBasis:50,
        backgroundColor:color.FONT_LIGHT,
        justifyContent:"center",
        alignItems: 'center',
        borderRadius:25
    },
    thumbnailText:{
        fontSize:22,
        fontWeight:'bold',
        color:color.FONT,
        
    }

})