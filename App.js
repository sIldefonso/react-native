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
  Button,
  Image
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
              />
            </View>
            <View>
              <Button title='Cifrar'
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

                } />
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
    color: 'white',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 30,
    textShadowColor: 'grey'

  },
  keyText: {
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 20,
    textShadowColor: 'grey',
    textAlignVertical: 'center'

  },
  scrollView: {
    backgroundColor: 'orange', marginBottom: 10
  },
  view: {
    backgroundColor: 'grey',
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  finaltext: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 16
  },
  okButton: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    fontSize: 20,
    marginBottom: 10
    //flex: 2,
    //width: '80%',
    //flexDirection: 'row',
    //justifyContent: 'space-around'
  },
  aligned: {
    flex: 1,
    flexDirection: 'row'
  }, 
  numeric:{
    textAlignVertical: 'center'
  }
});

