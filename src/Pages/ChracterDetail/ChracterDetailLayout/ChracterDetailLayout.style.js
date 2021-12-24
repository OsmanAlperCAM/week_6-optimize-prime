import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export default {
  light: StyleSheet.create({
    ...baseStyles,
  }),
  dark: StyleSheet.create({
    ...baseStyles,
  }),
};
