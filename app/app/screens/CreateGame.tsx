import { StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity, Separator, Button } from 'react-native'
import React from 'react'
import { Switch } from 'native-base'

export default function CreateGame({navigation}) {
    const [playerName1, setPlayerName1] = React.useState('')
    const [playerName2, setPlayerName2] = React.useState('')

    function Player(id, name, score){
        this.id = id
        this.name = name
        this.score = score
        this.darts = [0, 0, 0]
        this.totalScore = 0
        this.average = 0
        this.activePlayer = false
    }

    function createPlayer(playerName, score){
        var newPlayer = new Player(0, playerName, score);
        return newPlayer;
    }

    function createGame(score){
        var player1 = createPlayer(playerName1, score);
        var player2 = createPlayer(playerName2, score);
        var players = [player1, player2];
        navigation.navigate('DartCounter', {players: players});
    }

    return (
    <SafeAreaView style={{
        backgroundColor: "#0B1120",
        flex: 1,
        padding: 10,
    }}>
        <View>
            <Text style={{color: "#FFFFFF", fontSize: 24, fontWeight: "bold", paddingBottom: 10}}>Create Game</Text>
            <View style={styles.input} >
                <TextInput style={{ flex: 1, color: "#FFFFFF" }} placeholder="Name" placeholderTextColor="#6B799C" onChangeText={setPlayerName1} />
            </View>
            <View style={styles.input} >
                <TextInput style={{ flex: 1, color: "#FFFFFF" }} placeholder="Name" placeholderTextColor="#6B799C" onChangeText={setPlayerName2} />
            </View>
            <TouchableOpacity onPress={() => createGame(801)} style={{ backgroundColor: "#11B981", height: 50, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>Start Game</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    input: {
        color: "#FFFFFF",
        backgroundColor: "#1E293B",
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 5,
        //borderColor: "#11B981",
        //borderColor: "#6B799C",
        flexDirection: "row",
        alignItems: "center",
    },
    inputActive: {
        borderWidth: 1,
    },
    separator: {
        marginVertical: 30,
        borderBottomColor: '#1E293B',
        borderBottomWidth: 2,
      },
})