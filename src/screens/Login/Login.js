import React, {useCallback} from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login, logout, getProfile} from '@react-native-seoul/kakao-login';
import {Input, Divider, Button} from 'native-base';

export const Login = ({navigation}) => {
  const handlePressLogin = useCallback(async () => {
    console.log('a');
    try {
      const KakaoOAuthToken = await login();
      const KaKaoProfile = await getProfile();
      console.log(KakaoOAuthToken);
      console.log(KaKaoProfile);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Text>이메일</Text>
      <Input size="2xl" />
      <Text>비밀번호</Text>
      <Input size="2xl" />
      <Pressable onPress={() => navigation.navigate('Password_Reset')}>
        <Text>비밀번호를 잃어버리셨나요?</Text>
      </Pressable>
      <Button onPress={handlePressLogin}>로그인</Button>
      <Button onPress={() => navigation.navigate('Signup')}>회원가입</Button>
      <View style={styles.oauthContainer}>
        <Text>카카오</Text>
        <Text>구글</Text>
        <Text>애플</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  oauthContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
