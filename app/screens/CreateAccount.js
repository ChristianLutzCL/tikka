
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
import { Icon } from 'react-native-elements';



function CreateAccount({navigation, route}) {
    const [focusUsername, setFocusUsername] = React.useState(false);
    const [focusEmail, setFocusEmail] = React.useState(false);
    const [focusPassword, setFocusPassword] = React.useState(false);
    const [focusConfirmPassword, setFocusConfirmPassword] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(true);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [email, setEmail] = React.useState('');






    const Separator = () => (
        <View style={styles.separator} />
      );
    
    const ValidationIcon = ({ visible }) => (
        visible ?
        <Icon name='check' type='material-icons-round' color="#11B981" />
        :
        null
    );
    
    const ShowButton = ({ visible, toggle }) => (
        <TouchableOpacity onPress={toggle}>
            <Icon name={visible ? 'visibility' : 'visibility-off'} type='material-icons-outlined' color="#FFFFFF" />
        </TouchableOpacity>
    );

    const createUser = () => {
        const creationDate = Date.now();

        if(password != '' && confirmPassword != '' && password === confirmPassword){
            const user = {
                username: username,
                password: password,
                email: email,
                creationDate: creationDate
            }

            console.log(user);
        }
    }
    


    return (
        <SafeAreaView style={{
            backgroundColor: "#0B1120",
            flex: 1,
            justifyContent: "center",
        }}>
            <View style={{
                marginHorizontal: 20,
                justifyContent: "center",
            }}>
                <Image source={require('../../assets/logo.png')} style={{
                width: 200,
                height: 45.98,
                marginBottom: 20,
                }} />
                <Text style={{color: "#FFFFFF", fontSize: 24, fontWeight: "bold", paddingBottom: 10}}>Create Account</Text>
                <Text style={{color: "#6B799C", fontSize: 12, paddingBottom: 20}}>Set up account by adding {"\n"}username, email and password.</Text>
                <View style={styles.input} >
                    <TextInput style={{ flex: 1, color: "#FFFFFF" }} placeholder="Username" placeholderTextColor="#6B799C" onFocus={setFocusUsername} onBlur={() => setFocusUsername(false)} onChangeText={setUsername} />
                    <ValidationIcon visible={false} />
                </View>
                <View style={styles.input} >
                    <TextInput style={{ flex: 1, color: "#FFFFFF" }} placeholder="Email" textContentType='emailAddress' placeholderTextColor="#6B799C" onFocus={setFocusEmail} onBlur={() => setFocusEmail(false)} onChangeText={setEmail} />
                    <ValidationIcon visible={false} />
                </View>
                <View style={styles.input} >
                    <TextInput style={{ flex: 1, color: "#FFFFFF" }} secureTextEntry={showPassword} placeholder="Password" placeholderTextColor="#6B799C" onFocus={setFocusPassword} onBlur={() => setFocusPassword(false)} onChangeText={setPassword} />
                    <ShowButton visible={!showPassword} toggle={() => setShowPassword(!showPassword)} />
                </View>
                <View style={styles.input} >
                    <TextInput style={{ flex: 1, color: "#FFFFFF" }} secureTextEntry={showConfirmPassword} placeholder="Confirm password" placeholderTextColor="#6B799C" onFocus={setFocusConfirmPassword} onBlur={() => setFocusConfirmPassword(false)} onChangeText={setConfirmPassword} />
                    <ShowButton visible={!showConfirmPassword} toggle={() => setShowConfirmPassword(!showConfirmPassword)} />
                </View>
                <TouchableOpacity style={{ backgroundColor: "#11B981", height: 50, borderRadius: 10, justifyContent: "center", alignItems: "center" }} onPress={createUser} >
                    <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>Create account</Text>
                </TouchableOpacity>
                <Separator />
                <Button title="Log In" onPress={() => navigation.navigate('LogIn')} />
                <Button title="Skip" onPress={() => navigation.navigate('CreateGame')} />
            </View>
        </SafeAreaView>
    );
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

export default CreateAccount;