import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomInputText from '../components/CustomeInputText';
import CustomButton from '../components/CustomButton';
import {constantColor} from '../utils/constants/constantColor';
import CustomText from '../components/CustomText';
import constantText from './../utils/constants/constantText';

export default function LoginScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonPress = () => {
    console.log('LOGg');
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <CustomInputText
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter a name"
      />
      <CustomInputText
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter an email"
      />
      <CustomInputText
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        placeholder="Enter a phone number"
      />
      <CustomInputText
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Enter a password"
        secureTextEntry={true}
      />
      <View style={{marginTop: 10}}>
        <CustomText style={styles.termsConditionStyle}>
          {constantText.ByChecktheboxyouaggreetoour}
          <CustomText style={styles.tandC}>{constantText.terms}</CustomText>
          {constantText.and}
          <CustomText style={styles.tandC}>{constantText.condition}</CustomText>
        </CustomText>
      </View>
      <CustomButton
        title="Next"
        // onPress={handleButtonPress}
        style={styles.button}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CustomText style={styles.title}>
          {constantText.Alreadyamember}
        </CustomText>
        <CustomText style={styles.Logintitle} onPress={handleButtonPress}>
          {constantText.Login}
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
    marginTop: 10,
  },
  termsConditionStyle: {
    fontSize: 12,
  },
  tandC: {
    fontSize: 12,
    color: constantColor.primary,
  },
};
