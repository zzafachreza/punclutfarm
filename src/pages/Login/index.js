import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';

export default function Login({navigation}) {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#16A858',
      }}>
      <View
        style={{
          backgroundColor: '#FFF',
        }}>
        <Image
          source={require('../../assets/wave1.png')}
          style={{width: '100%'}}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            color: '#0E542E',
            fontSize: 18,
            fontFamily: 'Nunito-Regular',
          }}>
          Username :
        </Text>
        <TextInput
          style={{
            borderColor: '#0E542E',
            borderRadius: 10,
            borderWidth: 1,
            paddingLeft: 10,
            fontSize: 18,
            fontFamily: 'Nunito-Regular',
          }}
        />
        <View style={{height: 20}} />
        <Text
          style={{
            color: '#0E542E',
            fontSize: 18,
            fontFamily: 'Nunito-Regular',
          }}>
          Password :
        </Text>
        <TextInput
          secureTextEntry={true}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            fontSize: 18,
            fontFamily: 'Nunito-Regular',
            borderColor: '#0E542E',
          }}
        />
        <View style={{height: 20}} />
        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
          style={{
            backgroundColor: '#16A858',
            height: 45,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 18,
              fontFamily: 'Nunito-Regular',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#FFF',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}>
        <Image source={require('../../assets/logo.png')} style={{width: 200}} />
      </View>
    </ScrollView>
  );
}
