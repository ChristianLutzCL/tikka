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

function DartCounter({route}) {
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [buttonOption, setButtonOption] = useState('');
    const [score, setScore] = useState(0);

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


    console.log(route.params.players[0]);

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
            <View style={{
                flex: 1,
                flexDirection: "column",
                backgroundColor: "#0B1120",
                height: "1%",
                bottom: 0,
            }}>
                <View style={{
                    backgroundColor: "#0B1120",
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <TouchableHighlight onPress={e => setScore(0)}>
                        <View style={styles.button}>
                        <Text>0</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(1)}>
                        <View style={styles.button}>
                        <Text>1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(2)}>
                        <View style={styles.button}>
                        <Text>2</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(3)}>
                        <View style={styles.button}>
                        <Text>3</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(4)}>
                        <View style={styles.button}>
                        <Text>4</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(5)}>
                        <View style={styles.button}>
                        <Text>5</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(6)}>
                        <View style={styles.button}>
                        <Text>6</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    backgroundColor: "#0B1120",
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <TouchableHighlight onPress={e => setScore(7)}>
                        <View style={styles.button}>
                        <Text>7</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(8)}>
                        <View style={styles.button}>
                        <Text>8</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(9)}>
                        <View style={styles.button}>
                        <Text>9</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(10)}>
                        <View style={styles.button}>
                        <Text>10</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(11)}>
                        <View style={styles.button}>
                        <Text>11</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(12)}>
                        <View style={styles.button}>
                        <Text>12</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(13)}>
                        <View style={styles.button}>
                        <Text>13</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    backgroundColor: "#0B1120",
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <TouchableHighlight onPress={e => setScore(14)}>
                        <View style={styles.button}>
                        <Text>14</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(15)}>
                        <View style={styles.button}>
                        <Text>15</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(16)}>
                        <View style={styles.button}>
                        <Text>16</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(17)}>
                        <View style={styles.button}>
                        <Text>17</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(18)}>
                        <View style={styles.button}>
                        <Text>18</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(19)}>
                        <View style={styles.button}>
                        <Text>19</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(20)}>
                        <View style={styles.button}>
                        <Text>20</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    backgroundColor: "#0B1120",
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}>
                    <TouchableHighlight onPress={e => setScore(25)}>
                        <View style={styles.button}>
                        <Text>BULL</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setScore(50)}>
                        <View style={styles.button}>
                        <Text>BULLS EYE</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    backgroundColor: "#0B1120",
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <TouchableHighlight onPress={e => setButtonOption('DOUBLE')}>
                        <View style={styles.button}>
                        <Text>DOUBLE</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => setButtonOption('TRIPLE')}>
                        <View style={styles.button}>
                        <Text>TRIPLE</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.button}>
                        <Text>BACK</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#11B981",
      height: 48,
      width: 58
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    countText: {
        flex: 1,
      color: "#FF00FF",
      alignItems: "center",
      alignContent: "center",
      alignSelf: "center",
      textAlign: "center"
    }
  });

export default DartCounter;