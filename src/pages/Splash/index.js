import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
} from 'react-native';

export default function Splash({navigation}) {
  const top = new Animated.Value(0.7);

  const animasi = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(top, {
          toValue: 1,
          duration: 800,
        }),
        Animated.timing(top, {
          toValue: 0.7,
          duration: 800,
        }),
      ]),
      {
        iterations: 20,
      },
    ).start();
  };

  useEffect(() => {
    animasi();
    setTimeout(() => {
      // navigation.replace('Home');
    }, 1500);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.Image
        source={require('../../assets/logo.png')}
        style={
          ({
            width: 220,
            height: 220,
          },
          {
            transform: [{scale: top}],
          })
        }
      />
      <ActivityIndicator
        color="#0E542E"
        size="large"
        style={{
          marginTop: -50,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
