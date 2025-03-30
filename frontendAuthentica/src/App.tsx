import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('RoleSelection');
    }, 2000);  // 2-second delay before going to next screen
  }, [navigation]);

  return (
    <View style={styles.splashContainer}>
      <Image 
        source={require('./images/logo.png')} // Make sure this points to your logo image
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default SplashScreen;


