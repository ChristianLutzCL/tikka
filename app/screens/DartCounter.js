import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView, 
    View, 
    Text, 
    Button,
    TextInput,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import PlayerViewCounter from '../components/PlayerViewCounter';
import CounterKeyboard from '../components/CounterKeyboard';

function DartCounter({route}) {
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [buttonOption, setButtonOption] = useState('');

    function setActivePlayer(){
        route.params.players[0].activePlayer = true;
        route.params.players[1].activePlayer = false;
    }

    function initGame(){
        setActivePlayer();
    }

    function handleScore(score){
        setScore(score);

        for (let i = 0; i < 3; i++) {
            route.params.players[0].darts[i] = score;
        }
    }

    initGame();


    return (
        <SafeAreaView style={{
            height: "100%",
            backgroundColor: "#0B1120",
        }}>
            <View style={{
                height: "68%",
            }}>
                <PlayerViewCounter playerData={route.params.players[0]} />
                <PlayerViewCounter playerData={route.params.players[1]} />
            </View>
            <CounterKeyboard />
        </SafeAreaView>
    );
}


export default DartCounter;