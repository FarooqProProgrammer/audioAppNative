import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { Entypo } from '@expo/vector-icons';
import color from '../misc/color';

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
const styles = StyleSheet.create({

})