import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { TextInput, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const ContainerTest = styled.View`
  padding: 50px;
`;

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  paddingForm: {
    marginTop: '10%',
  },
});
const LoginScreen = ({ navigation }) => {
  return (
    <ContainerTest>
      <TextInput
        style={styles.paddingForm}
        selectionColor="red"
        type="outlined"
        label="Email"
        // value={this.state.text}
        // onChangeText={text => this.setState({ text })}
      />
      <TextInput
        style={styles.paddingForm}
        selectionColor="red"
        type="outlined"
        label="Password"
        // value={this.state.text}
        // onChangeText={text => this.setState({ text })}
      />
      <Button
        onPress={() => {
          console.log('pressed2');
        }}
        style={styles.paddingForm}
        mode="contained"
        onPress={() => navigation.navigate('Root')}
      >
        Press me
      </Button>
    </ContainerTest>
  );
};

export default LoginScreen;
