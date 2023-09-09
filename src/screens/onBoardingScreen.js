import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import CustomText from '../components/CustomText';
import constantText from '../utils/constants/constantText';
import {constantColor} from '../utils/constants/constantColor';

export default function OnboardingScreen({navigation}) {
  const screenWidth = Dimensions.get('window').width;

  const slides = [
    {
      title: constantText.YourJourneyStartsHere,
      description: constantText.ToYourDesire,
      image: require('../assets/Images/onBoarding/onBoarding1.jpg'), // Replace with your own images
    },
    {
      title: constantText.TravelWithZigCab,
      description: constantText.ToYourDestination,
      image: require('../assets/Images/onBoarding/onBoarding2.jpg'),
    },
    {
      title: constantText.BookRideArriveRelax,
      description: constantText.ToYourDreamTrip,
      image: require('../assets/Images/onBoarding/onBoarding3.jpg'),
    },
  ];

  const handleGetStarted = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <Swiper
      loop={false}
      showsPagination={true}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot} // Customize active dot style
    >
      {slides.map((slide, index) => (
        <View style={styles.container}>
          <View style={styles.slide} key={index}>
            <View>
              <Image source={slide.image} style={styles.image} />
              <View>
                <CustomText style={styles.title}>{slide.title}</CustomText>

                <CustomText style={styles.description}>
                  {slide.description}
                </CustomText>
              </View>
            </View>
            {index === slides.length - 1 && (
              <TouchableOpacity
                style={styles.getStartedButton}
                onPress={handleGetStarted}
              >
                <Text style={styles.getStartedButtonText}>Get Started</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  slide: {
    marginStart: 20,
  },

  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    color: constantColor.black,
    width: '60%',
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 22,
    textAlign: 'left',
    color: constantColor.black,
    fontWeight: '300',
  },
  dot: {
    backgroundColor: constantColor.black,
    width: 14,
    height: 8,
  },
  activeDot: {
    backgroundColor: constantColor.primary, // Customize the active dot color
    width: 14,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  getStartedButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 30,
  },
  getStartedButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
