import { StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity, Separator, Button } from 'react-native'
import React from 'react'


export default function Profile() {
  return (
    <SafeAreaView style={{
        backgroundColor: "#0B1120",
        flex: 1,
        padding: 10,
    }}>
        <View>
            <Text style={{color: "#FFFFFF", fontSize: 24, fontWeight: "bold", paddingBottom: 10}}>Profile</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    separator: {
        marginVertical: 30,
        borderBottomColor: '#1E293B',
        borderBottomWidth: 2,
      },
})