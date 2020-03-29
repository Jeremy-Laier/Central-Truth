import * as React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';


export default class Input extends React.Component {
    state = {
        mild: '',
        severe: '',
        recovered: '',
        bed: '',
        mask: '',
        ventilator: '',
    };
    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.Os == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1, justifyContent: 'space-around', marginBottom: 50 }}>
                        <View style={styles.field}>
                            <Text style={styles.title}>Equipment</Text>
                        </View>
                        <View style={styles.field}>
                            <Text>Bed</Text>
                            <TextInput
                                style={{ height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => this.setState({ bed: text })}
                                value={this.state.bed}
                                keyboardType='number-pad'
                            />
                        </View>
                        <View style={styles.field}>
                            <Text>Bed</Text>
                            <TextInput
                                style={{ height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => this.setState({ bed: text })}
                                value={this.state.bed}
                                keyboardType='number-pad'
                            />
                        </View>
                        <View style={styles.field}>
                            <Text>Bed</Text>
                            <TextInput
                                style={{ height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => this.setState({ bed: text })}
                                value={this.state.bed}
                                keyboardType='number-pad'
                            />
                        </View>
                        <View style={styles.field}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => console.log('Pressed')}
                            >
                                <Text>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.title}>Equipment</Text>
                        </View>
                        <View style={styles.field}>
                            <Text>Bed</Text>
                            <TextInput
                                style={{ height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => this.setState({ bed: text })}
                                value={this.state.bed}
                                keyboardType='number-pad'
                            />
                        </View>
                        <View style={styles.field}>
                            <Text>Ventilator</Text>
                            <TextInput
                                style={{ height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => this.setState({ bed: text })}
                                value={this.state.bed}
                                keyboardType='number-pad'
                            />
                        </View>
                        <View style={styles.field}>
                            <Text>Bed</Text>
                            <TextInput
                                style={{ height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => this.setState({ bed: text })}
                                value={this.state.bed}
                                keyboardType='number-pad'
                            />
                        </View>
                        <View style={styles.field}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => console.log('Pressed')}
                            >
                                <Text>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    field: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
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
        padding: 20
    },
});







