import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import suggestion from '../components/suggestion';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay sugerencias."/>
    
    ItemSeparator = () => <Separator />
    
    renderItem = ({item}) => {
        return (
            <Suggestion{...item}></Suggestion>
        )
        
    }

    render() {
        //array de objetos
        const list = [
            {
               title: 'Avengers',
               key: 1,
            },
            {
                title: 'Pokemon',
                key: 2,
             },
             
        ]
        return(
            <Layout
            title="Recomendado para ti"
            >
                <FlatList
                data={list}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent={this.ItemSeparator}
                renderItem={this.renderItem}
            />
            </Layout>
        )  
    }
}
export default SuggestionList