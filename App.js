/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Hamburger,
  Search,
  Sort,
  Filter,
  Nike1,
  Converse1,
  Nike2,
  Nike3,
  NB1,
  Asics1,
  Heart,
  FillHeart,
} from './assets/svgs';
import Color from './assets/colors';
import LottieView from 'lottie-react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <TopArea />
      <Card />
    </SafeAreaView>
  );
};

const TopArea = () => {
  return (
    <>
      <View style={styles.topView}>
        <View style={styles.hamburger}>
          <Hamburger />
        </View>
        <View style={styles.inputBox}>
          <Search style={{marginLeft: 20}} />
          <TextInput style={styles.inputText} placeholder="Search product" />
        </View>
      </View>
      <View style={styles.headingArea}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.text}> Sneakers </Text>
        </View>
        <View style={styles.topIcons}>
          <Sort style={{marginRight: 10}} />
          <Filter />
        </View>
      </View>
      <View style={styles.subHeading}>
        <Text>25 Products Found</Text>
      </View>
    </>
  );
};

const Card = () => {
  const data = [
    {
      image: <Nike1 />,
      id: '1',
      heading: 'Nike',
      subHeading: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      price: '$96',
      symbol: <Heart />,
    },
    {
      image: <Converse1 />,
      id: 2,
      heading: 'Converse',
      subHeading: 'Run Star Hike Three Color Unisex',
      price: '$109.85',
      symbol: <Heart />,
    },
    {
      image: <Nike2 />,
      id: 3,
      heading: 'Nike',
      subHeading: 'Air Jordan 1 Retro High Obsidian UNC',
      price: '$87.5',
      symbol: <Heart />,
    },
    {
      image: <Nike3 />,
      id: 4,
      heading: 'Nike',
      subHeading: 'Air Force 1 Shadow Beige Pale Ivory',
      price: '$99',
      symbol: <Heart />,
    },
    {
      image: <NB1 />,
      id: 5,
      heading: 'New Balance',
      subHeading: 'White Colorblocked suede pop sneakers',
      price: '$84',
      symbol: <Heart />,
    },
    {
      image: <Asics1 />,
      id: 6,
      heading: 'Asics',
      subHeading: 'Special Edition Lyte',
      price: '$101.45',
      symbol: <Heart />,
    },
    {
      image: <Nike1 />,
      id: 7,
      heading: 'Nike',
      subHeading: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      price: '$135.5',
      symbol: <Heart />,
    },
    {
      image: <Nike2 />,
      id: 8,
      heading: 'Nike',
      subHeading: 'Air Jordan 1 Retro High Obsidian UNC',
      price: '$107',
      symbol: <Heart />,
    },
    {
      image: <Converse1 />,
      id: 9,
      heading: 'Converse',
      subHeading: 'Run Star Hike Three Color Unisex',
      price: '$89',
      symbol: <Heart />,
    },
    {
      image: <NB1 />,
      id: 10,
      heading: 'New Balance',
      subHeading: 'White Colorblocked suede pop sneakers',
      price: '$112',
      symbol: <Heart />,
    },
  ];
  return (
    <FlatList
      numColumns={2}
      key={2}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.cards}>
          <Wishlist />
          <View style={styles.shoes}>{item.image}</View>
          <View style={styles.cardText}>
            <Text style={styles.cardHeading}>{item.heading}</Text>
            <Text style={styles.cardSubHeading}>{item.subHeading}</Text>
            <Text style={styles.cardPrice}> {item.price}</Text>
          </View>
        </View>
      )}
    />
  );
};

const Wishlist = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const pressed = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <TouchableOpacity onPress={pressed}>
      <View style={styles.heart}>
        {!isFavorite && <Heart />}
        {isFavorite && (
          <LottieView
            source={require('./assets/heartAnimation.json')}
            autoPlay
            loop={false}
            style={styles.FillHeartInner}
          />
        )}
        {/* {isFavorite && <FillHeart />} */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Color.dullWhite,
  },
  topView: {
    flexDirection: 'row',
  },
  hamburger: {
    flexDirection: 'row',
    padding: 20,
  },
  inputBox: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    shadowColor: Color.shadow,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Color.white,
    marginVertical: 8,
    marginRight: 20,
    paddingHorizontal: 6,
    borderRadius: 5,
  },
  inputText: {
    height: 40,
    padding: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 20,
    marginLeft: 12,
  },
  headingArea: {
    flexDirection: 'row',
  },
  topIcons: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 30,
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  subHeading: {
    paddingLeft: 20,
    paddingTop: 7,
    color: Color.subBlack,
  },
  cards: {
    flex: 0.5,
    margin: 10,
    marginTop: 0,
    borderRadius: 15,
    borderColor: Color.borderGray,
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  heart: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 10,
    paddingRight: 15,
    marginBottom: 10,
  },
  FillHeartInner: {
    position: 'relative',
    left: 2,
    height: 50,
    width: 50,
    paddingTop: 10,
    paddingRight: 15,
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  cardSubHeading: {
    fontSize: 13,
    fontWeight: 400,
    marginHorizontal: 15,
    paddingRight: 5,
    color: Color.subHeadColor,
  },
  cardPrice: {
    fontWeight: '600',
    padding: 12,
    paddingBottom: 0,
  },
  shoes: {
    paddingHorizontal: 15,
  },
  cardText: {
    paddingVertical: 15,
  },
});

export default App;
