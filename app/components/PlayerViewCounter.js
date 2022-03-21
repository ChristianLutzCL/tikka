import React from 'react';
import {
    StyleSheet,
    SafeAreaView, 
    View, 
    Text, 
    Button,
    TextInput,
    TouchableOpacity,
} from 'react-native';

function PlayerViewCounter(params) {


    console.log(params.playerData.name);

    return (
        <View style={{
            borderWidth: 0.5,
            borderBottomColor: "#1E293B",
            height: 100,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={{
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
    
                <Text style={{color: '#fff', fontSize: 36, fontWeight: 'bold' }}>{params.playerData.score}</Text>
                { params.playerData.activePlayer ?
                <Text style={{color: '#11B981', fontSize: 14, fontWeight: 'bold' }}>{params.playerData.name}</Text>
                :
                <Text style={{color: '#ffffff', fontSize: 14, fontWeight: 'bold' }}>{params.playerData.name}</Text>
                }
            </View>
            <View style={{
                width: '40%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    width: '70%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 10,
                }}>
                    <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold' }}>{params.playerData.darts[0]}</Text>
                    <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold' }}>{params.playerData.darts[1]}</Text>
                    <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold' }}>{params.playerData.darts[2]}</Text>
                </View>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{params.playerData.totalScore}</Text>
            </View>
            <View style={{
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{color: '#fff', fontSize: 24, fontWeight: '600' }}>Ø{params.playerData.average}</Text>
            </View>
        </View>
    );
}

export default PlayerViewCounter;