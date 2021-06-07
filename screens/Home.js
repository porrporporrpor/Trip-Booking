import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { COLORS, icons, images, SIZES, FONTS } from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

const OptionItem = ({ icon, bgColor, label, onPress }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onPress={onPress}
    >
      <View
        style={{
          backgroundColor: bgColor,
          padding: SIZES.padding - 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.1,
        }}
      >
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.white,
            width: 30,
            height: 30,
          }}
        />
      </View>
      <Text
        style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  // Dummy data
  const [destination, setDetination] = useState([
    {
      id: 0,
      name: 'Ski Villa',
      img: images.skiVilla,
    },
    {
      id: 1,
      name: 'Climbing Hills',
      img: images.climbingHills,
    },
    {
      id: 2,
      name: 'Frozen Hills',
      img: images.frozenHills,
    },
    {
      id: 3,
      name: 'Beach',
      img: images.beach,
    },
  ]);
  const renderDestinations = (item, index) => {
    var destinationStyle = {};
    if (index == 0) {
      destinationStyle = { marginLeft: SIZES.padding };
    }
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
          ...destinationStyle,
        }}
        onPress={() => {
          navigation.navigate('DestinationDetail');
        }}
      >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{ width: SIZES.width * 0.28, height: '82%', borderRadius: 15 }}
        />
        <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {/* Banner */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.base,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Image
          source={images.homeBanner}
          resizeMode="cover"
          style={{ width: '100%', height: '100%', borderRadius: 15 }}
        />
      </View>
      {/* Options */}
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.base,
        }}
      >
        <OptionItem
          icon={icons.airplane}
          bgColor={'#46aeff'}
          label="Fight"
          onPress={() => {
            console.log('Fight');
          }}
        />
        <OptionItem
          icon={icons.train}
          bgColor={'#fcda13'}
          label="Train"
          onPress={() => {
            console.log('Train');
          }}
        />
        <OptionItem
          icon={icons.bus}
          bgColor={'#da5df2'}
          label="Bus"
          onPress={() => {
            console.log('Bus');
          }}
        />
        <OptionItem
          icon={icons.taxi}
          bgColor={'#fe6bba'}
          label="Taxi"
          onPress={() => {
            console.log('Taxi');
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.base,
        }}
      >
        <OptionItem
          icon={icons.bed}
          bgColor={'#ff9c5f'}
          label="Hotel"
          onPress={() => {
            console.log('Hotel');
          }}
        />
        <OptionItem
          icon={icons.eat}
          bgColor={'#4ebefd'}
          label="Eats"
          onPress={() => {
            console.log('Eats');
          }}
        />
        <OptionItem
          icon={icons.compass}
          bgColor={'#46caaf'}
          label="Adventure"
          onPress={() => {
            console.log('Adventure');
          }}
        />
        <OptionItem
          icon={icons.event}
          bgColor={'#fc7b6c'}
          label="Event"
          onPress={() => {
            console.log('Event');
          }}
        />
      </View>
      {/* Destination  */}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}
        >
          Destination
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destination}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => renderDestinations(item, index)}
        />
      </View>
    </View>
  );
};

export default Home;
