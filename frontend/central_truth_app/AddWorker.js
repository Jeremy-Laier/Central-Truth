import * as React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

export default class AddWorker extends React.Component {
    state = {
        jwt: '',

        first: '',
        last: '',
        email: '',
        phone: '',
        hcwid: '',
        hospitalid: '',
    };

    getToken = async () => {
        try {
            const jwt = await SecureStore.getItemAsync('jwt');

            this.setState({ jwt: jwt })

        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.getToken();
    }

    addNewWorker = () => {
        axios.post("https://virtserver.swaggerhub.com/EmilioAVazquez/COVID-19-Hackathon/1.0.0/hcw/" + this.state.jwt,
            {
                hcwId : this.state.hcwid.toString(),
                firstName: this.state.first,
                lastName: this.state.last,
                email: this.state.email,
                phoneNumber: this.state.phone.toString(),
                hospitalId: this.state.hospitalid.toString(),
            })
            .then((response) => {
                console.log('add successful', response);
                Alert.alert('Upload Successful');
            })
            .catch(error => {
                console.log(error);
            });
    };



    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={styles.field}>
                        <View style={styles.text}>
                            <Text>First Name</Text>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 50 }}>
                            <TextInput
                                style={{ paddingLeft: 10, height: 30, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => this.setState({ first: text })}
                            />
                        </View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.text}>
                            <Text>Last Name</Text>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 50 }}>
                            <TextInput
                                style={{ paddingLeft: 10, height: 30, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => this.setState({ last: text })}
                            />
                        </View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.text}>
                            <Text>Email</Text>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 50 }}>
                            <TextInput
                                style={{ paddingLeft: 10, height: 30, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => this.setState({ email: text })}
                            />
                        </View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.text}>
                            <Text>Phone Number</Text>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 50 }}>
                            <TextInput
                                style={{ paddingLeft: 10, height: 30, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => this.setState({ phone: text })}
                                keyboardType='number-pad'
                            />
                        </View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.text}>
                            <Text>Healthcare Worker ID</Text>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 50 }}>
                            <TextInput
                                style={{ paddingLeft: 10, height: 30, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => this.setState({ hcwid: text })}
                                keyboardType='number-pad'
                            />
                        </View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.text}>
                            <Text>Hospital ID</Text>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 50 }}>
                            <TextInput
                                style={{ paddingLeft: 10, height: 30, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => this.setState({ hospitalid: text })}
                                keyboardType='number-pad'
                            />
                        </View>
                    </View>
                    <View style={styles.submit}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                this.addNewWorker();
                                this.props.navigation.goBack();
                            }}
                        >
                            <Text>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 3 }}></View>
                </View>
            </TouchableWithoutFeedback>

        )
    }
}

const styles = StyleSheet.create({
    listBox: {
        flex: 8,
    },
    text: {
        flex: 1,
        alignItems: 'center'
    },
    field: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        flex: 1,
        textAlign: 'center'
    },
    submit: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100
    },
    button: {
        alignItems: "center",
        width: 200,
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    item: {
        padding: 10,
        width: Dimensions.get('window').width / 2,
        textAlign: 'center',
    },
});







