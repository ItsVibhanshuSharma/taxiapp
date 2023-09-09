import React, {useState} from 'react';
import {View, Modal, Text} from 'react-native';
import CustomInputText from '../components/CustomeInputText';
import CustomText from '../components/CustomText';
import constantText from '../utils/constants/constantText';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {constantColor} from '../utils/constants/constantColor';
import CustomButton from '../components/CustomButton';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonPress = () => {
    setIsVisible(true);
  };

  const handleButtonClose = () => {
    setIsVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <CustomText style={styles.ForgotPasswordTitle}>
          {constantText.ForgotPasswordTitle}
        </CustomText>
        <CustomText style={styles.ForgotPassword}>
          {constantText.Wewillresetyourpasswordviayouremai}
        </CustomText>
        <CustomInputText
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter an email"
        />
        <CustomButton
          title="okay"
          onPress={handleButtonPress}
          style={styles.button}
        />
      </View>

      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CustomText style={styles.ModalTitle}>
              {constantText.sent}
            </CustomText>
            <CustomText style={styles.ModalSubTitle}>
              {constantText.Pleasecheckyouremailinboxspam}
            </CustomText>
            <CustomButton
              title="Close"
              onPress={handleButtonClose}
              style={styles.button}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    // margin: 20,
    backgroundColor: constantColor.white,
  },
  subContainer: {
    margin: 20,
  },
  ForgotPasswordTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  ForgotPassword: {
    marginTop: 22,
    fontSize: 14,
    marginStart: 10,
  },
  button: {
    backgroundColor: constantColor.primary,
    height: 60,
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: constantColor.white,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 7,
  },
  ModalTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  ModalSubTitle: {
    marginTop: 10,
    fontSize: 18,
    alignItems: 'center',
    fontWeight: '200',
  },
};
