import { useEffect } from 'react'
import { View, Animated, StyleProp } from 'react-native';

import Icon from 'components/Icon'
import icons from 'constants/icons'

import styles from './Loader.styles'

const Loader = () => {
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }
      )
    );

    spinAnimation.start();

    return () => {
      spinAnimation.stop();
    };
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.spinnerContainer}>
      <Animated.View style={{ transform: [{ rotate: spin }]}}>
        <Icon size={50} icon={icons.spinner} />
      </Animated.View>
    </View>
  )
}

export default Loader