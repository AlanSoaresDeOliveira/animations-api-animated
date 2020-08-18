import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

const Scroll: React.FC = () => {
  const scrolY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event: any) => {
    scrolY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrolY.value,
        [0, 180],
        [300, 120],
        Extrapolate.CLAMP,
      ),
    };
  });

  const avatarStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrolY.value, [100, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

  return (
    <View>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{paddingTop: 300}}>
        <Text style={styles.listItem}>Item da Listaaa</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
        <Text style={styles.listItem}>Item da Lista</Text>
      </Animated.ScrollView>
      <Animated.View style={[styles.header, headerStyle]}>
        <Animated.Image
          style={[styles.avatar, avatarStyle]}
          source={{uri: 'https://github.com/AlanSoaresDeOliveira.png'}}
        />
        <Text style={styles.name}>Alan Soares de Oliveira</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 300,
    backgroundColor: '#6C63FF',
    paddingVertical: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',

    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    top: 0,
  },

  avatar: {
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#FFF',
  },

  listItem: {
    padding: 20,
    fontSize: 18,
  },
});

export default Scroll;
