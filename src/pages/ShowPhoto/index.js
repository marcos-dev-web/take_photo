import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles.js'

export default function TakePhoto({ route, navigation }) {

  const { uri: imageUri } = route.params.data;

  console.log(imageUri)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Your Taked Photo</Text>
      <View style={styles.photo}>
        <Image source={{ uri: imageUri }} width={200} height={300} resizeMode="center" style={styles.image} />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}