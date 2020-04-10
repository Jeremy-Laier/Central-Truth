import * as React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, FlatList, Keyboard, Dimensions, TouchableWithoutFeedback } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { Provider as PaperProvider, Button, TextInput } from 'react-native-paper';

export default class Admin extends React.Component {
    state = {
        icu: '',
        doctors: '',
        nurses: '',
        tests: '',
        ventilators: '',

        jwt: '',
        status: null,
        hcw: null,
    };

    getEverything = async () => {
        try {
            const jwt = await SecureStore.getItemAsync('jwt');

            this.setState({ jwt: jwt })

            this.getHospitalStatus(jwt);
            this.getHCW(jwt);
        } catch (e) {
            console.log(e);
        }
    };

    getHospitalStatus = (jwt) => {
        axios.get("https://virtserver.swaggerhub.com/EmilioAVazquez/COVID-19-Hackathon/1.0.0/hospitalStatus/" + jwt)
            .then(response => {
                console.log('hospitalStatus', response.data);
                setTimeout(() => {
                    this.setState({
                        status: response.data,
                    })
                    this.setState({
                        ventilators: response.data.availableVentilators.toString(),
                        doctors: response.data.doctors.toString(),
                        nurses: response.data.nurses.toString(),
                        icu: response.data.availableIntensiveCareUnits.toString(),
                        tests: response.data.tests.toString(),
                    })
                }, 2000)
            })
            .catch(error => {
                console.log(error);
            });
    }

    getHCW = (jwt) => {
        axios.get("https://virtserver.swaggerhub.com/EmilioAVazquez/COVID-19-Hackathon/1.0.0/hcw/" + jwt)
            .then(response => {
                console.log('get hcw', response.data);
                setTimeout(() => {
                    this.setState({
                        hcw: response.data,
                    })
                }, 2000)
            })
            .catch(error => {
                console.log(error);
            });
    }

    publishHospitalStatus = () => {
        const { status, doctors, nurses, tests, ventilators, icu } = this.state;

        if (doctors != '') {
            status.doctors = parseInt(doctors);
        } else {
            status.doctors = 0;
        }

        if (nurses != '') {
            status.nurses = parseInt(nurses);
        } else {
            status.nurses = 0;
        }

        if (tests != '') {
            status.tests = parseInt(tests);
        } else {
            status.tests = 0;
        }

        if (icu != '') {
            status.availableIntensiveCareUnits = parseInt(icu);
        } else {
            status.availableIntensiveCareUnits = 0;
        }

        if (ventilators != '') {
            status.availableVentilators = parseInt(ventilators);
        } else {
            status.availableVentilators = 0;
        }


        axios.post("https://virtserver.swaggerhub.com/EmilioAVazquez/COVID-19-Hackathon/1.0.0/hospitalStatus/" + this.state.jwt,
            {
                status
            })
            .then((response) => {
                console.log('publishStatus', status);
                Alert.alert('Upload Successful');
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getEverything();
    }

    deleteHCW = (hcw) => {
        axios.delete("https://virtserver.swaggerhub.com/EmilioAVazquez/COVID-19-Hackathon/1.0.0/hcw/" + this.state.jwt,
            {
                hcw
            })
            .then((response) => {
                console.log('deleteHCW', response.data);
            })
            .catch(error => {
                console.log(error);
            });
        this.getHCW(this.state.jwt);
    }

    getListViewItem = (item) => {
        Alert.alert(item.firstName + " " + item.lastName, "email \n" + item.email + "\n\nphone number \n" + item.phoneNumber,
            [
                { text: 'Delete', onPress: (item) => this.deleteHCW(item), style: 'destructive' },
                { text: 'Cancel', onPress: () => console.log('Cancel'), style: 'cancel' },
            ],
            { cancelable: false }
        );
    }

    render() {
        return (
            <PaperProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={styles.field}>
                        <Text style={styles.title}>Hospital Status</Text>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.text}>
                            <Text>Doctors</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => this.setState({ doctors: text })}
                                value={this.state.doctors}
                                keyboardType='number-pad'
                            />
                        </View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.text}>
                            <Text>Nurses</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => this.setState({ nurses: text })}
                                value={this.state.nurses}
                                keyboardType='number-pad'
                            />
                        </View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.text}>
                            <Text>Tests</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => this.setState({ tests: text })}
                                value={this.state.tests}
                                keyboardType='number-pad'
                            />
                        </View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.text}>
                            <Text>Available ICU</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => this.setState({ icu: text })}
                                value={this.state.icu}
                                keyboardType='number-pad'
                            />
                        </View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.text}>
                            <Text>Available Ventilators</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => this.setState({ ventilators: text })}
                                value={this.state.ventilators}
                                keyboardType='number-pad'
                            />
                        </View>
                    </View>
                    <View style={styles.submit}>
                        <Button
                            mode='contained'
                            onPress={() => { this.publishHospitalStatus() }}
                        >
                            Publish
                        </Button>
                    </View>


                    <View style={styles.field}>
                        <Text style={styles.title}>My Healthcare Workers</Text>
                    </View>
                    <View style={styles.listBox}>
                        <FlatList
                            data={this.state.hcw}
                            renderItem={({ item }) => <Text style={styles.item} onPress={this.getListViewItem.bind(this, item)}>{item.firstName} {item.lastName}</Text>}
                            keyExtractor={item => item.hcwId.toString()}
                        />
                    </View>
                    <View style={styles.submit}>
                        <Button
                            mode='contained'
                            onPress={() => { this.props.navigation.navigate('New Healthcare Worker')}}
                        >
                            Add New Workers
                        </Button>
                    </View>
                    <View style={styles.field}></View>
                    <View style={styles.field}></View>
                </View>
            </TouchableWithoutFeedback>
            </PaperProvider>
        )
    }
}

const styles = StyleSheet.create({
    listBox: {
        flex: 6,
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
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
    input: {
        height: 35,
        width: 170,
        alignSelf: 'center'
    }
});