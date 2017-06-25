/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

export default class stepper extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();

  }

  animate() {
    this.animatedValue.setValue(0);
    this.animatedValue1.setValue(0);
    this.animatedValue2.setValue(0);
    this.animatedValue3.setValue(0);
    Animated.sequence([
      
    Animated.timing(this.animatedValue3, {
        toValue: 0.2,
        duration: 500,
        easing: Easing.bounce
    }),
    Animated.timing(this.animatedValue2, {
        toValue: 0.4,
        duration: 500,
        easing: Easing.bounce
    }),
    Animated.timing(this.animatedValue1, {
        toValue: 0.6,
        duration: 500,
        easing: Easing.bounce
    }),
    Animated.timing(this.animatedValue, {
        toValue: 0.8,
        duration: 500,
        easing: Easing.bounce
    })
]).start((animation)=> {
  if (animation.finished) {
        this.animate();
      }
})
  }
  render() {
    const animatedStyle = { opacity: this.animatedValue };
    const animatedStyle1 = { opacity: this.animatedValue1 };
    const animatedStyle2 = { opacity: this.animatedValue2 };
    const animatedStyle3 = { opacity: this.animatedValue3 };
    return (
      <View>
        <Animated.View style={[styles.curveCircle, animatedStyle]} />
        <Animated.View style={[styles.curveCircle1, animatedStyle1]} />
        <Animated.View style={[styles.curveCircle2, animatedStyle2]} />
        <Animated.View style={[styles.curveCircle3, animatedStyle3]} />
        <Animated.View style={styles.curve} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  curve: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderWidth: 10,
    borderColor: 'red',
    borderStyle: 'solid',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    transform: [
      {rotate: '45deg'}
    ],
    top: 190,
    left: 190
  },
  curveCircle: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 15,
    borderTopColor: 'red',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  curveCircle1: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 15,
    borderTopColor: 'red',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    top: 50,
    left: 50

  },
  curveCircle2: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 15,
    borderTopColor: 'red',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    top: 100,
    left: 100

  },

  curveCircle3: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 15,
    borderTopColor: 'red',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    top: 150,
    left: 150

  },
});

AppRegistry.registerComponent('stepper', () => stepper);
