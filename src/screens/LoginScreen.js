import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomInputText from '../components/CustomeInputText';
import CustomButton from '../components/CustomButton';
import {constantColor} from '../utils/constants/constantColor';
import CustomText from '../components/CustomText';
import constantText from './../utils/constants/constantText';

export default function SignupScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonPress = () => {
    navigation.navigate('SignupScreen');
  };
  const handleButtonForgotPress = () => {
    navigation.navigate('ForgotPasswordScreen');
  };
  const handleButtonLoginPress = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <CustomInputText
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter an email"
      />

      <CustomInputText
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Enter a password"
        secureTextEntry={true}
      />

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <CustomText style={styles.ForgotPassword}>
          {constantText.RememberMe}
        </CustomText>
        <CustomText
          style={styles.ForgotPassword}
          onPress={handleButtonForgotPress}
        >
          {constantText.ForgotPassword}
        </CustomText>
      </View>
      <CustomButton
        title="Next"
        onPress={handleButtonLoginPress}
        style={styles.button}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'center',
        }}
      >
        <CustomText style={styles.SignUp}>
          {constantText.Notamember}{' '}
        </CustomText>
        <CustomText style={[styles.SignUpText]} onPress={handleButtonPress}>
          {constantText.SignUp}
        </CustomText>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: constantColor.primary,
    height: 60,
    marginTop: 20,
  },
  title: {
    marginTop: 10,
    color: constantColor.black,
    alignSelf: 'center',
    fontFamily: 'Roboto',
  },
  Logintitle: {
    coolor: constantText.primary,
    fontWeight: '500',
    marginStart: 10,
  },
  termsConditionStyle: {
    fontSize: 12,
  },
  tandC: {
    fontSize: 12,
    color: constantColor.primary,
  },
  ForgotPassword: {
    color: constantColor.black,
    fontSize: 12,
  },
  SignUp: {
    fontWeight: '500',
  },

  SignUpText: {
    color: constantColor.primary,
  },
};
