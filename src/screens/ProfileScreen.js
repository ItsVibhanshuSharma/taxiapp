import React from 'react';
import {Text, View} from 'react-native';
import {constantColor} from '../utils/constants/constantColor';
import CustomText from '../components/CustomText';
import constantText from '../utils/constants/constantText';

export default function ProfileScreen({navigation}) {
  const handleRideHistory = () => {
    navigation.navigate('RideHistory');
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <CustomText style={styles.titleText}>{constantText.hi}</CustomText>
        <CustomText style={styles.titleSubText}>
          {constantText.whatsup}
        </CustomText>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.card}>
          <CustomText style={styles.cardText} onPress={handleRideHistory}>
            {constantText.RideHistory}
          </CustomText>
        </View>
        <View style={styles.card}>
          <CustomText style={styles.cardText}>
            {constantText.LiveTracking}
          </CustomText>
        </View>
        <View style={styles.card}>
          <CustomText style={styles.cardText}>
            {constantText.EmergencyContact}
          </CustomText>
        </View>
      </View>
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: constantColor.primary,
  },
  subContainer: {
    margin: 20,
  },
  bottomView: {
    backgroundColor: constantColor.white,
    height: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: '400',
    color: constantColor.black,
    fontSize: 22,
  },
  titleSubText: {
    fontWeight: '200',
    color: constantColor.black,
    fontSize: 14,
    marginTop: 10,
  },
  card: {
    margin: 20,
    height: 150,
    width: 200,
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
  cardText: {
    fontWeight: '700',
    color: constantColor.black,
    fontSize: 20,
    marginTop: 10,
  },
};
