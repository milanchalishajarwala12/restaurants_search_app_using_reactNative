import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { restaurantData } from '../getRestaurantsAPI';
import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';

export default function Home() {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      rating={item.rating}
      reviews={item.reviews}
      imageUrl={item.imageUrl}
    />
  );
  const [searchText, setSearchText] = useState('');
  const Item = ({ name, rating, reviews, imageUrl }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('Details', { name: name });
          navigation.setOptions({ title: name });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
        {/* <Text numberOfLines={1} style={styles.resName}>
          {name}
        </Text> */}
        <Text style={styles.priceAndRating}>
          <Text>Rating: {rating/5}</Text> <Text>Reviews: {reviews}</Text>
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <ScrollView>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryName}>
            {restaurantData.response[0].cateogory}
          </Text>

          <FlatList
            horizontal
            data={restaurantData.response[0].restaurantList}
            renderItem={renderItem}
            key={(item) => item.key}
          />
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryName}>
            {restaurantData.response[1].cateogory}
          </Text>

          <FlatList
            horizontal
            data={restaurantData.response[1].restaurantList}
            renderItem={renderItem}
            key={(item) => item.key}
          />
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryName}>
            {restaurantData.response[2].cateogory}
          </Text>

          <FlatList
            horizontal
            data={restaurantData.response[2].restaurantList}
            renderItem={renderItem}
            key={(item) => item.key}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryName: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  categoryContainer: {
    padding: 10,
    marginVertical: 5,
  },
  image: {
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginVertical: 10,
  },
  item: { margin: 10, width: 250 },
  resName: { fontSize: 20, fontWeight: 'bold' },

  priceAndRating: { fontSize: 12, color: 'grey' },
  searchBar: { marginHorizontal: 20, marginVertical: 15 },
});
