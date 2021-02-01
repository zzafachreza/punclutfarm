import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

export default function Home({navigation}) {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#16A858',
      }}>
      <View
        style={{
          backgroundColor: '#FFF',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../../assets/logo.png')} style={{width: 200}} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
          style={{
            backgroundColor: '#16A858',
            height: 45,
            borderRadius: 10,
            marginBottom: 20,
            // justifyContent: 'space-around',
            paddingLeft: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon color="#FFF" name="database" type="font-awesome" />
          <Text
            style={{
              color: '#FFF',
              left: 50,
              fontSize: 18,
              fontFamily: 'Nunito-Regular',
            }}>
            DATA TANAMAN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
          style={{
            backgroundColor: '#0E542E',
            height: 45,
            borderRadius: 10,
            marginBottom: 20,
            flexDirection: 'row',
            paddingLeft: 10,
            // justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon color="#FFF" name="bars" type="font-awesome" />
          <Text
            style={{
              color: '#FFF',
              left: 50,
              fontSize: 18,
              fontFamily: 'Nunito-Regular',
            }}>
            DAFTAR TANAMAN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
          style={{
            backgroundColor: '#C4C4C4',
            height: 45,
            borderRadius: 10,
            marginBottom: 20,
            // justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
          }}>
          <Icon color="#000" name="desktop" type="font-awesome" />
          <Text
            style={{
              color: '#000',
              left: 50,
              fontSize: 18,
              fontFamily: 'Nunito-Regular',
            }}>
            MONITORING TANAMAN
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/wave2.png')}
          style={{width: '100%'}}
        />
      </View>
    </ScrollView>
  );
}
