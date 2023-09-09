import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {constantColor} from '../utils/constants/constantColor';
import CustomText from '../components/CustomText';
import constantText from '../utils/constants/constantText';

export default function RideHistory({navigation}) {
  const [data, setData] = useState([
    {
      key: 'item1',
      bus: 'Bus 11/10/202',
      dropped: 'Dropped',
      rs: '$90',
      cash: 'cash',
      address: 'No. 19, XYZ Bridge , XYZ Colony , Mumbai',
    },
    {
      key: 'item1',
      bus: 'Bus 11/10/2023',
      dropped: 'Dropped',
      rs: '$32',
      cash: 'cash',
      address: 'No. 19, XYZ Bridge , XYZ Colony , Mumbai',
    },
    {
      key: 'item1',
      bus: 'Bus 1/10/2023',
      dropped: 'Dropped',
      rs: '$41',
      cash: 'bank',
      address: 'No. 19, XYZ Bridge , XYZ Colony , Mumbai',
    },
    {
      key: 'item1',
      bus: 'Bus 2/10/2023',
      dropped: 'Dropped',
      rs: '$67',
      cash: 'cash',
      address: 'No. 19, XYZ Bridge , XYZ Colony , Mumbai',
    },
    {
      key: 'item1',
      bus: 'Bus 3/10/2023',
      dropped: 'Dropped',
      rs: '$60',
      cash: 'upi',
      address: 'No. 19, XYZ Bridge , XYZ Colony , Mumbai',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <CustomText style={styles.titleText}>
          {constantText.RideHistory}
        </CustomText>
      </View>
      <View style={styles.bottomView}>
        <View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.card}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    padding: 5,
                    borderBottomWidth: 0.2,
                  }}
                >
                  <View>
                    <CustomText style={styles.titleSubText}>
                      {item.bus}
                    </CustomText>
                    <CustomText
                      style={[
                        styles.titleSubText,
                        {color: constantColor.primary},
                      ]}
                    >
                      {item.dropped}
                    </CustomText>
                  </View>
                  <View>
                    <CustomText style={styles.titleSubText}>
                      {item.rs}
                    </CustomText>
                    <CustomText style={styles.titleSubText}>
                      {item.cash}
                    </CustomText>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-around',
                  }}
                >
                  <View
                    style={{
                      marginTop: 5,
                      padding: 8,
                      justifyContent: 'space-between',
                    }}
                  >
                    <View style={styles.greenDot}></View>
                    <View style={styles.redDot}></View>
                  </View>
                  <View>
                    <CustomText style={styles.address}>
                      {item.address}
                    </CustomText>
                    <CustomText style={styles.address}>
                      {item.address}
                    </CustomText>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={item => item.key}
          />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    backgroundColor: constantColor.white,
    height: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  titleText: {
    fontWeight: '400',
    color: constantColor.black,
    fontSize: 22,
  },
  titleSubText: {
    fontWeight: '200',
    color: constantColor.black,
    fontSize: 12,
    // marginTop: 10,
  },
  address: {
    fontSize: 16,
    marginTop: 5,
    color: constantColor.black,
  },
  card: {
    margin: 20,
    height: 100,
    width: '90%',
    backgroundColor: constantColor.white,
    borderRadius: 20,

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
  item: {
    borderWidth: 2,
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
  greenDot: {
    backgroundColor: constantColor.primary,
    height: 8,
    width: 8,
    borderRadius: 100,
  },
  redDot: {
    backgroundColor: 'red',
    height: 8,
    width: 8,
    borderRadius: 100,
  },
};
