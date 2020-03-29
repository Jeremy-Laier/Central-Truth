import * as React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

export default class Input extends React.Component {
    state = {
        first: '',
        last: '',
        status: '',
        gloves: '',
        masks: '',
        ventilators: '',
        customName: '',
        custom: '',
        weight: '',

        loading: false,
        jwt: '',

        item: null
    };

    addNewItem = () => {
        const { custom, customName } = this.state;

        if (custom != '' && customName != '') {
            axios.post("https://virtserver.swaggerhub.com/EmilioAVazquez/COVID-19-Hackathon/1.0.0/itemQuantity/" + this.state.jwt,
                {
                    item: {
                        itemId: this.state.item.length + 1,
                        name: customName,
                        tags: [],
                        unit: "custom unit"
                    },
                    quantity: custom
                })
                .then((response) => {
                    console.log('addNewItem', response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    updateItems = () => {
        const { gloves, masks, ventilators, item } = this.state;

        var i;
        for (i = 0; i < item.length; i++) {
            if (item[i].item.name == 'ventilators') {
                item[i].quantity = parseInt(ventilators);
            } else if (item[i].item.name == 'masks') {
                item[i].quantity = parseInt(masks);
            } else if (item[i].item.name == 'gloves') {
                item[i].quantity = parseInt(gloves);
            }
        }

        axios.put("https://virtserver.swaggerhub.com/EmilioAVazquez/COVID-19-Hackathon/1.0.0/itemQuantity/" + this.state.jwt,
            {
                item
            })
            .then((response) => {
                console.log('updateItem', response.data);
                Alert.alert('Upload Successful');
            })
            .catch(error => {
                console.log(error);
            });
    }

    addNewPatient = () => {
        const { first, last, weight, status } = this.state;

        if (first != '' && last != '' && weight != '', status != '') {
            axios.post("https://virtserver.swaggerhub.com/EmilioAVazquez/COVID-19-Hackathon/1.0.0/patient/" + this.state.jwt,
                {
                    hash: first + last + weight,
                    status: status,
                })
                .then((response) => {
                    console.log('addNewPatient', response.data);
                    Alert.alert('Upload Successful');
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    getItemQuantity = async () => {
        try {
            const jwt = await SecureStore.getItemAsync('jwt');
            this.setState({
                loading: true,
            })
            this.setState({ jwt: jwt })
            axios.get("https://virtserver.swaggerhub.com/EmilioAVazquez/COVID-19-Hackathon/1.0.0/itemQuantity/" + jwt)
                .then(response => {
                    console.log('getItemQuantity', response.data);
                    setTimeout(() => {
                        this.setState({
                            loading: false,
                            item: response.data,
                        })
                        var i;
                        for (i = 0; i < response.data.length; i++) {
                            if (response.data[i].item.name == 'ventilators') {
                                this.setState({
                                    ventilators: response.data[i].quantity.toString()
                                })
                            } else if (response.data[i].item.name == 'masks') {
                                this.setState({
                                    masks: response.data[i].quantity.toString()
                                })
                            } else if (response.data[i].item.name == 'gloves') {
                                this.setState({
                                    gloves: response.data[i].quantity.toString()
                                })
                            }
                        }
                    }, 2000)
                })
                .catch(error => {
                    console.log(error);
                });
        } catch (e) {
            console.log(e);
        }
    };

    submitEquipment = () => {
        this.updateItems();
        this.addNewItem();
    }

    componentDidMount() {
        this.getItemQuantity();
    }

    render() {
        return (
            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', paddingBottom: 100 }}
                scrollEnabled={true}
            >
                <View style={styles.field}>
                    <Text style={styles.title}>Equipment</Text>
                </View>
                <View style={styles.field}>
                    <View style={styles.text}>
                        <Text>Gloves</Text>
                    </View>
                    <View style={{ flex: 1, paddingLeft: 50 }}>
                        <TextInput
                            style={{ paddingLeft: 10, height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => this.setState({ gloves: text })}
                            value={this.state.gloves}
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
                <View style={styles.field}>
                    <View style={styles.text}>
                        <Text>Masks</Text>
                    </View>
                    <View style={{ flex: 1, paddingLeft: 50 }}>
                        <TextInput
                            style={{ paddingLeft: 10, height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => this.setState({ masks: text })}
                            value={this.state.masks}
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
                <View style={styles.field}>
                    <View style={styles.text}>
                        <Text>Ventilators</Text>
                    </View>
                    <View style={{ flex: 1, paddingLeft: 50 }}>
                        <TextInput
                            style={{ paddingLeft: 10, height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => this.setState({ ventilators: text })}
                            value={this.state.ventilators}
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
                <View style={styles.field}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TextInput
                            style={{ paddingLeft: 10, height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => this.setState({ customName: text })}
                            value={this.state.customName}
                        />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 50 }}>
                        <TextInput
                            style={{ paddingLeft: 10, height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => this.setState({ custom: text })}
                            value={this.state.custom}
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
                <View style={styles.field}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { this.setState({ custom: '', customName: '' }); this.submitEquipment() }}
                    >
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.field}>
                    <Text style={styles.title}>Patient</Text>
                </View>
                <View style={styles.field}>
                    <View style={styles.text}>
                        <Text>First Name</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={{ paddingLeft: 10, height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => this.setState({ first: text })}
                            value={this.state.first}
                        />
                    </View>
                </View>
                <View style={styles.field}>
                    <View style={styles.text}>
                        <Text>Last Name</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={{ paddingLeft: 10, height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => this.setState({ last: text })}
                            value={this.state.last}
                        />
                    </View>
                </View>
                <View style={styles.field}>
                    <View style={styles.text}>
                        <Text>Weight</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={{ paddingLeft: 10, height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => this.setState({ weight: text })}
                            value={this.state.weight}
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
                <View style={styles.field}>
                    <View style={styles.text}>
                        <Text>Status</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={{ paddingLeft: 10, height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => this.setState({ status: text })}
                            value={this.state.status}
                        />
                    </View>
                </View>
                <View style={styles.field}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { console.log('Pressed'); this.setState({ status: '', first: '', last: '', weight: '' }); this.addNewPatient() }}
                    >
                        <Text>Add / Update</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>

        );
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: 'center'
    },
    field: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        paddingLeft: 20,
        paddingTop: 20,
        flex: 1,
    },
    submit: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        alignItems: "center",
        width: 200,
        backgroundColor: "#DDDDDD",
        padding: 10
    },
});







