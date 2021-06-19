import React from 'react';
import { RNCamera } from 'react-native-camera';

import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles.js'

export default function CameraComponent({whenTake, isFront, changeOrientation, width, height}) {

  const takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    whenTake(data);
  };

  return (
    <RNCamera
      style={{...styles.preview, width, height}}
      type={isFront ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      onDoubleTap={changeOrientation}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
    >
      {({ camera, status }) => {
        if (status !== 'READY') return <ActivityIndicator size="large" />;
        return (
          <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
            <Text style={styles.text}>Capture</Text>
          </TouchableOpacity>
        )
      }}
    </RNCamera>
  )
}
