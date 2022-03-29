import { View, Text, Button } from 'react-native'
import React from 'react'
import { useMoralis } from "react-moralis";

export default function MoralisAuth() {
    const { authenticate, isAuthenticated, user } = useMoralis();

    if(!isAuthenticated) {
    return (
        <View>
            <Button onPress={() => authenticate()} title="Log In" />
        </View>
    )
    }

    return (
        <View>
            <Text>Welcome {user.get("username")}</Text>
        </View>
    );
}