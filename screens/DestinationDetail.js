import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import { COLORS, SIZES, images, FONTS, icons } from '../constants';

const StarReview = ({ rate }) => {
  let starCompenents = [];
  let fullStar = Math.floor(rate);
  let noStar = Math.floor(5 - rate);
  let halfStar = 5 - fullStar - noStar;

  // Full star
  for (let i = 0; i < fullStar; i++) {
    starCompenents.push(
      <Image
        key={`full-${i}`}
        source={icons.starFull}
        resizeMode="cover"
        style={{ width: 20, height: 20 }}
      />
    );
  }

  // Half star
  for (let i = 0; i < halfStar; i++) {
    starCompenents.push(
      <Image
        key={`half-${i}`}
        source={icons.starHalf}
        resizeMode="cover"
        style={{ width: 20, height: 20 }}
      />
    );
  }

  // No star
  for (let i = 0; i < noStar; i++) {
    starCompenents.push(
      <Image
        key={`full-${i}`}
        source={icons.starEmpty}
        resizeMode="cover"
        style={{ width: 20, height: 20 }}
      />
    );
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {starCompenents}
      <Text
        style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}
      >
        {rate}
      </Text>
    </View>
  );
};

const IconLabel = ({ icon, label }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={icon}
        resizeMode="cover"
        style={{ width: 50, height: 50 }}
      />
      <Text
        style={{ marginTop: SIZES.padding, color: COLORS.gray, ...FONTS.h3 }}
      >
        {label}
      </Text>
    </View>
  );
};
const DestinationDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flex: 2 }}>
        <Image
          source={images.skiVillaBanner}
          resizeMode="cover"
          style={{ width: '100%', height: '80%' }}
        />

        <View
          style={[
            {
              position: 'absolute',
              bottom: '5%',
              left: '5%',
              right: '5%',
              borderRadius: 15,
              padding: SIZES.padding,
              backgroundColor: COLORS.white,
            },
            styles.shadow,
          ]}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.shadow}>
              <Image
                source={images.skiVilla}
                resizeMode="cover"
                style={{ width: 70, height: 70, borderRadius: 15 }}
              />
            </View>
            <View
              style={{
                marginHorizontal: SIZES.radius,
                justifyContent: 'space-around',
              }}
            >
              <Text style={{ ...FONTS.h3 }}>skiVilla</Text>
              <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>France</Text>

              <StarReview rate={3.5} />
            </View>
          </View>

          <View style={{ marginTop: SIZES.radius }}>
            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
              Ski Villa offers simple rooms with mountain views in front of the
              ski lift to the Ski Resort
            </Text>
          </View>
        </View>

        {/* Header Button */}
        <View
          style={{
            position: 'absolute',
            top: 50,
            left: 20,
            right: 20,
            //height: 50,
            flexDirection: 'row',
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}
            >
              <Image
                source={icons.back}
                resizeMode="cover"
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => {
                console.log('menu');
              }}
            >
              <Image
                source={icons.menu}
                resizeMode="cover"
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Body */}
      <View style={{ flex: 1.5 }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
            paddingHorizontal: SIZES.padding * 2,
            justifyContent: 'space-between',
          }}
        >
          <IconLabel icon={icons.villa} label="Villa" />

          <IconLabel icon={icons.parking} label="Parking" />

          <IconLabel icon={icons.wind} label="4 ??C" />
        </View>

        {/* About */}
        <View
          style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}
        >
          <Text style={{ ...FONTS.h2 }}>About</Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.gray,
              ...FONTS.body3,
            }}
          >
            Located at the Alps with an altitude of 1,702 meters. The ski area
            is the largest ski area in the world and is known as the best place
            to ski. Many other facilities, such as fitness center, sauna, steam
            room to star-rated restaurants.
          </Text>
        </View>
      </View>
      {/* Footer */}
      <View
        style={{
          flex: 0.5,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <View
          style={{
            flex: 0.5,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#d6dfff',
            borderRadius: 15,
            padding: SIZES.padding - 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ ...FONTS.h2 }}>$1000</Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              width: '50%',
              height: 50,
              backgroundColor: COLORS.primary,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>BOOKING</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
  },
  elevation: 5,
});
export default DestinationDetail;
