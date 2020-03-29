import React, { Component } from 'react';
import { Image, Button, TextInput, View, StyleSheet } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    onLogin() {
        const { username, password } = this.state;
        if (username == '') {
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Patient and Equipment' }],
            });
        }
    }

    render() {
        return (
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
