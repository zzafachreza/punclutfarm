import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';
import {Icon} from 'react-native-elements';
import {sha1} from 'react-native-sha1';
export default function Tanaman({navigation, route}) {
  const id = route.params.id;
  const [data, setData] = useState([]);

  const getData = (x, id) => {
    axios
      .post('https://zavalabs.com/project/punclutfarm/view', {
        token: x,
        id: id,
      })
      .then((res) => {
        const obj = res.data;

        setnama(obj[0].nama);
        setphmin(obj[0].phmin);
        setphawal(obj[0].phmin);
        setphmax(obj[0].phmax);
        setecawal(obj[0].ecmin);
        setecmin(obj[0].ecmin);
        setecmax(obj[0].ecmax);
        setsuhumin(obj[0].suhumin);
        setsuhumax(obj[0].suhumax);
        settinggimin(obj[0].tinggimin);
        settinggimax(obj[0].tinggimax);
        animateValue(parseFloat(obj[0].phmin), parseFloat(obj[0].phmax), 500);
        animateValue2(parseFloat(obj[0].ecmin), parseFloat(obj[0].ecmax), 500);
        animateValue3(
          parseFloat(obj[0].suhumin),
          parseFloat(obj[0].suhumax),
          500,
        );
        animateValue4(
          parseFloat(obj[0].tinggimin),
          parseFloat(obj[0].tinggimax),
          500,
        );
      });
  };

  useEffect(() => {
    sha1('151195Ez@').then((hash) => {
      settoken(hash.toLowerCase());
      getData(hash.toLowerCase(), id);
    });
  }, []);

  const tambah = (x) => {
    if (x == 'ph') {
      var phdata = parseFloat(phmin) + 0.1;
      setphmin(phdata.toFixed(1));
      var phkurang = phdata.toFixed(1);
      animateValueTambah(parseFloat(phkurang), parseFloat(phmax), 500);
    } else if (x == 'ec') {
      var phdata = parseFloat(ecmin) + 0.1;
      setecmin(phdata.toFixed(1));
      var phkurang = phdata.toFixed(1);
      animateValueTambah2(parseFloat(phkurang), parseFloat(ecmax), 500);
    } else if (x == 'suhu') {
      setsuhumin(suhumin + 1);
      animateValueTambah3(suhumin + 1, suhumax, 1000);
    } else if (x == 'tinggi') {
      settinggimin(tinggimin + 1);
      animateValueTambah4(tinggimin + 1, tinggimax, 1000);
    }
  };

  const kurang = (x) => {
    if (x == 'ph') {
      var phdata = parseFloat(phmin) - 0.1;
      setphmin(phdata.toFixed(1));
      animateValueKurang(parseFloat(phdata.toFixed(1)), parseFloat(phmin), 500);
    } else if (x == 'ec') {
      var phdata = parseFloat(ecmin) - 0.1;
      setecmin(phdata.toFixed(1));
      var phkurang = phdata.toFixed(1);
      animateValueKurang2(parseFloat(phkurang), parseFloat(ecmin), 500);
    } else if (x == 'suhu') {
      setsuhumin(suhumin - 5);
    } else if (x == 'tinggi') {
      settinggimin(tinggimin - 50);
    }
  };

  const animateValue = (start, end, duration) => {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 0.1 : -0.1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var max = parseFloat(end.toFixed(1)) + 0.1;
    var timer = setInterval(function () {
      current += increment;

      setphmin(current.toFixed(1));
      if (current.toFixed(1) == max.toFixed(1)) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const animateValueKurang = (start, end, duration) => {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 0.1 : -0.1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var max = parseFloat(end.toFixed(1));
    var timer = setInterval(function () {
      current += increment;

      setphmin(current.toFixed(1));
      if (current.toFixed(1) == max.toFixed(1)) {
        setphmin(parseFloat(phawal - 0.1).toFixed(1));
        clearInterval(timer);
      }
    }, stepTime);
  };

  const animateValueTambah = (start, end, duration) => {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 0.1 : -0.1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var max = parseFloat(end.toFixed(1));
    var timer = setInterval(function () {
      current += increment;

      setphmin(current.toFixed(1));
      if (current.toFixed(1) == max.toFixed(1)) {
        // setphmin(phawal);
        clearInterval(timer);
      }
    }, stepTime);
  };

  const animateValue2 = (start, end, duration) => {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 0.1 : -0.1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var max = parseFloat(end.toFixed(1)) + 0.1;
    var timer = setInterval(function () {
      current += increment;

      setecmin(current.toFixed(1));
      if (current.toFixed(1) == max.toFixed(1)) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const animateValueKurang2 = (start, end, duration) => {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 0.1 : -0.1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var max = parseFloat(end.toFixed(1));
    var timer = setInterval(function () {
      current += increment;
      setecmin(current.toFixed(1));
      if (current.toFixed(1) == max.toFixed(1)) {
        setecmin(parseFloat(ecawal - 0.1).toFixed(1));
        clearInterval(timer);
      }
    }, stepTime);
  };

  const animateValueTambah2 = (start, end, duration) => {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 0.1 : -0.1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var max = parseFloat(end.toFixed(1));
    var timer = setInterval(function () {
      current += increment;

      setecmin(current.toFixed(1));
      if (current.toFixed(1) == max.toFixed(1)) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const animateValue3 = (start, end, duration) => {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function () {
      current += increment;
      setsuhumin(current);
      if (current == end + 1) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const animateValueTambah3 = (start, end, duration) => {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function () {
      current += increment;
      setsuhumin(current);
      if (current >= end) {
        // setphmin(parseFloat(phmin) + 3);
        clearInterval(timer);
      }
    }, stepTime);
  };

  const animateValue4 = (start, end, duration) => {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function () {
      current += increment;
      settinggimin(current);
      if (current >= end + 1) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const animateValueTambah4 = (start, end, duration) => {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function () {
      current += increment;
      settinggimin(current);
      if (current == end) {
        // setphmin(parseFloat(phmin) + 3);
        clearInterval(timer);
      }
    }, stepTime);
  };

  const [token, settoken] = useState('');
  const [loading, setLoading] = useState(false);
  const [nama, setnama] = useState('');
  const [phawal, setphawal] = useState('');
  const [phmin, setphmin] = useState('');
  const [phmax, setphmax] = useState('');
  const [ecawal, setecawal] = useState('');
  const [ecmin, setecmin] = useState('');
  const [ecmax, setecmax] = useState('');
  const [suhumin, setsuhumin] = useState('');
  const [suhumax, setsuhumax] = useState('');
  const [tinggimin, settinggimin] = useState('');
  const [tinggimax, settinggimax] = useState('');

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          paddingTop: 30,
        }}>
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

          <Text
            style={{
              color: '#0E542E',
              fontSize: 25,
              fontFamily: 'Nunito-SemiBold',
            }}>
            {nama}
          </Text>

          <View style={{height: 50}} />

          {/* start min max */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 1,
                paddingRight: 10,
                flexDirection: 'row',
                borderBottomWidth: 1,
                // justifyContent: 'space-between',
                // justifyContent: 'center'
              }}>
              <View>
                <Text
                  style={{
                    color: '#0E542E',
                    fontSize: 14,
                    fontFamily: 'Nunito-Regular',
                  }}>
                  pH :
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',

                  //   margin: 10,
                  //   borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: '#0E542E',
                    fontSize: 18,
                    // marginLeft: 50,
                    fontFamily: 'Nunito-SemiBold',
                  }}>
                  {phmin}
                </Text>
              </View>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => tambah('ph')}
                style={{
                  backgroundColor: '#16A858',
                  width: 60,
                  height: 45,
                  marginRight: 5,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="#FFF" name="plus" type="font-awesome" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => kurang('ph')}
                style={{
                  backgroundColor: '#000',
                  width: 60,
                  height: 45,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="#FFF" name="minus" type="font-awesome" />
              </TouchableOpacity>
            </View>
          </View>
          {/* end minmax */}
          <View style={{height: 50}} />
          {/* start min max */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 1,
                paddingRight: 10,
                flexDirection: 'row',
                borderBottomWidth: 1,

                // justifyContent: 'space-between',
                // justifyContent: 'center'
              }}>
              <View>
                <Text
                  style={{
                    color: '#0E542E',
                    fontSize: 18,
                    fontFamily: 'Nunito-Regular',
                  }}>
                  EC :
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#0E542E',
                    fontSize: 18,
                    // marginLeft: 50,
                    fontFamily: 'Nunito-SemiBold',
                  }}>
                  {ecmin}
                </Text>
              </View>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => tambah('ec')}
                style={{
                  backgroundColor: '#16A858',
                  width: 60,
                  height: 45,

                  //   margin: 10,
                  marginRight: 5,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="#FFF" name="plus" type="font-awesome" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => kurang('ec')}
                style={{
                  backgroundColor: '#000',
                  width: 60,
                  height: 45,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="#FFF" name="minus" type="font-awesome" />
              </TouchableOpacity>
            </View>
          </View>
          {/* end minmax */}
          <View style={{height: 50}} />
          {/* start min max */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 1,
                paddingRight: 10,
                flexDirection: 'row',
                borderBottomWidth: 1,
                // justifyContent: 'space-between',
                // justifyContent: 'center'
              }}>
              <View>
                <Text
                  style={{
                    color: '#0E542E',
                    fontSize: 18,
                    fontFamily: 'Nunito-Regular',
                  }}>
                  Suhu :
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#0E542E',
                    fontSize: 18,
                    // marginLeft: 50,
                    fontFamily: 'Nunito-SemiBold',
                  }}>
                  {suhumin}
                </Text>
              </View>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => tambah('suhu')}
                style={{
                  backgroundColor: '#16A858',
                  width: 60,
                  height: 45,

                  marginRight: 5,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="#FFF" name="plus" type="font-awesome" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => kurang('suhu')}
                style={{
                  backgroundColor: '#000',
                  width: 60,
                  height: 45,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="#FFF" name="minus" type="font-awesome" />
              </TouchableOpacity>
            </View>
          </View>
          {/* end minmax */}
          <View style={{height: 50}} />
          {/* start min max */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 1,
                paddingRight: 10,
                flexDirection: 'row',
                borderBottomWidth: 1,
                // justifyContent: 'space-between',
                // justifyContent: 'center'
              }}>
              <View>
                <Text
                  style={{
                    color: '#0E542E',
                    fontSize: 18,
                    fontFamily: 'Nunito-Regular',
                  }}>
                  Ketinggian Air :
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#0E542E',
                    fontSize: 18,
                    // marginLeft: 40,
                    fontFamily: 'Nunito-SemiBold',
                  }}>
                  {tinggimin}
                </Text>
              </View>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => tambah('tinggi')}
                style={{
                  backgroundColor: '#16A858',
                  width: 60,
                  height: 45,
                  marginRight: 5,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="#FFF" name="plus" type="font-awesome" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => kurang('tinggi')}
                style={{
                  backgroundColor: '#000',
                  width: 60,
                  height: 45,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="#FFF" name="minus" type="font-awesome" />
              </TouchableOpacity>
            </View>
          </View>
          {/* end minmax */}

          <View style={{height: 20}} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
