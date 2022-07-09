import React from 'react';
import {
    StyleSheet,
    SafeAreaView, 
    View, 
    Text, 
    Button,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

export default function LogIn({navigation, route}) {
  return (
    <SafeAreaView style={{
        backgroundColor: "#0B1120",
        flex: 1,
    }}>
        <View style={{
            marginHorizontal: 20,
            marginTop: 120
        }}>
            <Image source={require('../../assets/logo.png')} style={{
            width: 100,
            height: 100,
            marginBottom: 20,
            }} />
            <Text style={{color: "#FFFFFF", fontSize: 24, fontWeight: "bold", paddingBottom: 10}}>Log In</Text>
            <Text style={{color: "#6B799C", fontSize: 12, paddingBottom: 20}}>Log In to your account.</Text>
            <TextInput style={{
                color: "#FFFFFF",
                backgroundColor: "#1E293B",
                height: 50,
                borderRadius: 10,
                paddingHorizontal: 20,
                marginBottom: 5,
            }} placeholder="Username" placeholderTextColor="#FFFFFF" inlineImageLeft='search_icon' />
            <TextInput style={{
                color: "#FFFFFF",
                backgroundColor: "#1E293B",
                height: 50,
                borderRadius: 10,
                paddingHorizontal: 20,
                marginBottom: 5,
            }} placeholder="Password" placeholderTextColor="#FFFFFF" secureTextEntry={true} />
            <TouchableOpacity style={{ backgroundColor: "#11B981", height: 50, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>Log In</Text>
            </TouchableOpacity>
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