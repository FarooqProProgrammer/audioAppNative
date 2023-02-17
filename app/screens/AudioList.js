import React, { Component } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { AudioContext } from '../context/AudioProvider'
import { RecyclerListView, LayoutProvider } from "recyclerlistview";

export class AudioList extends Component {
    static contextType = AudioContext
    layoutProvider = new LayoutProvider((i) => 'audio',(type,dim)=>{
        switch(type){
            case 'audio':
                dim.width  = Dimensions.get('window').width;
                dim.height = 70;
                break;
            default:
                dim.width  = 0
                dim.height = o;
        }
   
    })

    rowRenderer = (type,item) =>{
        return <Text>{item.filename}</Text>
    }
    render() {
        return (
            <AudioContext.Consumer>
                {
                    ({ dataProvider }) => {
                        return (
                            <RecyclerListView dataProvider={dataProvider} layoutProvider={this.layoutProvider} rowRenderer={this.rowRenderer}>
                                    
                            </RecyclerListView>
                        )
                    }
                }
            </AudioContext.Consumer>
        )
    }
}

export default AudioList;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    Text: {
        padding: 10,
        borderBottomColor: 'red',
        borderBottomWidth: 2
    }
})
