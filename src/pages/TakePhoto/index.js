import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';

import Camera from '../../components/Camera';
import styles from './styles';

export default function TakePhoto({ navigation }) {
  const [isFront, setIsFront] = useState(false);
  
  const width = Dimensions.get('window')["width"];

  function showImage(data) {
    navigation.navigate('ShowPhoto', {data})
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Take a photo</Text>
      </View>
      <View>
        <Camera
          width={width - 80}
          height={width + 20}
          isFront={isFront}
          changeOrientation={() => setIsFront(!isFront)}
          style={{width: 300, height: 400}}
          whenTake={showImage}
        />
      </View>
    </View>
  );
}

