import { Text, View, Alert } from 'react-native'
import React, { Component, createContext } from 'react'
import * as MediaLibrary from 'expo-media-library'
import { DataProvider } from "recyclerlistview"

export const AudioContext = createContext()
export class AudioProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audioFiles: [],
            permissionError: false,
            dataProvider: new DataProvider((r1, r2) => r1 != r2)
        }
    }

    perimissionAlert = () => {
        Alert.alert("Permission Required", "This apps need to read audio file", [{
            text: 'I am ready',
            onPress: () => this.getPermission()
        },
        {
            text: canceled,
            onPress: () => this.perimissionAlert()
        }
        ])
    }
    getAudioFiles = async () => {
        const {dataProvider,audioFiles} = this.state

        let media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio'
        })
        media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first: media.totalCount,
        })
        this.setState({ ...this.state,dataProvider:dataProvider.cloneWithRows([...audioFiles,...media.assets]), audioFiles: [...audioFiles,...media.assets] })
    }

    getPermission = async () => {
        const perimission = await MediaLibrary.getPermissionsAsync();
        if (perimission.granted) {

            this.getAudioFiles()
        }
        if (!perimission.granted && !perimission.canAskAgain) {
            this.setState({ ...this.setState, permissionError: true })
        }
        if (!perimission.granted && perimission.canAskAgain) {
            const { status, canAskAgain } = await MediaLibrary.requestPermissionsAsync();
            if (status === 'denied' && canAskAgain) {
                this.perimissionAlert()

            } if (status === 'granted') {
                this.getAudioFiles()
            }
            if (status === 'denied' && !canAskAgain) {
                this.setState({ ...this.setState, permissionError: true })
            }
        }
    }
    componentDidMount() {
        this.getPermission()
    }
    render() {
        const {audioFiles,dataProvider,permissionError} = this.state
        if (this.state.permissionError) {
            return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> <Text>It Look like permission</Text></View>
        }
        return (
            <AudioContext.Provider value={{ audioFiles,dataProvider }}>
                {this.props.children}
            </AudioContext.Provider>
        )
    }
}

export default AudioProvider