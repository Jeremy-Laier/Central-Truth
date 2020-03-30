import React, { Component } from 'react';
import { Alert, Image, Button, TextInput, View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios'
import * as SecureStore from 'expo-secure-store';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loading: false,
        };
    }

    storeToken = async (jwt) => {
        try {
            await SecureStore.setItemAsync(
                'jwt',
                jwt
            );
        } catch (e) {
            console.log(e);
        }
    };

    onLogin = () => {
        const { username, password } = this.state;
        this.setState({
            loading: true,
        })
        axios.post("https://virtserver.swaggerhub.com/EmilioAVazquez/COVID-19-Hackathon/1.0.0/user/login", {
            username: username,
            password: password
        })
            .then(response => {
                console.log('getting data from axios', response.data);
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    })

                    // change here for admin vs healthcare worker
                    if (username == 'Admin') {
                        this.props.navigation.reset({
                            index: 0,
                            routes: [{ name: 'Administration' }],
                        });
                    } else {
                        this.props.navigation.reset({
                            index: 0,
                            routes: [{ name: 'Patient and Equipment' }],
                        });
                    }

                    this.storeToken(response.data)
                }, 2000)
            })
            .catch(error => {
                console.log(error)
                Alert.alert('Login Failed', 'Please re-enter username and password!')
            });
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Image style={styles.icon} source={require('./assets/person.png')}></Image>
                    <TextInput
                        value={this.state.username}
                        onChangeText={(username) => this.setState({ username })}
                        placeholder={'Username'}
                        style={styles.input}
                    />
                    <TextInput
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        style={styles.input}
                    />

                    <Button
                        title={'Login'}
                        style={styles.input}
                        onPress={this.onLogin.bind(this)}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 50,
    },
});
