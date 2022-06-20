import {FlatList} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';

export const Home = () => {
  const screenWidth = Dimensions.get('screen').width;
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    console.log(page);
  }, [page]);

  const showToast = () => {
    Toast.show({
      type: 'custom',
      text1: 'Hello',
      text2: 'This is some something 👋',
      position: 'bottom',
    });
  };

  const DATA = [
    {
      id: 1,
      text: '1',
    },
    {
      id: 2,
      text: '2',
    },
    {
      id: 3,
      text: '3',
    },
    {
      id: 4,
      text: '3',
    },
    {
      id: 5,
      text: '3',
    },
    {
      id: 6,
      text: '3',
    },
    {
      id: 7,
      text: '3',
    },
  ];

  const renderItem = () => {
    return (
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={{height: 300, width: screenWidth}}
      />
    );
  };

  const handleScroll = useCallback(e => {
    setPage(
      Math.round(
        e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width,
      ),
    );
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        disableIntervalMomentum
        pagingEnabled
        onScroll={handleScroll}
      />

      <View>
        <Text>home</Text>
        <Pressable onPress={() => setVisible(true)}>
          <Text>모달</Text>
        </Pressable>

        <Pressable onPress={() => showToast()}>
          <Text>토스트</Text>
        </Pressable>
      </View>

      <Modal isVisible={visible} style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Pressable onPress={() => setVisible(false)}>
            <Text>asd</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalView: {
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
