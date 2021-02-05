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
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';

import axios from 'axios';
import {sha1} from 'react-native-sha1';
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Cell,
} from 'react-native-table-component';
import {showMessage} from 'react-native-flash-message';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Daftar({navigation}) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState([]);
  const [token, settoken] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const tableHead = ['Tanaman', 'pH', 'EC', 'Suhu', 'Tinggi', 'Action'];
  const [result, setresult] = useState([]);

  const getData = (x) => {
    axios
      .post('https://zavalabs.com/project/punclutfarm/data.php', {
        token: x,
      })
      .then((res) => {
        const obj = res.data;

        const result = Object.keys(obj).map((key) => obj[key]);
        console.log(result);
        setresult(result);

        setData(obj);
      });
  };

  const hapusData = (x, id) => {
    axios
      .post('https://zavalabs.com/project/punclutfarm/delete.php', {
        token: x,
        id: id,
      })
      .then((res) => {
        console.log(res);

        if (res.data == 200) {
          showMessage({
            message: 'Data berhasil dihapus !',
          });

          getData(x);
        }
      });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    sha1('151195Ez@').then((hash) => {
      settoken(hash.toLowerCase());
      getData(hash.toLowerCase());
    });

    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    sha1('151195Ez@').then((hash) => {
      settoken(hash.toLowerCase());
      getData(hash.toLowerCase());
    });
  }, []);

  const edit = (id) => {
    // alert(id);
    navigation.navigate('Edit', {
      id: id,
    });
  };
  const hapus = (id) => {
    Alert.alert(
      'Punclut Farm',
      'Apakah Anda yakin akan hapus ini ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            sha1('151195Ez@').then((hash) => {
              hapusData(hash.toLowerCase(), id);
            });
          },
        },
      ],
      {cancelable: false},
    );
  };

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

  const element = (data, index) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,
      }}>
      <TouchableOpacity
        onPress={() => edit(data)}
        style={{
          backgroundColor: '#16A858',
          height: 20,
          width: 35,
          // borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon color="#FFF" name="pencil" type="font-awesome" size={15} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => hapus(data)}
        style={{
          backgroundColor: 'red',
          height: 20,
          width: 35,
          // borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon color="#FFF" name="trash" type="font-awesome" size={15} />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#16A858']}
        />
      }
      style={{
        padding: 0,
      }}>
      {/* <Text>{token}</Text> */}
      {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}

      <Table borderStyle={{borderColor: 'transparent'}}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {result.map((rowData, index) => (
          <TableWrapper
            key={index}
            style={[styles.row, index % 2 && {backgroundColor: '#F7F6E7'}]}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={cellIndex === 5 ? element(cellData, index) : cellData}
                textStyle={styles.textRow}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 0, paddingTop: 30, backgroundColor: '#fff'},
  head: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E542E',
  },
  text: {
    marginVertical: 10,
    marginHorizontal: 5,
    color: '#FFF',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRow: {
    marginVertical: 10,
    marginHorizontal: 5,
    color: '#000',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
  btn: {
    width: '80%',
    margin: 1,
    height: 20,
    backgroundColor: '#78B7BB',
    borderRadius: 2,
  },
  btnText: {textAlign: 'center', color: '#fff'},
});
