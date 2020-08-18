import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  sequence,
} from 'react-native-reanimated';
import {View, StyleSheet, StatusBar} from 'react-native';

import heroImg from '../assets/hero.png';

const Login: React.FC = () => {
  const titlePosition = useSharedValue(30);
  const imagePosition = useSharedValue(-30);

  useEffect(() => {
    imagePosition.value = withTiming(
      0,
      {
        duration: 490,
      },
      () => {
        titlePosition.value = sequence(
          withTiming(0, {
            duration: 1000,
            easing: Easing.bounce,
          }),
          withTiming(-300, {
            duration: 500,
            easing: Easing.bounce,
          }),
        );
      },
    );
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
      opacity: interpolate(
        titlePosition.value,
        [30, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });
  const heroStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: imagePosition.value}],
      opacity: interpolate(
        imagePosition.value,
        [-30, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Image style={[styles.hero, heroStyle]} source={heroImg} />
      <StatusBar barStyle="light-content" backgroundColor="#13131a" />
      <Animated.Text style={[styles.title, titleStyle]}>
        Bem vindo ao App
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13131a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 30,
  },
  hero: {
    width: 288,
    height: 200,
    marginBottom: 40,
  },
});

export default Login;
