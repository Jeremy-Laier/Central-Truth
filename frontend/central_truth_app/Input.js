import * as React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard } from 'react-native';


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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}>
                    <View style={styles.panel}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}> New Patient </Text>
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={styles.content}>
                                <Text>Mildly-ill</Text>
                                <Text>Severely-ill</Text>
                                <Text>Recovered</Text>
                            </View>
                            <View style={styles.content}>
                                <TextInput
                                    style={{ height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={text => this.setState({ mild: text })}
                                    value={this.state.mild}
                                    keyboardType='number-pad'
                                />
                                <TextInput
                                    style={{ height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={text => this.setState({ severe: text })}
                                    value={this.state.severe}
                                    keyboardType='number-pad'
                                />
                                <TextInput
                                    style={{ height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={text => this.setState({ recovered: text })}
                                    value={this.state.recovered}
                                    keyboardType='number-pad'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.panel}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}> Available Equipment </Text>
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={styles.content}>
                                <Text>Bed</Text>
                                <Text>Mask</Text>
                                <Text>Ventilator</Text>
                            </View>
                            <View style={styles.content}>
                                <TextInput
                                    style={{ height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={text => this.setState({ bed: text })}
                                    value={this.state.bed}
                                    keyboardType='number-pad'
                                />
                                <TextInput
                                    style={{ height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={text => this.setState({ mask: text })}
                                    value={this.state.mask}
                                    keyboardType='number-pad'
                                />
                                <TextInput
                                    style={{ height: 40, width: 140, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={text => this.setState({ ventilator: text })}
                                    value={this.state.ventilator}
                                    keyboardType='number-pad'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.submit}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => console.log('Pressed')}
                        >
                            <Text>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    panel: {
        flex: 3,
        paddingBottom: 50,
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
    },
    submit: {
        flex: 2,
        alignItems: 'center',
    },
    button: {
        alignItems: "center",
        width: 200,
        backgroundColor: "#DDDDDD",
        padding: 20
    },
});







