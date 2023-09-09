import React, {useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import CustomText from '../components/CustomText';
import CustomInputText from '../components/CustomeInputText';
import constantText from '../utils/constants/constantText';
import {constantColor} from '../utils/constants/constantColor';

export default function HomeScreen() {
  const [formLocation, setFormLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const [data, setData] = useState([
    {key: 'item1', city: '23 Gilmore Street', tocity: 'Monteral'},
    {key: 'item2', city: '23 Gilmore Street', tocity: 'Monteral'},
    {key: 'item3', city: '23 Gilmore Street', tocity: 'Monteral'},
    {key: 'item4', city: '23 Gilmore Street', tocity: 'Monteral'},
    {key: 'item5', city: '23 Gilmore Street', tocity: 'Monteral'},
  ]);
  return (
    <View styles={styles.container}>
      <View style={styles.subContainer}>
        <CustomText style={styles.destinationText}>
          {constantText.EnterYourDestination}
        </CustomText>

        <CustomInputText
          value={formLocation}
          onChangeText={text => setFormLocation(text)}
          placeholder="From Location"
          secureTextEntry={true}
        />

        <CustomInputText
          value={toLocation}
          onChangeText={text => setToLocation(text)}
          placeholder="To Location"
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          backgroundColor: constantColor.primary,
          height: '100%',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <CustomText style={styles.RecentText}>{constantText.recent}</CustomText>

        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.city}</Text>
              <Text style={styles.itemSubText}>{item.tocity}</Text>
            </View>
          )}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: constantColor.white,
  },
  subContainer: {
    margin: 20,
  },
  destinationText: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  },
  RecentText: {
    color: constantColor.white,
    fontSize: 22,
    margin: 20,
    fontWeight: '700',
  },
  item: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 4,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: constantColor.black,
  },
  itemSubText: {
    fontSize: 16,
    fontWeight: '700',
    color: constantColor.grey,
    borderBottomWidth: 1,
    borderBottomColor: '#90EE00',
  },
};
