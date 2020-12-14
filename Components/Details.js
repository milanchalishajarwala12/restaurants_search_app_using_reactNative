import { StatusBar } from 'expo-status-bar';
import React from 'react';
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

// export default function Details({ route }) {
//   const { name, reviews, ratings, imageUrl } = route.params;
//   return (
//     <View>
//       {useNavigation().setOptions({ title: name })}
//       <Text>{route.params.name}</Text>
//     </View>
//   );
// }
