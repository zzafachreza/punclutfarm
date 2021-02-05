import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';
import {sha1} from 'react-native-sha1';

import {showMessage} from 'react-native-flash-message';
export default function Edit({navigation, route}) {
  const id = route.params.id;
  const [data, setData] = useState([]);

  const getData = (x, id) => {
    axios
      .post('https://zavalabs.com/project/punclutfarm/view.php', {
        token: x,
        id: id,
      })
      .then((res) => {
        const obj = res.data;
        console.log(obj);
        setnama(obj[0].nama);
        setphmin(obj[0].phmin);
        setphmax(obj[0].phmax);
        setecmin(obj[0].ecmin);
        setecmax(obj[0].ecmax);
        setsuhumin(obj[0].suhumin);
        setsuhumax(obj[0].suhumax);
        settinggimin(obj[0].tinggimin);
        settinggimax(obj[0].tinggimax);
      });
  };

  useEffect(() => {
    sha1('151195Ez@').then((hash) => {
      settoken(hash.toLowerCase());
      getData(hash.toLowerCase(), id);
    });
  }, []);

  const [token, settoken] = useState('');
  const [loading, setLoading] = useState(false);
  const [nama, setnama] = useState('');
  const [phmin, setphmin] = useState('');
  const [phmax, setphmax] = useState('');
  const [ecmin, setecmin] = useState('');
  const [ecmax, setecmax] = useState('');
  const [suhumin, setsuhumin] = useState('');
  const [suhumax, setsuhumax] = useState('');
  const [tinggimin, settinggimin] = useState('');
  const [tinggimax, settinggimax] = useState('');

  const masuk = () => {
    setLoading(true);

    const dataEdit = {
      id: id,
      token: token,
      nama: nama,
      phmin: phmin,
      phmax: phmax,
      ecmin: ecmin,
      ecmax: ecmax,
      suhumin: suhumin,
      suhumax: suhumax,
      tinggimin: tinggimin,
      tinggimax: tinggimax,
    };

    axios
      .post('https://zavalabs.com/project/punclutfarm/update.php', dataEdit)
      .then((res) => {
        showMessage({
          message: 'Data berhasil ditambah !',
          type: 'default',
        });

        setTimeout(() => {
          setLoading(false);
          navigation.replace('Daftar');
        }, 1200);

        console.log(res.data);
      });
  };
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          paddingTop: 30,
        }}>
        {/* <View
          style={{
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}>
          <Image
            source={require('../../assets/logo.png')}
            style={{width: 200}}
          />
        </View> */}
        {/* <Text>{token}</Text> */}
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
            Nama Tanaman :
          </Text>
          <TextInput
            autoFocus={true}
            style={{
              borderColor: '#0E542E',
              borderRadius: 10,
              borderWidth: 1,
              paddingLeft: 10,
              fontSize: 18,
              fontFamily: 'Nunito-Regular',
            }}
            value={nama}
            onChangeText={(value) => setnama(value)}
          />
          <View style={{height: 20}} />

          {/* start min max */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1, paddingRight: 10}}>
              <Text
                style={{
                  color: '#0E542E',
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                }}>
                pH Min :
              </Text>
              <TextInput
                keyboardType="decimal-pad"
                value={phmin}
                onChangeText={(value) => setphmin(value)}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                  borderColor: '#0E542E',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: '#0E542E',
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                }}>
                pH Max :
              </Text>
              <TextInput
                keyboardType="decimal-pad"
                value={phmax}
                onChangeText={(value) => setphmax(value)}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                  borderColor: '#0E542E',
                }}
              />
            </View>
          </View>
          {/* end minmax */}
          <View style={{height: 20}} />
          {/* start min max */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1, paddingRight: 10}}>
              <Text
                style={{
                  color: '#0E542E',
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                }}>
                EC Min :
              </Text>
              <TextInput
                keyboardType="decimal-pad"
                value={ecmin}
                onChangeText={(value) => setecmin(value)}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                  borderColor: '#0E542E',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: '#0E542E',
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                }}>
                EC Max :
              </Text>
              <TextInput
                keyboardType="decimal-pad"
                value={ecmax}
                onChangeText={(value) => setecmax(value)}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                  borderColor: '#0E542E',
                }}
              />
            </View>
          </View>
          {/* end minmax */}
          <View style={{height: 20}} />
          {/* start min max */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1, paddingRight: 10}}>
              <Text
                style={{
                  color: '#0E542E',
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                }}>
                Suhu Min :
              </Text>
              <TextInput
                keyboardType="decimal-pad"
                value={suhumin}
                onChangeText={(value) => setsuhumin(value)}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                  borderColor: '#0E542E',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: '#0E542E',
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                }}>
                Suhu Max :
              </Text>
              <TextInput
                keyboardType="decimal-pad"
                value={suhumax}
                onChangeText={(value) => setsuhumax(value)}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                  borderColor: '#0E542E',
                }}
              />
            </View>
          </View>
          {/* end minmax */}
          <View style={{height: 20}} />
          {/* start min max */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1, paddingRight: 10}}>
              <Text
                style={{
                  color: '#0E542E',
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                }}>
                Tinggi Min :
              </Text>
              <TextInput
                keyboardType="decimal-pad"
                value={tinggimin}
                onChangeText={(value) => settinggimin(value)}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                  borderColor: '#0E542E',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: '#0E542E',
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                }}>
                Tinggi Max :
              </Text>
              <TextInput
                keyboardType="decimal-pad"
                value={tinggimax}
                onChangeText={(value) => settinggimax(value)}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                  borderColor: '#0E542E',
                }}
              />
            </View>
          </View>
          {/* end minmax */}

          <View style={{height: 20}} />
          <TouchableOpacity
            onPress={masuk}
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
      </ScrollView>
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

const styles = StyleSheet.create({});
