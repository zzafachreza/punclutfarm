import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import axios from 'axios';
import {sha1} from 'react-native-sha1';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Monitor({navigation}) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState([]);
  const [key, setKey] = useState('');

  const [loading, setLoading] = useState(false);
  const masuk = () => {
    setLoading(true);
    setTimeout(() => {
      navigation.replace('Home');
    }, 1200);
  };

  const cari = (value) => {
    setKey(value);
    setLoading(true);

    // alert(key);adaa
    sha1('151195Ez@').then((hash) => {
      axios
        .post('https://zavalabs.com/project/punclutfarm/search', {
          key: value,
          token: hash.toLowerCase(),
        })
        .then((res) => {
          setLoading(false);
          setData(res.data);
        });
    });
  };

  const get = () => {
    // alert(key);
    sha1('151195Ez@').then((hash) => {
      axios
        .post('https://zavalabs.com/project/punclutfarm/get', {
          token: hash.toLowerCase(),
        })
        .then((res) => {
          console.log(res.data);
          setLoading(false);
          setData(res.data);
        });
    });
  };

  useEffect(() => {
    get();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Tanaman', {
          id: item.id,
        })
      }
      style={{
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'white',
        elevation: 1,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          padding: 10,
        }}>
        <View style={{flex: 2}}></View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Montserrat-Medium',
            color: 'black',
          }}>
          {item.nama}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View
        style={{
          flex: 1,
          // justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#FFF',
            paddingHorizontal: 20,
            paddingTop: 20,
            // justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#0E542E',
              fontSize: 18,
              fontFamily: 'Nunito-Regular',
              textAlign: 'center',
            }}>
            Pilih Nama Tanaman :
          </Text>
          <TextInput
            value={key}
            onChangeText={(value) => cari(value)}
            autoFocus
            style={{
              borderColor: '#0E542E',
              borderRadius: 10,
              borderWidth: 1,
              paddingLeft: 10,
              fontSize: 18,
              fontFamily: 'Nunito-Regular',
            }}
          />
          <ScrollView>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>
        </View>
      </View>
      {loading && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
            width: '100%',
            top: 0,
            opacity: 0.7,
            height: '100%',
          }}>
          <ActivityIndicator color="#16A858" size="large" />
        </View>
      )}
    </>
  );
}
