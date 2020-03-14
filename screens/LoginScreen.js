import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { TextInput, Button } from 'react-native-paper';

const ContainerTest = styled.View`
  padding: 50px;
`;
const LoginScreen = () => {
  return (
    <ContainerTest>
      <TextInput
        selectionColor="red"
        type="outlined"
        label="Email"
        // value={this.state.text}
        // onChangeText={text => this.setState({ text })}
      />
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </ContainerTest>
  );
};

export default LoginScreen;
