import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

var color = 0.4;


export default class ScreenVR extends React.Component {
  state={
    color: 0.4
  }
  clickey() {
    color = 1;
    console.log(color);``
  }
  render() {
    console.log(color);
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            hi to VR ashwin 
          </Text>
          <VrButton
            style={styles.button}
            disables={false}
            onButtonPress={this.clickey}
          >
            <Text>
               cllick me!
            </Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c0c0d0',
    borderRadius: 5,
    width: 40,
    height: 44,
  },
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: `rgba(255, 255, 255, ${color})`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('ScreenVR', () => ScreenVR);
