import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Image,
  Dimensions,
} from 'react-native';

import axios from 'axios';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Daftar() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState([]);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    axios
      .get('https://zavalabs.com/project/punclutfarm/data.php')
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    axios
      .get('https://zavalabs.com/project/punclutfarm/data.php')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  const renderItem = ({item}) => (
    <View
      style={{
        // padding: 10,
        margin: 10,
        backgroundColor: 'white',
        elevation: 2,
        // borderWidth: 1,
        // borderColor: 'red',
        overflow: 'hidden',
        borderRadius: 10,
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 2,
        }}>
        <View
          style={{
            padding: 5,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'Montserrat-Medium',
              color: 'red',
            }}>
            {item.nama}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Montserrat-Medium',
              color: 'grey',
            }}>
            {item.phmin}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Montserrat-Medium',
              color: 'black',
            }}>
            {item.phmax}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['red']}
        />
      }
      style={{
        padding: 10,
      }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
