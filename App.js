/**
 * Cifra de Cesar
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import NumericInput from 'react-native-numeric-input'

// Classe CifraDeCesar
export default class CifraDeCesar extends Component {

  //Construtor
  constructor(props) {
    super(props);
    this.state = {
      originalText: '',
      finalText: '',
      increment: 0
    }
  }

  //Render
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

           
            <View>
              <Text style={styles.titleText}>Cifra de César</Text>
            </View>
            <View style={styles.view}>
              <TextInput
                multiline={true}
                numberOfLines={7}
                style={styles.text}
                textAlign={'center'}
                placeholder="Texto original"
                //Definir originalText
                onChangeText={(text) => this.setState({ originalText: text })}
              >
                {this.state.originalText}
              </TextInput>
            </View>
            <View style={styles.aligned}>
              <Text style={styles.keyText}>Chave: </Text>
              <NumericInput style={styles.numeric}
                onChange={
                  //Definir increment
                  value => this.setState({ increment: value })}
              />
            </View>

            <View style={styles.view}>
              <TextInput
                multiline={true}
                numberOfLines={7}
                style={styles.finaltext}
                placeholder="Texto cifrado"
                editable={false}
                value={this.state.finalText}
                textAlign={'center'}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.okButton}
                onPress={
                  () => {
                    //Calcular resultado
                    var str = this.state.originalText
                    let result = '';
                    for (var i = 0; i < str.length; i++) {
                      result += String.fromCharCode(str.charAt(i).charCodeAt() + this.state.increment);
                    }
                    this.setState({ finalText: result })
                  }

                }
              >
                <Text style={styles.buttontext}> CIFRAR </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}


//Styles
const styles = StyleSheet.create({
  titleText: {
    color: '#36213E',
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: '#63768D',
    fontWeight: 'bold',

  },
  keyText: {
    color: '#0F0A0A',
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    fontSize: 20,
    textShadowColor: '#8AE9C1',
    textAlignVertical: 'center'
  },
  scrollView: {
    backgroundColor: '#63768D', marginBottom: 10
  },
  view: {
    backgroundColor: '#63768D',
    marginBottom: 10,
    marginTop: 5,
    marginBottom: 10,
    padding: 5
  },
  text: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 20
  },
  finaltext: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 16,
    borderRadius: 20
  },
  okButton: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#EEE3AB',
    alignItems: 'center'
  },
  aligned: {
    flexDirection: 'row'
  },
  numeric: {
    textAlignVertical: 'center'
  },
  buttontext: {
    fontSize: 30
  }
});

